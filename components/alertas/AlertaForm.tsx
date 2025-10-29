'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { alertaSchema, AlertaFormData } from '@/lib/validations';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Alerta } from '@/lib/types';
import { alertasAPI } from '@/lib/api';
import toast from 'react-hot-toast';

interface AlertaFormProps {
  alerta?: Alerta;
  isEdit?: boolean;
}

export function AlertaForm({ alerta, isEdit = false }: AlertaFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [emails, setEmails] = useState<string[]>(
    alerta?.emailsNotificacion || ['']
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      descripcionCorta: formData.get('descripcionCorta') as string,
      descripcionLarga: formData.get('descripcionLarga') as string,
      afectacion: formData.get('afectacion') as any,
      nivelAlerta: formData.get('nivelAlerta') as any,
      emailsNotificacion: emails.filter((e) => e.trim() !== ''),
    };

    try {
      const validated = alertaSchema.parse(data);

      if (isEdit && alerta) {
        await alertasAPI.updateAlerta(alerta.id, validated);
        toast.success('Alerta actualizada correctamente');
      } else {
        await alertasAPI.createAlerta(validated);
        toast.success('Alerta creada correctamente');
      }

      router.push('/alertas');
      router.refresh();
    } catch (error: any) {
      if (error.errors) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err: any) => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
      } else {
        toast.error('Error al guardar la alerta');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const addEmail = () => {
    setEmails([...emails, '']);
  };

  const removeEmail = (index: number) => {
    setEmails(emails.filter((_, i) => i !== index));
  };

  const updateEmail = (index: number, value: string) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        name="descripcionCorta"
        label="Descripción Corta *"
        defaultValue={alerta?.descripcionCorta}
        error={errors.descripcionCorta}
        placeholder="Breve descripción de la alerta"
        required
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Descripción Larga *
        </label>
        <textarea
          name="descripcionLarga"
          defaultValue={alerta?.descripcionLarga}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Descripción detallada de la alerta"
          required
        />
        {errors.descripcionLarga && (
          <p className="mt-1 text-sm text-red-600">{errors.descripcionLarga}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Afectación *
        </label>
        <select
          name="afectacion"
          defaultValue={alerta?.afectacion}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Seleccione...</option>
          <option value="Interna">Interna</option>
          <option value="Pais">País</option>
          <option value="Europa">Europa</option>
          <option value="Mundial">Mundial</option>
        </select>
        {errors.afectacion && (
          <p className="mt-1 text-sm text-red-600">{errors.afectacion}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nivel de Alerta (ES-Alert) *
        </label>
        <select
          name="nivelAlerta"
          defaultValue={alerta?.nivelAlerta}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Seleccione...</option>
          <option value="verde">🟢 Verde - Sin riesgo</option>
          <option value="amarillo">🟡 Amarillo - Riesgo bajo</option>
          <option value="naranja">🟠 Naranja - Riesgo medio</option>
          <option value="rojo">🔴 Rojo - Riesgo alto</option>
        </select>
        {errors.nivelAlerta && (
          <p className="mt-1 text-sm text-red-600">{errors.nivelAlerta}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Emails de Notificación *
        </label>
        <div className="space-y-2">
          {emails.map((email, index) => (
            <div key={index} className="flex gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => updateEmail(index, e.target.value)}
                placeholder="email@ejemplo.com"
                className="flex-1"
              />
              {emails.length > 1 && (
                <Button
                  type="button"
                  variant="danger"
                  onClick={() => removeEmail(index)}
                >
                  ✕
                </Button>
              )}
            </div>
          ))}
        </div>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={addEmail}
          className="mt-2"
        >
          + Agregar Email
        </Button>
        {errors.emailsNotificacion && (
          <p className="mt-1 text-sm text-red-600">{errors.emailsNotificacion}</p>
        )}
      </div>

      <div className="flex gap-3">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Guardando...' : isEdit ? 'Actualizar' : 'Crear'} Alerta
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={() => router.back()}
        >
          Cancelar
        </Button>
      </div>
    </form>
  );
}