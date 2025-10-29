export type Afectacion = 'Interna' | 'Pais' | 'Europa' | 'Mundial';

export type NivelAlerta = 'verde' | 'amarillo' | 'naranja' | 'rojo';

export interface Alerta {
  id: string;
  descripcionCorta: string;
  descripcionLarga: string;
  afectacion: Afectacion;
  nivelAlerta: NivelAlerta;
  emailsNotificacion: string[];
  fechaCreacion: string;
  fechaModificacion?: string;
  activa: boolean;
}

export interface CreateAlertaDTO {
  descripcionCorta: string;
  descripcionLarga: string;
  afectacion: Afectacion;
  nivelAlerta: NivelAlerta;
  emailsNotificacion: string[];
}

export interface UpdateAlertaDTO extends Partial<CreateAlertaDTO> {
  activa?: boolean;
}