import { z } from 'zod';

export const alertaSchema = z.object({
  descripcionCorta: z
    .string()
    .min(5, 'La descripción corta debe tener al menos 5 caracteres')
    .max(100, 'La descripción corta no puede exceder 100 caracteres'),
  
  descripcionLarga: z
    .string()
    .min(20, 'La descripción larga debe tener al menos 20 caracteres')
    .max(1000, 'La descripción larga no puede exceder 1000 caracteres'),
  
  afectacion: z.enum(['Interna', 'Pais', 'Europa', 'Mundial'], {
    errorMap: () => ({ message: 'Seleccione una afectación válida' }),
  }),
  
  nivelAlerta: z.enum(['verde', 'amarillo', 'naranja', 'rojo'], {
    errorMap: () => ({ message: 'Seleccione un nivel de alerta válido' }),
  }),
  
  emailsNotificacion: z
    .array(z.string().email('Email inválido'))
    .min(1, 'Debe proporcionar al menos un email')
    .max(10, 'No puede agregar más de 10 emails'),
});

export type AlertaFormData = z.infer<typeof alertaSchema>;