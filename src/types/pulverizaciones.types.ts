import { Aplicacion } from './aplicaciones.types';
import { Campo } from './campos.types';
import { Cultivo } from './cultivos.types';
import { Tratamiento } from './tratamientos.types';
import { UUID } from 'crypto';

export interface Detalle {
  id?: UUID;
  campo_id: UUID;
  campo?: Campo;
  hectareas: number;
  lotes: string[];
  cultivo_id: UUID;
  cultivo?: Cultivo;
  tratamiento_id: UUID;
  tratamiento?: Tratamiento;
}

export interface Pulverizacion {
  id?: UUID;
  fecha: Date | string;
  detalle_id?: UUID;
  detalle: Detalle;
  productos: Aplicacion[];
  Aplicacion?: Aplicacion[];
}
