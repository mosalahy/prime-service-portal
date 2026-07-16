import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageSquare, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export interface Service {
  id: string;
  title: string;
  arabicTitle: string;
  description: string;
  arabicDescription: string;
  image: string;
  price: string;
  category: string;
  likes: number;
}

interface ServiceCardProps {
  service: Service;
  onLike: (id: string) => void;
  onInquire: (service: Service) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onLike, onInquire }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className="overflow-hidden border-border/50 bg-card/40 backdrop-blur-md hover:border-primary/50 transition-colors shadow-lg">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-md font-bold">
              {service.category}
            </Badge>
          </div>
        </div>
        <CardHeader className="p-4 space-y-1">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg leading-tight">{service.title}</h3>
            <span className="text-primary font-bold">{service.price}</span>
          </div>
          <p className="text-xs text-muted-foreground line-clamp-2">{service.description}</p>
          <div className="pt-2 text-right dir-rtl">
            <h3 className="font-bold text-md text-primary">{service.arabicTitle}</h3>
            <p className="text-[10px] text-muted-foreground line-clamp-1">{service.arabicDescription}</p>
          </div>
        </CardHeader>
        <CardFooter className="p-4 pt-0 flex justify-between gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex-1 gap-2 hover:bg-rose-500/10 hover:text-rose-500 transition-colors"
            onClick={() => onLike(service.id)}
          >
            <Heart className="h-4 w-4" />
            <span className="text-xs">{service.likes}</span>
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            className="flex-[2] gap-2 shadow-lg shadow-primary/20"
            onClick={() => onInquire(service)}
          >
            استفسر الآن
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
