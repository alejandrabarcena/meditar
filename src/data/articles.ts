import { BlogPost } from '../types';

// INSTRUCCIONES PARA EDITAR ARTÍCULOS:
// 1. Para agregar un nuevo artículo, copia la estructura de cualquier artículo existente
// 2. Cambia el 'id' por un número único
// 3. Modifica título, excerpt, content, author, date, category, imageUrl y readTime
// 4. Para el content, puedes usar HTML básico: <h2>, <h3>, <p>, <ul>, <ol>, <li>
// 5. Para las imágenes, usa URLs de Pexels o cualquier imagen pública

export const articles: BlogPost[] = [
  {
    id: '1',
    title: 'Mindfulness: Tu camino hacia la paz interior',
    excerpt: 'Descubre cómo la práctica del mindfulness puede transformar tu vida diaria y reducir el estrés.',
    content: `
      <h2>¿Qué es el Mindfulness?</h2>
      <p>El mindfulness o atención plena es la práctica de estar completamente presente en el momento actual, observando nuestros pensamientos y emociones sin juzgarlos.</p>
      
      <h3>Beneficios del Mindfulness</h3>
      <ul>
        <li>Reducción del estrés y la ansiedad</li>
        <li>Mejora de la concentración</li>
        <li>Mayor autoconciencia</li>
        <li>Mejor calidad del sueño</li>
        <li>Relaciones más saludables</li>
        <li>Mayor resiliencia emocional</li>
      </ul>
      
      <h3>Cómo empezar tu práctica</h3>
      <p>Comienza con solo 5 minutos al día. Siéntate cómodamente, cierra los ojos y enfócate en tu respiración. Cuando tu mente divague, simplemente regresa tu atención a la respiración sin juzgarte.</p>
      
      <h3>Ejercicio práctico</h3>
      <p>Prueba este ejercicio ahora mismo:</p>
      <ol>
        <li>Siéntate cómodamente y cierra los ojos</li>
        <li>Respira naturalmente y cuenta cada exhalación del 1 al 10</li>
        <li>Si pierdes la cuenta, simplemente comienza de nuevo en 1</li>
        <li>Continúa por 5 minutos</li>
      </ol>
    `,
    author: 'Dra. Elena Martínez',
    date: '2025-01-15',
    category: 'Mindfulness',
    imageUrl: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '5 min'
  },
  {
    id: '2',
    title: 'Técnicas de respiración para la ansiedad',
    excerpt: 'Aprende ejercicios de respiración efectivos para manejar momentos de ansiedad y estrés.',
    content: `
      <h2>El poder de la respiración consciente</h2>
      <p>La respiración es una herramienta poderosa que siempre llevamos con nosotros. Estos ejercicios te ayudarán a recuperar la calma en momentos difíciles.</p>
      
      <h3>Técnica 4-7-8 (La más efectiva)</h3>
      <p>Esta técnica, desarrollada por el Dr. Andrew Weil, es especialmente efectiva para reducir la ansiedad:</p>
      <ol>
        <li>Exhala completamente por la boca</li>
        <li>Cierra la boca e inhala por la nariz contando hasta 4</li>
        <li>Mantén la respiración contando hasta 7</li>
        <li>Exhala completamente por la boca contando hasta 8</li>
        <li>Repite el ciclo 3-4 veces</li>
      </ol>
      
      <h3>Respiración del cuadrado (Box Breathing)</h3>
      <p>Visualiza un cuadrado y respira siguiendo sus lados:</p>
      <ul>
        <li>Inhala por 4 segundos (lado izquierdo)</li>
        <li>Mantén por 4 segundos (lado superior)</li>
        <li>Exhala por 4 segundos (lado derecho)</li>
        <li>Mantén por 4 segundos (lado inferior)</li>
      </ul>
      
      <h3>Cuándo usar estas técnicas</h3>
      <p>Estas técnicas son especialmente útiles:</p>
      <ul>
        <li>Antes de presentaciones importantes</li>
        <li>Durante ataques de pánico</li>
        <li>Para conciliar el sueño</li>
        <li>En momentos de estrés laboral</li>
      </ul>
    `,
    author: 'Dr. Carlos Ruiz',
    date: '2025-01-12',
    category: 'Técnicas',
    imageUrl: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '4 min'
  },
  {
    id: '3',
    title: 'Meditación para principiantes: Guía completa',
    excerpt: 'Una guía paso a paso para comenzar tu práctica de meditación desde cero, sin experiencia previa.',
    content: `
      <h2>¿Por qué meditar?</h2>
      <p>La meditación no es solo sentarse en silencio. Es entrenar tu mente para estar más presente, reducir el estrés y desarrollar una mayor claridad mental.</p>
      
      <h3>Preparación para meditar</h3>
      <ul>
        <li><strong>Lugar:</strong> Encuentra un espacio tranquilo donde no te interrumpan</li>
        <li><strong>Postura:</strong> Siéntate cómodamente, espalda recta pero relajada</li>
        <li><strong>Tiempo:</strong> Comienza con 5-10 minutos, aumenta gradualmente</li>
        <li><strong>Ropa:</strong> Usa ropa cómoda que no te distraiga</li>
      </ul>
      
      <h3>Pasos para tu primera meditación</h3>
      <ol>
        <li><strong>Siéntate y cierra los ojos:</strong> Adopta una postura cómoda</li>
        <li><strong>Enfócate en la respiración:</strong> Siente el aire entrando y saliendo</li>
        <li><strong>Observa sin juzgar:</strong> Cuando notes pensamientos, simplemente obsérvalos</li>
        <li><strong>Regresa a la respiración:</strong> Cada vez que te distraigas, vuelve al aire</li>
        <li><strong>Termina gradualmente:</strong> Abre los ojos lentamente</li>
      </ol>
      
      <h3>Errores comunes de principiantes</h3>
      <ul>
        <li>Esperar que la mente se quede en blanco (es normal que aparezcan pensamientos)</li>
        <li>Juzgarse por distraerse (la distracción es parte del proceso)</li>
        <li>Meditar demasiado tiempo al principio (mejor poco pero constante)</li>
        <li>Abandonar después de unos días (los beneficios aparecen con la práctica)</li>
      </ul>
      
      <h3>Aplicaciones recomendadas</h3>
      <p>Para apoyar tu práctica, considera usar:</p>
      <ul>
        <li>Headspace (ideal para principiantes)</li>
        <li>Calm (excelente para dormir)</li>
        <li>Insight Timer (gran comunidad)</li>
        <li>Ten Percent Happier (enfoque práctico)</li>
      </ul>
    `,
    author: 'Ana Sofía López',
    date: '2025-01-10',
    category: 'Meditación',
    imageUrl: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '8 min'
  },
  {
    id: '4',
    title: 'Gestión del estrés en el trabajo',
    excerpt: 'Estrategias prácticas para mantener tu bienestar mental en el entorno laboral moderno.',
    content: `
      <h2>El estrés laboral en la era moderna</h2>
      <p>El trabajo remoto, las videollamadas constantes y la presión por estar siempre disponible han creado nuevos desafíos para nuestro bienestar mental. Aquí te mostramos cómo manejarlos.</p>
      
      <h3>Técnicas durante el horario laboral</h3>
      <ul>
        <li><strong>Pausas mindful:</strong> 2 minutos de respiración consciente cada hora</li>
        <li><strong>Técnica Pomodoro consciente:</strong> 25 min trabajo + 5 min mindfulness</li>
        <li><strong>Respiración antes de reuniones:</strong> 3 respiraciones profundas</li>
        <li><strong>Organización consciente:</strong> Prioriza tareas según energía mental</li>
        <li><strong>Límites digitales:</strong> Desactiva notificaciones innecesarias</li>
      </ul>
      
      <h3>Rituales de transición</h3>
      <p>Crear rituales que marquen el final del trabajo es crucial:</p>
      <ol>
        <li><strong>Cierre consciente:</strong> Revisa lo logrado del día</li>
        <li><strong>Cambio físico:</strong> Cambia de ropa o ubicación</li>
        <li><strong>Actividad de transición:</strong> Camina, estírate o medita 5 minutos</li>
        <li><strong>Intención para la tarde:</strong> Define cómo quieres sentirte</li>
      </ol>
      
      <h3>Manejo de reuniones estresantes</h3>
      <p>Antes de reuniones importantes:</p>
      <ul>
        <li>Llega 2 minutos antes y respira conscientemente</li>
        <li>Establece una intención positiva para la reunión</li>
        <li>Mantén los pies en el suelo para sentirte centrado</li>
        <li>Si sientes tensión, relaja conscientemente los hombros</li>
      </ul>
      
      <h3>Señales de alarma</h3>
      <p>Busca ayuda profesional si experimentas:</p>
      <ul>
        <li>Insomnio persistente relacionado con el trabajo</li>
        <li>Ansiedad constante sobre tareas laborales</li>
        <li>Pérdida de interés en actividades que antes disfrutabas</li>
        <li>Síntomas físicos como dolores de cabeza frecuentes</li>
      </ul>
    `,
    author: 'Dra. Elena Martínez',
    date: '2025-01-08',
    category: 'Bienestar',
    imageUrl: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '7 min'
  },
  {
    id: '5',
    title: 'Autocuidado digital: Desconectar para conectar',
    excerpt: 'Aprende a crear una relación saludable con la tecnología y las redes sociales.',
    content: `
      <h2>La importancia del autocuidado digital</h2>
      <p>En un mundo hiperconectado, aprender a desconectarse conscientemente se ha vuelto una habilidad esencial para nuestro bienestar mental.</p>
      
      <h3>Síntomas de sobrecarga digital</h3>
      <ul>
        <li>Revisar el teléfono compulsivamente</li>
        <li>Ansiedad cuando no tienes acceso a internet</li>
        <li>Dificultad para concentrarte sin distracciones digitales</li>
        <li>Comparación constante en redes sociales</li>
        <li>Problemas para dormir por uso nocturno de pantallas</li>
      </ul>
      
      <h3>Estrategias de desintoxicación digital</h3>
      <ol>
        <li><strong>Horarios sin pantallas:</strong> 1 hora antes de dormir y al despertar</li>
        <li><strong>Espacios libres de tecnología:</strong> Dormitorio y comedor</li>
        <li><strong>Notificaciones conscientes:</strong> Solo las esenciales activadas</li>
        <li><strong>Días de descanso digital:</strong> Un día a la semana sin redes sociales</li>
        <li><strong>Actividades analógicas:</strong> Lectura, escritura a mano, arte</li>
      </ol>
      
      <h3>Uso consciente de redes sociales</h3>
      <p>Transforma tu relación con las redes sociales:</p>
      <ul>
        <li>Haz una limpieza de cuentas que no te aporten valor</li>
        <li>Sigue cuentas que inspiren y eduquen</li>
        <li>Establece límites de tiempo diarios</li>
        <li>Practica la gratitud antes de abrir apps sociales</li>
        <li>Comparte contenido positivo y auténtico</li>
      </ul>
    `,
    author: 'Ana Sofía López',
    date: '2025-01-05',
    category: 'Bienestar',
    imageUrl: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '6 min'
  }
];

// INSTRUCCIONES PARA EDITAR CATEGORÍAS:
// 1. Puedes agregar nuevas categorías o modificar las existentes
// 2. Cambia el 'name' para que coincida con la categoría de tus artículos
// 3. Los colores disponibles incluyen: green, blue, purple, teal, red, yellow, indigo
// 4. Formato de color: 'bg-COLOR-100 text-COLOR-800'

export const categories = [
  { 
    id: '1', 
    name: 'Mindfulness', 
    description: 'Prácticas de atención plena para el día a día', 
    color: 'bg-green-100 text-green-800' 
  },
  { 
    id: '2', 
    name: 'Meditación', 
    description: 'Guías y técnicas de meditación para todos los niveles', 
    color: 'bg-blue-100 text-blue-800' 
  },
  { 
    id: '3', 
    name: 'Técnicas', 
    description: 'Herramientas prácticas para el bienestar mental', 
    color: 'bg-purple-100 text-purple-800' 
  },
  { 
    id: '4', 
    name: 'Bienestar', 
    description: 'Salud mental y emocional integral', 
    color: 'bg-teal-100 text-teal-800' 
  }
];