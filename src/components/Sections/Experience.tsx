import React from 'react';
import { motion } from 'framer-motion';
import Card from '../UI/Card';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Full Stack Developer",
    location: "Kuala Lumpur, MY",
    period: "2025",
    description: "Leading the full stack development team in building responsive, accessible web applications using React and TypeScript. Implemented performance optimizations that improved load times by 40%.",
    skills: ["React", "TypeScript", "Next.js", "Redux", "TailwindCSS", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "Software Engineer",
    company: "Cognizant",
    location: "Kuala Lumpur, MY",
    period: "2024",
    description: "Developed and maintained multiple client projects using modern JavaScript frameworks. Created RESTful APIs and integrated third-party services.",
    skills: ["JavaScript", "Node.js", "Express", "MongoDB", "React"]
  },
  {
    title: "Frontend Developer",
    company: "Guinevere Globals",
    location: "Kuala Lumpur, MY",
    period: "2022 - 2024",
    description: "Developed and maintained multiple client projects using modern JavaScript frameworks. Created RESTful APIs and integrated third-party services.",
    skills: ["JavaScript", "Node.js", "Express", "MongoDB", "React"]
  },
  {
    title: "STEM Coach",
    company: "Realfun Academy",
    location: "Miri, Sarawak",
    period: "2022 - 2024",
    description: "Developed and maintained multiple client projects using modern JavaScript frameworks. Created RESTful APIs and integrated third-party services.",
    skills: ["JavaScript", "Node.js", "Express", "MongoDB", "React"]
  },
  {
    title: "Senior Wordpress Developer",
    company: "MediaPlus Digital Pte Ltd",
    location: "Miri, Sarawak",
    period: "2020 - 2024",
    description: "Developed and maintained multiple client projects using modern JavaScript frameworks. Created RESTful APIs and integrated third-party services.",
    skills: ["JavaScript", "Node.js", "Express", "MongoDB", "React"]
  },
  {
    title: "Web Developer Intern",
    company: "MediaPlus Digital Pte Ltd",
    location: "Remote",
    period: "2020",
    description: "Assisted in the development of company's main product. Collaborated with design team to implement UI/UX improvements.",
    skills: ["HTML/CSS", "JavaScript", "Git", "UI/UX", "Bootstrap"]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-neutral-950">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
          >
            Work <span className="text-primary-400">Experience</span>
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
            My professional journey through the tech industry, working with cutting-edge technologies
            and contributing to innovative projects.
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Experience Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-neutral-800 z-0 rounded-full"></div>
            
            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative z-10 flex flex-col md:flex-row items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-primary-500 rounded-full border-4 border-neutral-900"></div>
                
                {/* Content */}
                <div className="w-full md:w-1/2 md:px-8">
                  <Card className="w-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <span className="flex items-center text-sm text-primary-400">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <Briefcase size={16} className="text-neutral-400 mr-2" />
                      <span className="text-neutral-300 mr-4">{exp.company}</span>
                      <MapPin size={16} className="text-neutral-400 mr-2" />
                      <span className="text-neutral-300">{exp.location}</span>
                    </div>
                    
                    <p className="text-neutral-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-neutral-700/50 text-primary-300 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
                
                {/* Empty space for timeline alignment */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;