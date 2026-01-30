import React from 'react';
import { Truck, Map, Shield, Clock, Package, Briefcase, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/TranslationContext';

const serviceKeys = [
  { id: 'rental', icon: Truck, color: 'bg-blue-100 text-primary' },
  { id: 'transfer', icon: Map, color: 'bg-red-100 text-accent' },
  { id: 'excursion', icon: Briefcase, color: 'bg-orange-100 text-orange-600' },
  { id: 'events', icon: Shield, color: 'bg-purple-100 text-purple-600' },
  { id: 'disposal', icon: Clock, color: 'bg-green-100 text-emerald-600' },
  { id: 'corporate', icon: Package, color: 'bg-cyan-100 text-cyan-600' }
];

const Services = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="services" className="py-24 bg-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-semibold uppercase tracking-wider text-sm"
          >
            {t('services.subtitle')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl md:text-5xl font-bold text-dark"
          >
            <span dangerouslySetInnerHTML={{ __html: t('services.heading').replace('Complètes', '<span class="text-primary">Complètes</span>') }}></span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-neutral"
          >
            {t('services.description')}
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {serviceKeys.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={28} />
              </div>

              <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                {t(`services.items.${service.id}.title`)}
              </h3>

              <p className="text-neutral mb-6 leading-relaxed">
                {t(`services.items.${service.id}.desc`)}
              </p>

              <a href="#contact" className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors group/link">
                {t('services.learnMore')} <ChevronRight size={16} className="ml-1 transform group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;