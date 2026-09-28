import { trackEvent } from '../utils/tracking';

const booksData = {
    vi: {
        title: "Tài Liệu Nổi Bật Tuần Này",
        subtitle: "Hơn 10,000+ marketer và developer đã tải xuống và áp dụng thành công để tối ưu hóa công việc hàng ngày.",
        cta: "Đăng ký để xem toàn bộ Thư viện →",
        books: [
            {
                type: "EBOOK PREMIUM",
                title: "Cẩm Nang AI Content & Tự Động Hóa 2026",
                desc: "Cuốn sách này là 'bản thiết kế' chi tiết giúp bạn xây dựng một cỗ máy sản xuất nội dung tự động đa nền tảng. Chứa hơn 100+ prompt ChatGPT siêu tinh chỉnh, kịch bản nuôi dưỡng khách hàng bằng AI, và quy trình kết nối API giữa các nền tảng mạng xã hội để đăng bài hàng loạt.",
                tags: ["AI", "Content", "Automation"],
                color: "blue",
                btn: "Tải ngay tài liệu này"
            },
            {
                type: "GUIDE MASTERCLASS",
                title: "Kỹ Thuật Đo Lường & Tối Ưu UX Tới Cùng",
                desc: "Bạn có biết 80% khách hàng thoát trang vì những lỗi UX vô hình? Tài liệu này hướng dẫn chi tiết từ A-Z cách thiết lập mã Tracking nâng cao, cách đọc các chỉ số phức tạp trên Looker Studio, và công thức thiết kế lại giao diện Landing Page dựa trên bản đồ nhiệt (Heatmap) để tối đa hóa tỷ lệ chuyển đổi.",
                tags: ["Data", "Analytics", "CRO"],
                color: "purple",
                btn: "Tải ngay tài liệu này"
            },
            {
                type: "WORKBOOK THỰC CHIẾN",
                title: "Lập Trình Cơ Bản Dành Riêng Cho Marketer",
                desc: "Chấm dứt việc phụ thuộc 100% vào đội ngũ IT! Cuốn sách được viết bằng ngôn ngữ kinh doanh siêu dễ hiểu, giúp Marketer nắm vững nền tảng HTML, CSS để tự tùy biến giao diện, hiểu cách hoạt động của Regex, và nắm trong tay các kỹ thuật thu thập dữ liệu (Scraping) đối thủ một cách hợp pháp.",
                tags: ["Code", "Tech", "No-Code"],
                color: "green",
                btn: "Tải ngay tài liệu này"
            }
        ]
    },
    en: {
        title: "Featured Resources This Week",
        subtitle: "Over 10,000+ marketers and developers have successfully downloaded and applied these to optimize their daily workflows.",
        cta: "Register to view the entire Library →",
        books: [
            {
                type: "PREMIUM EBOOK",
                title: "AI Content & Automation Playbook 2026",
                desc: "This book is a detailed 'blueprint' to help you build an automated multi-platform content production machine. Contains over 100+ hyper-tuned ChatGPT prompts, AI customer nurturing scripts, and API connection workflows between social media platforms for bulk posting.",
                tags: ["AI", "Content", "Automation"],
                color: "blue",
                btn: "Download this resource now"
            },
            {
                type: "MASTERCLASS GUIDE",
                title: "Ultimate UX Measurement & Optimization",
                desc: "Did you know 80% of customers bounce due to invisible UX flaws? This document guides you in detail from A-Z on how to set up advanced Tracking codes, read complex metrics on Looker Studio, and formulas to redesign Landing Pages based on Heatmaps to maximize conversion rates.",
                tags: ["Data", "Analytics", "CRO"],
                color: "purple",
                btn: "Download this resource now"
            },
            {
                type: "PRACTICAL WORKBOOK",
                title: "Basic Programming Specifically for Marketers",
                desc: "Stop relying 100% on the IT team! This book is written in easy-to-understand business language, helping Marketers master the basics of HTML, CSS to customize interfaces themselves, understand how Regex works, and grasp legal competitor data scraping techniques.",
                tags: ["Code", "Tech", "No-Code"],
                color: "green",
                btn: "Download this resource now"
            }
        ]
    }
};

export default function FeaturedBooks({ onOpenModal, lang }: { onOpenModal: () => void, lang: 'vi' | 'en' }) {
    const data = booksData[lang];

    return (
        <section id="documents" className="py-24 bg-[#080B12] text-white border-y border-white/5 relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6 border-b border-white/10 pb-8">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">{data.title}</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">{data.subtitle}</p>
                    </div>
                    <button onClick={() => { trackEvent('view_all_books'); onOpenModal(); }} className="text-blue-400 font-bold hover:text-blue-300 flex items-center gap-2 group transition-colors whitespace-nowrap">
                        {data.cta} <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {data.books.map((book, idx) => (
                        <div key={idx} onClick={onOpenModal} className="bg-[#0B1020] border border-white/10 rounded-3xl overflow-hidden hover:shadow-[0_15px_50px_rgba(0,0,0,0.6)] hover:border-white/30 hover:-translate-y-3 transition-all duration-500 flex flex-col group cursor-pointer h-full">

                            {/* Phần ảnh bìa sách */}
                            <div className={`h-56 flex items-center justify-center p-6 transition-colors duration-500 relative overflow-hidden ${book.color === 'blue' ? 'bg-[#151f38] group-hover:bg-[#1a294d]' : book.color === 'purple' ? 'bg-[#24153f] group-hover:bg-[#341d5e]' : 'bg-[#0f342a] group-hover:bg-[#154a3b]'}`}>
                                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0B1020] to-transparent opacity-50`}></div>
                                <div className={`w-40 h-52 bg-white rounded flex flex-col items-center justify-center shadow-2xl border-l-[6px] border-${book.color}-500 group-hover:scale-110 transition-transform duration-500 relative z-10 ${book.color === 'purple' ? 'bg-[#151928]' : ''}`}>
                                    <div className="text-center px-3">
                                        <p className={`text-[9px] font-black tracking-widest uppercase mb-2 ${book.color === 'purple' ? 'text-purple-400' : 'text-gray-500'}`}>{book.type.split(' ')[1]}</p>
                                        <h4 className={`font-black text-sm leading-snug ${book.color === 'purple' ? 'text-white' : 'text-gray-900'}`}>{book.title.split(' ').slice(0, 4).join('\n')}</h4>
                                    </div>
                                </div>
                            </div>

                            {/* Phần nội dung mô tả */}
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {book.tags.map(tag => <span key={tag} className={`px-3 py-1 bg-${book.color}-500/10 border border-${book.color}-500/20 text-${book.color}-400 text-[10px] uppercase font-bold tracking-wider rounded-md`}>{tag}</span>)}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 leading-snug group-hover:text-blue-300 transition-colors">{book.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">{book.desc}</p>
                                <div className="pt-4 border-t border-white/5 mt-auto">
                                    <button className="text-blue-400 font-bold hover:text-blue-300 flex items-center gap-2 text-sm uppercase tracking-wide">
                                        {book.btn} <span className="group-hover:translate-x-2 transition-transform">→</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}