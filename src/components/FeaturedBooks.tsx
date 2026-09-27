import { trackEvent } from '../utils/tracking';

export default function FeaturedBooks({ onOpenModal }: { onOpenModal: () => void }) {
    return (
        <section id="documents" className="py-20 bg-[#080B12] text-white border-y border-white/5">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                    <div>
                        <h2 className="text-4xl font-bold mb-3">Tài Liệu Nổi Bật Tuần Này</h2>
                        <p className="text-gray-400">Hơn 10,000+ marketer và developer đã áp dụng thành công.</p>
                    </div>
                    <button
                        onClick={() => { trackEvent('view_all_books'); onOpenModal(); }}
                        className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                    >
                        Đăng ký để xem tất cả →
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-white/30 hover:-translate-y-2 transition-all duration-300 flex flex-col group cursor-pointer">
                        <div className="h-48 bg-[#1a233a] flex items-center justify-center p-4 transition-colors group-hover:bg-[#1f2947]">
                            <div className="w-32 h-40 bg-white rounded flex items-center justify-center shadow-lg border-l-4 border-blue-500 group-hover:scale-105 transition-transform duration-300">
                                <div className="text-center px-2">
                                    <p className="text-[8px] text-gray-500 mb-1">EBOOK</p>
                                    <h4 className="text-gray-900 font-bold text-sm leading-tight">AI &<br />Content<br />Marketing</h4>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex gap-2 mb-3">
                                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded font-medium">AI</span>
                                <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded font-medium">Content</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Cẩm Nang AI Content 2026</h3>
                            <p className="text-gray-400 text-sm mb-6 flex-1">100+ prompt và quy trình xây dựng hệ thống nội dung tự động đa nền tảng.</p>
                            <button onClick={() => { trackEvent('featured_book_click', { book: 'AI Content' }); onOpenModal(); }} className="text-blue-400 font-bold hover:text-blue-300 flex items-center gap-2">
                                Nhận tài liệu miễn phí <span className="group-hover:translate-x-2 transition-transform">→</span>
                            </button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-purple-500/30 hover:-translate-y-2 transition-all duration-300 flex flex-col group cursor-pointer">
                        <div className="h-48 bg-[#2d1b4e] flex items-center justify-center p-4 transition-colors group-hover:bg-[#3b2366]">
                            <div className="w-32 h-40 bg-[#0B1020] rounded flex items-center justify-center shadow-lg border-l-4 border-purple-500 group-hover:scale-105 transition-transform duration-300">
                                <div className="text-center px-2">
                                    <p className="text-[8px] text-purple-400 mb-1">GUIDE</p>
                                    <h4 className="text-white font-bold text-sm leading-tight">Data &<br />Analytics<br />Master</h4>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex gap-2 mb-3">
                                <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded font-medium">Data</span>
                                <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded font-medium">Analytics</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Đo Lường & Tối Ưu UX</h3>
                            <p className="text-gray-400 text-sm mb-6 flex-1">Hướng dẫn setup tracking, đọc chỉ số Looker Studio và tối ưu tỷ lệ chuyển đổi website.</p>
                            <button onClick={() => { trackEvent('featured_book_click', { book: 'Data Analytics' }); onOpenModal(); }} className="text-blue-400 font-bold hover:text-blue-300 flex items-center gap-2">
                                Nhận tài liệu miễn phí <span className="group-hover:translate-x-2 transition-transform">→</span>
                            </button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-green-500/30 hover:-translate-y-2 transition-all duration-300 flex flex-col group cursor-pointer">
                        <div className="h-48 bg-[#114034] flex items-center justify-center p-4 transition-colors group-hover:bg-[#165545]">
                            <div className="w-32 h-40 bg-white rounded flex items-center justify-center shadow-lg border-l-4 border-green-500 group-hover:scale-105 transition-transform duration-300">
                                <div className="text-center px-2">
                                    <p className="text-[8px] text-gray-500 mb-1">WORKBOOK</p>
                                    <h4 className="text-gray-900 font-bold text-sm leading-tight">Coding for<br />Marketers</h4>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex gap-2 mb-3">
                                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded font-medium">Code</span>
                                <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded font-medium">Tech</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Lập Trình Cho Marketer</h3>
                            <p className="text-gray-400 text-sm mb-6 flex-1">Cơ bản về HTML, CSS, Regex và kỹ thuật crawl dữ liệu (Scraping) không cần nền tảng IT.</p>
                            <button onClick={() => { trackEvent('featured_book_click', { book: 'Coding' }); onOpenModal(); }} className="text-blue-400 font-bold hover:text-blue-300 flex items-center gap-2">
                                Nhận tài liệu miễn phí <span className="group-hover:translate-x-2 transition-transform">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}