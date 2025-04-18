import { RedirectType, redirect } from 'next/navigation';

import { CamposGridContainer } from './masonry-container';
import { cookies } from 'next/headers';
import { getCampos } from '@/services/campos.service';

interface Props {
  query: string;
}

export default async function CamposContainer({ query }: Props) {
  const access_token = (await cookies()).get('access_token');
  const refresh_token = (await cookies()).get('refresh_token');
  if (!access_token || !refresh_token) redirect('/', RedirectType.replace);

  const data = await getCampos(access_token.value, refresh_token);
  if ('error' in data) return <p>{data?.message}</p>;

  if (data.length === 0) return <p>No has registrado ninguna ubicación aún.</p>;

  const filteredData = !query
    ? data
    : data.filter((item) =>
        item.nombre.toLowerCase().includes(query.toLowerCase()),
      );

  return filteredData.length > 0 ? (
    <CamposGridContainer data={filteredData} />
  ) : (
    <ul>
      <li>
        No se encontraron resultados para{' '}
        <span className='font-semibold italic'>{query}</span>
      </li>
    </ul>
  );
}
