import { Alerta } from './types';

// Shared in-memory alertas array
export let alertas: Alerta[] = [
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
