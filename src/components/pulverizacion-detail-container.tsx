'use client';

import {
  BackToPulverizacionesButton,
  EditConsumoProductoDialog,
  SharePulverizacionDialog,
  ShowPulverizacionInfoDialog,
} from '@/components/pulverizacion-detail-dialog';
import { Calendar, Layers, Leaf, ListCheckIcon, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { AplicacionConConsumo } from '@/types/aplicaciones.types';
import { Badge } from '@/components/ui/badge';
import { ConsumoProducto } from '@/types/productos.types';
import { DateTime } from 'luxon';
import { DeletePulverizacionDialog } from '@/components/pulverizaciones-dialog';
import { Lote } from '@/types/campos.types';
import Map from '@/components/map';
import { Pulverizacion } from '@/types/pulverizaciones.types';
import { UUID } from 'crypto';
import { cn } from '@/lib/utils';
import { usuarioStore } from '@/store/usuario.store';

interface Props {
  data: Pulverizacion;
}

export default function PulverizacionDetailContainer({ data }: Props) {
  const selectedHectareas = data.detalle.campo?.Lote?.filter((lote) =>
    data.detalle.lotes.includes(lote.nombre as string),
  ).reduce((acc, lote) => acc + (lote?.hectareas as number), 0);

  const { nombre, apellido } = usuarioStore();

  return (
    <main className='space-y-6 p-4 pt-0'>
      <div className='flex w-full items-center justify-between'>
        <div className='flex items-center gap-4'>
          <BackToPulverizacionesButton />
          <h1 className='text-2xl font-semibold'>
            {data.detalle.campo?.nombre}
          </h1>
        </div>
        <aside className='flex items-center gap-2'>
          <SharePulverizacionDialog
            data={data}
            nombre={nombre}
            apellido={apellido}
          />
          <ShowPulverizacionInfoDialog data={data} />
          <DeletePulverizacionDialog id={data.id as UUID} />
        </aside>
      </div>
      <div className='flex flex-col gap-6'>
        <div className='flex items-start justify-between gap-4'>
          <ul className='flex flex-wrap items-center justify-start gap-2'>
            {data.detalle.campo?.Lote?.map((lote) => {
              const isOnPulverizacion = data.detalle.lotes.find(
                (selected) => selected === lote.nombre,
              );

              return (
                <li
                  key={`badge-${lote.nombre}`}
                  style={{
                    backgroundColor: `${lote.color as string}50`,
                    borderColor: lote.color as string,
                  }}
                  className={cn(
                    'inline-flex space-x-1 rounded-md border-2 px-3 py-1 text-xs font-semibold',
                    isOnPulverizacion ? 'opacity-100' : 'opacity-50',
                  )}
                >
                  <Tag size={14} />
                  <span>{lote.nombre}</span>
                  <p>({lote.hectareas}ha)</p>
                </li>
              );
            })}
          </ul>
          <Badge className='space-x-1'>
            <Calendar size={14} />
            <p className='text-sm font-normal'>
              {DateTime.fromISO(data.fecha as string).toLocaleString(
                DateTime.DATE_SHORT,
                {
                  locale: 'es-AR',
                },
              )}
            </p>
          </Badge>
        </div>
        <div className='flex w-full flex-col gap-6 lg:flex-row'>
          <Map
            lotes={data.detalle.campo?.Lote as Lote[]}
            customCenter
            size='!h-[25vh] md:!h-[35vh] lg:!h-[78.5vh]'
            customZoom={14}
          />
          <div className='flex w-full flex-col gap-6 md:flex-row lg:flex-col'>
            <Card className='h-fit w-full'>
              <CardHeader>
                <CardTitle>Detalle</CardTitle>
              </CardHeader>
              <CardContent className='flex flex-wrap items-center gap-4'>
                <Badge variant={'secondary'} className='w-fit space-x-1'>
                  <Layers size={14} />
                  <h6>{selectedHectareas}ha</h6>
                </Badge>
                <Badge variant={'secondary'} className='w-fit space-x-1'>
                  <Leaf size={14} />
                  <h6>{data.detalle.cultivo?.nombre}</h6>
                </Badge>
                <Badge variant={'secondary'} className='w-fit space-x-1'>
                  <ListCheckIcon size={14} />
                  <h6>{data.detalle.tratamiento?.nombre}</h6>
                </Badge>
              </CardContent>
            </Card>
            <Card className='max-h-full w-full'>
              <CardHeader>
                <CardTitle>Productos</CardTitle>
              </CardHeader>
              <CardContent className='flex flex-wrap items-center gap-4 overflow-y-auto'>
                <ul className='w-full space-y-4'>
                  {data.Aplicacion?.map((aplicacion) => {
                    const consumo: ConsumoProducto = data.ConsumoProducto?.find(
                      (item) => item.producto_id === aplicacion.producto?.id,
                    ) as ConsumoProducto;

                    const defaultValues: AplicacionConConsumo = {
                      consumo_id: consumo.id,
                      id: aplicacion.id,
                      pulverizacion_id: aplicacion.pulverizacion_id,
                      producto_id: aplicacion.producto_id,
                      dosis: aplicacion.dosis,
                      valor_real: consumo.valor_real,
                      valor_teorico: consumo.valor_teorico,
                      producto: aplicacion.producto,
                    };

                    return (
                      <div key={aplicacion.id} className='w-full space-y-2'>
                        <div className='flex w-full items-center justify-between'>
                          <Badge variant={'secondary'} className='text-sm'>
                            {aplicacion.producto?.nombre}
                          </Badge>
                          <EditConsumoProductoDialog
                            defaultValues={defaultValues}
                          />
                        </div>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Dosis</TableHead>
                              <TableHead>Teórico</TableHead>
                              <TableHead>Real</TableHead>
                              <TableHead>Restante</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>{aplicacion.dosis}</TableCell>
                              <TableCell>
                                {consumo.valor_teorico.toFixed(2)}
                              </TableCell>
                              <TableCell>
                                {consumo.valor_real?.toFixed(2) ?? 'Sin espec.'}
                              </TableCell>
                              <TableCell>
                                {consumo.valor_devolucion?.toFixed(2) ??
                                  'Sin espec.'}
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
