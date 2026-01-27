import BentoHero from './BentoHero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import FloatingDock from './FloatingDock';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <FloatingDock />
            <BentoHero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
