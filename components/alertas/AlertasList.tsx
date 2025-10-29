'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Alerta } from '@/lib/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { formatDate, getNivelAlertaColor } from '@/lib/utils';
import { alertasAPI } from '@/lib/api';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface AlertasListProps {
  alertas: Alerta[];
}

export function AlertasList({ alertas: initialAlertas }: AlertasListProps) {
  const [alertas, setAlertas] = useState(initialAlertas);
  const [filter, setFilter] = useState('');
  const router = useRouter();

  const handleDelete = async (id: string) => {
    if (!confirm('¿Está seguro de eliminar esta alerta?')) return;

    try {
      await alertasAPI.deleteAlerta(id);
      setAlertas(alertas.filter((a) => a.id !== id));
      toast.success('Alerta eliminada correctamente');
      router.refresh();
    } catch (error) {
      toast.error('Error al eliminar la alerta');
    }
  };

  const filteredAlertas = alertas.filter(
    (alerta) =>
      alerta.descripcionCorta.toLowerCase().includes(filter.toLowerCase()) ||
      alerta.descripcionLarga.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="Buscar alertas..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Link href="/alertas/nueva">
          <Button>+ Nueva Alerta</Button>
        </Link>
      </div>

      {filteredAlertas.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No se encontraron alertas</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredAlertas.map((alerta) => {
            const colors = getNivelAlertaColor(alerta.nivelAlerta);
            return (
              <div
                key={alerta.id}
                className={`border-l-4 ${colors.border} bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {alerta.descripcionCorta}
                      </h3>
                      <Badge nivel={alerta.nivelAlerta}>
                        {alerta.nivelAlerta.toUpperCase()}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {alerta.afectacion}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3 line-clamp-2">
                      {alerta.descripcionLarga}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>📧 {alerta.emailsNotificacion.length} emails</span>
                      <span>📅 {formatDate(alerta.fechaCreacion)}</span>
                      {!alerta.activa && (
                        <span className="text-red-600 font-medium">
                          ⛔ Inactiva
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/alertas/${alerta.id}`}> 
                      <Button variant="ghost" size="sm">
                        👁️ Ver
                      </Button>
                    </Link>
                    <Link href={`/alertas/${alerta.id}/editar`}> 
                      <Button variant="secondary" size="sm">
                        ✏️ Editar
                      </Button>
                    </Link>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(alerta.id)}
                    >
                      🗑️
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}