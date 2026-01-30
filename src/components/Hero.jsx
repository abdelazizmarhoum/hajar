import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo.png';
import { useTranslation } from '../context/TranslationContext';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob"></div>
        <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-red-50/50 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent"></div>

        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1E40AF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-primary text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
              {t('hero.badge')}
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-dark mb-6 leading-tight">
              <span>
                {t('hero.heading').includes('Élégance') ? (
                  <span>
                    {t('hero.heading').split('Élégance')[0]}
                    <span className="text-secondary relative">
                      Élégance
                      <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                      </svg>
                    </span>
                    {t('hero.heading').split('Élégance')[1]}
                  </span>
                ) : t('hero.heading')}
              </span>
            </h1>

            <p className="text-xl text-neutral mb-8 leading-relaxed max-w-lg">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 bg-accent hover:bg-red-700 text-white rounded-xl font-bold shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all"
              >
                {t('hero.ctaBooking')} <ArrowRight size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(30, 64, 175, 0.05)' }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="px-8 py-4 bg-transparent border border-slate-200 text-dark hover:border-primary/50 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
              >
                {t('hero.ctaServices')} <ChevronRight size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right side - Large Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden md:flex justify-center items-center relative"
          >
            {/* Background glow behind logo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-60"></div>

            <img
              src={logo}
              alt="BM Transport Logo"
              className="relative z-10 w-full max-w-lg object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary/30"
      >
        <div className="w-6 h-10 border-2 border-primary/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-primary/40 rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;