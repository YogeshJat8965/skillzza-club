import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, GraduationCap, Rocket, ChartNoAxesCombined, BriefcaseBusiness, Palette } from 'lucide-react';
import { hero } from '../data/content';

const Hero = () => {
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
  // Circle is 500px diameter (250px radius), cards orbit just outside
  const circleRadius = 250;
  const cardOrbit = circleRadius + 30;
  const pentagonAngles = [-90, -18, 54, 126, 198];
  const cardPositions = pentagonAngles.map((deg) => {
    const rad = (deg * Math.PI) / 180;
    return {
      left: `calc(50% + ${Math.round(cardOrbit * Math.cos(rad))}px)`,
      top: `calc(50% + ${Math.round(cardOrbit * Math.sin(rad))}px)`,
      transform: 'translate(-50%, -50%)',
    };
  });

  // Line endpoints from center toward each card
  const lineEndpoints = pentagonAngles.map((deg) => {
    const rad = (deg * Math.PI) / 180;
    const lineLen = circleRadius * 0.92;
    return {
      x2: 50 + (lineLen / (660 / 2)) * 50 * Math.cos(rad),
      y2: 50 + (lineLen / (660 / 2)) * 50 * Math.sin(rad),
    };
  });

  return (
    <section className="relative overflow-hidden">
      {/* ─── Background ─── */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, #966CDE 0%, #2D1B69 50%, #1A0F3C 100%)',
      }} />
      {/* Grid lines overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* ─── TWO-COLUMN LAYOUT ─── */}
      <div className="relative z-10 pt-32 sm:pt-40 lg:pt-44 xl:pt-48 pb-32 sm:pb-40 lg:pb-44 xl:pb-48 min-h-[90vh] flex items-center">
        <div className="w-full mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 xl:gap-16 items-center">

            {/* ════ LEFT: Content ════ */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-8">
                <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/[0.12] backdrop-blur-md border border-white/20 shadow-lg shadow-purple-900/10">
                  <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    <Sparkles size={16} className="text-yellow-300" />
                  </motion.div>
                  <span className="text-sm font-semibold text-white tracking-wider uppercase">K-12 Studio Programme</span>
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-[2.5rem] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-black leading-[1.08] tracking-tight text-white mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)]"
              >
                The Future-Ready Studio Ecosystem{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-300 bg-clip-text text-transparent drop-shadow-none">
                    for Progressive Schools
                  </span>
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p variants={itemVariants} className="text-lg sm:text-xl lg:text-[1.35rem] text-white/80 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-5">
                {hero.subheading}
              </motion.p>

              {/* Description */}
              <motion.p variants={itemVariants} className="text-[15px] sm:text-base lg:text-[17px] text-white/55 max-w-2xl mx-auto lg:mx-0 leading-[1.8] mb-12">
                {hero.description}
              </motion.p>

              {/* CTAs */}
              <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-5">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-dark font-bold text-[15px] shadow-2xl shadow-black/20 btn-glow"
                >
                  {hero.cta1}
                  <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2.5 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-[15px] hover:border-white/50 transition-all duration-300 backdrop-blur-md"
                >
                  {hero.cta2}
                </motion.button>
              </motion.div>
            </motion.div>

            {/* ════ RIGHT: Animated Circle with 5 Cards ════ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="relative hidden lg:flex items-center justify-center"
            >
              {/* Container for circle + cards */}
              <div className="relative w-full max-w-[660px] mx-auto overflow-visible" style={{ aspectRatio: '1 / 1' }}>

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
                  <div className="relative w-[420px] h-[420px] lg:w-[500px] lg:h-[500px]">
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
                      className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-white/20"
                    />
                    {/* Ring 2 — Anti-clockwise, solid (the new one) */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-6 lg:inset-8 rounded-full border-[1px] border-white/12"
                    />
                    {/* Ring 3 — Clockwise, dotted */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-14 lg:inset-18 rounded-full border border-dashed border-white/[0.08]"
                    />
                    {/* Ring 4 — Anti-clockwise, inner ring */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-24 lg:inset-28 rounded-full border border-white/[0.05]"
                    />
                    {/* Inner glow */}
                    <motion.div
                      animate={{ scale: [1, 1.06, 1], opacity: [0.04, 0.1, 0.04] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute inset-28 lg:inset-32 rounded-full bg-white/10 blur-xl"
                    />
                    {/* Center label */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <motion.div
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="bg-white/[0.08] backdrop-blur-xl border border-white/15 rounded-2xl px-7 py-4 text-center shadow-[0_0_40px_rgba(150,108,222,0.2)]"
                      >
                        <p className="text-white font-bold text-base lg:text-lg">Skillzza</p>
                        <p className="text-white/40 text-xs sm:text-sm">Studio Ecosystem</p>
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
                {labelData.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + idx * 0.15, type: 'spring' }}
                    className="absolute z-30"
                    style={cardPositions[idx]}
                  >
                    <motion.div
                      animate={{ y: [0, idx % 2 === 0 ? -5 : 5, 0] }}
                      transition={{ duration: 3.4 + idx * 0.1, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.3 }}
                    >
                      <div className="flex flex-col items-center gap-1.5 bg-white/[0.07] backdrop-blur-lg border border-white/15 rounded-xl px-3.5 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.2)] w-[110px]">
                        <div className={`w-9 h-9 rounded-lg ${item.color.split(' ')[0]} flex items-center justify-center`}>
                          <item.icon size={18} className={item.color.split(' ')[1]} />
                        </div>
                        <span className="text-white/90 font-medium text-[9px] leading-[1.3] text-center whitespace-pre-line">{item.text}</span>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}

              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Smooth curve transition at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-[5]" style={{ height: '80px' }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 80V30C0 30 360 0 720 0C1080 0 1440 30 1440 30V80H0Z" fill="#F0EDF8"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
