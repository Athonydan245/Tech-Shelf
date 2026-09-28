import { trackEvent } from '../utils/tracking';

export default function Hero({ onOpenModal, lang }: { onOpenModal: () => void, lang: 'vi' | 'en' }) {
    return (
        <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto text-center relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6 relative z-10">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-sm text-gray-300">
                    {lang === 'vi' ? 'Hơn +12.000 người đã tải tài liệu' : 'Over 12,000+ resources downloaded'}
                </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 relative z-10 leading-tight">
                {lang === 'vi' ? 'Kho tri thức công nghệ' : 'The Ultimate Tech Hub'} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    {lang === 'vi' ? 'dành cho thế hệ số.' : 'for the digital generation.'}
                </span>
            </h2>

            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg relative z-10">
                {lang === 'vi'
                    ? 'Sách, ebook và tài liệu công nghệ được tuyển chọn giúp bạn học nhanh hơn, hiểu sâu hơn và bắt kịp thế giới công nghệ.'
                    : 'Curated books, ebooks, and tech resources to help you learn faster, understand deeper, and stay ahead in the tech world.'}
            </p>

            <div className="flex justify-center gap-4 relative z-10">
                <button onClick={() => { trackEvent('hero_cta_click'); onOpenModal(); }} className="bg-blue-600 px-8 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1 transition-all duration-300">
                    {lang === 'vi' ? 'Nhận tài liệu miễn phí →' : 'Get Free Resources →'}
                </button>
            </div>
        </section>
    );
}