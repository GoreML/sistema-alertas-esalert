import { NextResponse } from 'next/server';

type Alerta = {
    id: number;
    message: string;
    status: string;
};

let alertas: Alerta[] = [
    { id: 1, message: "Alerta 1", status: "active" },
    { id: 2, message: "Alerta 2", status: "inactive" },
    { id: 3, message: "Alerta 3", status: "active" }
];

// GET handler to list all alertas
export async function GET() {
    return NextResponse.json(alertas);
}

// POST handler to create a new alerta
export async function POST(request: Request) {
    const newAlerta: Alerta = await request.json();
    alertas.push({ id: alertas.length + 1, ...newAlerta });
    return NextResponse.json(newAlerta, { status: 201 });
}