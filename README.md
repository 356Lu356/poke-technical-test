# Pokémon App - Metlabs

<div align="center">
  <h3>Prueba Técnica Frontend - Metlabs</h3>
  <p>Una aplicación web moderna para explorar y descubrir Pokémon</p>
</div>

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características Principales](#-características-principales)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Uso de la Aplicación](#-uso-de-la-aplicación)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [API y Servicios](#-api-y-servicios)
- [Componentes Principales](#-componentes-principales)
- [Hooks Personalizados](#-hooks-personalizados)
- [Utilidades](#-utilidades)
- [Scripts Disponibles](#-scripts-disponibles)
- [Despliegue](#-despliegue)
- [Consideraciones de Desarrollo](#-consideraciones-de-desarrollo)

---

## 🎯 Descripción

**Pokémon App** es una aplicación web desarrollada en Next.js que permite a los usuarios explorar y descubrir información detallada sobre diferentes Pokémon. La aplicación ofrece una experiencia interactiva con navegación fluida, diseño responsivo y funcionalidades avanzadas como generación aleatoria de Pokémon y análisis de vocales en nombres.

## ✨ Características Principales

### 🏠 Página Principal

- **Visualización de Pokémon 1-9**: Muestra una galería de los primeros 9 Pokémon con información básica
- **Navegación intuitiva**: Interfaz limpia y fácil de usar
- **Diseño responsivo**: Optimizado para dispositivos móviles y desktop

### 🎲 Generador Aleatorio

- **5 Pokémon aleatorios**: Genera y muestra 5 Pokémon seleccionados aleatoriamente
- **Análisis de vocales**: Cuenta y muestra las vocales presentes en los nombres de los Pokémon generados
- **Regeneración dinámica**: Botón para generar nuevos Pokémon aleatorios

### 📱 Detalles de Pokémon

- **Información completa**: Altura, peso, experiencia base, tipos y estadísticas
- **Imágenes de alta calidad**: Artwork oficial de cada Pokémon
- **Navegación por URL**: URLs amigables para cada Pokémon (`/pokemon/[id]`)

### 🎨 Interfaz de Usuario

- **Diseño moderno**: Utiliza Tailwind CSS para un diseño atractivo y consistente
- **Estados de carga**: Spinners y estados de loading para mejor UX
- **Manejo de errores**: Páginas de error personalizadas (404, errores de API)
- **Navegación móvil**: Menú hamburguesa para dispositivos móviles

## 🛠 Tecnologías Utilizadas

### Frontend

- **[Next.js 15.4.5](https://nextjs.org)** - Framework de React con App Router
- **[React 19.1.0](https://reactjs.org)** - Biblioteca de interfaz de usuario
- **[TypeScript 5](https://www.typescriptlang.org)** - Tipado estático para JavaScript
- **[Tailwind CSS 4.1.11](https://tailwindcss.com)** - Framework de CSS utilitario

### Herramientas de Desarrollo

- **[ESLint 9](https://eslint.org)** - Linter para código JavaScript/TypeScript
- **[PostCSS 8](https://postcss.org)** - Procesador de CSS
- **[Autoprefixer](https://autoprefixer.github.io)** - Plugin de PostCSS para prefijos CSS

### APIs Externas

- **[PokéAPI](https://pokeapi.co)** - API RESTful para datos de Pokémon

## 🏗 Arquitectura del Proyecto

La aplicación sigue una arquitectura modular y escalable basada en los principios de **separación de responsabilidades** y **componentes reutilizables**:

```
📁 Arquitectura de Capas
├── 🎨 Presentación (Components/Containers)
├── 🔧 Lógica de Negocio (Hooks/Utilities)
├── 📡 Servicios (API Calls)
└── 📊 Datos (Types/Interfaces)
```

### Patrones de Diseño Implementados

- **Container/Component Pattern**: Separación entre lógica y presentación
- **Custom Hooks Pattern**: Reutilización de lógica de estado
- **Service Layer Pattern**: Abstracción de llamadas a API
- **Type-First Development**: Desarrollo guiado por tipos de TypeScript

## 🚀 Instalación y Configuración

### Prerrequisitos

- **Node.js** versión 18.0 o superior
- **npm**, **yarn**, **pnpm** o **bun** como gestor de paquetes

### Pasos de Instalación

1. **Clonar el repositorio**

   ```bash
   git clone <repository-url>
   cd poke-technical-test
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   # o
   bun install
   ```

3. **Ejecutar el servidor de desarrollo**

   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   # o
   bun dev
   ```

4. **Acceder a la aplicación**

   Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## 💻 Uso de la Aplicación

### Navegación Principal

| Ruta            | Descripción         | Funcionalidad                                 |
| --------------- | ------------------- | --------------------------------------------- |
| `/`             | Página principal    | Muestra Pokémon 1-9 con navegación a detalles |
| `/random`       | Generador aleatorio | 5 Pokémon aleatorios con análisis de vocales  |
| `/pokemon/[id]` | Detalles de Pokémon | Información completa de un Pokémon específico |

### Funcionalidades Interactivas

1. **Exploración de Pokémon**: Click en cualquier tarjeta para ver detalles completos
2. **Generación Aleatoria**: Botón "Generar Nuevos Pokémon" en la página `/random`
3. **Análisis de Vocales**: Tabla automática que cuenta vocales en nombres de Pokémon aleatorios
4. **Navegación Responsiva**: Menú hamburguesa en dispositivos móviles

## 📁 Estructura del Proyecto

```
poke-technical-test/
├── 📁 app/                          # App Router de Next.js
│   ├── favicon.ico
│   ├── globals.css                  # Estilos globales
│   ├── layout.tsx                   # Layout principal
│   ├── loading.tsx                  # Componente de carga global
│   ├── not-found.tsx               # Página 404 global
│   ├── page.tsx                    # Página principal (/)
│   ├── 📁 pokemon/
│   │   └── 📁 [id]/               # Rutas dinámicas para Pokémon
│   │       ├── not-found.tsx      # 404 específico para Pokémon
│   │       └── page.tsx           # Página de detalles
│   └── 📁 random/
│       └── page.tsx               # Página de Pokémon aleatorios
├── 📁 components/                   # Componentes reutilizables
│   ├── LoadingSpinner.tsx          # Spinner de carga
│   ├── PokemonCard.tsx            # Tarjeta individual de Pokémon
│   ├── PokemonList.tsx            # Lista/Grid de Pokémon
│   ├── 📁 Footer/
│   │   └── Footer.tsx             # Pie de página
│   ├── 📁 Header/                 # Componentes de navegación
│   │   ├── Header.tsx
│   │   ├── MobileMenuToggle.tsx
│   │   ├── MobileNavigation.tsx
│   │   └── NavItem.tsx
│   └── 📁 icons/                  # Iconos SVG
│       ├── CloseIcon.tsx
│       └── HamburgerIcon.tsx
├── 📁 containers/                   # Containers con lógica de negocio
│   ├── 📁 HomePage/
│   │   └── HomePage.tsx           # Container de página principal
│   ├── 📁 PokemonDetailsPage/
│   │   ├── PokemonDetailsPage.tsx
│   │   └── 📁 components/
│   │       ├── AttributesTable.tsx
│   │       ├── BadgeTypes.tsx
│   │       └── ButtonReturn.tsx
│   └── 📁 RandomPage/
│       ├── RandomPage.tsx
│       └── 📁 components/
│           ├── GenerateNewPokemonButton.tsx
│           ├── TryAgain.tsx
│           └── VowelCountTable.tsx
├── 📁 hooks/                        # Custom hooks
│   └── useLoadRandomPokemons.tsx   # Hook para cargar Pokémon aleatorios
├── 📁 lib/                         # Utilidades y helpers
│   ├── pokemonApi.ts              # API wrapper para múltiples llamadas
│   └── vowelCounter.ts            # Utilidad para contar vocales
├── 📁 services/                    # Servicios de API
│   └── pokeapi.ts                 # Cliente de PokéAPI
├── 📁 types/                       # Definiciones de tipos
│   └── pokemon.ts                 # Interfaces de Pokémon
└── 📁 public/                      # Archivos estáticos
    └── [íconos SVG]
```

## 🔌 API y Servicios

### PokéAPI Integration

La aplicación utiliza la [PokéAPI](https://pokeapi.co) como fuente de datos:

```typescript
// services/pokeapi.ts
const POKEMON_API_BASE = "https://pokeapi.co/api/v2/pokemon";

export async function fetchPokemon(id: number): Promise<Pokemon> {
  const response = await fetch(`${POKEMON_API_BASE}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokemon ${id}`);
  }
  return response.json();
}
```

### Manejo de Errores

- **Timeout handling**: Manejo de timeouts en requests
- **Error boundaries**: Componentes que capturan errores de React
- **Fallback UI**: Interfaces de respaldo para errores de red

### Optimizaciones de Performance

- **Server-side rendering**: Renderizado en servidor para mejor SEO
- **Static generation**: Generación estática donde es posible
- **Image optimization**: Optimización automática de imágenes de Next.js

## 🧩 Componentes Principales

### PokemonCard

```typescript
interface PokemonCardProps {
  pokemon: Pokemon;
  index?: number;
  showIndex?: boolean;
}
```

Tarjeta reutilizable que muestra información básica de un Pokémon.

### PokemonList

```typescript
interface PokemonListProps {
  pokemon: Pokemon[];
  showIndex?: boolean;
}
```

Grid responsivo que organiza múltiples tarjetas de Pokémon.

### LoadingSpinner

Componente de carga reutilizable con animaciones CSS.

### Header/Navigation

Sistema de navegación responsivo con:

- Navegación desktop estándar
- Menú hamburguesa para móviles
- Estados activos para rutas actuales

## 🎣 Hooks Personalizados

### useLoadRandomPokemons

```typescript
interface UseLoadRandomPokemonsReturn {
  pokemon: Pokemon[];
  error: string | null;
  vowelCount: Record<string, number>;
  loadRandomPokemon: () => void;
  loading: boolean;
}
```

**Funcionalidades:**

- Carga 5 Pokémon aleatorios de un rango de 1-150
- Manejo de estados de carga y error
- Cálculo automático de vocales en nombres
- Regeneración de Pokémon

## 🔧 Utilidades

### vowelCounter.ts

```typescript
export function countVowels(names: string[]): Record<string, number>;
```

Utilidad que analiza los nombres de Pokémon y cuenta las vocales (a, e, i, o, u).

**Casos de uso:**

- Análisis de patrones en nombres de Pokémon
- Estadísticas de caracteres
- Funcionalidades educativas

## 📜 Scripts Disponibles

| Script           | Comando         | Descripción                                  |
| ---------------- | --------------- | -------------------------------------------- |
| **Desarrollo**   | `npm run dev`   | Inicia servidor de desarrollo en puerto 3000 |
| **Construcción** | `npm run build` | Construye la aplicación para producción      |
| **Inicio**       | `npm run start` | Inicia servidor de producción                |
| **Linting**      | `npm run lint`  | Ejecuta ESLint para verificar código         |

### Desarrollo Local

```bash
# Desarrollo con hot-reload
npm run dev

# Verificar código
npm run lint

# Construir para producción
npm run build

# Previsualizar build de producción
npm run start
```

## 🚀 Despliegue

### Vercel (Recomendado)

La aplicación está optimizada para despliegue en Vercel:

1. **Conectar repositorio**

   - Conectar el repositorio de GitHub a Vercel
   - Configuración automática para Next.js

2. **Configuración de entorno**

   - No requiere variables de entorno adicionales
   - PokéAPI es una API pública sin autenticación

3. **Despliegue automático**
   - Deploy automático en cada push a main/master
   - Preview deployments para pull requests

### Otras Plataformas

- **Netlify**: Compatible con Next.js Static Export
- **GitHub Pages**: Requiere configuración adicional para SSG
- **Docker**: Containerización disponible con Next.js standalone

### Comandos de Despliegue

```bash
# Build optimizado para producción
npm run build

# Iniciar en modo producción
npm run start
```

## 🔍 Consideraciones de Desarrollo

### Performance

- **Image Optimization**: Uso de `next/image` para imágenes optimizadas
- **Font Optimization**: Carga optimizada de Google Fonts (Geist)
- **Bundle Analysis**: Análisis de tamaño de bundle disponible
- **Lazy Loading**: Carga diferida de componentes pesados

### SEO

- **Meta Tags**: Metadata apropiada en cada página
- **Structured Data**: Datos estructurados para motores de búsqueda
- **Open Graph**: Metadatos para redes sociales
- **Sitemap**: Generación automática de sitemap

### Accessibility

- **ARIA Labels**: Etiquetas ARIA para lectores de pantalla
- **Keyboard Navigation**: Navegación completa por teclado
- **Color Contrast**: Contraste adecuado según WCAG
- **Focus Management**: Gestión apropiada del foco

### Testing Recommendations

```bash
# Configuración recomendada para testing
npm install --save-dev @testing-library/react @testing-library/jest-dom jest
```

**Tipos de tests sugeridos:**

- Unit tests para utilidades (`vowelCounter.ts`)
- Integration tests para hooks (`useLoadRandomPokemons`)
- Component tests para UI (`PokemonCard`, `PokemonList`)
- E2E tests para flujos críticos

### Code Quality

- **TypeScript strict mode**: Tipado estricto habilitado
- **ESLint configuration**: Reglas de Next.js y React
- **Prettier integration**: Formato automático de código
- **Commit hooks**: Pre-commit hooks para calidad de código

---

<div align="center">
  <p><em>Prueba Técnica Frontend - Pokémon App</em></p>
</div>
