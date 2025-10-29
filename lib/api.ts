import { SomeType } from './types';

const API_BASE_URL = '/api';

class AlertasAPI {
    private async request(endpoint: string, options: RequestInit = {}) {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            ...options,
            cache: 'no-store',
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        return response.json();
    }

    public getAlertas() {
        return this.request('/alertas');
    }

    public getAlerta(id: string) {
        return this.request(`/alertas/${id}`);
    }

    public createAlerta(data: any) {
        return this.request('/alertas', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    public updateAlerta(id: string, data: any) {
        return this.request(`/alertas/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    public deleteAlerta(id: string) {
        return this.request(`/alertas/${id}`, {
            method: 'DELETE',
        });
    }

    public searchAlertas(query: string) {
        return this.request(`/alertas/search?query=${encodeURIComponent(query)}`);
    }

    public getAlertasByNivel(nivel: string) {
        return this.request(`/alertas/nivel/${nivel}`);
    }
}

export const alertasAPI = new AlertasAPI();
