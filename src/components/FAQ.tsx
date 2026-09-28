import { useState } from 'react';

const faqsData = {
    vi: [
        {
            q: "Tài liệu này có thực sự miễn phí 100% không hay có phí ẩn?",
            a: "Toàn bộ tài liệu trong bộ Digital Starter Kit đều hoàn toàn miễn phí. TECHSHELF là một dự án phi lợi nhuận hướng tới cộng đồng, với mong muốn chia sẻ kiến thức chất lượng cao, giúp các bạn sinh viên và người đi làm trong lĩnh vực Công nghệ & Marketing dễ dàng tiếp cận nguồn tài liệu chuẩn quốc tế. Chúng tôi cam kết không có bất kỳ khoản phí ẩn hay yêu cầu nhập thẻ tín dụng nào trong suốt quá trình sử dụng."
        },
        {
            q: "Thông tin cá nhân (Email, Số điện thoại) của tôi có được bảo mật an toàn?",
            a: "Chúng tôi tuân thủ nghiêm ngặt các tiêu chuẩn bảo mật dữ liệu toàn cầu (GDPR). Thông tin của bạn (Họ tên, Email, Số điện thoại) được mã hóa đầu cuối và lưu trữ an toàn. Chúng tôi chỉ sử dụng dữ liệu này để định danh tài khoản, gửi link tải tài liệu và cập nhật các báo cáo chuyên ngành mới nhất. TECHSHELF tuyệt đối không mua bán, trao đổi hay chia sẻ dữ liệu người dùng cho bất kỳ bên thứ ba nào dưới mọi hình thức."
        },
        {
            q: "Quy trình nhận tài liệu sau khi điền form diễn ra như thế nào?",
            a: "Rất đơn giản và hoàn toàn tự động! Ngay sau khi bạn nhấn nút 'Nhận Tài Liệu Ngay', hệ thống của chúng tôi sẽ lập tức xử lý thông tin và gửi một email chứa liên kết tải tài liệu (thông qua Google Drive an toàn) đến địa chỉ email bạn vừa cung cấp. Quá trình này thường chỉ mất từ 1 đến 3 phút. Nếu không thấy thư trong Hộp thư đến, bạn vui lòng kiểm tra thêm ở mục Spam (Thư rác) hoặc Promotions (Quảng cáo) nhé."
        },
        {
            q: "Bộ tài liệu của TECHSHELF phù hợp với những đối tượng nào nhất?",
            a: "Bộ tài liệu được các chuyên gia của chúng tôi thiết kế theo lộ trình từ cơ bản đến nâng cao, đặc biệt phù hợp cho: (1) Những bạn mới bắt đầu (Newbies) muốn tìm hiểu bài bản về Digital Marketing, Data Analytics hoặc lập trình Web. (2) Các Marketer muốn trang bị thêm tư duy về dữ liệu và tự động hóa (AI) để thăng tiến. (3) Các Developer muốn hiểu sâu hơn về cách tối ưu hóa trải nghiệm người dùng (UX) và kỹ năng Marketing để tự xây dựng sản phẩm cá nhân."
        }
    ],
    en: [
        {
            q: "Are these resources truly 100% free with no hidden fees?",
            a: "All resources in the Digital Starter Kit are 100% free. TECHSHELF is a community-driven, non-profit project aimed at sharing high-quality knowledge, helping students and professionals in Tech & Marketing easily access international standard resources. We guarantee there are no hidden fees or credit card requirements during your entire experience with us."
        },
        {
            q: "Is my personal information (Email, Phone) securely protected?",
            a: "We strictly adhere to global data protection standards (GDPR). Your information (Name, Email, Phone number) is end-to-end encrypted and safely stored. We only use this data to authenticate your account, send download links, and provide the latest industry reports. TECHSHELF absolutely does not sell, trade, or share user data with any third parties under any circumstances."
        },
        {
            q: "How do I receive the resources after registering?",
            a: "It's very simple and completely automated! Right after you click the 'Get Resources Now' button, our system will process your information and send an email containing the download link (via a secure Google Drive) to the email address you provided. This process usually takes just 1 to 3 minutes. If you don't see the email in your Inbox, please also check your Spam or Promotions folder."
        },
        {
            q: "Who is this resource kit best suited for?",
            a: "The resource kit is designed by our experts following a roadmap from basic to advanced, perfectly suited for: (1) Beginners (Newbies) wanting to learn Digital Marketing, Data Analytics, or Web programming systematically. (2) Marketers wanting to equip themselves with data and automation (AI) mindsets to advance their careers. (3) Developers wanting a deeper understanding of UX optimization and Marketing skills to build their own products."
        }
    ]
};

export default function FAQ({ lang }: { lang: 'vi' | 'en' }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const currentFaqs = faqsData[lang];

    return (
        <section className="py-24 bg-[#080B12] text-white border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">{lang === 'vi' ? 'Câu Hỏi Thường Gặp' : 'Frequently Asked Questions'}</h2>
                    <p className="text-gray-400">{lang === 'vi' ? 'Giải đáp mọi thắc mắc của bạn trước khi gia nhập cộng đồng TECHSHELF.' : 'Answers to all your questions before joining the TECHSHELF community.'}</p>
                </div>

                <div className="space-y-4">
                    {currentFaqs.map((faq, index) => (
                        <div key={index} className="border border-white/10 rounded-xl bg-white/5 overflow-hidden hover:border-white/30 hover:bg-white/10 hover:shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-300">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 text-left font-bold text-lg flex justify-between items-center focus:outline-none"
                            >
                                {faq.q}
                                <span className={`text-blue-500 transition-transform duration-300 ml-4 ${openIndex === index ? 'rotate-180' : ''}`}>▼</span>
                            </button>
                            <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="p-6 pt-0 text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/5 mt-2">
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