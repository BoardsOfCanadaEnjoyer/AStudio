import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Home, Building, Map, Palette } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Home,
      key: 'residential',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Building,
      key: 'commercial',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Map,
      key: 'planning',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Palette,
      key: 'interior',
      color: 'bg-orange-50 text-orange-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light text-stone-900 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon size={32} />
              </motion.div>
              
              <h3 className="text-2xl font-semibold text-stone-900 mb-4">
                {t(`services.items.${service.key}.title`)}
              </h3>
              
              <p className="text-stone-600 leading-relaxed">
                {t(`services.items.${service.key}.desc`)}
              </p>
              
              <motion.div
                className="mt-6 w-full h-1 bg-stone-100 rounded-full overflow-hidden"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-full bg-gradient-to-r from-stone-300 to-stone-600 origin-left"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-stone-900 text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-stone-800 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            {t('contact.cta')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;