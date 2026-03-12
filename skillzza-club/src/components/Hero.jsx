import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Sparkles, BrainCircuit, Bot, Lightbulb, Leaf, Landmark, Tv, Scale, Rocket } from 'lucide-react';
import { hero } from '../data/content';
import heroSectionImage from '../assets/herosectionImage.jpeg';

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  };

  const ICON_BORDER = '#6222C3';

  const domainIcons = [
    { icon: BrainCircuit, label: 'AI' },
    { icon: Bot, label: 'Robotics' },
    { icon: Lightbulb, label: 'Entrepreneurship' },
    { icon: Leaf, label: 'Sustainability' },
    { icon: Landmark, label: 'Finance' },
    { icon: Tv, label: 'Media' },
    { icon: Scale, label: 'Law' },
    { icon: Rocket, label: 'Space' },
  ];

  // Octagon angles: 8 icons evenly distributed starting from top
  const iconAngles = domainIcons.map((_, i) => (i * 360) / 8 - 90);

  return (
    <section className="relative overflow-hidden">
      {/* ─── Background ─── */}
      <div className="absolute inset-0" style={{
        background: '#966CDE',
      }} />
      {/* Grid lines overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      {/* Diagonal shimmer overlay */}
      <div className="hero-shimmer-overlay" />

      {/* ─── TWO-COLUMN LAYOUT ─── */}
      <div className="relative z-10 pt-28 sm:pt-24 lg:pt-28 xl:pt-32 pb-16 sm:pb-20 lg:pb-24 xl:pb-28 min-h-[110vh] sm:min-h-screen flex items-center" ref={ref}>
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">

            {/* ════ LEFT: Content ════ */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-center lg:text-left order-1"
            >
              {/* Badge */}
              <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-6 sm:mb-8">
                <div className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/[0.12] backdrop-blur-md border border-white/20 shadow-lg shadow-purple-900/10">
                  <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    <Sparkles size={20} className="text-yellow-300" />
                  </motion.div>
                  <span className="text-sm sm:text-base font-semibold text-white tracking-wider uppercase">K-12 Studio Programme</span>
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-black leading-[1.1] sm:leading-[1.08] tracking-tight text-white mb-5 sm:mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)]"
              >
                The Future-Ready Studio Ecosystem{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-300 bg-clip-text text-transparent drop-shadow-none">
                    for Progressive Schools
                  </span>
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl lg:text-[1.35rem] text-white font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-4 sm:mb-5">
                {hero.subheading}
              </motion.p>

              {/* Description */}
              <motion.p variants={itemVariants} className="text-sm sm:text-[15px] md:text-base lg:text-[17px] text-white max-w-2xl mx-auto lg:mx-0 leading-[1.7] sm:leading-[1.8] mb-8 sm:mb-12">
                {hero.description}
              </motion.p>

              {/* CTAs */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-5">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-dark font-bold text-sm sm:text-[15px] shadow-2xl shadow-black/20 btn-shimmer w-full sm:w-auto"
                >
                  {hero.cta1}
                  <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('studios')}
                  whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white/30 text-white font-semibold text-sm sm:text-[15px] hover:border-white/50 transition-all duration-300 backdrop-blur-md w-full sm:w-auto"
                >
                  {hero.cta2}
                </motion.button>
              </motion.div>
            </motion.div>

            {/* ════ RIGHT: Animated Circle with Domain Icons ════ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="relative flex items-center justify-center order-2 mb-26 lg:mb-0"
            >
              <div className="relative w-full max-w-[720px] md:max-w-[450px] lg:max-w-[720px] mx-auto overflow-visible scale-[0.7] sm:scale-[0.75] md:scale-[0.85] lg:scale-100 origin-center" style={{ aspectRatio: '1 / 1' }}>

                {/* ── Circles (centered) ── */}
                <div className="absolute" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                  <div className="relative w-[380px] h-[380px] sm:w-[420px] sm:h-[420px] md:w-[540px] md:h-[540px] lg:w-[640px] lg:h-[640px]">
                    {/* Outer glow ring */}
                    <motion.div
                      animate={{ opacity: [0.1, 0.25, 0.1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute -inset-4 rounded-full bg-white/5 blur-lg"
                    />
                    {/* Ring 1 — Outermost, clockwise, dashed */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 rounded-full border-[2px] border-dashed border-white/50"
                    >
                      <motion.div 
                        animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]" 
                        style={{ left: '50%', top: '0%', transform: 'translate(-50%, -50%)' }} 
                      />
                    </motion.div>
                    {/* Ring 2 — anti-clockwise */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-4 sm:inset-5 md:inset-6 lg:inset-8 rounded-full border-[2px] border-dashed border-white/50"
                    >
                      <motion.div 
                        animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2.3, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                        className="absolute w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.9)]" 
                        style={{ left: '100%', top: '50%', transform: 'translate(-50%, -50%)' }} 
                      />
                    </motion.div>
                    {/* Ring 3 — clockwise */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-8 sm:inset-10 md:inset-12 lg:inset-16 rounded-full border-[2px] border-dashed border-white/50"
                    >
                      <motion.div 
                        animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                        className="absolute w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" 
                        style={{ left: '50%', top: '100%', transform: 'translate(-50%, -50%)' }} 
                      />
                    </motion.div>
                    {/* Ring 4 — anti-clockwise */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-12 sm:inset-15 md:inset-18 lg:inset-24 rounded-full border-[2px] border-dashed border-white/50"
                    >
                      <motion.div 
                        animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2.9, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
                        className="absolute w-2.5 h-2.5 rounded-full bg-pink-400 shadow-[0_0_12px_rgba(244,114,182,0.9)]" 
                        style={{ left: '0%', top: '50%', transform: 'translate(-50%, -50%)' }} 
                      />
                    </motion.div>
                    {/* Inner glow */}
                    <motion.div
                      animate={{ scale: [1, 1.06, 1], opacity: [0.04, 0.1, 0.04] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute inset-16 sm:inset-20 md:inset-24 lg:inset-32 rounded-full bg-white/10 blur-xl"
                    />
                    {/* Center Image */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <motion.div
                        animate={{ scale: [1, 1.03, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="relative rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)]"
                      >
                        <img 
                          src={heroSectionImage} 
                          alt="Skillzza Studio Ecosystem" 
                          className="w-32 h-32 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-62 lg:h-62 object-cover"
                        />
                      </motion.div>
                    </div>
                    {/* Pulsing sparkle dots on rings */}
                    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, idx) => {
                      const r = (deg * Math.PI) / 180;
                      const radius = idx % 3 === 0 ? 50 : idx % 3 === 1 ? 40 : 30;
                      const colors = ['#FFFFFF', '#FCD34D', '#60A5FA', '#F472B6'];
                      const color = colors[idx % colors.length];
                      return (
                        <motion.div
                          key={idx}
                          animate={{ 
                            opacity: [0.2, 1, 0.2], 
                            scale: [0.5, 1.5, 0.5],
                            rotate: [0, 180, 360]
                          }}
                          transition={{ 
                            duration: 3 + (idx * 0.2), 
                            repeat: Infinity, 
                            delay: idx * 0.2,
                            ease: 'easeInOut'
                          }}
                          className="absolute rounded-full"
                          style={{
                            left: `${50 + radius * Math.cos(r)}%`,
                            top: `${50 + radius * Math.sin(r)}%`,
                            transform: 'translate(-50%, -50%)',
                            width: idx % 2 === 0 ? '8px' : '6px',
                            height: idx % 2 === 0 ? '8px' : '6px',
                            background: color,
                            boxShadow: `0 0 20px ${color}, 0 0 40px ${color}80`,
                            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                          }}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* ── 8 Animated Domain Icons (octagon layout) ── */}
                {domainIcons.map((item, idx) => {
                  const Icon = item.icon;
                  const angleDeg = iconAngles[idx];
                  const rad = (angleDeg * Math.PI) / 180;
                  const orbitPct = 44; // % from center — aligns with outermost ring
                  const cx = 50 + orbitPct * Math.cos(rad) - 6; // Shifted left by 2%
                  const cy = 50 + orbitPct * Math.sin(rad) - 6; // Shifted up by 2%

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + idx * 0.1, type: 'spring', stiffness: 200 }}
                      className="absolute z-30"
                      style={{
                        left: `${cx}%`,
                        top: `${cy}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 2.5 + idx * 0.3, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.2 }}
                        className="flex flex-col items-center gap-2 group cursor-pointer"
                      >
                        {/* Icon circle with glow */}
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                          className="relative"
                        >
                          {/* Pulsing glow background */}
                          <motion.div
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              ease: 'easeInOut',
                              delay: idx * 0.25
                            }}
                            className="absolute inset-0 rounded-full blur-xl"
                            style={{
                              background: `radial-gradient(circle, ${ICON_BORDER}80, transparent)`,
                            }}
                          />
                          
                          {/* Main icon circle */}
                          <motion.div
                            animate={{ 
                              boxShadow: [
                                '0 0 20px rgba(98, 34, 195, 0.4), 0 0 40px rgba(98, 34, 195, 0.2)',
                                '0 0 30px rgba(98, 34, 195, 0.6), 0 0 60px rgba(98, 34, 195, 0.3)',
                                '0 0 20px rgba(98, 34, 195, 0.4), 0 0 40px rgba(98, 34, 195, 0.2)',
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.25 }}
                            className="relative w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] md:w-20 md:h-20 lg:w-[5.5rem] lg:h-[5.5rem] rounded-full flex items-center justify-center backdrop-blur-sm"
                            style={{
                              background: 'linear-gradient(135deg, #ffffff 0%, #f5f3ff 100%)',
                              border: `3px solid ${ICON_BORDER}`,
                            }}
                          >
                            {/* Rotating border effect */}
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                              className="absolute inset-0 rounded-full"
                              style={{
                                background: `conic-gradient(from 0deg, transparent 0deg, ${ICON_BORDER}40 90deg, transparent 180deg)`,
                              }}
                            />
                            
                            {/* Icon with pulse animation */}
                            <motion.div
                              animate={{ 
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0]
                              }}
                              transition={{ 
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: idx * 0.2
                              }}
                            >
                              <Icon
                                className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-11 lg:h-11"
                                style={{ color: ICON_BORDER }}
                                strokeWidth={2}
                              />
                            </motion.div>
                          </motion.div>
                        </motion.div>
                        
                        {/* Label with glow */}
                        <motion.span 
                          className="text-white text-[10px] sm:text-[11px] md:text-xs lg:text-sm font-bold tracking-wide whitespace-nowrap"
                          style={{
                            textShadow: '0 2px 8px rgba(0,0,0,0.4), 0 0 20px rgba(255,255,255,0.3)'
                          }}
                        >
                          {item.label}
                        </motion.span>
                      </motion.div>
                    </motion.div>
                  );
                })}

              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
