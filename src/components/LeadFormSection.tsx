import { useState } from 'react';
import { trackEvent } from '../utils/tracking';

export default function LeadFormSection({ lang }: { lang: 'vi' | 'en' }) {
    const [status, setStatus] = useState<'idle' | 'success'>('idle');
    const [phoneError, setPhoneError] = useState<string>('');

    const submitLead = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const phone = formData.get('phone') as string;

        if (!/^0[0-9]{9,10}$/.test(phone)) {
            setPhoneError(lang === 'vi' ? 'Vui lòng nhập đúng số điện thoại (10-11 số).' : 'Please enter a valid phone number.');
            return;
        }
        setPhoneError('');

        const newLead = {
            fullname: formData.get('fullname'), email: formData.get('email'),
            phone, interest: formData.get('interest'),
            source: sessionStorage.getItem('utm_source') || 'Direct',
            date: new Date().toLocaleString()
        };

        const existingLeads = JSON.parse(localStorage.getItem('techshelf_leads') || '[]');
        localStorage.setItem('techshelf_leads', JSON.stringify([...existingLeads, newLead]));
        trackEvent('lead_form_submit', { utm_source: newLead.source });
        setStatus('success');
    };

    return (
        <section id="register-form" className="py-20 bg-[#080B12] flex justify-center px-6">
            <div className="max-w-5xl w-full bg-[#0B1020] rounded-3xl overflow-hidden flex flex-col md:flex-row border border-white/10 shadow-[0_10px_50px_rgba(0,0,0,0.8)]">

                <div className="md:w-2/5 bg-gradient-to-br from-blue-700 to-[#0a1128] p-10 text-white flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-4">{lang === 'vi' ? 'Gia nhập cộng đồng tinh hoa số' : 'Join the Elite Community'}</h3>
                    <p className="text-blue-100 mb-8 text-sm leading-relaxed">
                        {lang === 'vi' ? 'Hãy để TECHSHELF trang bị cho bạn hệ thống kiến thức đã được kiểm chứng.' : 'Let TECHSHELF equip you with proven industry knowledge and resources.'}
                    </p>
                    <ul className="space-y-5 text-sm font-medium">
                        <li className="flex items-start gap-3"><span className="text-blue-400 mt-0.5">✓</span> <span>{lang === 'vi' ? '100+ Ebook & Template thực chiến' : '100+ Practical Ebooks & Templates'}</span></li>
                        <li className="flex items-start gap-3"><span className="text-blue-400 mt-0.5">✓</span> <span>{lang === 'vi' ? 'Báo cáo xu hướng AI & Data' : 'Weekly AI & Data Trend Reports'}</span></li>
                        <li className="flex items-start gap-3"><span className="text-blue-400 mt-0.5">✓</span> <span>{lang === 'vi' ? 'Đặc quyền trọn đời, miễn phí' : 'Lifetime Access, Completely Free'}</span></li>
                    </ul>
                </div>

                <div className="md:w-3/5 p-10 bg-[#0B1020]">
                    {status === 'success' ? (
                        <div className="h-full flex flex-col items-center justify-center text-center">
                            <div className="text-5xl mb-4">🎉</div>
                            <h3 className="text-2xl font-bold text-white mb-2">{lang === 'vi' ? 'Đăng Ký Thành Công!' : 'Registration Successful!'}</h3>
                            <p className="text-gray-400">{lang === 'vi' ? 'Vui lòng kiểm tra hộp thư email của bạn.' : 'Please check your email inbox for the resources.'}</p>
                        </div>
                    ) : (
                        <>
                            <h3 className="text-2xl font-bold text-white mb-6">{lang === 'vi' ? 'Đăng Ký Nhận Tài Liệu' : 'Register to Get Resources'}</h3>
                            <form onSubmit={submitLead} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">{lang === 'vi' ? 'Họ và Tên' : 'Full Name'} <span className="text-red-500">*</span></label>
                                    <input required name="fullname" type="text" className="w-full p-3 bg-[#080B12] border border-white/20 rounded-lg text-white outline-none focus:border-blue-500" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">Email <span className="text-red-500">*</span></label>
                                        <input required name="email" type="email" className="w-full p-3 bg-[#080B12] border border-white/20 rounded-lg text-white outline-none focus:border-blue-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">{lang === 'vi' ? 'Số điện thoại' : 'Phone Number'} <span className="text-red-500">*</span></label>
                                        <input required name="phone" type="tel" className={`w-full p-3 bg-[#080B12] border rounded-lg text-white outline-none ${phoneError ? 'border-red-500' : 'border-white/20 focus:border-blue-500'}`} />
                                        {phoneError && <p className="text-red-500 text-xs mt-1 font-medium">{phoneError}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">{lang === 'vi' ? 'Lĩnh vực quan tâm' : 'Area of Interest'} <span className="text-red-500">*</span></label>
                                    <select required name="interest" className="w-full p-3 bg-[#080B12] border border-white/20 rounded-lg text-white outline-none focus:border-blue-500">
                                        <option value="" className="text-gray-500">{lang === 'vi' ? 'Chọn chủ đề bạn muốn học...' : 'Select a topic...'}</option>
                                        <option value="Digital Marketing">Digital Marketing</option>
                                        <option value="Data Analytics">Data Analytics</option>
                                        <option value="AI">AI & Machine Learning</option>
                                        <option value="Web">Web Development</option>
                                    </select>
                                </div>

                                <label className="flex items-start gap-3 text-sm text-gray-400 mt-4">
                                    <input type="checkbox" required className="mt-1.5 rounded bg-[#080B12] border-white/20" />
                                    <span className="leading-relaxed">{lang === 'vi' ? 'Tôi đồng ý nhận tài liệu qua email và xác nhận đã hiểu rõ Chính sách bảo mật.' : 'I agree to receive emails and accept the Privacy Policy.'}</span>
                                </label>

                                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg mt-4 hover:bg-blue-500 transition-all">
                                    {lang === 'vi' ? 'Nhận Tài Liệu Ngay' : 'Get Resources Now'}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}