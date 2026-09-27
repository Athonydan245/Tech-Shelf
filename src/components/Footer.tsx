export default function Footer() {
    return (
        <footer className="bg-[#050810] py-12 border-t border-white/10 text-gray-400 text-sm">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                <div>
                    <h4 className="text-xl font-bold text-white mb-4">TECHSHELF</h4>
                    <p className="mb-4">Kho tàng tri thức mở giúp bạn làm chủ công nghệ, làm chủ sự nghiệp trong kỷ nguyên số.</p>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-4">Chính sách</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white transition">Điều khoản sử dụng</a></li>
                        <li><a href="#" className="hover:text-white transition">Chính sách bảo mật</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-4">Liên hệ</h4>
                    <ul className="space-y-2">
                        <li>Email: support@techshelf.vn</li>
                        <li>Hotline: 09xx xxx xxx</li>
                    </ul>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center">
                <p>© 2026 TECHSHELF. Dự án mô phỏng Digital Marketing.</p>
            </div>
        </footer>
    );
}