import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Portfolio = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1532456745301-b2c645d8b80d",
      title: t('portfolio.projects.geometric'),
      key: 'geometric'
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1519335664-9434143e2067",
      title: t('portfolio.projects.modern'),
      key: 'modern'
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1525286376485-60c84ee403d1",
      title: t('portfolio.projects.minimal'),
      key: 'minimal'
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1613220738361-2e214b38886b",
      title: t('portfolio.projects.nature'),
      key: 'nature'
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1655611427441-1fac793eb441",
      title: t('portfolio.projects.abstract'),
      key: 'abstract'
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4",
      title: "Modern Pavilion",
      key: 'pavilion'
    }
  ];

  const openLightbox = (project) => {
    setSelectedImage(project);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light text-stone-900 mb-6">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => openLightbox(project)}
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-stone-100">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500">
                  <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                    <p className="text-sm text-white/80">Click to view</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-black/90 backdrop-blur-md"></div>
              
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
                onClick={closeLightbox}
              >
                <X size={32} />
              </button>

              {/* Image */}
              <motion.div
                className="relative max-w-5xl max-h-[90vh] mx-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                
                {/* Image Title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white text-2xl font-medium">{selectedImage.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;