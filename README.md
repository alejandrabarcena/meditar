# MentePlena Blog

Un blog moderno y elegante sobre mindfulness, meditación y bienestar mental.

## 🎯 Cómo editar el contenido

### Agregar o editar artículos
1. Ve a `src/data/articles.ts`
2. Para agregar un artículo nuevo, copia la estructura de uno existente
3. Cambia el `id` por un número único
4. Modifica todos los campos según tu contenido

### Cambiar información del sitio
1. Ve a `src/config/siteConfig.ts`
2. Modifica nombre, descripción, contacto, etc.

### Editar el equipo
1. Ve a `src/data/teamMembers.ts`
2. Agrega, quita o modifica miembros del equipo

### Personalizar categorías
1. Ve a `src/data/articles.ts`
2. Modifica el array `categories`
3. Asegúrate de que las categorías coincidan con las de tus artículos

## 🎨 Personalización de diseño

### Colores
- Modifica `tailwind.config.js` para cambiar la paleta de colores
- Los colores principales están en las secciones `green` y `teal`

### Tipografía
- Cambia la fuente en `src/index.css`
- Actualmente usa Inter de Google Fonts

### Imágenes
- Usa URLs de Pexels para imágenes gratuitas
- Formato recomendado: `?auto=compress&cs=tinysrgb&w=800`

## 🚀 Comandos disponibles

```bash
npm run dev    # Iniciar servidor de desarrollo
npm run build  # Construir para producción
npm run lint   # Verificar código
```

## 📝 Estructura del proyecto

```
src/
├── components/     # Componentes reutilizables
├── pages/         # Páginas principales
├── data/          # Contenido editable (artículos, equipo)
├── config/        # Configuración del sitio
├── types/         # Tipos TypeScript
└── index.css      # Estilos globales
```

## 💡 Tips para crear contenido

1. **Artículos:** Usa HTML simple en el campo `content`
2. **Imágenes:** Busca en Pexels imágenes relacionadas con bienestar
3. **Categorías:** Mantén consistencia entre artículos y categorías
4. **Fechas:** Usa formato YYYY-MM-DD
5. **Tiempo de lectura:** Calcula ~200 palabras por minuto