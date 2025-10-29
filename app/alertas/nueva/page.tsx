import { AlertaForm } from '@/components/alertas/AlertaForm';
import Link from 'next/link';

export default function NuevaAlertaPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link
            href="/alertas"
            className="text-blue-600 hover:text-blue-700 mb-4 inline-block"
          >
            ← Volver a alertas
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">
            Crear Nueva Alerta
          </h1>
          <p className="text-gray-600 mt-2">
            Complete los campos para crear una nueva alerta en el sistema
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <AlertaForm />
        </div>
      </div>
    </main>
  );
}