import React from 'react';
import { motion } from 'framer-motion';
import Card from '../UI/Card';
import { Code, Lightbulb, Laptop, Sparkles } from 'lucide-react';
import profileImage from '../../assets/images/profile.jpg';

const About: React.FC = () => {
  // Using a placeholder image from Pexels

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python',
    'Next.js', 'GraphQL', 'TailwindCSS', 'MongoDB', 'SQL',
    'AWS', 'Docker', 'CI/CD', 'Git', 'Machine Learning'
  ];

  return (
    <section id="about" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
          >
            About <span className="text-primary-400">Me</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-primary-500 rounded mx-auto mb-8"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image with Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <motion.div
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="overflow-hidden rounded-2xl"
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </motion.div>

              {/* Animated border decoration */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-5 -right-5 w-2/3 h-48 border-4 border-primary-500 rounded-2xl"
              ></motion.div>

              {/* Floating animated elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.7,
                  y: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                    repeatType: "reverse"
                  }
                }}
                className="absolute top-6 -left-6 bg-secondary-500 rounded-full p-4 shadow-lg"
                animate={{ y: [0, -10, 0] }}
              >
                <Sparkles size={24} className="text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* About Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Innovative Developer & Hackathon Winner
            </h3>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              I'm a passionate developer focused on creating innovative solutions to complex problems.
              With experience across the full stack and a love for clean, efficient code, I build
              applications that are both powerful and user-friendly.
            </p>
            <p className="text-neutral-300 mb-8 leading-relaxed">
              My journey in tech has led me to win multiple hackathons, where I've demonstrated
              my ability to quickly ideate, develop, and deploy working solutions under pressure.
              I'm constantly learning and expanding my skillset to stay at the cutting edge of technology.
            </p>

            {/* Key strengths */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Card className="flex items-start" delay={0.1}>
                <Code className="text-primary-400 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Clean Code</h4>
                  <p className="text-sm text-neutral-400">Writing maintainable, efficient code</p>
                </div>
              </Card>
              <Card className="flex items-start" delay={0.2}>
                <Lightbulb className="text-primary-400 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Problem Solving</h4>
                  <p className="text-sm text-neutral-400">Creative solutions to complex challenges</p>
                </div>
              </Card>
              <Card className="flex items-start" delay={0.3}>
                <Laptop className="text-primary-400 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Full Stack</h4>
                  <p className="text-sm text-neutral-400">End-to-end application development</p>
                </div>
              </Card>
              <Card className="flex items-start" delay={0.4}>
                <Sparkles className="text-primary-400 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Innovation</h4>
                  <p className="text-sm text-neutral-400">Pushing boundaries with new approaches</p>
                </div>
              </Card>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">My Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    className="bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;