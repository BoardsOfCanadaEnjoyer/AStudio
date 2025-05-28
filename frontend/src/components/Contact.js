import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: t('contact.email'),
      href: `mailto:${t('contact.email')}`
    },
    {
      icon: Phone,
      label: 'Phone',
      value: t('contact.phone'),
      href: `tel:${t('contact.phone')}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: t('contact.address'),
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-light mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('contact.title')}
            </motion.h2>
            
            <motion.p
              className="text-xl text-stone-300 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t('contact.subtitle')}
            </motion.p>

            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-4 group hover:text-stone-300 transition-colors duration-300"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-400 mb-1">{item.label}</p>
                    <p className="text-lg font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-stone-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-stone-400 focus:border-white/40 focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-stone-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-stone-400 focus:border-white/40 focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-stone-300 mb-2">
                  Project Type
                </label>
                <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-white/40 focus:outline-none transition-colors duration-300">
                  <option value="" className="text-stone-800">Select project type</option>
                  <option value="residential" className="text-stone-800">Residential</option>
                  <option value="commercial" className="text-stone-800">Commercial</option>
                  <option value="planning" className="text-stone-800">Urban Planning</option>
                  <option value="interior" className="text-stone-800">Interior Design</option>
                </select>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-stone-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-stone-400 focus:border-white/40 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </motion.div>
              
              <motion.button
                type="submit"
                className="w-full bg-white text-stone-900 py-4 rounded-lg font-semibold hover:bg-stone-100 transition-colors duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <span>{t('contact.cta')}</span>
                <ArrowRight size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;