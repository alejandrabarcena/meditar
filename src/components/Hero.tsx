import React from 'react';
import { Sparkles, Heart, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 -left-8 w-24 h-24 bg-teal-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-8 right-1/3 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Cultiva tu{' '}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                mente plena
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubre el poder del mindfulness, la meditación y el bienestar mental para transformar tu vida
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2 bg-white/50 px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4 text-green-500" />
              <span>Técnicas probadas</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/50 px-4 py-2 rounded-full">
              <Heart className="h-4 w-4 text-red-500" />
              <span>Bienestar integral</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/50 px-4 py-2 rounded-full">
              <Zap className="h-4 w-4 text-yellow-500" />
              <span>Resultados reales</span>
            </div>
          </div>

          <div className="pt-8">
            <button className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Comenzar mi práctica
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};