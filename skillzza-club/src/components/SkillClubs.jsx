import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';
import girlImage from '../assets/—Pngtree—adorable little schoolgirl with happy_16809338.png';

/* Floating study-themed decorative items */
const floatingItems = [
  { emoji: '✏️', top: '8%', left: '3%', size: 28, delay: 0, duration: 4.5, rotate: 15 },
  { emoji: '📖', top: '15%', right: '5%', size: 32, delay: 0.5, duration: 5, rotate: -10 },
  { emoji: '⭐', top: '5%', left: '45%', size: 22, delay: 1.2, duration: 3.8, rotate: 20 },
  { emoji: '💡', top: '72%', left: '6%', size: 30, delay: 0.8, duration: 4.2, rotate: -15 },
  { emoji: '🎨', top: '60%', right: '8%', size: 26, delay: 1.5, duration: 5.2, rotate: 12 },
  { emoji: '🎵', top: '45%', left: '1%', size: 24, delay: 2, duration: 4, rotate: -20 },
  { emoji: '🧩', top: '78%', left: '40%', size: 26, delay: 0.3, duration: 4.8, rotate: 25 },
  { emoji: '🔬', top: '35%', right: '2%', size: 28, delay: 1.8, duration: 4.5, rotate: -8 },
  { emoji: '🌍', top: '55%', right: '3%', size: 24, delay: 0.6, duration: 5.5, rotate: 10 },
  { emoji: '📐', top: '65%', left: '2%', size: 22, delay: 1.0, duration: 4.3, rotate: -12 },
  { emoji: '🎓', top: '3%', right: '30%', size: 28, delay: 1.4, duration: 3.5, rotate: 8 },
  { emoji: '✨', top: '80%', right: '35%', size: 20, delay: 2.2, duration: 3.2, rotate: 30 },
];

/* Soft pastel decorative circles */
const decorCircles = [
  { top: '10%', left: '10%', size: 120, color: 'rgba(99, 102, 241, 0.06)', delay: 0 },
  { top: '60%', right: '15%', size: 160, color: 'rgba(244, 114, 182, 0.05)', delay: 0.5 },
  { top: '40%', left: '48%', size: 100, color: 'rgba(52, 211, 153, 0.05)', delay: 1 },
  { top: '25%', right: '25%', size: 80, color: 'rgba(251, 191, 36, 0.06)', delay: 1.5 },
];

