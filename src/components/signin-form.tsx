'use client';

import {
  Eye,
  EyeClosed,
  KeyRound,
  LogIn,
  ShieldCheck,
  User,
} from 'lucide-react';
import { FieldErrors, useForm } from 'react-hook-form';

import { Button } from './ui/button';
import Cookies from 'js-cookie';
import { Input } from './ui/input';
import { ReloadIcon } from '@radix-ui/react-icons';
import { UsuarioToSignin } from '@/types/usuario.types';
import { cn } from '@/lib/utils';
import { signin } from '@/services/auth.service';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UsuarioToSignin>();

  const { push } = useRouter();

  const onInvalidSubmit = async (errors: FieldErrors<UsuarioToSignin>) => {
    if (errors?.nombre_usuario)
      toast.error(errors.nombre_usuario?.message, { position: 'top-center' });
    else if (errors?.contrasena)
      toast.error(errors.contrasena?.message, { position: 'top-center' });
  };

  const [success, setSuccess] = useState(false);

  const onSubmit = async (values: UsuarioToSignin) => {
    try {
      const { access_token, expireIn } = await signin({
        ...values,
        nombre_usuario: (values?.nombre_usuario as string)?.trim(),
      });
      Cookies.set('access_token', access_token, {
        expires: new Date(expireIn),
      });

      setSuccess(true);
      setTimeout(() => push('/panel'), 1000);
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <form
      className='space-y-4'
      onSubmit={handleSubmit(onSubmit, onInvalidSubmit)}
    >
      <h2 className='hidden text-center text-xl font-semibold opacity-75 lg:block'>
        Autenticación
      </h2>
      <div className='group relative flex items-center'>
        <User className='absolute pl-2 opacity-60 group-focus-within:opacity-100 peer-[:not(:placeholder-shown)]:opacity-100' />
        <Input
          {...register('nombre_usuario', {
            required: {
              value: true,
              message: 'El nombre de usuario es requerido.',
            },
          })}
          placeholder='Usuario'
          className='peer pl-8 text-sm lg:text-base'
          type='text'
        />
      </div>
      <div className='group relative flex items-center'>
        <KeyRound className='absolute pl-2 opacity-60 group-focus-within:opacity-100 peer-[:not(:placeholder-shown)]:opacity-100' />
        <Input
          {...register('contrasena', {
            required: {
              value: true,
              message: 'La contraseña es requerida.',
            },
          })}
          type={!showPassword ? 'password' : 'text'}
          placeholder='Contraseña'
          className='peer pl-8 text-sm lg:text-base'
        />
        <Button
          type='button'
          variant='link'
          className='absolute end-0 opacity-60 group-focus-within:opacity-100 peer-[:not(:placeholder-shown)]:opacity-100'
          size='icon'
          onClick={handleShowPassword}
        >
          {!showPassword ? <EyeClosed /> : <Eye />}
        </Button>
      </div>
      <Button
        type='submit'
        className={cn(
          'w-full disabled:opacity-100 lg:text-base',
          !success ? 'bg-primary' : '!bg-green-700',
        )}
        disabled={isSubmitting || success}
      >
        {success ? (
          <>
            Bienvenido <ShieldCheck className='lg:!size-5' />
          </>
        ) : !isSubmitting ? (
          <>
            Iniciar sesión <LogIn className='lg:!size-5' />
          </>
        ) : (
          <>
            Autenticando <ReloadIcon className='animate-spin lg:!size-5' />
          </>
        )}
      </Button>
    </form>
  );
}
