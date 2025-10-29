import { Alerta, CreateAlertaDTO, UpdateAlertaDTO } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

class AlertasAPI {
  private async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error || 'Error en la petición');
    }

    return response.json();
  }

  async getAlertas(): Promise<Alerta[]> {
    return this.request<Alerta[]>('/alertas');
  }

  async getAlerta(id: string): Promise<Alerta> {
    return this.request<Alerta>(`/alertas/${id}`);
  }

  async createAlerta(data: CreateAlertaDTO): Promise<Alerta> {
    return this.request<Alerta>('/alertas', {
      method: 'POST',
      body: JSON.stringify({
        ...data,
        id: crypto.randomUUID(),
        fechaCreacion: new Date().toISOString(),
        activa: true,
      }),
    });
  }

  async updateAlerta(id: string, data: UpdateAlertaDTO): Promise<Alerta> {
    return this.request<Alerta>(`/alertas/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        ...data,
        fechaModificacion: new Date().toISOString(),
      }),
    });
  }

  async deleteAlerta(id: string): Promise<void> {
    return this.request<void>(`/alertas/${id}`, {
      method: 'DELETE',
    });
  }

  async searchAlertas(query: string): Promise<Alerta[]> {
    return this.request<Alerta[]>(`/alertas?q=${encodeURIComponent(query)}`);
  }

  async getAlertasByNivel(nivel: string): Promise<Alerta[]> {
    return this.request<Alerta[]>(`/alertas?nivelAlerta=${nivel}`);
  }
}

export const alertasAPI = new AlertasAPI();