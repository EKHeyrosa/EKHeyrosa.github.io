import Navbar from "./NavBar";
import MeSection from "./MeSection";
import About from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <MeSection />
            <About />
            <Skills />
            {/* Uncomment when you have projects to show. Uncomment NavBar and Footer links too */}
            {/* <Projects /> */}
            <Contact />
            <Footer />
        </>
    )
}