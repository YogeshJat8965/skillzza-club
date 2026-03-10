import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Laptop, UsersRound, BookOpen, ClipboardCheck, Handshake } from 'lucide-react';
import { implementationFramework } from '../data/content';
import studioRolloutImage from '../assets/studio rollout.jpg';

const ICON_COLOR = '#7C3AED';

const wheelItems = [
  {
    icon: Laptop,
    label: 'Hybrid Delivery',
    desc: 'Hybrid-ready delivery (in-person / virtual / blended) that adapts to every school\'s infrastructure and scheduling needs.',
  },
  {
    icon: UsersRound,
    label: 'Facilitator Model',
    desc: 'Studio Facilitator + School Champion model ensuring expert-led sessions with on-ground school coordination.',
  },
  {
    icon: BookOpen,
    label: 'Session Plans',
    desc: 'Ready-to-run session plans & facilitator guides with structured weekly curriculum for seamless delivery.',
  },
  {
    icon: ClipboardCheck,
    label: 'Workbooks & Rubrics',
    desc: 'Student workbooks & assessment rubrics with clear skill-tracking matrices and evaluation frameworks.',
  },
  {
    icon: Handshake,
    label: 'Parent Integration',
    desc: 'Parent integration & showcase participation with structured mid-year and annual exhibitions.',
  },
];

const ImplementationFramework = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % wheelItems.length);
    }, 2500);
  }, []);

  useEffect(() => {
    if (!inView) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [inView, startTimer]);

  const handleCircleClick = (index) => {
    setActiveIndex(index);
    startTimer();
  };

  const activeItem = wheelItems[activeIndex];
  const ActiveIcon = activeItem.icon;

  return (
    <section id="implementation" className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-[#E8E4FC] via-[#D8D4FD] to-[#E0DCFC]">
      {/* Enhanced Background decoration */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-purple-400/12 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-300/5 rounded-full blur-2xl" />
      {/* Refined grid pattern */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: 'linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Wheel Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex items-center justify-center mb-8 lg:mb-0"
          >
            {/* Central circle */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
              {/* Outer glow */}
              <motion.div
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-6 rounded-full bg-gradient-to-r from-primary/20 to-purple-400/20 blur-2xl"
              />
              
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-[2.5px] border-dashed border-primary/30"
              >
                <div className="absolute w-2.5 h-2.5 rounded-full bg-primary/60 shadow-lg shadow-primary/40" style={{ left: '50%', top: '-4px', transform: 'translateX(-50%)' }} />
              </motion.div>

              {/* Inner ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border-2 border-primary/20"
              >
                <div className="absolute w-2 h-2 rounded-full bg-purple-400/60 shadow-lg shadow-purple-400/40" style={{ left: '100%', top: '50%', transform: 'translate(-50%, -50%)' }} />
              </motion.div>

              {/* Center circle with image */}
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <motion.div 
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-2xl border-[4px] border-white"
                  style={{ boxShadow: '0 10px 40px rgba(124,58,237,0.25), 0 0 60px rgba(124,58,237,0.15)' }}
                >
                  <img 
                    src={studioRolloutImage} 
                    alt="Studio Rollout" 
                    className="w-full h-full object-cover  lg:scale-101 lg:bg-gray-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                </motion.div>
              </div>

              {/* Wheel nodes */}
              {wheelItems.map((item, i) => {
                const angle = (i * 360) / wheelItems.length - 90;
                const radian = (angle * Math.PI) / 180;
                const radius = 50;
                const x = 51 + radius * Math.cos(radian);
                const y = 51 + radius * Math.sin(radian);
                const Icon = item.icon;
                const isActive = i === activeIndex;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{
                      opacity: { duration: 0.5, delay: 0.4 + i * 0.12 },
                      scale: { type: 'spring', stiffness: 200, delay: 0.4 + i * 0.12 }
                    }}
                    className="absolute"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      zIndex: isActive ? 30 : 1,
                    }}
                  >
                    <button
                      onClick={() => handleCircleClick(i)}
                      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center cursor-pointer -translate-x-1/2 -translate-y-1/2 border-[3px] outline-none backdrop-blur-sm transition-all duration-300 hover:brightness-105"
                      style={{
                        backgroundColor: isActive ? ICON_COLOR : '#ffffff',
                        borderColor: '#6222C3',
                        boxShadow: isActive 
                          ? `0 8px 24px ${ICON_COLOR}40, 0 0 40px ${ICON_COLOR}15` 
                          : '0 4px 16px rgba(124,58,237,0.08), 0 2px 8px rgba(0,0,0,0.04)',
                      }}
                    >
                      <motion.div
                        animate={isActive ? { rotate: [0, 3, -3, 0] } : {}}
                        transition={{ duration: 1, repeat: isActive ? Infinity : 0, repeatDelay: 0.5 }}
                      >
                        <Icon
                          style={{
                            color: isActive ? '#ffffff' : ICON_COLOR,
                            width: isActive ? 50 : 36,
                            height: isActive ? 50 : 36,
                            filter: isActive ? 'drop-shadow(0 2px 6px rgba(0,0,0,0.15))' : 'none',
                            transition: 'all 0.7s ease-in-out',
                          }}
                          strokeWidth={2}
                        />
                      </motion.div>
                    </button>
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
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mb-4 leading-tight"
            >
              {implementationFramework.heading}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-10"
            >
              {implementationFramework.subheading}
            </motion.p>

            {/* Dynamic description card */}
            <div className="relative min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 30, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -30, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="bg-white/95 backdrop-blur-sm rounded-3xl p-7 shadow-2xl border border-primary/10"
                  style={{ 
                    boxShadow: '0 20px 60px rgba(124,58,237,0.12), 0 8px 24px rgba(0,0,0,0.06)',
                  }}
                >
                  {/* Card header with icon and label */}
                  <div className="flex items-center gap-4 mb-5">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      style={{ 
                        backgroundColor: ICON_COLOR + '18',
                        boxShadow: `0 4px 16px ${ICON_COLOR}20`
                      }}
                    >
                      <ActiveIcon size={28} style={{ color: ICON_COLOR }} strokeWidth={2.2} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-dark">{activeItem.label}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-base leading-relaxed pl-[72px]">
                    {activeItem.desc}
                  </p>
                  
                  {/* Decorative gradient bar */}
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="h-1 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-full mt-5"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationFramework;
