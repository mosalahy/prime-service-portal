import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles, User, Image as ImageIcon, Smile, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { toast } from 'sonner';

interface PostFormProps {
  currentUser: { name: string; avatar: string };
  onAddPost: (content: string) => void;
}

export const PostForm: React.FC<PostFormProps> = ({ currentUser, onAddPost }) => {
  const [newPost, setNewPost] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;
    
    onAddPost(newPost);
    setNewPost('');
    toast.success('Your message has been shared!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-xl mb-8"
    >
      <div className="flex gap-4">
        <Avatar className="h-10 w-10 border-2 border-primary/20">
          <AvatarImage src={currentUser.avatar} />
          <AvatarFallback><User className="h-5 w-5" /></AvatarFallback>
        </Avatar>
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
          <Textarea
            placeholder="What's on your mind? Share with the community..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="min-h-[120px] bg-background/50 border-border/50 focus-visible:ring-primary/30 resize-none transition-all rounded-xl p-4 text-sm"
          />
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex gap-1">
              <Button type="button" variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full">
                <ImageIcon className="h-4 w-4" />
              </Button>
              <Button type="button" variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full">
                <Smile className="h-4 w-4" />
              </Button>
              <Button type="button" variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full">
                <MapPin className="h-4 w-4" />
              </Button>
              <div className="w-px h-6 bg-border/50 mx-1 self-center" />
              <Button type="button" variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full px-3">
                <Sparkles className="h-3.5 w-3.5 mr-2" />
                <span className="text-[10px] font-bold uppercase tracking-tight">AI Help</span>
              </Button>
            </div>
            <Button 
              type="submit" 
              disabled={!newPost.trim()}
              className="rounded-full px-8 bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 font-bold"
            >
              <Send className="h-4 w-4 mr-2" />
              Share Now
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};
