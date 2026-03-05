import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Monitor, Users, BookText, ClipboardList, Heart } from 'lucide-react';
import { implementationFramework } from '../data/content';

const ICON_COLOR = '#7C3AED';

const wheelItems = [
  {
    icon: Monitor,
    label: 'Hybrid Delivery',
    desc: 'Hybrid-ready delivery (in-person / virtual / blended) that adapts to every school\'s infrastructure and scheduling needs.',
  },
  {
    icon: Users,
    label: 'Facilitator Model',
    desc: 'Studio Facilitator + School Champion model ensuring expert-led sessions with on-ground school coordination.',
  },
  {
    icon: BookText,
    label: 'Session Plans',
    desc: 'Ready-to-run session plans & facilitator guides with structured weekly curriculum for seamless delivery.',
  },
  {
    icon: ClipboardList,
    label: 'Workbooks & Rubrics',
    desc: 'Student workbooks & assessment rubrics with clear skill-tracking matrices and evaluation frameworks.',
  },
  {
    icon: Heart,
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
    <section id="implementation" className="relative py-24 lg:py-32 overflow-hidden bg-[#D8D4FD]">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 blob animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300/10 blob animate-float" />
      {/* Grid pattern matching Hero section */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(124,58,237,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.08) 1px, transparent 1px)',
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
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/25"
              />

              {/* Inner ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-primary/15"
              />

              {/* Center circle label — cycles through active item */}
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full bg-white flex items-center justify-center shadow-lg shadow-primary/10 border-[3px] border-primary/20">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="text-center px-2"
                    >
                      <p className="font-bold text-xs sm:text-sm lg:text-base text-primary leading-tight">
                        {activeItem.label}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
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
                      opacity: { duration: 0.5, delay: 0.4 + i * 0.15 },
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
                      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center cursor-pointer -translate-x-1/2 -translate-y-1/2 border-[3px] transition-all duration-700 ease-in-out outline-none"
                      style={{
                        backgroundColor: isActive ? ICON_COLOR : '#ffffff',
                        borderColor: ICON_COLOR,
                        boxShadow: isActive ? `0 8px 24px ${ICON_COLOR}40` : '0 4px 12px rgba(0,0,0,0.06)',
                      }}
                    >
                      <Icon
                        className="transition-all duration-700 ease-in-out"
                        style={{
                          color: isActive ? '#ffffff' : ICON_COLOR,
                          width: isActive ? 40 : 26,
                          height: isActive ? 40 : 26,
                        }}
                        strokeWidth={1.8}
                      />
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mb-3 leading-tight">
              {implementationFramework.heading}
            </h2>
            <p className="text-xl font-semibold text-primary mb-8">
              {implementationFramework.subheading}
            </p>

            {/* Dynamic description card */}
            <div className="relative mb-10 min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="bg-white rounded-2xl p-6 shadow-xl shadow-primary/8 border-l-4"
                  style={{ borderLeftColor: ICON_COLOR }}
                >
                  {/* Card header with icon and label */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: ICON_COLOR + '15' }}
                    >
                      <ActiveIcon size={24} style={{ color: ICON_COLOR }} />
                    </div>
                    <h3 className="text-lg font-bold text-dark">{activeItem.label}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed">
                    {activeItem.desc}
                  </p>

                  {/* Progress dots */}
                  <div className="flex items-center gap-2 mt-5">
                    {wheelItems.map((_, i) => (
                      <div
                        key={i}
                        className="h-1.5 rounded-full transition-all duration-300"
                        style={{
                          width: i === activeIndex ? '24px' : '8px',
                          backgroundColor: i === activeIndex ? ICON_COLOR : 'rgba(124,58,237,0.15)',
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
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
