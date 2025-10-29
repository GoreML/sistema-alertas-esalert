# 🚨 ES-Alert - Sistema de Gestión de Alertas

Sistema CRUD completo para gestionar alertas con niveles de severidad (Verde, Naranja, Rojo). Desarrollado con **Next.js 14**, **React**, **TypeScript** y **Tailwind CSS**.

## ✨ Características

- 🎨 **Dashboard Intuitivo**: Visualización clara de todas las alertas con códigos de color
- ✏️ **CRUD Completo**: Crear, leer, actualizar y eliminar alertas
- 🎯 **Niveles de Alerta**: Sistema de clasificación por colores (Verde, Naranja, Rojo)
- 🌍 **Ámbitos de Afectación**: Categorización por alcance (Interna, Nacional, Europa, Mundial)
- 📧 **Notificaciones por Email**: Gestión de listas de distribución
- 🔍 **Filtros Avanzados**: Búsqueda y filtrado por nivel de alerta
- 📱 **Responsive**: Diseño adaptado para móviles, tablets y escritorio
- ⚡ **API Routes de Next.js**: Backend integrado sin necesidad de servidor externo

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Frontend**: React 18 + TypeScript
- **Estilos**: Tailwind CSS
- **API**: Next.js API Routes (sin necesidad de json-server)
- **Deployment**: Vercel

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ instalado
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/GoreML/sistema-alertas-esalert.git
cd sistema-alertas-esalert

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
sistema-alertas-esalert/
├── app/
│   ├── api/
│   │   └── alertas/
│   │       ├── route.ts          # GET (listar) y POST (crear)
│   │       └── [id]/
│   │           └── route.ts      # GET, PUT y DELETE por ID
│   ├── alertas/
│   │   ├── page.tsx              # Lista de alertas
│   │   ├── nueva/
│   │   │   └── page.tsx          # Crear nueva alerta
│   │   └── [id]/
│   │       ├── page.tsx          # Detalle de alerta
│   │       └── editar/
│   │           └── page.tsx      # Editar alerta
│   ├── layout.tsx
│   └── page.tsx                  # Página principal
├── components/
│   └── ui/
│       ├── Badge.tsx             # Componente de badge de nivel
│       └── Button.tsx            # Componente de botón
├── lib/
│   ├── api.ts                    # Cliente API
│   ├── types.ts                  # Tipos TypeScript
│   └── utils.ts                  # Utilidades
└── public/
```

## 🔌 API Endpoints

### Alertas

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/alertas` | Listar todas las alertas |
| POST | `/api/alertas` | Crear nueva alerta |
| GET | `/api/alertas/:id` | Obtener alerta por ID |
| PUT | `/api/alertas/:id` | Actualizar alerta |
| DELETE | `/api/alertas/:id` | Eliminar alerta |

## 📊 Modelo de Datos

```typescript
interface Alerta {
  id: string;
  descripcionCorta: string;
  descripcionLarga: string;
  afectacion: 'Interna' | 'Nacional' | 'Europa' | 'Mundial';
  nivelAlerta: 'verde' | 'naranja' | 'rojo';
  emailsNotificacion: string[];
  activa: boolean;
  fechaCreacion: string;
  fechaModificacion?: string | null;
}
```

## 🎨 Niveles de Alerta

| Nivel | Color | Descripción |
|-------|-------|-------------|
| 🟢 Verde | `#10b981` | Situación normal, sin riesgos |
| 🟠 Naranja | `#f59e0b` | Precaución requerida |
| 🔴 Rojo | `#ef4444` | Emergencia o situación crítica |

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint
```

## 🌐 Deploy en Vercel

Este proyecto está optimizado para Vercel:

1. Conecta tu repositorio de GitHub a Vercel
2. Vercel detectará automáticamente Next.js
3. ¡Deploy automático con cada push!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/GoreML/sistema-alertas-esalert)

## ⚠️ Nota sobre Persistencia de Datos

Actualmente, los datos se almacenan en **memoria** durante la sesión de ejecución. Esto significa:

- ✅ Perfecto para desarrollo y demos
- ✅ Las 3 alertas de ejemplo se cargan automáticamente
- ⚠️ Los datos se reinician con cada deploy o reinicio del servidor

### Para Persistencia en Producción

Si necesitas persistencia real de datos, puedes integrar:

- **MongoDB Atlas** (Base de datos NoSQL en la nube)
- **PostgreSQL + Vercel Postgres** (Base de datos relacional)
- **Supabase** (Backend as a Service)
- **PlanetScale** (Base de datos MySQL serverless)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**GoreML**

- GitHub: [@GoreML](https://github.com/GoreML)
- Proyecto: [sistema-alertas-esalert](https://github.com/GoreML/sistema-alertas-esalert)

## 🙏 Agradecimientos

- Next.js por el increíble framework
- Vercel por el hosting gratuito
- Tailwind CSS por el sistema de estilos

---

**¿Preguntas o sugerencias?** Abre un issue en el repositorio.
