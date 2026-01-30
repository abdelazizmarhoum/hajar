import React from 'react';
import { CheckCircle, Award, Users, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/TranslationContext';

const featureKeys = [
  { id: "luxury", icon: CheckCircle },
  { id: "drivers", icon: Users },
  { id: "welcome", icon: Award },
  { id: "security", icon: BarChart },
];

const Features = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              <span dangerouslySetInnerHTML={{ __html: t('features.heading').replace('BM Transport', '<span class="text-secondary">BM Transport</span>') }}></span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              {t('features.description')}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {featureKeys.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="p-2 bg-primary/20 rounded-lg text-secondary">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{t(`features.items.${feature.id}.title`)}</h4>
                    <p className="text-slate-400 text-sm">{t(`features.items.${feature.id}.desc`)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-30 blur-2xl rounded-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Luxury Car"
              className="relative rounded-2xl shadow-2xl border-4 border-white/10 w-full object-cover h-[500px]"
            />

            {/* Floating Stat Card */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-4xl font-bold text-dark">98%</span>
                <CheckCircle className="text-green-500 w-8 h-8" />
              </div>
              <p className="text-neutral font-medium">{t('features.stat')}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;