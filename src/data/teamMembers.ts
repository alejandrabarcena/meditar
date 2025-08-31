// INSTRUCCIONES PARA EDITAR EL EQUIPO:
// 1. Modifica la información de cada miembro del equipo
// 2. Agrega o quita miembros según necesites
// 3. Para las imágenes, usa URLs de Pexels o fotos profesionales
// 4. Mantén las descripciones concisas pero informativas

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  email?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Dra. Elena Martínez',
    role: 'Psicóloga Clínica',
    image: 'https://images.pexels.com/photos/3831849/pexels-photo-3831849.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Especialista en terapia cognitivo-conductual y mindfulness con 15 años de experiencia.',
    email: 'elena@menteplena.com'
  },
  {
    name: 'Dr. Carlos Ruiz',
    role: 'Instructor de Meditación',
    image: 'https://images.pexels.com/photos/3831849/pexels-photo-3831849.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Maestro certificado en técnicas de meditación y respiración consciente.',
    email: 'carlos@menteplena.com'
  },
  {
    name: 'Ana Sofía López',
    role: 'Coach de Bienestar',
    image: 'https://images.pexels.com/photos/3831849/pexels-photo-3831849.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Coach especializada en desarrollo personal y técnicas de autocuidado.',
    email: 'ana@menteplena.com'
  }
];