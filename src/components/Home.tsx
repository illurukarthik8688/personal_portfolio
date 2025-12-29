import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Navigation from './Navigation';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <Navigation />
            <Hero />
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
