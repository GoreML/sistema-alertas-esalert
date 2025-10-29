import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { NivelAlerta } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const nivelAlertaColors = {
  verde: {
    bg: 'bg-green-100',
    text: 'text-green-800',
    border: 'border-green-300',
    badge: 'bg-green-500',
  },
  amarillo: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
    border: 'border-yellow-300',
    badge: 'bg-yellow-500',
  },
  naranja: {
    bg: 'bg-orange-100',
    text: 'text-orange-800',
    border: 'border-orange-300',
    badge: 'bg-orange-500',
  },
  rojo: {
    bg: 'bg-red-100',
    text: 'text-red-800',
    border: 'border-red-300',
    badge: 'bg-red-500',
  },
};

export function getNivelAlertaColor(nivel: NivelAlerta) {
  return nivelAlertaColors[nivel];
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('es-ES', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(date));
}