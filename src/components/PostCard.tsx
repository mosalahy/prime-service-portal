import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export interface Post {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  hasLiked: boolean;
}

interface PostCardProps {
  post: Post;
  onLike: (id: string) => void;
}

export const PostCard: React.FC<PostCardProps> = ({ post, onLike }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors shadow-sm">
        <CardHeader className="flex flex-row items-center space-x-4 space-y-0 p-4">
          <Avatar className="h-10 w-10 border-2 border-primary/10">
            <AvatarImage src={post.avatar} alt={post.author} />
            <AvatarFallback>{post.author.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col flex-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm">{post.author}</span>
              <Badge variant="secondary" className="text-[10px] h-4 px-1.5 font-normal">Active</Badge>
            </div>
            <span className="text-xs text-muted-foreground">{post.timestamp}</span>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{post.content}</p>
        </CardContent>
        <CardFooter className="p-2 px-4 border-t border-border/50 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              className={`gap-1.5 h-8 px-2 transition-all ${post.hasLiked ? 'text-rose-500 hover:text-rose-600 bg-rose-500/10' : 'text-muted-foreground hover:text-primary'}`}
              onClick={() => onLike(post.id)}
            >
              <motion.div
                whileTap={{ scale: 1.4 }}
                animate={post.hasLiked ? { scale: [1, 1.2, 1] } : {}}
              >
                <Heart className={`h-4 w-4 ${post.hasLiked ? 'fill-current' : ''}`} />
              </motion.div>
              <span className="text-xs font-medium">{post.likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-1.5 h-8 px-2 text-muted-foreground hover:text-primary">
              <MessageCircle className="h-4 w-4" />
              <span className="text-xs font-medium">Reply</span>
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground hover:text-primary">
            <Share2 className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
