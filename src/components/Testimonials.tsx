export default function Testimonials() {
    return (
        <section className="py-20 bg-[#080B12] text-white text-center">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-12">Cộng đồng nói gì về chúng tôi?</h2>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                    {/* Review 1 */}
                    <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-white/30 hover:-translate-y-2 transition-all duration-300 cursor-default">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gray-400 rounded-full overflow-hidden">
                                <div className="w-full h-full bg-blue-300"></div>
                            </div>
                            <div>
                                <h4 className="font-bold">Nguyễn Huy</h4>
                                <p className="text-xs text-gray-400">Digital Marketing Lead</p>
                            </div>
                            <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                        </div>
                        <p className="text-gray-300 text-sm italic">"Kiến thức cực kỳ thực chiến. Nhờ cuốn 'Đo Lường & Tối Ưu UX', team mình đã cải thiện được tốc độ tải trang web và tăng tỷ lệ chuyển đổi form lên 35% chỉ trong 1 tháng."</p>
                    </div>
                    {/* Review 2 */}
                    <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-white/30 hover:-translate-y-2 transition-all duration-300 cursor-default">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gray-400 rounded-full overflow-hidden">
                                <div className="w-full h-full bg-purple-300"></div>
                            </div>
                            <div>
                                <h4 className="font-bold">Trần Khanh</h4>
                                <p className="text-xs text-gray-400">Software Engineering Student</p>
                            </div>
                            <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                        </div>
                        <p className="text-gray-300 text-sm italic">"Một nguồn tài liệu tuyệt vời để dân IT hiểu hơn về tư duy Marketing. Rất thích cách tài liệu trình bày kiến trúc phân tích dữ liệu một cách logic và rành mạch."</p>
                    </div>
                </div>
            </div>
        </section>
    );
}