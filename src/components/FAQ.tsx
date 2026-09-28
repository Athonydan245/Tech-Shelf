import { useState } from 'react';

const faqs = [
    {
        q: "Tài liệu này có thực sự miễn phí 100% không hay có phí ẩn?",
        a: "Vâng, toàn bộ tài liệu trong bộ Digital Starter Kit đều hoàn toàn miễn phí. TECHSHELF là một dự án phi lợi nhuận hướng tới cộng đồng, với mong muốn chia sẻ kiến thức chất lượng cao, giúp các bạn sinh viên và người đi làm trong lĩnh vực Công nghệ & Marketing dễ dàng tiếp cận nguồn tài liệu chuẩn quốc tế. Chúng tôi cam kết không có bất kỳ khoản phí ẩn hay yêu cầu nhập thẻ tín dụng nào trong suốt quá trình sử dụng."
    },
    {
        q: "Thông tin cá nhân (Email, Số điện thoại) của tôi có được bảo mật an toàn?",
        a: "Bảo mật dữ liệu của bạn là ưu tiên hàng đầu của chúng tôi. Hệ thống của TECHSHELF tuân thủ nghiêm ngặt các tiêu chuẩn bảo mật. Thông tin bạn cung cấp chỉ được sử dụng với mục đích duy nhất là gửi link tải tài liệu và các bản tin cập nhật kiến thức chuyên ngành hàng tuần. Chúng tôi tuyệt đối không mua bán, trao đổi hay chia sẻ dữ liệu của bạn cho bất kỳ bên thứ ba nào. Bạn hoàn toàn có thể hủy đăng ký (unsubscribe) bất kỳ lúc nào chỉ với một cú click."
    },
    {
        q: "Quy trình nhận tài liệu sau khi điền form diễn ra như thế nào?",
        a: "Rất đơn giản và hoàn toàn tự động! Ngay sau khi bạn nhấn nút 'Nhận Tài Liệu Ngay', hệ thống của chúng tôi sẽ lập tức xử lý thông tin và gửi một email chứa liên kết tải tài liệu (thông qua Google Drive an toàn) đến địa chỉ email bạn vừa cung cấp. Quá trình này thường chỉ mất từ 1 đến 3 phút. Nếu không thấy thư trong Hộp thư đến, bạn vui lòng kiểm tra thêm ở mục Spam (Thư rác) hoặc Promotions (Quảng cáo) nhé."
    },
    {
        q: "Bộ tài liệu của TECHSHELF phù hợp với những đối tượng nào nhất?",
        a: "Bộ tài liệu được các chuyên gia của chúng tôi thiết kế theo lộ trình từ cơ bản đến nâng cao, đặc biệt phù hợp cho: (1) Những bạn mới bắt đầu (Newbies) muốn tìm hiểu bài bản về Digital Marketing, Data Analytics hoặc lập trình Web. (2) Các Marketer muốn trang bị thêm tư duy về dữ liệu và tự động hóa (AI) để thăng tiến. (3) Các Developer muốn hiểu sâu hơn về cách tối ưu hóa trải nghiệm người dùng (UX) và kỹ năng Marketing để tự xây dựng sản phẩm cá nhân."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-[#080B12] text-white border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Câu Hỏi Thường Gặp</h2>
                    <p className="text-gray-400">Giải đáp mọi thắc mắc của bạn trước khi gia nhập cộng đồng TECHSHELF.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-white/10 rounded-xl bg-white/5 overflow-hidden hover:border-white/30 hover:bg-white/10 hover:shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 text-left font-bold text-lg flex justify-between items-center focus:outline-none"
                            >
                                {faq.q}
                                <span className={`text-blue-500 transition-transform duration-300 ml-4 ${openIndex === index ? 'rotate-180' : ''}`}>▼</span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 text-gray-400 text-base leading-relaxed border-t border-white/5 mt-2">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}