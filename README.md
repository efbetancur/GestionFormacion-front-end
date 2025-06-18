# Sistema de Gestión de Formación - Frontend

Sistema de gestión de formación desarrollado para el SENA (Servicio Nacional de Aprendizaje), construido con **React 19, TypeScript y Tailwind CSS**.

Este proyecto proporciona una interfaz moderna y funcional para la gestión integral de procesos de formación, incluyendo administración de usuarios, grupos, calendarios y reportes.

## Características Principales

- **Dashboard interactivo** con métricas y estadísticas en tiempo real
- **Gestión de usuarios** con perfiles detallados y roles
- **Administración de grupos** de formación
- **Calendario integrado** con FullCalendar
- **Gráficos y reportes** usando ApexCharts
- **Formularios avanzados** con validación
- **Tablas dinámicas** con ordenamiento y filtrado
- **Modo oscuro/claro** para mejor experiencia de usuario
- **Diseño responsivo** para todos los dispositivos

## Tecnologías Utilizadas

- **React 19** - Framework principal
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Framework de estilos
- **Vite** - Herramienta de construcción
- **React Router** - Navegación
- **ApexCharts** - Visualización de datos
- **FullCalendar** - Componente de calendario
- **React Dropzone** - Manejo de archivos

## Instalación

### Prerrequisitos

Asegúrate de tener instalado:

- Node.js 18.x o superior (recomendado Node.js 20.x)

### Clonar el Repositorio

```bash
git clone <url-del-repositorio>
cd GestionFormacion-front-end
```

### Instalar Dependencias

```bash
npm install
# o
yarn install
```

> Si encuentras problemas durante la instalación, usa el flag `--legacy-peer-deps`.

### Ejecutar en Desarrollo

```bash
npm run dev
# o
yarn dev
```

El servidor de desarrollo se iniciará en `http://localhost:5173`

## Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── auth/           # Componentes de autenticación
│   ├── charts/         # Componentes de gráficos
│   ├── common/         # Componentes comunes
│   ├── form/           # Componentes de formularios
│   ├── header/         # Componentes del encabezado
│   ├── tables/         # Componentes de tablas
│   └── ui/             # Componentes de interfaz
├── context/            # Contextos de React
├── hooks/              # Hooks personalizados
├── icons/              # Iconos SVG
├── layout/             # Componentes de layout
├── pages/              # Páginas de la aplicación
│   ├── AuthPages/      # Páginas de autenticación
│   ├── Dashboard/      # Dashboard principal
│   ├── Tables/         # Páginas de tablas
│   └── UiElements/     # Elementos de UI
└── main.tsx            # Punto de entrada
```

## Páginas Disponibles

### Autenticación
- **Iniciar Sesión** (`/signin`) - Formulario de login
- **Registrarse** (`/signup`) - Formulario de registro

### Dashboard
- **Inicio** (`/`) - Dashboard principal con métricas

### Gestión
- **Usuarios** (`/tabla-usuarios`) - Administración de usuarios
- **Grupos** (`/tabla-grupos`) - Gestión de grupos de formación
- **Perfil** (`/profile`) - Perfil de usuario

### Herramientas
- **Calendario** (`/calendar`) - Calendario de eventos
- **Formularios** (`/form-elements`) - Elementos de formulario
- **Gráficos** (`/line-chart`, `/bar-chart`) - Visualización de datos

### Elementos UI
- **Alertas** (`/alerts`) - Componentes de alerta
- **Avatares** (`/avatars`) - Componentes de avatar
- **Badges** (`/badge`) - Etiquetas y badges
- **Botones** (`/buttons`) - Componentes de botón
- **Imágenes** (`/images`) - Manejo de imágenes
- **Videos** (`/videos`) - Componentes de video

## Scripts Disponibles

```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Construir para producción
npm run lint     # Ejecutar linter
npm run preview  # Vista previa de la build
```

## Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_TITLE=Sistema de Gestión de Formación
```

### Personalización de Estilos

Los estilos se pueden personalizar editando:
- `src/index.css` - Estilos globales
- `tailwind.config.js` - Configuración de Tailwind CSS

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE.md` para más detalles.

## Soporte

Para soporte técnico o preguntas sobre el proyecto, contacta al equipo de desarrollo del SENA.

---

**Desarrollado para el Servicio Nacional de Aprendizaje (SENA)**
