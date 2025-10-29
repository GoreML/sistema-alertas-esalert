import { NextResponse } from 'next/server';
import { Alerta } from '@/lib/types';

// In-memory alertas array
let alertas: Alerta[] = [
    {
        id: '1',
        descripcionCorta: 'Alerta Verde',
        descripcionLarga: 'Situación normal - Todo está bajo control',
        afectacion: 'Interna',
        nivelAlerta: 'verde',
        emailsNotificacion: [],
        activa: true,
        fechaCreacion: new Date().toISOString()
    },
    {
        id: '2',
        descripcionCorta: 'Alerta Naranja',
        descripcionLarga: 'Precaución requerida - Se recomienda estar atento',
        afectacion: 'Pais',
        nivelAlerta: 'naranja',
        emailsNotificacion: ['alerta@example.com'],
        activa: true,
        fechaCreacion: new Date().toISOString()
    },
    {
        id: '3',
        descripcionCorta: 'Alerta Roja',
        descripcionLarga: 'Emergencia - Situación crítica que requiere atención inmediata',
        afectacion: 'Mundial',
        nivelAlerta: 'rojo',
        emailsNotificacion: ['alerta@example.com', 'urgente@example.com'],
        activa: true,
        fechaCreacion: new Date().toISOString()
    },
];

// GET - Listar todas las alertas
export async function GET() {
    return NextResponse.json(alertas);
}

// POST - Crear nueva alerta
export async function POST(request: Request) {
    const data = await request.json();
    
    const newAlerta: Alerta = {
        id: crypto.randomUUID(),
        descripcionCorta: data.descripcionCorta,
        descripcionLarga: data.descripcionLarga,
        afectacion: data.afectacion,
        nivelAlerta: data.nivelAlerta,
        emailsNotificacion: data.emailsNotificacion || [],
        activa: true,
        fechaCreacion: new Date().toISOString()
    };
    
    alertas.push(newAlerta);
    
    return NextResponse.json(newAlerta, { status: 201 });
}
