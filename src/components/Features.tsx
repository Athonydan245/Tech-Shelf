export default function Features() {
    return (
        <section id="books" className="py-20 bg-[#0B1020] text-white text-center">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-4">Tại Sao Chọn TECHSHELF?</h2>
                <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                    Thư viện được biên soạn bởi các chuyên gia thực chiến, tập trung vào giá trị chuyển đổi và ứng dụng ngay vào công việc.
                </p>
                <div className="grid md:grid-cols-3 gap-8 text-left">
                    {/* Card 1 */}
                    <div className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-300 cursor-default">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-xl font-bold">⚡</div>
                        <h3 className="text-xl font-bold mb-3">Đón Đầu Xu Hướng AI</h3>
                        <p className="text-gray-400 text-sm">Tiếp cận các báo cáo, tài liệu mới nhất về việc ứng dụng Trí tuệ nhân tạo (AI) vào tự động hóa Marketing.</p>
                    </div>
                    {/* Card 2 */}
                    <div className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-purple-500/30 hover:-translate-y-2 transition-all duration-300 cursor-default">
                        <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6 text-xl font-bold">📊</div>
                        <h3 className="text-xl font-bold mb-3">Tối Ưu Chuyển Đổi (CRO)</h3>
                        <p className="text-gray-400 text-sm">Cung cấp bộ công cụ đo lường, case study phân tích hành vi người dùng bằng Data giúp tăng tỷ lệ chốt sale.</p>
                    </div>
                    {/* Card 3 */}
                    <div className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-green-500/30 hover:-translate-y-2 transition-all duration-300 cursor-default">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6 text-xl font-bold">⚙️</div>
                        <h3 className="text-xl font-bold mb-3">Thực Chiến & Kỹ Thuật</h3>
                        <p className="text-gray-400 text-sm">Không chỉ lý thuyết. Tài liệu hướng dẫn chi tiết cách thiết lập Tracking, code Web cơ bản và vận hành CRM.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}