const featuresData = {
    vi: {
        title: "Tại Sao Chọn TECHSHELF?",
        subtitle: "Không chỉ là một kho tài liệu khô khan, TECHSHELF là hệ sinh thái kiến thức được tinh luyện bởi các chuyên gia thực chiến. Chúng tôi tập trung vào 3 trụ cột chính giúp bạn thăng tiến vượt bậc trong kỷ nguyên số.",
        cards: [
            {
                icon: "⚡",
                title: "Đón Đầu Xu Hướng AI",
                desc: "Tiếp cận kho tàng báo cáo phân tích sâu sắc về cách Trí tuệ nhân tạo đang tái thiết lập cuộc chơi. Bạn sẽ học được:\n• Cách sử dụng ChatGPT để viết 100 bài chuẩn SEO/ngày.\n• Tự động hóa kịch bản trả lời khách hàng.\n• Thiết kế hình ảnh, video với Midjourney không cần biết PTS.",
                color: "blue"
            },
            {
                icon: "📊",
                title: "Tối Ưu Chuyển Đổi (CRO)",
                desc: "Dữ liệu là mỏ vàng, và chúng tôi chỉ cho bạn cách khai thác nó. Khám phá các Case Study thực tế về:\n• Thiết lập Google Tag Manager & GA4 chuẩn chỉnh.\n• Đọc vị hành vi người dùng qua bản đồ nhiệt (Heatmap).\n• A/B Testing Landing Page để tăng 200% tỷ lệ chốt Sale.",
                color: "purple"
            },
            {
                icon: "⚙️",
                title: "Thực Chiến & Kỹ Thuật",
                desc: "Thoát khỏi vùng an toàn của dân kinh tế để trang bị vũ khí công nghệ. Bộ tài liệu đặc tả rõ:\n• Nắm vững tư duy logic của HTML, CSS và JavaScript cơ bản.\n• Cách viết các Regex (Biểu thức chính quy) để cào dữ liệu (Scraping).\n• Vận hành trơn tru hệ thống quản trị CRM.",
                color: "green"
            }
        ]
    },
    en: {
        title: "Why Choose TECHSHELF?",
        subtitle: "Not just a dry document repository, TECHSHELF is an ecosystem of knowledge refined by practical experts. We focus on 3 main pillars to help you make a breakthrough in the digital era.",
        cards: [
            {
                icon: "⚡",
                title: "Stay Ahead of AI Trends",
                desc: "Access a treasure trove of in-depth analytical reports on how Artificial Intelligence is resetting the game. You will learn:\n• How to use ChatGPT to write 100 SEO articles/day.\n• Automate customer response scripts.\n• Design images and videos with Midjourney without Photoshop skills.",
                color: "blue"
            },
            {
                icon: "📊",
                title: "Conversion Rate Optimization",
                desc: "Data is a goldmine, and we show you how to exploit it. Explore real Case Studies on:\n• Setting up standard Google Tag Manager & GA4.\n• Reading user behavior through Heatmaps.\n• A/B Testing Landing Pages to increase Sales closing rates by 200%.",
                color: "purple"
            },
            {
                icon: "⚙️",
                title: "Practical & Technical",
                desc: "Step out of your comfort zone to equip yourself with technological weapons. The documentation specifies:\n• Master the logical thinking of basic HTML, CSS, and JavaScript.\n• How to write Regex (Regular Expressions) for data scraping.\n• Smoothly operate CRM management systems.",
                color: "green"
            }
        ]
    }
};

export default function Features({ lang }: { lang: 'vi' | 'en' }) {
    const data = featuresData[lang];

    return (
        <section id="books" className="py-24 bg-[#0B1020] text-white text-center">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">{data.title}</h2>
                <p className="text-gray-400 mb-16 max-w-3xl mx-auto text-lg leading-relaxed">{data.subtitle}</p>

                <div className="grid lg:grid-cols-3 gap-10 text-left">
                    {data.cards.map((card, idx) => (
                        <div key={idx} className={`p-10 border border-white/10 rounded-3xl bg-white/5 hover:bg-white/10 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:border-${card.color}-500/40 hover:-translate-y-3 transition-all duration-500 cursor-default flex flex-col group`}>
                            <div className={`w-16 h-16 bg-${card.color}-500/20 text-${card.color}-400 rounded-2xl flex items-center justify-center mb-8 text-3xl shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:scale-110 transition-transform duration-300`}>
                                {card.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 tracking-wide">{card.title}</h3>
                            <div className="text-gray-400 text-sm md:text-base leading-relaxed space-y-3 flex-1">
                                {card.desc.split('\n').map((line, i) => (
                                    <p key={i} className={line.startsWith('•') ? "ml-2 flex items-start gap-2" : "mb-2 font-medium text-gray-300"}>
                                        {line.startsWith('•') ? (
                                            <><span className={`text-${card.color}-400 mt-1`}>▹</span> <span>{line.substring(2)}</span></>
                                        ) : line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}