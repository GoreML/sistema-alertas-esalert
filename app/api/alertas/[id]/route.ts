import { NextResponse } from 'next/server';
import { Alerta } from '@/lib/types'; // ✅ CORRECTO

// In-memory alertas array
let alertas: Alerta[] = [
    { id: '1', descripcionCorta: 'Alerta Verde', descripcionLarga: 'Situación normal', afectacion: 'Ninguna', nivelAlerta: 'verde', emailsNotificacion: [], activa: true, fechaCreacion: new Date().toISOString(), fechaModificacion: null },
    { id: '2', descripcionCorta: 'Alerta Naranja', descripcionLarga: 'Precaución requerida', afectacion: 'Moderada', nivelAlerta: 'naranja', emailsNotificacion: ['alerta@example.com'], activa: true, fechaCreacion: new Date().toISOString(), fechaModificacion: null },
    { id: '3', descripcionCorta: 'Alerta Roja', descripcionLarga: 'Emergencia', afectacion: 'Alta', nivelAlerta: 'rojo', emailsNotificacion: ['alerta@example.com'], activa: true, fechaCreacion: new Date().toISOString(), fechaModificacion: null },
];

// GET function to find alerta by ID
export async function GET(req: Request, { params }: { params: { id: string } }) {
    const alerta = alertas.find(a => a.id === params.id);
    if (!alerta) {
        return NextResponse.json({ message: 'Alerta no encontrada' }, { status: 404 });
    }
    return NextResponse.json(alerta);
}

// PUT function to update alerta by ID
export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const index = alertas.findIndex(a => a.id === params.id);
    if (index === -1) {
        return NextResponse.json({ message: 'Alerta no encontrada' }, { status: 404 });
    }
    const data = await req.json();
    alertas[index] = { ...alertas[index], ...data, fechaModificacion: new Date().toISOString() };
    return NextResponse.json(alertas[index]);
}

// DELETE function to remove alerta by ID
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const index = alertas.findIndex(a => a.id === params.id);
    if (index === -1) {
        return NextResponse.json({ message: 'Alerta no encontrada' }, { status: 404 });
    }
    alertas.splice(index, 1);
    return NextResponse.json({ message: 'Alerta eliminada' });
}
