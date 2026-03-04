import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Sparkles, GraduationCap, Rocket, ChartNoAxesCombined, BriefcaseBusiness, Palette } from 'lucide-react';
import { hero } from '../data/content';

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  };

  const labelData = [
    { icon: GraduationCap, text: 'Structured Weekly\nStudio Curriculum', color: 'bg-violet-500/15 text-violet-300' },
    { icon: Rocket, text: 'Real-World Projects\n& Applied Learning', color: 'bg-amber-500/15 text-amber-300' },
    { icon: ChartNoAxesCombined, text: 'Measurable Skill\nAssessment Framework', color: 'bg-emerald-500/15 text-emerald-300' },
    { icon: BriefcaseBusiness, text: 'Digital Student\nPortfolio Creation', color: 'bg-sky-500/15 text-sky-300' },
    { icon: Palette, text: 'Career Pathway\nAlignment', color: 'bg-rose-500/15 text-rose-300' },
  ];

  // Pentagon positions for floating cards around the circle
  // Circle is responsive: sm=300px, md=400px, lg=580px
  // Using average for better alignment across breakpoints
  const circleRadius = 290;
  const cardOrbit = 245; // Positioned to align properly with circle rings
  
  // Pentagon angles: evenly distributed starting from top
  const pentagonAngles = [-90, -18, 54, 126, 198]; // Standard pentagon distribution
  
  const cardPositions = pentagonAngles.map((deg) => {
    const rad = (deg * Math.PI) / 180;
    const x = Math.round(cardOrbit * Math.cos(rad));
    const y = Math.round(cardOrbit * Math.sin(rad));
    // Offset cards: -15px left, -15px upward
    return {
      left: `calc(50% + ${x - 55}px)`,
      top: `calc(50% + ${y - 45}px)`,
      transform: 'translate(-50%, -50%)',
    };
  });

  // Line endpoints from center toward each card
  const lineEndpoints = pentagonAngles.map((deg) => {
    const rad = (deg * Math.PI) / 180;
    const lineRadius = 230; // Line extends to ~80% of circle radius
    const x = 54 + (lineRadius / 360) * 100 * Math.cos(rad);
    const y = 53 + (lineRadius / 360) * 100 * Math.sin(rad);
    return { x2: x, y2: y };
  });

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
      <div className="relative z-10 pt-24 sm:pt-32 lg:pt-44 xl:pt-48 pb-24 sm:pb-32 lg:pb-44 xl:pb-48 min-h-screen flex items-center" ref={ref}>
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
                  whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white/30 text-white font-semibold text-sm sm:text-[15px] hover:border-white/50 transition-all duration-300 backdrop-blur-md w-full sm:w-auto"
                >
                  {hero.cta2}
                </motion.button>
              </motion.div>
            </motion.div>

            {/* ════ RIGHT: Animated Circle with 5 Cards ════ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="relative flex items-center justify-center order-2 mb-8 lg:mb-0"
            >
              {/* Container for circle + cards — scaled down on mobile so cards fit */}
              {/* MOBILE SCALE: Increase scale-[0.7] for bigger mobile view */}
              <div className="relative w-full max-w-[720px] md:max-w-[450px] lg:max-w-[720px] mx-auto overflow-visible scale-[0.7] sm:scale-[0.75] md:scale-[0.85] lg:scale-100 origin-center" style={{ aspectRatio: '1 / 1' }}>

                {/* ── SVG connecting lines from center to cards ── */}
                <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
                  {lineEndpoints.map((pt, idx) => (
                    <motion.line
                      key={idx}
                      x1="50%" y1="50%"
                      x2={`${pt.x2}%`} y2={`${pt.y2}%`}
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                    />
                  ))}
                </svg>

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
                      {/* Rotating marker on Ring 1 */}
                      <div className="absolute w-2 h-2 rounded-full bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.6)]" style={{ left: '50%', top: '0%', transform: 'translate(-50%, -50%)' }} />
                    </motion.div>
                    {/* Ring 2 — Second ring, anti-clockwise, same style as outer */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-4 sm:inset-5 md:inset-6 lg:inset-8 rounded-full border-[2px] border-dashed border-white/50"
                    >
                      {/* Rotating marker on Ring 2 */}
                      <div className="absolute w-2 h-2 rounded-full bg-amber-400/80 shadow-[0_0_8px_rgba(251,191,36,0.7)]" style={{ left: '100%', top: '50%', transform: 'translate(-50%, -50%)' }} />
                    </motion.div>
                    {/* Ring 3 — Third ring, clockwise, same style as outer */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-8 sm:inset-10 md:inset-12 lg:inset-16 rounded-full border-[2px] border-dashed border-white/50"
                    >
                      {/* Rotating marker on Ring 3 */}
                      <div className="absolute w-2 h-2 rounded-full bg-cyan-400/80 shadow-[0_0_8px_rgba(34,211,238,0.7)]" style={{ left: '50%', top: '100%', transform: 'translate(-50%, -50%)' }} />
                    </motion.div>
                    {/* Ring 4 — Fourth ring, anti-clockwise, same style as outer */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-12 sm:inset-15 md:inset-18 lg:inset-24 rounded-full border-[2px] border-dashed border-white/50"
                    >
                      {/* Rotating marker on Ring 4 */}
                      <div className="absolute w-2 h-2 rounded-full bg-pink-400/80 shadow-[0_0_8px_rgba(244,114,182,0.7)]" style={{ left: '0%', top: '50%', transform: 'translate(-50%, -50%)' }} />
                    </motion.div>
                    {/* Inner glow */}
                    <motion.div
                      animate={{ scale: [1, 1.06, 1], opacity: [0.04, 0.1, 0.04] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute inset-16 sm:inset-20 md:inset-24 lg:inset-32 rounded-full bg-white/10 blur-xl"
                    />
                    {/* Center label */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <motion.div
                        animate={{ scale: [1, 1.03, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="relative bg-white/[0.12] backdrop-blur-2xl border-2 border-white/30 rounded-3xl px-6 py-5 sm:px-7 sm:py-6 md:px-8 md:py-7 text-center shadow-[0_0_60px_rgba(150,108,222,0.4),0_20px_40px_rgba(0,0,0,0.3)]"
                      >
                        {/* Inner glow effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                        
                        {/* Content */}
                        <div className="relative">
                          <p className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-1">Skillzza</p>
                          <p className="text-white/70 text-xs sm:text-sm md:text-base font-medium">Studio Ecosystem</p>
                        </div>
                      </motion.div>
                    </div>
                    {/* Pulsing dots on outer ring */}
                    {[0, 72, 144, 216, 288].map((deg, idx) => {
                      const r = (deg * Math.PI) / 180;
                      return (
                        <motion.div
                          key={idx}
                          animate={{ opacity: [0.15, 0.6, 0.15], scale: [0.8, 1.2, 0.8] }}
                          transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.5 }}
                          className="absolute w-1.5 h-1.5 rounded-full bg-white/50"
                          style={{
                            left: `${50 + 50 * Math.cos(r)}%`,
                            top: `${50 + 50 * Math.sin(r)}%`,
                            transform: 'translate(-50%, -50%)',
                          }}
                        />
                      );
                    })}
                    {/* Dots on second ring */}
                    {[36, 108, 180, 252, 324].map((deg, idx) => {
                      const r = (deg * Math.PI) / 180;
                      return (
                        <motion.div
                          key={`r2-${idx}`}
                          animate={{ opacity: [0.1, 0.45, 0.1] }}
                          transition={{ duration: 3, repeat: Infinity, delay: idx * 0.6 }}
                          className="absolute w-1 h-1 rounded-full bg-white/35"
                          style={{
                            left: `${50 + 43 * Math.cos(r)}%`,
                            top: `${50 + 43 * Math.sin(r)}%`,
                            transform: 'translate(-50%, -50%)',
                          }}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* ── 5 Floating Cards (pentagon layout) ── */}
                {labelData.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + idx * 0.15, type: 'spring' }}
                      className="absolute z-30"
                      style={cardPositions[idx]}
                    >
                      <div className="relative group origin-center">
                        {/* Card */}
                        <div className="flex flex-col items-center justify-center gap-2.5 backdrop-blur-xl border-2 border-white/40 rounded-2xl px-3 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.25)] hover:shadow-[0_15px_60px_rgba(138,43,226,0.4)] transition-all duration-300 ease-in-out h-[115px] w-[120px] relative overflow-hidden group-hover:border-white/60 group-hover:scale-105 origin-center will-change-transform" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))' }}>
                          
                          {/* Hover gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                          
                          {/* Icon - clean without background */}
                          <div className="relative z-10 flex items-center justify-center">
                            <Icon className="w-8 h-8 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" style={{ color: '#F59E0B' }} strokeWidth={1.5} />
                          </div>
                          
                          {/* Text */}
                          <span className="relative z-10 text-white font-medium text-[11px] leading-[1.4] text-center whitespace-pre-line drop-shadow-sm px-1">
                            {item.text}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Smooth curve transition at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-[5]" style={{ height: '120px' }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,120 L0,40 Q360,0 720,40 T1440,40 L1440,120 Z" fill="#F0EDF8"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
