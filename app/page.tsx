import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🚨 Sistema de Alertas ES-Alert
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Gestión completa de alertas con niveles de riesgo estándar
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            <Link href="/alertas">
              <Button size="lg">
                Ver Alertas
              </Button>
            </Link>
            <Link href="/alertas/nueva">
              <Button size="lg" variant="secondary">
                + Nueva Alerta
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
              <div className="text-4xl mb-2">🟢</div>
              <h3 className="font-semibold text-lg mb-2">Verde</h3>
              <p className="text-gray-600 text-sm">Sin riesgo - Información general</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-500">
              <div className="text-4xl mb-2">🟡</div>
              <h3 className="font-semibold text-lg mb-2">Amarillo</h3>
              <p className="text-gray-600 text-sm">Riesgo bajo - Monitoreo requerido</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
              <div className="text-4xl mb-2">🟠</div>
              <h3 className="font-semibold text-lg mb-2">Naranja</h3>
              <p className="text-gray-600 text-sm">Riesgo medio - Atención necesaria</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-500">
              <div className="text-4xl mb-2">🔴</div>
              <h3 className="font-semibold text-lg mb-2">Rojo</h3>
              <p className="text-gray-600 text-sm">Riesgo alto - Acción inmediata</p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Características</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-semibold mb-2">✅ CRUD Completo</h3>
                <p className="text-gray-600 text-sm">Crear, leer, actualizar y eliminar alertas</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🌍 Ámbitos de Afectación</h3>
                <p className="text-gray-600 text-sm">Interna, País, Europa, Mundial</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">📧 Notificaciones</h3>
                <p className="text-gray-600 text-sm">Gestión de múltiples emails</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🔍 Búsqueda</h3>
                <p className="text-gray-600 text-sm">Filtrado en tiempo real</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">✔️ Validación</h3>
                <p className="text-gray-600 text-sm">Formularios robustos con Zod</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">📱 Responsive</h3>
                <p className="text-gray-600 text-sm">Diseño adaptable a todos los dispositivos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}