import React, { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import FeaturedVideo from './components/Sections/FeaturedVideo';
import Experience from './components/Sections/Experience';
import Hackathons from './components/Sections/Hackathons';
import Contact from './components/Sections/Contact';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "Portfolio | Developer & Hackathon Champion";
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <FeaturedVideo />
      <Experience />
      <Hackathons />
      <Contact />
    </Layout>
  );
}

export default App;