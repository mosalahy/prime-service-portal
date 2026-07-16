import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ShoppingBag, Heart, UserPlus } from 'lucide-react';

const ACTIVITIES = [
  { id: 1, text: "Someone just booked 'Logo Design' service!", icon: Zap, color: "text-amber-500" },
  { id: 2, text: "New request posted: 'Help with SEO needed'", icon: ShoppingBag, color: "text-blue-500" },
  { id: 3, text: "Ali liked 'Web Development' service", icon: Heart, color: "text-rose-500" },
  { id: 4, text: "3 new members joined in the last hour!", icon: UserPlus, color: "text-green-500" },
];

export const LiveActivity: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ACTIVITIES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const activity = ACTIVITIES[index];

  return (
    <div className="w-full bg-primary/5 border-y border-primary/10 py-2.5 overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-3"
          >
            <div className={`p-1.5 rounded-full bg-background shadow-sm`}>
              <activity.icon className={`h-3.5 w-3.5 ${activity.color}`} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-foreground/80">
              Live: {activity.text}
            </span>
            <div className="flex gap-1">
               <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
