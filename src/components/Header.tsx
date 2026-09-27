import { trackEvent } from '../utils/tracking';

export default function Header({ onOpenModal }: { onOpenModal: () => void }) {

    // Hàm cuộn trang mượt mà khi bấm vào menu
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed w-full top-0 z-40 bg-[#080B12]/80 backdrop-blur-md border-b border-white/10 p-6 flex justify-between items-center shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                TECHSHELF
            </h1>

            <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300 items-center">
                <button
                    onClick={() => { trackEvent('nav_click', { target: 'books' }); scrollToSection('books'); }}
                    className="hover:text-white transition-colors cursor-pointer"
                >
                    Sách công nghệ
                </button>
                <button
                    onClick={() => { trackEvent('nav_click', { target: 'documents' }); scrollToSection('documents'); }}
                    className="hover:text-white transition-colors cursor-pointer"
                >
                    Tài liệu
                </button>
                <a
                    href="/analytics"
                    className="hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Analytics ↗
                </a>
            </nav>

            <button
                onClick={() => { trackEvent('header_cta_click'); onOpenModal(); }}
                className="bg-blue-600 hover:bg-blue-500 px-6 py-2.5 rounded-full font-semibold text-sm shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 transition-all duration-300"
            >
                Nhận tài liệu
            </button>
        </header>
    );
}