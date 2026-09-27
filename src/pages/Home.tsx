import { useEffect } from 'react';
import { trackEvent, captureUTMs } from '../utils/tracking';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Quiz from '../components/Quiz';
import LeadFormSection from '../components/LeadFormSection';
import Footer from '../components/Footer';
import FeaturedBooks from '../components/FeaturedBooks';

export default function Home() {
    useEffect(() => {
        captureUTMs();
        trackEvent('page_view', { page_url: window.location.pathname });
    }, []);

    const scrollToForm = () => {
        document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen font-sans selection:bg-blue-500/30 bg-[#080B12] text-white">
            <Header onOpenModal={scrollToForm} />
            <Hero onOpenModal={scrollToForm} />
            <TrustedBy />
            <Features />
            <FeaturedBooks onOpenModal={scrollToForm} />
            <Testimonials />
            <Quiz onOpenModal={scrollToForm} />
            <FAQ />
            <LeadFormSection />
            <Footer />
        </div>
    );
}