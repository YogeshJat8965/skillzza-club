import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { studioCategories } from '../data/content';

const studios = studioCategories.studios;
const total = studios.length;
const wrap = (i) => ((i % total) + total) % total;

const StudioCategories = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.15 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);
  const INTERVAL = 4000;

  /* ---- auto-play with progress ---------------------------------------- */
  const advance = useCallback(() => {
    setActiveIndex((prev) => wrap(prev + 1));
    setProgress(0);
  }, []);

  useEffect(() => {
    if (isPaused || !inView) {
      if (progressRef.current) cancelAnimationFrame(progressRef.current);
      return;
    }
    let start = performance.now();
    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min(elapsed / INTERVAL, 1);
      setProgress(pct);
      if (pct >= 1) {
        advance();
        start = now;
      }
      progressRef.current = requestAnimationFrame(tick);
    };
    progressRef.current = requestAnimationFrame(tick);
    return () => {
      if (progressRef.current) cancelAnimationFrame(progressRef.current);
    };
  }, [isPaused, inView, advance, activeIndex]);

  /* ---- navigation ----------------------------------------------------- */
  const goTo = (idx) => { setActiveIndex(wrap(idx)); setProgress(0); };
  const prev = () => { setActiveIndex((p) => wrap(p - 1)); setProgress(0); };
  const next = () => { setActiveIndex((p) => wrap(p + 1)); setProgress(0); };

  /* ---- 3 visible cards ------------------------------------------------ */
  const leftIdx = wrap(activeIndex - 1);
  const centerIdx = activeIndex;
  const rightIdx = wrap(activeIndex + 1);

  /* ---- card variants for framer-motion -------------------------------- */
  const cardVariants = {
    left: {
      scale: 0.82,
      opacity: 0.55,
      rotateY: 8,
      transition: { type: 'spring', stiffness: 220, damping: 26 },
    },
    center: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: { type: 'spring', stiffness: 220, damping: 26 },
    },
    right: {
      scale: 0.82,
      opacity: 0.55,
      rotateY: -8,
      transition: { type: 'spring', stiffness: 220, damping: 26 },
    },
  };

  /* ---- single card ---------------------------------------------------- */
  const Card = ({ studio, variant, studioIdx }) => {
    const isCenter = variant === 'center';
    return (
      <motion.div
        className={`sc-card ${isCenter ? 'sc-card--active' : ''}`}
        variants={cardVariants}
        animate={variant}
        onClick={() => !isCenter && goTo(studioIdx)}
        whileHover={isCenter ? { scale: 1.03 } : {}}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="sc-card__image-wrap">
          <img
            src={studio.image}
            alt={studio.name}
            loading="lazy"
            draggable="false"
          />
          {/* dark overlay only on side cards */}
          {!isCenter && <div className="sc-card__overlay" />}

          {/* label */}
          <div className="sc-card__label">
            <h3>{studio.name}</h3>
            <div className="sc-card__accent" />
          </div>

          {/* glow ring on center */}
          {isCenter && <div className="sc-card__glow-ring" />}
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="studios"
      className="relative py-24 lg:py-32 sc-section overflow-hidden"
      ref={ref}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background decorations */}
      <div className="sc-bg-orb sc-bg-orb--1" />
      <div className="sc-bg-orb sc-bg-orb--2" />
      <div className="sc-bg-grid" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold tracking-[0.2em] uppercase text-center mb-3"
          style={{ color: '#976EDF' }}
        >
          {studioCategories.label}
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-dark mb-4"
        >
          {studioCategories.heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-500 text-center mb-16 max-w-2xl mx-auto"
        >
          {studioCategories.subheading}
        </motion.p>

        {/* ====== CAROUSEL — flex row of 3 cards ====== */}
        <div className="sc-viewport-wrap">
          <div className="sc-carousel-row">
            {/* LEFT */}
            <div className="sc-slot sc-slot--side">
              <Card studio={studios[leftIdx]} variant="left" studioIdx={leftIdx} />
            </div>

            {/* CENTER */}
            <div className="sc-slot sc-slot--center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={centerIdx}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ type: 'spring', stiffness: 250, damping: 28 }}
                >
                  <Card studio={studios[centerIdx]} variant="center" studioIdx={centerIdx} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT */}
            <div className="sc-slot sc-slot--side">
              <Card studio={studios[rightIdx]} variant="right" studioIdx={rightIdx} />
            </div>
          </div>

          {/* Navigation arrows */}
          <button onClick={prev} aria-label="Previous studio" className="sc-arrow sc-arrow--left">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} aria-label="Next studio" className="sc-arrow sc-arrow--right">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Progress dots */}
        <div className="sc-dots">
          {studios.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to studio ${i + 1}`}
              onClick={() => goTo(i)}
              className={`sc-dot ${i === activeIndex ? 'sc-dot--active' : ''}`}
            >
              {i === activeIndex && (
                <span className="sc-dot__fill" style={{ transform: `scaleX(${progress})` }} />
              )}
            </button>
          ))}
        </div>

        {/* Active studio name */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeIndex}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="text-center mt-6 text-dark font-semibold text-lg sm:text-xl"
          >
            {studios[activeIndex].name}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default StudioCategories;
