import { Alerta, CreateAlertaDTO, UpdateAlertaDTO } from './types';

const API_BASE_URL = '/api';

class AlertasAPI {
    private async request<T>(url: string, options: RequestInit): Promise<T> {
        const response = await fetch(url, { ...options, cache: 'no-store' });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }

    public async getAlertas(): Promise<Alerta[]> {
        return this.request<Alerta[]>(`${API_BASE_URL}/alertas`, {
            method: 'GET',
        });
    }

    public async getAlerta(id: string): Promise<Alerta> {
        return this.request<Alerta>(`${API_BASE_URL}/alertas/${id}`, {
            method: 'GET',
        });
    }

    public async createAlerta(data: CreateAlertaDTO): Promise<Alerta> {
        return this.request<Alerta>(`${API_BASE_URL}/alertas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }

    public async updateAlerta(id: string, data: UpdateAlertaDTO): Promise<Alerta> {
        return this.request<Alerta>(`${API_BASE_URL}/alertas/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }

    public async deleteAlerta(id: string): Promise<void> {
        return this.request<void>(`${API_BASE_URL}/alertas/${id}`, {
            method: 'DELETE',
        });
    }

    public async searchAlertas(query: string): Promise<Alerta[]> {
        return this.request<Alerta[]>(`${API_BASE_URL}/alertas/search?q=${encodeURIComponent(query)}`, {
            method: 'GET',
        });
    }

    public async getAlertasByNivel(nivel: string): Promise<Alerta[]> {
        return this.request<Alerta[]>(`${API_BASE_URL}/alertas/nivel/${nivel}`, {
            method: 'GET',
        });
    }
}

export const alertasAPI = new AlertasAPI();
