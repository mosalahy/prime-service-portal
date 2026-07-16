import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Heart, MessageSquare, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface UserStatsProps {
  totalPosts: number;
  totalLikes: number;
}

export const UserStats: React.FC<UserStatsProps> = ({ totalPosts, totalLikes }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {[
        { label: 'Total Posts', value: totalPosts, icon: MessageSquare, color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { label: 'Interactions', value: totalLikes, icon: Heart, color: 'text-rose-500', bg: 'bg-rose-500/10' },
        { label: 'Active Now', value: '1,204', icon: Activity, color: 'text-green-500', bg: 'bg-green-500/10' },
        { label: 'Trending', value: '#Web3', icon: TrendingUp, color: 'text-amber-500', bg: 'bg-amber-500/10' },
      ].map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Card className="bg-card/40 backdrop-blur-md border-border/50 overflow-hidden relative group">
            <div className={`absolute top-0 left-0 w-1 h-full ${stat.bg.replace('/10', '')}`} />
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-lg ${stat.bg}`}>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
                <span className="text-2xl font-bold">{stat.value}</span>
              </div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground mt-2">{stat.label}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
