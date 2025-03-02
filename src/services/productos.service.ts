import { API_URL } from '@/config/api';
import { APIError } from '@/types/error.types';
import { Producto } from '@/types/productos.types';
import { UUID } from 'crypto';

export const getProductos = async (access_token: string) => {
  const PATH = `${API_URL}/v1/productos`;
  const OPTIONS: RequestInit = {
    method: 'GET',
    headers: { Authorization: `Bearer ${access_token}` },
    next: { tags: ['productos'] },
  };

  const res = await fetch(PATH, OPTIONS);
  const data: Producto[] | APIError = await res.json();
  if (!res.ok) return data as APIError;

  return data as Producto[];
};

export const addProducto = async (payload: Producto, access_token: string) => {
  const PATH = `${API_URL}/v1/productos`;
  const OPTIONS: RequestInit = {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
  };

  const res = await fetch(PATH, OPTIONS);
  const data: Producto | APIError = await res.json();
  if (!res.ok) throw data as APIError;

  return data as Producto;
};

export const editProducto = async (payload: Producto, access_token: string) => {
  const PATH = `${API_URL}/v1/productos`;
  const OPTIONS: RequestInit = {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
  };

  const res = await fetch(PATH, OPTIONS);
  const data: Producto | APIError = await res.json();
  if (!res.ok) throw data as APIError;

  return data as Producto;
};

export const deleteProducto = async (id: UUID, access_token: string) => {
  const PATH = `${API_URL}/v1/productos`;
  const OPTIONS: RequestInit = {
    method: 'DELETE',
    body: JSON.stringify({ id }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
  };

  const res = await fetch(PATH, OPTIONS);
  const data: { count: number } | APIError = await res.json();
  if (!res.ok) throw data as APIError;

  return data as { count: number };
};
