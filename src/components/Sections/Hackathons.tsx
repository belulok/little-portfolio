import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../UI/Card';
import { Award, Calendar, Users, ExternalLink } from 'lucide-react';
import ImageCarousel from '../UI/ImageCarousel';
import ImageGallery from '../UI/ImageGallery';

// Import Deriv hackathon images
import deriv1 from '../../assets/images/deriv1.jpg';
import deriv2 from '../../assets/images/deriv2.jpg';
// Note: HEIC files may not be supported in browsers, so we'll skip them for now
// import deriv3 from '../../assets/images/deriv3.HEIC';
// import deriv4 from '../../assets/images/deriv4.HEIC';

// Import SUI hackathon images
import sui1 from '../../assets/images/sui1.jpeg';
// import sui2 from '../../assets/images/sui2.HEIC';
import sui3 from '../../assets/images/sui3.jpeg';
import sui4 from '../../assets/images/sui4.jpeg';
import sui5 from '../../assets/images/sui5.jpeg';
// import sui6 from '../../assets/images/sui6.HEIC';

interface HackathonItem {
  title: string;
  images: string[];
  date: string;
  position: string;
  team: string;
  description: string;
  technologies: string[];
  link?: string;
}

const hackathons: HackathonItem[] = [
  {
    title: "Deriv Ai Hackathon 2025",
    images: [deriv1, deriv2],
    date: "January 2025",
    position: "1st Place",
    team: "Team Phantom",
    description: "Developed a real-time collaborative coding platform with AI-powered code suggestions. The project impressed judges with its seamless user experience and innovative approach to remote pair programming.",
    technologies: ["React", "Node.js", "Socket.io", "Machine Learning", "MongoDB"],
    link: "https://zingy-kataifi-fb1af6.netlify.app/"
  },
  {
    title: "SUI Hacker House Hackathon 2025",
    images: [sui1, sui3, sui4, sui5],
    date: "April 2025",
    position: "1st Runner Up",
    team: "QuestChain",
    description: "Created a learning platform using web3 technology that rewards users for completing coding challenges.",
    technologies: ["React Native", "Firebase", "TensorFlow", "Google Cloud", "Express"],
    link: "#"
  }
];

const Hackathons: React.FC = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedHackathon, setSelectedHackathon] = useState<number | null>(null);

  const openGallery = (index: number) => {
    setSelectedHackathon(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  return (
    <section id="hackathons" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
          >
            Hackathon <span className="text-primary-400">Wins</span>
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
            className="text-neutral-300 max-w-2xl mx-auto"
          >
            Showcasing my award-winning projects from competitive hackathons, where I've demonstrated
            innovation, technical skill, and the ability to deliver under pressure.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full flex flex-col overflow-hidden" whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(2, 132, 199, 0.2)' }}>
                <div className="relative overflow-hidden rounded-t-xl h-48">
                  <ImageCarousel
                    images={hackathon.images}
                    interval={5000}
                    className="w-full h-full"
                    onClick={() => openGallery(index)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Award size={16} className="mr-1" />
                    {hackathon.position}
                  </div>
                  <div className="absolute top-4 right-4">
                    <button
                      className="bg-neutral-800/70 hover:bg-neutral-700/70 text-white p-2 rounded-full transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        openGallery(index);
                      }}
                    >
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>

                <div className="flex-grow p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{hackathon.title}</h3>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-neutral-400">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {hackathon.date}
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-1" />
                      {hackathon.team}
                    </div>
                  </div>

                  <p className="text-neutral-300 mb-6 leading-relaxed">
                    {hackathon.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-neutral-200 font-medium mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {hackathon.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-neutral-800 text-primary-300 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    {hackathon.link && (
                      <a
                        href={hackathon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors font-medium"
                      >
                        View Project
                        <ExternalLink size={16} className="ml-1" />
                      </a>
                    )}

                    <button
                      onClick={() => openGallery(index)}
                      className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors font-medium"
                    >
                      View Gallery
                      <ExternalLink size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Gallery Modal */}
      {selectedHackathon !== null && (
        <ImageGallery
          images={hackathons[selectedHackathon].images}
          isOpen={galleryOpen}
          onClose={closeGallery}
        />
      )}
    </section>
  );
};

export default Hackathons;