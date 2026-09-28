import { useState } from 'react';
import { trackEvent } from '../utils/tracking';

export default function LeadFormSection() {
    const [status, setStatus] = useState<'idle' | 'success'>('idle');
    const [phoneError, setPhoneError] = useState<string>('');

    const submitLead = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const phone = formData.get('phone') as string;
        const fullname = formData.get('fullname') as string;
        const email = formData.get('email') as string;
        const interest = formData.get('interest') as string;

        const phoneRegex = /^0[0-9]{9,10}$/;
        if (!phoneRegex.test(phone)) {
            setPhoneError('Vui lòng nhập số điện thoại hợp lệ (Bắt đầu bằng số 0, gồm 10-11 số).');
            return;
        }

        setPhoneError('');

        // NGHIỆP VỤ LƯU DỮ LIỆU (Lưu vào LocalStorage của trình duyệt)
        const newLead = {
            fullname,
            email,
            phone,
            interest,
            source: sessionStorage.getItem('utm_source') || 'Direct',
            date: new Date().toLocaleString('vi-VN')
        };

        const existingLeads = JSON.parse(localStorage.getItem('techshelf_leads') || '[]');
        existingLeads.push(newLead);
        localStorage.setItem('techshelf_leads', JSON.stringify(existingLeads));

        trackEvent('lead_form_submit', { utm_source: newLead.source });
        setStatus('success');
    };

    return (
        <section id="register-form" className="py-20 bg-[#080B12] flex justify-center px-6">
            <div className="max-w-5xl w-full bg-[#0B1020] rounded-3xl overflow-hidden flex flex-col md:flex-row border border-white/10 shadow-[0_10px_50px_rgba(0,0,0,0.8)]">

                {/* Cột trái */}
                <div className="md:w-2/5 bg-gradient-to-br from-blue-700 to-[#0a1128] p-10 text-white flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-4 leading-tight">Gia nhập cộng đồng tinh hoa số</h3>
                    <p className="text-blue-100 mb-8 text-sm leading-relaxed">
                        Thay vì tốn hàng tháng trời tự tìm tòi giữa biển thông tin nhiễu loạn, hãy để TECHSHELF trang bị cho bạn hệ thống kiến thức đã được kiểm chứng.
                    </p>
                    <ul className="space-y-5 text-sm font-medium">
                        <li className="flex items-start gap-3"><span className="text-blue-400 mt-0.5">✓</span> <span><strong className="text-white">100+ Ebook & Template thực chiến</strong></span></li>
                        <li className="flex items-start gap-3"><span className="text-blue-400 mt-0.5">✓</span> <span><strong className="text-white">Báo cáo xu hướng AI & Data</strong></span></li>
                        <li className="flex items-start gap-3"><span className="text-blue-400 mt-0.5">✓</span> <span><strong className="text-white">Đặc quyền trọn đời, hoàn toàn miễn phí</strong></span></li>
                    </ul>
                </div>

                {/* Cột phải (Form) */}
                <div className="md:w-3/5 p-10 bg-[#0B1020]">
                    {status === 'success' ? (
                        <div className="h-full flex flex-col items-center justify-center text-center">
                            <div className="text-5xl mb-4">🎉</div>
                            <h3 className="text-2xl font-bold text-white mb-2">Đăng Ký Thành Công!</h3>
                            <p className="text-gray-400">Hệ thống đang chuẩn bị tài liệu. Vui lòng kiểm tra email của bạn nhé.</p>
                        </div>
                    ) : (
                        <>
                            <h3 className="text-2xl font-bold text-white mb-6">Đăng Ký Nhận Tài Liệu</h3>
                            <form onSubmit={submitLead} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">Họ và Tên <span className="text-red-500">*</span></label>
                                    <input required name="fullname" type="text" placeholder="Vd: Nguyễn Quang Huy" className="w-full p-3 bg-[#080B12] border border-white/20 rounded-lg text-white focus:border-blue-500 outline-none" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">Email <span className="text-red-500">*</span></label>
                                        <input required name="email" type="email" placeholder="email@example.com" className="w-full p-3 bg-[#080B12] border border-white/20 rounded-lg text-white focus:border-blue-500 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">Số điện thoại <span className="text-red-500">*</span></label>
                                        <input required name="phone" type="tel" placeholder="09xx xxx xxx" className={`w-full p-3 bg-[#080B12] border rounded-lg text-white outline-none ${phoneError ? 'border-red-500' : 'border-white/20 focus:border-blue-500'}`} />
                                        {phoneError && <p className="text-red-500 text-xs mt-1 font-medium">{phoneError}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">Lĩnh vực quan tâm <span className="text-red-500">*</span></label>
                                    <select required name="interest" className="w-full p-3 bg-[#080B12] border border-white/20 rounded-lg text-white focus:border-blue-500 outline-none">
                                        <option value="" className="text-gray-500">Chọn chủ đề bạn muốn học...</option>
                                        <option value="Digital Marketing">Digital Marketing</option>
                                        <option value="Data Analytics">Data Analytics</option>
                                        <option value="AI & Machine Learning">AI & Machine Learning</option>
                                        <option value="Web Development">Web Development</option>
                                    </select>
                                </div>

                                <label className="flex items-start gap-3 text-sm text-gray-400 mt-4">
                                    <input type="checkbox" required className="mt-1.5 rounded bg-[#080B12] border-white/20" />
                                    <span className="leading-relaxed">Tôi đồng ý nhận tài liệu qua email và xác nhận đã hiểu rõ <a href="#" className="text-blue-500 hover:underline">Chính sách bảo mật</a>.</span>
                                </label>

                                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg mt-4 hover:bg-blue-500 transition-all">
                                    Nhận Tài Liệu Ngay
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}