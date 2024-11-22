import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  image: string;
}

export default function ServiceCard({ title, description, Icon, image }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-lg flex items-center justify-center">
              <Icon className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}