const SkillClubs = () => {
  const sectionRef = useRef(null);
  const [ref, inView] = useInView({ 
    triggerOnce: false, 
    threshold: 0.1 
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.9]);

  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const headingVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const paragraphVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      x: -20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="pt-4 lg:pt-6 pb-16 lg:pb-20 overflow-hidden" 
      style={{ 
        backgroundColor: '#FEFEFE',
        position: 'relative'
      }}
    >
      {/* === Animated Floating Study Icons === */}
      {floatingItems.map((item, i) => (
        <motion.div
          key={`float-${i}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 0.7, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: item.delay, duration: 0.6, type: 'spring' }}
          style={{
            position: 'absolute',
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
            fontSize: item.size,
            zIndex: 1,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          <motion.span
            animate={{
              y: [0, -14, 0, 10, 0],
              rotate: [0, item.rotate, 0, -item.rotate * 0.5, 0],
              scale: [1, 1.1, 1, 0.95, 1],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ display: 'inline-block' }}
          >
            {item.emoji}
          </motion.span>
        </motion.div>
      ))}

      {/* === Soft Pastel Background Circles === */}
      {decorCircles.map((circle, i) => (
        <motion.div
          key={`circle-${i}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ delay: circle.delay, duration: 1.2, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            top: circle.top,
            left: circle.left,
            right: circle.right,
            bottom: circle.bottom,
            width: circle.size,
            height: circle.size,
            borderRadius: '50%',
            background: circle.color,
            zIndex: 0,
            pointerEvents: 'none',
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: circle.delay }}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'inherit',
            }}
          />
        </motion.div>
      ))}

      {/* === Dashed Path / Connector Line (decorative) === */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'visible',
        }}
      >
        <motion.path
          d="M 80 60 Q 200 200 400 150 T 700 250 T 1000 180 T 1300 300"
          fill="none"
          stroke="rgba(99,102,241,0.08)"
          strokeWidth="2"
          strokeDasharray="8 12"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.3 }}
        />
        <motion.path
          d="M 100 350 Q 300 280 500 350 T 900 300 T 1200 380"
          fill="none"
          stroke="rgba(244,114,182,0.06)"
          strokeWidth="2"
          strokeDasharray="6 10"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 3, ease: 'easeInOut', delay: 0.8 }}
        />
      </svg>

      {/* === Tiny Dot Grid Pattern (subtle background texture) === */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.04) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 2 }}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" ref={ref}>
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ y: textY, opacity: textOpacity }}
            className="order-2 lg:order-1"
          >
            <motion.h2 
              variants={headingVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8"
            >
              What is the Skill Studio
            </motion.h2>
            
            <motion.p 
              variants={paragraphVariants}
              className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed"
            >
              Skillzza K-12 Skill Clubs are structured learning studios within schools where students 
              explore their interests, build real-world skills, and develop creativity through hands-on 
              projects and guided activities.
            </motion.p>
            
            <motion.p 
              variants={paragraphVariants}
              className="text-base md:text-lg text-gray-700 leading-relaxed"
            >
              The program focuses on experiential learning, helping students create{' '}
              <motion.span 
                className="font-bold text-gray-900"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
              >
                digital portfolios, complete practical projects, and build essential future skills
              </motion.span>{' '}
              such as creativity, problem-solving, collaboration, and digital literacy.
            </motion.p>

            {/* === Mini Feature Pills === */}
            <motion.div
              variants={paragraphVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginTop: '24px',
              }}
            >
              {[
                { icon: '🎯', label: 'Hands-on Projects' },
                { icon: '🧠', label: 'Critical Thinking' },
                { icon: '🤝', label: 'Collaboration' },
                { icon: '💻', label: 'Digital Literacy' },
              ].map((pill, i) => (
                <motion.div
                  key={pill.label}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
                  transition={{ delay: 1 + i * 0.15, type: 'spring', stiffness: 120 }}
                  whileHover={{ scale: 1.08, y: -3 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: '50px',
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.08))',
                    border: '1px solid rgba(99,102,241,0.12)',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#4338ca',
                    cursor: 'default',
                    backdropFilter: 'blur(4px)',
                    transition: 'box-shadow 0.3s ease',
                    boxShadow: '0 2px 8px rgba(99,102,241,0.06)',
                  }}
                >
                  <span style={{ fontSize: '16px' }}>{pill.icon}</span>
                  {pill.label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={inView ? { 
              opacity: 1, 
              scale: 1, 
              rotateY: 0 
            } : { 
              opacity: 0, 
              scale: 0.8, 
              rotateY: -15 
            }}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2
            }}
            style={{ 
              y: imageY,
              opacity: imageOpacity,
              scale: imageScale,
              position: 'relative',
              marginTop: '-30px',
            }}
            className="order-1 lg:order-2 flex justify-center"
          >
            {/* Decorative ring behind image */}
            {/* <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '85%',
                height: '85%',
                borderRadius: '50%',
                border: '2px dashed rgba(99,102,241,0.12)',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            /> */}
            {/* Second decorative ring
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '95%',
                height: '95%',
                borderRadius: '50%',
                border: '1.5px dashed rgba(244,114,182,0.08)',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            /> */}
            {/* Small orbiting dots on the ring */}
            {/* {[0, 90, 180, 270].map((angle, i) => (
              <motion.div
                key={`orbit-${i}`}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '85%',
                  height: '85%',
                  transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                  zIndex: 0,
                  pointerEvents: 'none',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: ['#6366f1', '#f472b6', '#34d399', '#fbbf24'][i],
                    opacity: 0.5,
                  }}
                />
              </motion.div>
            ))} */}

            <motion.div
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="w-full"
              style={{ position: 'relative', zIndex: 1, maxWidth: '100%', marginBottom: '25px' }}
            >
              <motion.img 
                src={girlImage} 
                alt="Skillzza K-12 Skill Clubs" 
                className="w-full h-auto"
                initial={{ filter: "brightness(0.9)" }}
                animate={inView ? { filter: "brightness(1)" } : { filter: "brightness(0.9)" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillClubs;
