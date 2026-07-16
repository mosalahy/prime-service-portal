import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Post, PostCard } from './PostCard';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ScrollArea } from './ui/scroll-area';
import { toast } from 'sonner';

interface WallProps {
  posts: Post[];
  currentUser: { name: string; avatar: string };
  onAddPost: (content: string) => void;
  onLikePost: (id: string) => void;
}

export const Wall: React.FC<WallProps> = ({ posts, currentUser, onAddPost, onLikePost }) => {
  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto pb-20">
      {/* Posts Feed */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold flex items-center gap-2">
            Community Wall
            <Badge variant="outline" className="text-[10px] font-medium bg-primary/5">{posts.length}</Badge>
          </h2>
          <div className="flex gap-2">
             <span className="text-xs text-muted-foreground animate-pulse flex items-center gap-1.5">
               <span className="h-2 w-2 rounded-full bg-green-500"></span>
               Live Activity
             </span>
          </div>
        </div>
        
        <AnimatePresence mode="popLayout">
          {posts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center space-y-4 bg-muted/20 rounded-2xl border border-dashed border-border"
            >
              <div className="bg-background w-12 h-12 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <Sparkles className="text-primary h-6 w-6" />
              </div>
              <div className="space-y-1">
                <p className="font-medium text-muted-foreground">The wall is empty</p>
                <p className="text-xs text-muted-foreground/60">Be the first to say something!</p>
              </div>
            </motion.div>
          ) : (
            posts.map((post) => (
              <PostCard key={post.id} post={post} onLike={onLikePost} />
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
