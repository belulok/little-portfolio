import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const FeaturedVideo: React.FC = () => {
  // YouTube video ID from the URL
  const videoId = "UR1au_7Y4Lk";
  
  return (
    <section className="py-20 bg-neutral-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-secondary-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
          >
            Featured <span className="text-primary-400">Video</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-primary-500 rounded mx-auto mb-8"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-neutral-300 max-w-2xl mx-auto mb-12"
          >
            Check out my latest work from Sigma School demonstrating innovative approaches
            to software development and creative problem-solving.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto relative rounded-xl overflow-hidden shadow-2xl"
        >
          <div className="aspect-w-16 aspect-h-9 relative">
            <div className="w-full pb-[56.25%] relative">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Featured Video"
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <a 
            href="https://www.youtube.com/watch?v=UR1au_7Y4Lk"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
          >
            <span className="mr-2">Watch on YouTube</span>
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedVideo;