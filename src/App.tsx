import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ServiceGrid } from './components/ServiceGrid';
import { InteractionWall } from './components/InteractionWall';
import { LiveActivity } from './components/LiveActivity';
import { Service } from './components/ServiceCard';
import { Toaster, toast } from 'sonner';
import { 
  Zap, 
  Search, 
  Menu, 
  Globe, 
  ArrowRight, 
  Users, 
  Star, 
  ShieldCheck,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';

const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Graphic Design',
    arabicTitle: 'تصميم جرافيك',
    description: 'High-end visual identities and marketing materials.',
    arabicDescription: 'هويات بصرية عالية الجودة ومواد تسويقية احترافية.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7917c428-1c10-42b2-87b3-233769d1bc13/graphic-design-service-75495b53-1782938372311.webp',
    price: '$99+',
    category: 'Creative',
    likes: 124
  },
  {
    id: '2',
    title: 'Web Development',
    arabicTitle: 'تطوير مواقع',
    description: 'Modern, responsive websites built with React and Vite.',
    arabicDescription: 'مواقع حديثة وسريعة الاستجابة باستخدام أحدث التقنيات.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7917c428-1c10-42b2-87b3-233769d1bc13/web-dev-service-66e39401-1782938371132.webp',
    price: '$249+',
    category: 'Tech',
    likes: 89
  },
  {
    id: '3',
    title: 'Digital Marketing',
    arabicTitle: 'تسويق رقمي',
    description: 'Boost your online presence and sales conversion.',
    arabicDescription: 'عزز تواجدك على الإنترنت وزد من مبيعاتك.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7917c428-1c10-42b2-87b3-233769d1bc13/marketing-service-1e7eada9-1782938371833.webp',
    price: '$149+',
    category: 'Marketing',
    likes: 215
  },
  {
    id: '4',
    title: 'Customer Support',
    arabicTitle: 'دعم العملاء',
    description: '24/7 professional support for your clients.',
    arabicDescription: 'دعم احترافي على مدار الساعة لعملائك.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7917c428-1c10-42b2-87b3-233769d1bc13/support-service-e19d2dee-1782938370688.webp',
    price: '$49/hr',
    category: 'Operations',
    likes: 56
  }
];

function App() {
  const [services, setServices] = useState(SERVICES);

  const handleLike = (id: string) => {
    setServices(prev => prev.map(s => s.id === id ? { ...s, likes: s.likes + 1 } : s));
    toast.success('Thanks for the support!');
  };

  const handleInquire = (service: Service) => {
    toast.info(`Inquiring about ${service.title}. We will contact you soon!`);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary/30">
      <LiveActivity />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-xl shadow-lg shadow-primary/20">
              <Zap className="h-6 w-6 text-black fill-current" />
            </div>
            <span className="font-black text-2xl tracking-tighter uppercase italic">
              Servicly
            </span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-10 text-sm font-bold uppercase tracking-widest text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#" className="hover:text-primary transition-colors">Services</a>
            <a href="#" className="hover:text-primary transition-colors">Community</a>
            <a href="#" className="hover:text-primary transition-colors">About</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex rounded-full">
              <Globe className="h-5 w-5" />
            </Button>
            <Button className="rounded-full px-6 font-bold uppercase tracking-tighter italic">
              Join Now
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full pointer-events-none opacity-20">
             <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary blur-[120px] rounded-full" />
             <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600 blur-[120px] rounded-full" />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <Badge className="bg-primary text-black font-black italic">New</Badge>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Community Driven Marketplace
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic mb-8"
            >
              Interactive <span className="text-primary drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]">Services</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-tight"
            >
              The first community-powered service platform. Explore, interact, and grow with professional services tailored for you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="h-16 px-10 rounded-2xl text-lg font-black uppercase italic shadow-2xl shadow-primary/30 group">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 rounded-2xl text-lg font-black uppercase italic border-white/10 hover:bg-white/5">
                Join Community
              </Button>
            </motion.div>

            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1 }}
               className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-24 pt-12 border-t border-white/5"
            >
              {[
                { label: 'Active Users', value: '50k+', icon: Users },
                { label: 'Service Score', value: '4.9/5', icon: Star },
                { label: 'Secure Payments', value: '100%', icon: ShieldCheck },
                { label: 'Global Experts', value: '120+', icon: Globe },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center justify-center gap-2 text-primary mb-1">
                    <stat.icon className="h-4 w-4" />
                    <span className="text-2xl font-black italic">{stat.value}</span>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <div className="container mx-auto px-4">
          <ServiceGrid 
            services={services} 
            onLike={handleLike} 
            onInquire={handleInquire} 
          />
          
          {/* Interaction Wall */}
          <InteractionWall />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-white/5 pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary fill-current" />
                <span className="font-black text-2xl tracking-tighter uppercase italic">Servicly</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Empowering individuals and businesses with professional, community-vetted services.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="p-2 rounded-lg bg-white/5 hover:bg-primary hover:text-black transition-all">
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-widest mb-6">Explore</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Design</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Development</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Marketing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Business</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">News</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest mb-6">Newsletter</h4>
              <p className="text-sm text-muted-foreground mb-4">Get the latest updates directly to your inbox.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-primary/50"
                />
                <Button size="icon" className="rounded-xl"><ArrowRight className="h-4 w-4" /></Button>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            <p>© 2025 Servicly. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>

      <Toaster position="bottom-right" theme="dark" closeButton />
    </div>
  );
}

export default App;
