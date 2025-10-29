import { NextResponse } from 'next/server';
import { Alerta } from '@/lib/types';
import { alertas } from '@/lib/data';

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