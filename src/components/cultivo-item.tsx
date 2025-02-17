'use client';

import { AddOrEditCultivoDialog, DeleteCultivoDialog } from './cultivos-dialog';

import { Cultivo } from '@/types/cultivos.types';
import { UUID } from 'crypto';
import { TableCell, TableRow } from './ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';

interface Props {
  data: Cultivo;
}

export default function CultivoItem({ data }: Props) {
  return (
    <TableRow className='h-12'>
      <TableCell className=''>{data.nombre}</TableCell>
      <TableCell align='right'>
        <DropdownMenu modal={false} key={'manage-tratamiento-dropdown'}>
          <DropdownMenuTrigger asChild>
            <Button variant={'ghost'} size={'icon'}>
              <DotsHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuGroup className='flex flex-col gap-2 p-2'>
              <AddOrEditCultivoDialog isEdit data={data} />
              <DeleteCultivoDialog id={data.id as UUID} />
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
