const reviewsData = {
    vi: {
        title: "Cộng đồng nói gì về chúng tôi?",
        reviews: [
            { name: "Nguyễn Huy", role: "Digital Marketing Lead", content: "Kiến thức cực kỳ thực chiến. Nhờ cuốn 'Đo Lường & Tối Ưu UX', team mình đã cải thiện được tốc độ tải trang web và tăng tỷ lệ chuyển đổi form lên 35% chỉ trong 1 tháng.", color: "blue" },
            { name: "Trần Khanh", role: "Software Engineering Student", content: "Một nguồn tài liệu tuyệt vời để dân IT hiểu hơn về tư duy Marketing. Rất thích cách tài liệu trình bày kiến trúc phân tích dữ liệu một cách logic và rành mạch.", color: "purple" }
        ]
    },
    en: {
        title: "What our community says?",
        reviews: [
            { name: "Nguyen Huy", role: "Digital Marketing Lead", content: "Extremely practical knowledge. Thanks to the 'UX Measurement & Optimization' book, our team improved page load speed and increased form conversion rates by 35% in just 1 month.", color: "blue" },
            { name: "Tran Khanh", role: "Software Engineering Student", content: "A wonderful resource for IT professionals to better understand Marketing mindset. I really love how the materials present data analysis architecture logically and clearly.", color: "purple" }
        ]
    }
};

export default function Testimonials({ lang }: { lang: 'vi' | 'en' }) {
    const data = reviewsData[lang];

    return (
        <section className="py-20 bg-[#080B12] text-white text-center">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-12">{data.title}</h2>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                    {data.reviews.map((review, idx) => (
                        <div key={idx} className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-white/30 hover:-translate-y-2 transition-all duration-300 cursor-default">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-gray-400 rounded-full overflow-hidden">
                                    <div className={`w-full h-full bg-${review.color}-300`}></div>
                                </div>
                                <div>
                                    <h4 className="font-bold">{review.name}</h4>
                                    <p className="text-xs text-gray-400">{review.role}</p>
                                </div>
                                <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                            </div>
                            <p className="text-gray-300 text-sm italic">"{review.content}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}