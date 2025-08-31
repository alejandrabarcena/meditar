import React from 'react';
import { Heart, Target, Users, Award } from 'lucide-react';
import { teamMembers } from '../data/teamMembers';
import { siteConfig } from '../config/siteConfig';

export const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compasión',
      description: 'Creemos en un enfoque compasivo hacia el bienestar y emociones positivas.'
    },
    {
      icon: Target,
      title: 'Práctica',
      description: 'Ofrecemos herramientas prácticas y aplicables en la vida diaria.'
    },
    {
      icon: Users,
      title: 'Comunidad',
      description: 'Fomentamos una comunidad de apoyo mutuo en el camino del crecimiento personal.'
    },
    {
      icon: Award,
      title: 'Calidad',
      description: 'Todo nuestro contenido está respaldado por investigación científica y experiencia profesional.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Acerca de MentePlena
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nuestro compromiso es hacer accesible el bienestar mental y las prácticas de mindfulness 
            para toda persona que busque una vida más plena y consciente.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Nuestra misión</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Creemos que el bienestar mental no es un lujo, sino una necesidad fundamental. 
                Nuestro objetivo es democratizar el acceso a prácticas probadas de mindfulness 
                y meditación a través de contenido de calidad, fácil de entender y aplicar.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Cada artículo, técnica y recurso que compartimos está diseñado para ser 
                una herramienta práctica que puedas integrar en tu rutina diaria, 
                sin importar tu nivel de experiencia.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Meditación y mindfulness"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nuestros valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nuestro equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 mx-auto w-32 h-32">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full shadow-lg group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};