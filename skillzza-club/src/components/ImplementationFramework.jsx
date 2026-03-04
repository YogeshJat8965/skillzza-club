import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, ArrowRight, Monitor, Users, BookText, ClipboardList, Heart } from 'lucide-react';
import { implementationFramework, images } from '../data/content';

const wheelItems = [
  { icon: Monitor, label: 'Hybrid Delivery', color: '#3B82F6' },
  { icon: Users, label: 'Facilitator Model', color: '#F59E0B' },
  { icon: BookText, label: 'Session Plans', color: '#10B981' },
  { icon: ClipboardList, label: 'Workbooks & Rubrics', color: '#F43F5E' },
  { icon: Heart, label: 'Parent Integration', color: '#8B5CF6' },
];

const ImplementationFramework = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section id="implementation" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-dark via-dark-light to-dark">
      {/* Background blobs */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-primary/10 blob animate-float" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-600/10 blob animate-float-slow" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(#976EDF 1px, transparent 1px), linear-gradient(90deg, #976EDF 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-16 items-center">
          {/* Left: Wheel Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex items-center justify-center mb-8 lg:mb-0"
          >
            {/* Central circle */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
              />
              
              {/* Inner ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-primary/10"
              />

              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass-dark rounded-2xl px-6 py-4 text-center">
                  <p className="text-primary-light font-bold text-base">Implementation</p>
                  <p className="text-white/60 text-sm">Framework</p>
                </div>
              </div>

              {/* Wheel nodes */}
              {wheelItems.map((item, i) => {
                const angle = (i * 360) / wheelItems.length - 90;
                const radian = (angle * Math.PI) / 180;
                const radius = 50; // match the dashed circle edge
                const x = 50 + radius * Math.cos(radian);
                const y = 50 + radius * Math.sin(radian);
                const Icon = item.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.15, type: 'spring' }}
                    className="absolute flex flex-col items-center"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                    }}
                  >
                    <div
                      className="group w-16 h-16 rounded-xl glass flex items-center justify-center shadow-lg cursor-pointer transition-shadow duration-300 -translate-x-1/2 -translate-y-1/2 border"
                      style={{ borderColor: item.color + '40' }}
                    >
                      <Icon size={24} style={{ color: item.color }} className="group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <p className="text-xs text-white/70 font-medium text-center max-w-20 leading-tight -translate-x-1/2 -mt-1">
                      {item.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 leading-tight">
              {implementationFramework.heading}
            </h2>
            <p className="text-xl font-semibold text-primary-light mb-8">
              {implementationFramework.subheading}
            </p>

            {/* Checklist */}
            <div className="space-y-4 mb-10">
              {implementationFramework.checklist.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle2
                    size={22}
                    className="text-green-400 flex-shrink-0 mt-0.5 transition-transform"
                  />
                  <span className="text-white/80 text-base leading-relaxed group-hover:text-white transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <button
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow btn-glow"
            >
              {implementationFramework.cta}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationFramework;
