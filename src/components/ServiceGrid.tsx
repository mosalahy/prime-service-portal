import React from 'react';
import { Service, ServiceCard } from './ServiceCard';
import { motion } from 'framer-motion';

interface ServiceGridProps {
  services: Service[];
  onLike: (id: string) => void;
  onInquire: (service: Service) => void;
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({ services, onLike, onInquire }) => {
  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Our Services</h2>
          <p className="text-muted-foreground">Professional solutions for your business growth.</p>
        </div>
        <div className="text-right">
          <h2 className="text-3xl font-bold tracking-tight text-primary">خدماتنا</h2>
          <p className="text-muted-foreground italic">حلول احترافية لنمو أعمالك</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ServiceCard 
              service={service} 
              onLike={onLike} 
              onInquire={onInquire} 
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
