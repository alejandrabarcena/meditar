import React from 'react';
import { Brain, Heart, Mail, Phone } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">{siteConfig.name}</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Heart className="h-4 w-4 text-red-400" />
                <span className="text-sm">Hecho con amor en España</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {['Inicio', 'Artículos', 'Categorías', 'Acerca de'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span className="text-sm">{siteConfig.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span className="text-sm">{siteConfig.phone}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 {siteConfig.name}. Todos los derechos reservados. Diseñado con mindfulness.
          </p>
        </div>
      </div>
    </footer>
  );
};