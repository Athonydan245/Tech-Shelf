import { useState } from 'react';
import { trackEvent, getCookie } from '../utils/tracking';
import { useNavigate } from 'react-router-dom';

const formContent = {
    vi: {
        title: "Mở Khóa Toàn Bộ Kho Báu Tri Thức",
        desc: "Thay vì tốn hàng chục giờ tự chắp vá kiến thức rải rác trên mạng, bộ Digital Starter Kit này sẽ cung cấp cho bạn một lộ trình hệ thống, thực chiến và hoàn toàn miễn phí. Điền form ngay để nhận quyền truy cập tức thì.",
        bullets: [
            { title: "100+ Ebook & Template thực chiến", detail: "Bao gồm các mẫu kế hoạch Marketing, kịch bản chốt sale và lộ trình tự học Code được thiết kế sẵn." },
            { title: "Báo cáo xu hướng AI & Data", detail: "Insights thị trường cập nhật hàng quý giúp bạn đi trước đối thủ một bước trong ngành." },
            { title: "Đặc quyền VIP trọn đời", detail: "Tham gia cộng đồng kín hỗ trợ chuyên môn và nhận bản cập nhật tài liệu mới mỗi tháng." }
        ],
        formTitle: "Đăng Ký Nhận Tài Liệu",
        labels: { name: "Họ và Tên", email: "Email", phone: "Số điện thoại", interest: "Lĩnh vực quan tâm", select: "Chọn chủ đề bạn muốn học..." },
        policy: "Tôi đồng ý nhận tài liệu qua email và xác nhận đã hiểu rõ Chính sách bảo mật.",
        btn: "Nhận Tài Liệu Ngay",
        errorPhone: "Vui lòng nhập số điện thoại hợp lệ (Bắt đầu bằng số 0, gồm 10-11 số)."
    },
    en: {
        title: "Unlock The Ultimate Knowledge Vault",
        desc: "Instead of spending dozens of hours piecing together scattered information online, this Digital Starter Kit provides you with a systematic, practical, and entirely free roadmap. Fill out the form now for instant access.",
        bullets: [
            { title: "100+ Practical Ebooks & Templates", detail: "Includes ready-to-use Marketing plan templates, sales scripts, and self-taught coding roadmaps." },
            { title: "AI & Data Trend Reports", detail: "Quarterly updated market insights to help you stay one step ahead of your competitors." },
            { title: "Lifetime VIP Privileges", detail: "Join our private community for professional support and receive new resource updates every month." }
        ],
        formTitle: "Register for Resources",
        labels: { name: "Full Name", email: "Email", phone: "Phone Number", interest: "Area of Interest", select: "Select a topic..." },
        policy: "I agree to receive resources via email and acknowledge the Privacy Policy.",
        btn: "Get Resources Now",
        errorPhone: "Please enter a valid phone number."
    }
};

export default function LeadFormSection({ lang }: { lang: 'vi' | 'en' }) {
    const [phoneError, setPhoneError] = useState<string>('');
    const data = formContent[lang];
    const navigate = useNavigate();

    const submitLead = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const phone = formData.get('phone') as string;

        if (!/^0[0-9]{9,10}$/.test(phone)) {
            setPhoneError(data.errorPhone);
            return;
        }
        setPhoneError('');

        const newLead = {
            fullname: formData.get('fullname'),
            email: formData.get('email'),
            phone,
            interest: formData.get('interest'),
            source: getCookie('utm_source') || 'Direct/Organic',
            date: new Date().toLocaleString('vi-VN')
        };

        const existingLeads = JSON.parse(localStorage.getItem('techshelf_leads') || '[]');
        localStorage.setItem('techshelf_leads', JSON.stringify([...existingLeads, newLead]));

        console.log("🚀 [WEBHOOK FIRED] Đang đẩy dữ liệu sang hệ thống CRM để nuôi dưỡng Lead...");
        console.log(JSON.stringify(newLead, null, 2));

        trackEvent('lead_form_submit', { utm_source: newLead.source });

        navigate('/thank-you');
    };

    return (
        <section id="register-form" className="py-24 bg-[#080B12] flex justify-center px-4 md:px-6">
            <div className="max-w-6xl w-full bg-[#0B1020] rounded-[2rem] overflow-hidden flex flex-col lg:flex-row border border-white/10 shadow-[0_15px_60px_rgba(0,0,0,0.6)]">

                <div className="lg:w-5/12 bg-gradient-to-br from-blue-700 via-blue-900 to-[#0a1128] p-10 md:p-14 text-white flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full"></div>

                    <h3 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight relative z-10">{data.title}</h3>
                    <p className="text-blue-100/90 mb-10 text-sm md:text-base leading-relaxed relative z-10">
                        {data.desc}
                    </p>

                    <ul className="space-y-6 relative z-10">
                        {data.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/30 flex items-center justify-center mt-1">
                                    <span className="text-blue-300 text-sm">✓</span>
                                </div>
                                <div>
                                    <strong className="block text-white text-base mb-1">{bullet.title}</strong>
                                    <span className="text-blue-200/70 text-sm leading-relaxed block">{bullet.detail}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:w-7/12 p-10 md:p-14 bg-[#0B1020]">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">{data.formTitle}</h3>
                    <form onSubmit={submitLead} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">{data.labels.name} <span className="text-red-500">*</span></label>
                            <input required name="fullname" type="text" className="w-full p-4 bg-[#080B12] border border-white/10 rounded-xl text-white outline-none focus:border-blue-500 focus:bg-white/5 transition-all" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">{data.labels.email} <span className="text-red-500">*</span></label>
                                <input required name="email" type="email" className="w-full p-4 bg-[#080B12] border border-white/10 rounded-xl text-white outline-none focus:border-blue-500 focus:bg-white/5 transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">{data.labels.phone} <span className="text-red-500">*</span></label>
                                <input required name="phone" type="tel" className={`w-full p-4 bg-[#080B12] border rounded-xl text-white outline-none transition-all focus:bg-white/5 ${phoneError ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-blue-500'}`} />
                                {phoneError && <p className="text-red-500 text-xs mt-2 font-medium">{phoneError}</p>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">{data.labels.interest} <span className="text-red-500">*</span></label>
                            <select required name="interest" className="w-full p-4 bg-[#080B12] border border-white/10 rounded-xl text-white outline-none focus:border-blue-500 focus:bg-white/5 transition-all cursor-pointer">
                                <option value="" className="bg-[#0B1020] text-gray-400">{data.labels.select}</option>
                                <option value="Digital Marketing" className="bg-[#0B1020] text-white py-2">Digital Marketing</option>
                                <option value="Data Analytics" className="bg-[#0B1020] text-white py-2">Data Analytics</option>
                                <option value="AI" className="bg-[#0B1020] text-white py-2">AI & Machine Learning</option>
                                <option value="Web" className="bg-[#0B1020] text-white py-2">Web Development</option>
                            </select>
                        </div>

                        <label className="flex items-start gap-3 text-sm text-gray-400 mt-6 cursor-pointer group">
                            <input type="checkbox" required className="mt-1 w-4 h-4 rounded bg-[#080B12] border-white/20 accent-blue-600" />
                            <span className="leading-relaxed group-hover:text-gray-300 transition-colors">{data.policy}</span>
                        </label>

                        <button type="submit" className="w-full bg-blue-600 text-white text-lg font-bold py-4 rounded-xl mt-4 shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:bg-blue-500 hover:shadow-[0_15px_30px_rgba(37,99,235,0.5)] hover:-translate-y-1 transition-all duration-300">
                            {data.btn}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}