import { alertasAPI } from '@/lib/api';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { formatDate, getNivelAlertaColor } from '@/lib/utils';

export default async function AlertaDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const alerta = await alertasAPI.getAlerta(params.id);
  const colors = getNivelAlertaColor(alerta.nivelAlerta);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link
            href="/alertas"
            className="text-blue-600 hover:text-blue-700 mb-4 inline-block"
          >
            ← Volver a alertas
          </Link>
        </div>

        <div className={`bg-white rounded-lg shadow-md border-l-4 ${colors.border}`}> 
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <Badge nivel={alerta.nivelAlerta}>
                  {alerta.nivelAlerta.toUpperCase()}
                </Badge>
                <span className="text-sm text-gray-500">
                  Ámbito: {alerta.afectacion}
                </span>
                {!alerta.activa && (
                  <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">
                    Inactiva
                  </span>
                )}
              </div>
              <Link href={`/alertas/${alerta.id}/editar`}>
                <Button variant="secondary">✏️ Editar</Button>
              </Link>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {alerta.descripcionCorta}
            </h1>

            <div className="prose max-w-none mb-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                {alerta.descripcionLarga}
              </p>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-lg font-semibold mb-3">
                Emails de Notificación
              </h2>
              <div className="flex flex-wrap gap-2">
                {alerta.emailsNotificacion.map((email, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
                    📧 {email}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t pt-6 mt-6">
              <h2 className="text-lg font-semibold mb-3">Información</h2>
              <dl className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm text-gray-500">ID</dt>
                  <dd className="font-mono text-sm">{alerta.id}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Estado</dt>
                  <dd>{alerta.activa ? '✅ Activa' : '❌ Inactiva'}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Fecha de Creación</dt>
                  <dd>{formatDate(alerta.fechaCreacion)}</dd>
                </div>
                {alerta.fechaModificacion && (
                  <div>
                    <dt className="text-sm text-gray-500">
                      Última Modificación
                    </dt>
                    <dd>{formatDate(alerta.fechaModificacion)}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
}