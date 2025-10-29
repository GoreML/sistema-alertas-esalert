const API_BASE_URL = '/api';

async function updateAlerta(alerta) {
    const response = await fetch(`${API_BASE_URL}/alertas/${alerta.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(alerta),
        cache: 'no-store',
    });
    return response.json();
}

async function fetchAlertas() {
    const response = await fetch(`${API_BASE_URL}/alertas`, {
        cache: 'no-store',
    });
    return response.json();
}

async function fetchAlerta(id) {
    const response = await fetch(`${API_BASE_URL}/alertas/${id}`, {
        cache: 'no-store',
    });
    return response.json();
}