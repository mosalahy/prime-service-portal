import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, MessageCircle, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { toast } from 'sonner';

interface Request {
  id: string;
  user: string;
  avatar: string;
  content: string;
  timestamp: string;
}

export const InteractionWall: React.FC = () => {
  const [requests, setRequests] = useState<Request[]>(() => {
    const saved = localStorage.getItem('service_requests');
    return saved ? JSON.parse(saved) : [
      { id: '1', user: 'سارة أحمد', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', content: 'أبحث عن مصمم شعارات محترف لمشروعي الجديد.', timestamp: 'منذ ٥ دقائق' },
      { id: '2', user: 'John Doe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John', content: 'Need help with React integration. Any experts here?', timestamp: '10m ago' }
    ];
  });
  const [newRequest, setNewRequest] = useState('');

  useEffect(() => {
    localStorage.setItem('service_requests', JSON.stringify(requests));
  }, [requests]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRequest.trim()) return;

    const request: Request = {
      id: Date.now().toString(),
      user: 'Guest User',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Guest',
      content: newRequest,
      timestamp: 'Just now'
    };

    setRequests([request, ...requests]);
    setNewRequest('');
    toast.success('تمت إضافة طلبك بنجاح! / Request added successfully!');
  };

  return (
    <section className="py-12 border-t border-border/50 mt-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Community Wall</Badge>
          <h2 className="text-4xl font-bold mb-4">Service Requests & Feedback</h2>
          <p className="text-muted-foreground">What does the community need today? Join the conversation.</p>
        </div>

        <div className="bg-card/30 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="mb-12">
            <div className="flex gap-4">
              <Avatar className="h-12 w-12 border-2 border-primary/20">
                <AvatarFallback><User /></AvatarFallback>
              </Avatar>
              <div className="flex-1 flex flex-col gap-3">
                <Textarea 
                  placeholder="Tell us what service you need or share your experience..."
                  value={newRequest}
                  onChange={(e) => setNewRequest(e.target.value)}
                  className="min-h-[120px] bg-background/50 border-border/50 focus:ring-primary/30 rounded-2xl resize-none"
                />
                <div className="flex justify-end">
                  <Button type="submit" className="rounded-full px-8 shadow-lg shadow-primary/20">
                    <Send className="h-4 w-4 mr-2" />
                    Post Request
                  </Button>
                </div>
              </div>
            </div>
          </form>

          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {requests.map((req) => (
                <motion.div
                  key={req.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-colors"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={req.avatar} />
                    <AvatarFallback>{req.user[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm">{req.user}</span>
                      <span className="text-[10px] text-muted-foreground">{req.timestamp}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{req.content}</p>
                    <div className="mt-3 flex gap-4">
                       <button className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-muted-foreground hover:text-primary transition-colors">
                         <MessageCircle className="h-3 w-3" />
                         Reply
                       </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
