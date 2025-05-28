import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Lightbulb, Leaf, Target } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Lightbulb,
      key: 'innovation'
    },
    {
      icon: Leaf,
      key: 'sustainability'
    },
    {
      icon: Target,
      key: 'harmony'
    }
  ];

  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-light text-stone-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('about.title')}
            </motion.h2>
            
            <motion.p
              className="text-xl text-stone-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t('about.subtitle')}
            </motion.p>
            
            <motion.p
              className="text-lg text-stone-700 leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {t('about.description')}
            </motion.p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.key}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <value.icon className="w-6 h-6 text-stone-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-stone-900 mb-2">
                      {t(`about.values.${value.key}.title`)}
                    </h3>
                    <p className="text-stone-600">
                      {t(`about.values.${value.key}.desc`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1520529890308-f503006340b4"
                alt="Architectural Detail"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-stone-600 text-sm mb-2">Architecture Philosophy</p>
              <p className="text-stone-900 font-medium">Form Follows Function</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;