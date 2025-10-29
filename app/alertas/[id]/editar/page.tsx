import { alertasAPI } from '@/lib/api';
import { AlertaForm } from '@/components/alertas/AlertaForm';
import Link from 'next/link';

export default async function EditarAlertaPage({
  params,
}: {
  params: { id: string };
}) {
  const alerta = await alertasAPI.getAlerta(params.id);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link
            href={`/alertas/${params.id}`}
            className="text-blue-600 hover:text-blue-700 mb-4 inline-block"
          >
            ← Volver a detalle
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">
            Editar Alerta
          </h1>
          <p className="text-gray-600 mt-2">
            Modifique los campos necesarios y guarde los cambios
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <AlertaForm alerta={alerta} isEdit />
        </div>
      </div>
    </main>
  );
}