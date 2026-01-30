import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';

const About = () => {
  const { t } = useTranslation();

  // Get points array from translation
  const points = t('about.points', { returnObjects: true });

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1519003722822-2946638ad105?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Main Truck"
              className="rounded-2xl shadow-2xl w-full z-10 relative"
            />
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Travel"
              className="absolute -bottom-10 -right-10 w-2/3 rounded-2xl shadow-2xl border-8 border-white z-20 hidden md:block"
            />
            {/* Decorative Pattern */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 right-20 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-10"
          >
            <h4 className="text-secondary font-bold tracking-wider uppercase mb-2">{t('about.subtitle')}</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
              <span dangerouslySetInnerHTML={{ __html: t('about.heading').replace('Transport Touristique', '<span class="text-primary">Transport Touristique</span>') }}></span>
            </h2>
            <p className="text-neutral text-lg mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            <div className="space-y-4 mb-8">
              {Array.isArray(points) && points.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check size={14} className="text-secondary" />
                  </div>
                  <span className="text-dark font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8 border-t border-gray-100 pt-8">
              <div>
                <span className="block text-4xl font-bold text-secondary mb-1">VIP</span>
                <span className="text-sm text-neutral">{t('about.stats.vip')}</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-secondary mb-1">100%</span>
                <span className="text-sm text-neutral">{t('about.stats.satisfaction')}</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-secondary mb-1">24/7</span>
                <span className="text-sm text-neutral">{t('about.stats.assistance')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;