import { alertasAPI } from '@/lib/api';
import { AlertasList } from '@/components/alertas/AlertasList';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function AlertasPage() {
  const alertas = await alertasAPI.getAlertas();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 mb-4 inline-block"
          >
            ← Volver al inicio
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">
            Gestión de Alertas ES-Alert
          </h1>
          <p className="text-gray-600 mt-2">
            Sistema de gestión de alertas con niveles de riesgo estándar
          </p>
        </div>

        <AlertasList alertas={alertas} />
      </div>
    </main>
  );
}