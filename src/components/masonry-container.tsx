'use client';

import { Pulverizacion } from '@/types/pulverizaciones.types';
import PulverizacionItem from './pulverizacion-item';
import { Masonry } from './masonry';
import { Campo } from '@/types/campos.types';
import CampoItem from './campo-item';
import {
  CamposMasonrySkeleton,
  PulverizacionesMasonrySkeleton,
} from './masonry-skeleton';

export const PulverizacionesGridContainer = ({
  data,
}: {
  data: Pulverizacion[];
}) => {
  return (
    <Masonry
      items={data}
      config={{
        columns: [1, 2, 3, 4, 5],
        gap: [16, 16, 16, 16, 16],
        media: [768, 1024, 1280, 1400, 1536],
      }}
      render={(pulverizacion) => (
        <PulverizacionItem
          key={pulverizacion.id}
          pulverizacion={pulverizacion}
        />
      )}
      placeholder={<PulverizacionesMasonrySkeleton />}
    />
  );
};

export const CamposGridContainer = ({ data }: { data: Campo[] }) => {
  return (
    <Masonry
      items={data}
      config={{
        columns: [1, 2, 3, 5],
        gap: [16, 16, 16, 16],
        media: [768, 1280, 1400, 1536],
      }}
      render={(pulverizacion) => (
        <CampoItem key={pulverizacion.id} data={pulverizacion} />
      )}
      placeholder={<CamposMasonrySkeleton />}
    />
  );
};
