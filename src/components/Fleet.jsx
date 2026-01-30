import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Maximize2, Users, Briefcase, Shovel as ShovelIcon, X, Check } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';

const fleetKeys = [
  {
    id: 'berline',
    categoryKey: 'luxury',
    capacity: '3',
    luggage: '2',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    features: ['wifi', 'leather', 'ac', 'vip']
  },
  {
    id: 'van',
    categoryKey: 'tourism',
    capacity: '7',
    luggage: '6',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    features: ['space', 'modularity', 'ac', 'family']
  },
  {
    id: 'minibus',
    categoryKey: 'tourism',
    capacity: '17',
    luggage: '15',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    features: ['group', 'comfort', 'fridge', 'tv']
  },
  {
    id: 'suv',
    categoryKey: 'adventure',
    capacity: '4',
    luggage: '4',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    features: ['premium4x4', 'offroad', 'leather', 'atlas']
  }
];

const Fleet = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  return (
    <section id="fleet" className="py-24 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest uppercase mb-3 text-sm"
          >
            {t('fleet.heading')}
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-dark mb-6"
            dangerouslySetInnerHTML={{ __html: t('fleet.mainTitle') }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral max-w-2xl mx-auto text-lg"
          >
            {t('fleet.description')}
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {fleetKeys.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={item.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-blue-100 flex flex-col"
              >
                {/* Image Section */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={t(`fleet.items.${item.id}.name`)}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Quick Action Overlay */}
                  <div className="absolute top-4 right-4 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                    <button
                      onClick={() => setSelectedImage(item.image)}
                      className="bg-white/90 backdrop-blur-md text-dark p-3 rounded-2xl hover:bg-secondary hover:text-white transition-all shadow-lg"
                    >
                      <Maximize2 size={18} />
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <span className="text-white text-xs font-bold uppercase tracking-widest bg-secondary/80 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
                      {t(`fleet.filters.${item.categoryKey}`)}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-dark mb-2 font-serif">{t(`fleet.items.${item.id}.name`)}</h3>
                  <p className="text-neutral text-sm mb-6 line-clamp-2 leading-relaxed italic">{t(`fleet.items.${item.id}.desc`)}</p>

                  {/* Basic Stats */}
                  <div className="flex items-center gap-6 mb-8 py-4 border-y border-gray-50">
                    <div className="flex items-center gap-2 text-dark font-medium">
                      <div className="bg-blue-50 p-2 rounded-lg text-secondary">
                        <Users size={16} />
                      </div>
                      <span className="text-sm">{item.capacity} {t('fleet.placesUnit')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-dark font-medium">
                      <div className="bg-red-50 p-2 rounded-lg text-accent">
                        <Briefcase size={16} />
                      </div>
                      <span className="text-sm">{item.luggage} {t('fleet.luggageUnit')}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedVehicle(item)}
                    className="mt-auto group/btn flex items-center justify-center gap-3 w-full py-4 bg-dark text-white rounded-2xl font-bold hover:bg-secondary transition-all duration-300 shadow-md transform active:scale-95"
                  >
                    {t('fleet.details')}
                    <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {/* Full Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-8 right-8 text-white hover:text-secondary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              className="max-h-full max-w-full rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}

        {/* Detail Modal */}
        {selectedVehicle && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-dark/80 backdrop-blur-sm"
              onClick={() => setSelectedVehicle(null)}
            />
            <motion.div
              layoutId={selectedVehicle.id}
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl relative z-10 flex flex-col md:grid md:grid-cols-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Left - Image */}
              <div className="relative h-48 md:h-auto overflow-hidden flex-shrink-0">
                <img src={selectedVehicle.image} className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-gradient-to-r from-dark/20 to-transparent"></div>
              </div>

              {/* Modal Right - Details */}
              <div className="p-6 md:p-12 overflow-y-auto custom-scrollbar flex-grow">
                <button
                  onClick={() => setSelectedVehicle(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-20 bg-white/50 backdrop-blur-sm"
                >
                  <X size={24} className="text-dark" />
                </button>

                <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 inline-block">
                  {t(`fleet.filters.${selectedVehicle.categoryKey}`)}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 font-serif">{t(`fleet.items.${selectedVehicle.id}.name`)}</h2>
                <p className="text-neutral mb-8 leading-relaxed">{t(`fleet.items.${selectedVehicle.id}.desc`)}</p>

                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{t('fleet.capacityLabel')}</p>
                    <div className="flex items-center gap-2 text-dark">
                      <Users size={18} className="text-secondary" />
                      <span className="font-bold text-xl">{selectedVehicle.capacity} {t('fleet.placesUnit')}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{t('fleet.luggageLabel')}</p>
                    <div className="flex items-center gap-2 text-dark">
                      <Briefcase size={18} className="text-accent" />
                      <span className="font-bold text-xl">{selectedVehicle.luggage} {t('fleet.luggageUnit')}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{t('fleet.featuresLabel')}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedVehicle.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 border border-gray-100 group hover:border-blue-100 transition-all">
                        <div className="bg-green-500 rounded-full p-0.5">
                          <Check size={12} className="text-white" />
                        </div>
                        <span className="text-sm font-medium text-dark">{t(`fleet.vehicleFeatures.${feature}`)}</span>
                      </div>
                    ))}
                  </div>
                </div>


              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Fleet;
