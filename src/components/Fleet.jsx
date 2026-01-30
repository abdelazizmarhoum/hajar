import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Maximize2 } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';

const fleetKeys = [
  {
    id: 'berline',
    categoryKey: 'luxury',
    capacity: '3 places',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'van', 
    categoryKey: 'tourism',
    capacity: '7 places',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'minibus',
    categoryKey: 'tourism',
    capacity: '17 places',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'suv',
    categoryKey: 'adventure',
    capacity: '4 places',
    image: './HAJAR KARYM.jpg',
  }
];

const Fleet = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all'); // 'all', 'luxury', 'tourism', 'adventure'

  // Categories for the filter buttons
  const categories = ['all', 'luxury', 'tourism', 'adventure'];

  const filteredFleet = activeCategory === 'all'
    ? fleetKeys
    : fleetKeys.filter(item => item.categoryKey === activeCategory);

  return (
    <section id="fleet" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4"><span dangerouslySetInnerHTML={{ __html: t('fleet.heading').replace('Flotte', '<span class="text-primary">Flotte</span>') }}></span></h2>
          <p className="text-neutral max-w-2xl mx-auto">
            {t('fleet.description')}
          </p>
        </div>
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredFleet.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={item.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={t(`fleet.items.${item.id}.name`)}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <button className="bg-white text-dark p-2 rounded-full hover:bg-secondary hover:text-white transition-colors">
                      <Maximize2 size={20} />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-bold tracking-wider text-secondary uppercase bg-blue-50 px-2 py-1 rounded-md mb-3 inline-block">
                    {t(`fleet.filters.${item.categoryKey}`)}
                  </span>
                  <h3 className="text-xl font-bold text-dark mb-2">{t(`fleet.items.${item.id}.name`)}</h3>
                  <p className="text-sm text-neutral mb-4 line-clamp-2">{t(`fleet.items.${item.id}.desc`)}</p>

                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-sm font-medium text-dark flex items-center gap-1">
                      {item.capacity}
                    </span>
                    <span className="text-accent cursor-pointer flex items-center text-sm font-bold hover:gap-2 transition-all">
                      {t('fleet.details')} <ChevronRight size={16} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Fleet;