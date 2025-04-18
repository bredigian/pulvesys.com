import { ArrowRight, Check } from 'lucide-react';
import { FieldErrors, useForm } from 'react-hook-form';
import { SHORT_UNIDAD, UNIDAD } from '@/types/productos.types';

import { AplicacionConConsumo } from '@/types/aplicaciones.types';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Cookies from 'js-cookie';
import { Input } from './ui/input';
import { ReloadIcon } from '@radix-ui/react-icons';
import { UUID } from 'crypto';
import { cn } from '@/lib/utils';
import { editAplicacionConsumo } from '@/services/pulverizaciones.service';
import revalidate from '@/lib/actions';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Props {
  defaultValues: AplicacionConConsumo;
  handleOpen: () => void;
}

export default function EditConsumoProductoForm({
  defaultValues,
  handleOpen,
}: Props) {
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<AplicacionConConsumo>({ defaultValues });

  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<
    boolean | undefined
  >(undefined);

  const onInvalidSubmit = (errors: FieldErrors<AplicacionConConsumo>) => {
    if (errors?.dosis)
      toast.error(errors.dosis.message, {
        className: 'mb-64',
      });
    else if (errors?.valor_real)
      toast.error(errors.valor_real.message, {
        className: 'mb-64',
      });
  };
  const onSubmit = async (values: AplicacionConConsumo) => {
    try {
      const PAYLOAD: AplicacionConConsumo = {
        consumo_id: defaultValues.consumo_id,
        id: defaultValues.id,
        pulverizacion_id: defaultValues.pulverizacion_id,
        producto_id: defaultValues.producto_id as UUID,
        dosis: Number(values.dosis),
        valor_real: !values.valor_real ? null : Number(values.valor_real),
      };

      const access_token = Cookies.get('access_token');
      if (!access_token) {
        toast.error('La sesión ha expirado', { position: 'top-center' });
        push('/');

        return;
      }

      await editAplicacionConsumo(PAYLOAD, access_token);
      await revalidate('pulverizaciones');

      setIsSubmitSuccessful(true);
      setTimeout(() => handleOpen(), 1000);
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onInvalidSubmit)}
      className='grid grid-cols-10 gap-4 px-4 pb-4'
      id='form-add-pulverizacion'
    >
      <Badge className='col-span-full w-fit' variant={'secondary'}>
        Consumo teórico <ArrowRight size={16} className='mx-1' />
        {defaultValues.valor_teorico?.toLocaleString('es-AR')}{' '}
        {SHORT_UNIDAD[defaultValues.producto?.unidad as UNIDAD]}
        /ha
      </Badge>
      <Input
        placeholder='Dosis'
        {...register('dosis', {
          required: { value: true, message: 'La dosis es requerida.' },
        })}
        className='col-span-5 text-sm'
      />
      <Input
        {...register('valor_real')}
        placeholder='Consumo real'
        className='col-span-5 text-sm'
      />
      <div className='col-span-full flex flex-col items-center gap-2'>
        <Button
          disabled={isSubmitting || isSubmitSuccessful}
          type='submit'
          className={cn(
            'w-full disabled:opacity-100',
            !isSubmitSuccessful
              ? 'bg-primary'
              : '!bg-green-700 text-primary-foreground dark:text-primary',
          )}
          form='form-add-pulverizacion'
        >
          {isSubmitSuccessful ? (
            <>
              Completado <Check />
            </>
          ) : !isSubmitting ? (
            <>Actualizar</>
          ) : (
            <>
              Procesando
              <ReloadIcon className='animate-spin' />
            </>
          )}
        </Button>
        <Button
          type='button'
          variant={'outline'}
          onClick={handleOpen}
          className='w-full'
        >
          Cerrar
        </Button>
      </div>
    </form>
  );
}
