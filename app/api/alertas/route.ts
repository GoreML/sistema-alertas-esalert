import { Alerta } from "@/lib/types";

let alertas: Alerta[] = [
    {
        id: 1,
        nivel: "verde",
        mensaje: "Todo está bien.",
        fechaCreacion: new Date().toISOString(),
    },
    {
        id: 2,
        nivel: "naranja",
        mensaje: "Alerta moderada.",
        fechaCreacion: new Date().toISOString(),
    },
    {
        id: 3,
        nivel: "rojo",
        mensaje: "Alerta crítica.",
        fechaCreacion: new Date().toISOString(),
    },
];

// Handle GET requests to return all alertas
export const GET = async () => {
    return new Response(JSON.stringify(alertas), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
};

// Handle POST requests to create a new alerta
export const POST = async (request: Request) => {
    const newAlerta: Alerta = await request.json();
    newAlerta.id = alertas.length + 1; // Auto-generate ID
    newAlerta.fechaCreacion = new Date().toISOString(); // Set creation date
    alertas.push(newAlerta);

    return new Response(JSON.stringify(newAlerta), {
        status: 201,
        headers: {
            "Content-Type": "application/json",
        },
    });
};
