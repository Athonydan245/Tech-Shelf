import { useState } from 'react';
import { trackEvent } from '../utils/tracking';

export default function LeadModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [status, setStatus] = useState<'idle' | 'success'>('idle');

    const submitLead = (e: React.FormEvent) => {
        e.preventDefault();
        trackEvent('lead_form_submit', {
            utm_source: sessionStorage.getItem('utm_source') || 'direct',
            device: window.innerWidth < 768 ? 'mobile' : 'desktop'
        });
        setStatus('success');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#0B1020] border border-blue-500/30 p-8 rounded-2xl w-full max-w-md relative shadow-2xl">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl">✕</button>

                {status === 'success' ? (
                    <div className="text-center py-8">
                        <div className="text-5xl mb-4">🎉</div>
                        <h3 className="text-2xl font-bold text-green-400 mb-2">Đăng ký thành công!</h3>
                        <p className="text-gray-300">Bộ tài liệu Digital Starter Kit đã được chuẩn bị sẵn sàng gửi cho bạn.</p>
                    </div>
                ) : (
                    <>
                        <h3 className="text-2xl font-bold mb-2">Nhận Digital Starter Kit 2026</h3>
                        <p className="text-gray-400 text-sm mb-6">Gồm 50 công cụ, 30+ KPI và Template Kế hoạch Marketing.</p>
                        <form onSubmit={submitLead} className="flex flex-col gap-4">
                            <input required type="text" placeholder="Họ và tên *" className="p-3 bg-[#080B12] border border-gray-700 rounded-lg text-white focus:border-blue-500 outline-none" />
                            <input required type="email" placeholder="Email *" className="p-3 bg-[#080B12] border border-gray-700 rounded-lg text-white focus:border-blue-500 outline-none" />
                            <select required className="p-3 bg-[#080B12] border border-gray-700 rounded-lg text-gray-400 focus:border-blue-500 outline-none">
                                <option value="">Lĩnh vực quan tâm *</option>
                                <option value="dm">Digital Marketing</option>
                                <option value="data">Data Analytics</option>
                                <option value="ai">AI & Machine Learning</option>
                                <option value="web">Web Development</option>
                                <option value="ux">UX/UI Design</option>
                            </select>
                            <button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 p-4 rounded-lg font-bold mt-2 transition-transform hover:scale-[1.02]">
                                Nhận tài liệu ngay →
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}