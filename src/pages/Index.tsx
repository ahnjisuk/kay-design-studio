import { Navbar } from "../components/Navbar";
import { HeroCarousel } from "../components/HeroCarousel";
import { Services } from "../components/Services";
import { AboutSection } from "../components/AboutSection";
import { Projects } from "../components/Projects";
import { History } from "../components/History";
import { Clients } from "../components/Clients";
import { Footer } from "../components/Footer";

const Index = () => {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-stone-200">
            <Navbar />
            <main>
                <HeroCarousel />
                <Projects />
                <Services />
                <AboutSection />
                <History />
                <Clients />
            </main>
            <Footer />
        </div>
    );
};

export default Index;
