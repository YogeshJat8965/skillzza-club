import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { studioCategories } from '../data/content';

const studios = studioCategories.studios;
const total = studios.length;
const wrap = (i) => ((i % total) + total) % total;

/*
  Position map for 5 visible cards:
  -2  far-left   (smallest, most faded)
  -1  left       (small, faded)
   0  center     (largest, full opacity)
  +1  right      (small, faded)
  +2  far-right  (smallest, most faded)
*/
const positionStyles = {
  '-2': { x: '-115%', y: '25px',  scale: 0.5,  opacity: 0.3,  zIndex: 1 },
  '-1': { x: '-60%',  y: '12px',  scale: 0.72, opacity: 0.55, zIndex: 2 },
  '0':  { x: '0%',    y: '0px',   scale: 1,    opacity: 1,    zIndex: 5 },
  '1':  { x: '60%',   y: '12px',  scale: 0.72, opacity: 0.55, zIndex: 2 },
  '2':  { x: '115%',  y: '25px',  scale: 0.5,  opacity: 0.3,  zIndex: 1 },
};

/* Tighter offsets for mobile so side cards are more visible */
const mobilePositionStyles = {
  '-2': { x: '-90%',  y: '20px',  scale: 0.5,  opacity: 0.3,  zIndex: 1 },
  '-1': { x: '-48%',  y: '10px',  scale: 0.72, opacity: 0.55, zIndex: 2 },
  '0':  { x: '0%',    y: '0px',   scale: 1,    opacity: 1,    zIndex: 5 },
  '1':  { x: '48%',   y: '10px',  scale: 0.72, opacity: 0.55, zIndex: 2 },
  '2':  { x: '90%',   y: '20px',  scale: 0.5,  opacity: 0.3,  zIndex: 1 },
};

const StudioCategories = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.15 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const INTERVAL = 1600;

  /* ---- detect mobile ------------------------------------------------ */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* ---- auto-play ---------------------------------------------------- */
  const next = useCallback(() => {
    setActiveIndex((prev) => wrap(prev + 1));
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((prev) => wrap(prev - 1));
  }, []);

  useEffect(() => {
    if (isPaused || !inView) return;
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, inView, next, activeIndex]);

  /* ---- navigation --------------------------------------------------- */
  const goTo = (idx) => setActiveIndex(wrap(idx));

  /* ---- compute position for each studio ----------------------------- */
  const getCardPosition = (studioIdx) => {
    // Calculate shortest circular distance from activeIndex
    let diff = studioIdx - activeIndex;
    // Wrap around for circular carousel
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    // Only show cards within -2..+2 range
    if (diff < -2 || diff > 2) return null;
    const styles = isMobile ? mobilePositionStyles : positionStyles;
    return styles[String(diff)];
  };

  return (
    <section
      id="studios"
      className="relative py-12 lg:py-16 sc-section overflow-hidden"
      ref={ref}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
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

        {/* ====== 5-CARD COVERFLOW CAROUSEL ====== */}
        <div className="sc-stage">
          {/* Navigation arrows */}
          <button onClick={prev} aria-label="Previous studio" className="sc-arrow sc-arrow--left">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} aria-label="Next studio" className="sc-arrow sc-arrow--right">
            <ChevronRight size={20} />
          </button>

          <div className="sc-stage__inner">
            {studios.map((studio, idx) => {
              const style = getCardPosition(idx);
              if (!style) return null;
              return (
                <div
                  key={idx}
                  className="sc-coverflow-card"
                  style={{
                    transform: `translateX(${style.x}) translateY(${style.y}) scale(${style.scale})`,
                    opacity: style.opacity,
                    zIndex: style.zIndex,
                  }}
                  onClick={() => idx !== activeIndex && goTo(idx)}
                >
                  <div className="sc-card__image-wrap">
                    <img
                      src={studio.image}
                      alt={studio.name}
                      loading="lazy"
                      draggable="false"
                    />
                    <div className="sc-card__gradient" />
                    <div className="sc-card__label">
                      <h3>{studio.name}</h3>
                      <div className="sc-card__accent" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="sc-dots">
          {studios.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to studio ${i + 1}`}
              onClick={() => goTo(i)}
              className={`sc-dot ${i === activeIndex ? 'sc-dot--active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudioCategories;
