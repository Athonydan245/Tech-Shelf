import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import FeaturedBooks from '../components/FeaturedBooks';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Quiz from '../components/Quiz';
import FAQ from '../components/FAQ';
import LeadFormSection from '../components/LeadFormSection';
import Footer from '../components/Footer';
import { trackEvent } from '../utils/tracking';

export default function Home() {
    const [lang, setLang] = useState<'vi' | 'en'>('vi');

    useEffect(() => {
        trackEvent('page_view', { page_url: window.location.pathname });
    }, []);

    const scrollToForm = () => {
        document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen font-sans selection:bg-blue-500/30 bg-[#080B12] text-white">
            <Header onOpenModal={scrollToForm} lang={lang} setLang={setLang} />
            <Hero onOpenModal={scrollToForm} lang={lang} />
            <TrustedBy lang={lang} />
            <FeaturedBooks onOpenModal={scrollToForm} lang={lang} />
            <Features lang={lang} />
            <Testimonials lang={lang} />
            <Quiz onOpenModal={scrollToForm} lang={lang} />
            <FAQ lang={lang} />
            <LeadFormSection lang={lang} />
            <Footer lang={lang} />
        </div>
    );
}