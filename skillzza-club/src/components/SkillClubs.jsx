import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';
import girlImage from '../assets/—Pngtree—adorable little schoolgirl with happy_16809338.png';

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
    <section ref={sectionRef} className="pt-4 lg:pt-6 pb-16 lg:pb-20 overflow-hidden" style={{ backgroundColor: '#FEFEFE' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              scale: imageScale
            }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <motion.div
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="w-full"
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
