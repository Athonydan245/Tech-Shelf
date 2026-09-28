import { useState } from 'react';
import { trackEvent } from '../utils/tracking';

export default function Header({ onOpenModal, lang, setLang }: { onOpenModal: () => void, lang: 'vi' | 'en', setLang: (l: 'vi' | 'en') => void }) {
    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('light-mode');
        trackEvent('toggle_theme', { mode: isDark ? 'light' : 'dark' });
    };

    const toggleLanguage = () => {
        const newLang = lang === 'vi' ? 'en' : 'vi';
        setLang(newLang);
        trackEvent('toggle_language', { language: newLang });
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="fixed w-full top-0 z-40 bg-[#080B12]/80 backdrop-blur-md border-b border-white/10 p-6 flex justify-between items-center shadow-lg">
            <div className="flex-1">
                <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 cursor-pointer inline-block" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    TECHSHELF
                </h1>
            </div>

            <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300 items-center justify-center flex-1">
                <button onClick={() => scrollToSection('books')} className="hover:text-white transition-colors cursor-pointer">
                    {lang === 'vi' ? 'Sách công nghệ' : 'Tech Books'}
                </button>
                <button onClick={() => scrollToSection('documents')} className="hover:text-white transition-colors cursor-pointer">
                    {lang === 'vi' ? 'Tài liệu' : 'Resources'}
                </button>
                <a href="/analytics" className="hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                    Analytics ↗
                </a>
            </nav>

            <div className="flex items-center gap-2 md:gap-4 flex-1 justify-end">
                <button onClick={toggleLanguage} className="flex items-center gap-1.5 text-sm font-bold text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-full transition-colors" title={lang === 'vi' ? 'Đổi ngôn ngữ' : 'Change Language'}>
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                    <span>{lang === 'vi' ? 'VN' : 'EN'}</span>
                </button>

                <button onClick={toggleTheme} className="text-xl p-2 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center text-gray-300 hover:text-white" title={lang === 'vi' ? 'Chuyển đổi giao diện' : 'Toggle Theme'}>
                    {isDark ? (
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                    ) : (
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    )}
                </button>

                <button onClick={() => { trackEvent('header_cta_click'); onOpenModal(); }} className="bg-blue-600 hover:bg-blue-500 px-5 md:px-6 py-2 md:py-2.5 rounded-full font-semibold text-sm shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all text-white">
                    {lang === 'vi' ? 'Nhận tài liệu' : 'Get Resources'}
                </button>
            </div>
        </header>
    );
}