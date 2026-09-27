import { useState } from 'react';
import { trackEvent } from '../utils/tracking';

export default function Quiz({ onOpenModal }: { onOpenModal: () => void }) {
    const [step, setStep] = useState(0);

    const handleSelect = (interest: string) => {
        setStep(2);
        trackEvent('quiz_complete', { interest });
    };

    return (
        <section className="py-24 bg-[#0B1020] border-y border-white/5 text-center">
            <div className="max-w-3xl mx-auto px-6">
                <h3 className="text-3xl font-bold mb-8">Bạn nên bắt đầu học công nghệ từ đâu?</h3>

                {step === 0 && (
                    <button
                        onClick={() => { setStep(1); trackEvent('quiz_start'); }}
                        className="bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] px-8 py-3 rounded-full transition-all duration-300"
                    >
                        Bắt đầu bài trắc nghiệm (1 phút)
                    </button>
                )}

                {step === 1 && (
                    <div className="flex flex-col gap-4 max-w-md mx-auto">
                        <p className="text-gray-400 mb-4">Bạn đang quan tâm nhất đến lĩnh vực nào?</p>
                        {['Digital Marketing', 'Data Analytics', 'AI & Machine Learning', 'Web Development'].map(opt => (
                            <button
                                key={opt}
                                onClick={() => handleSelect(opt)}
                                className="p-4 border border-white/10 rounded-lg text-left font-bold text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:-translate-y-1 transition-all duration-300"
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                )}

                {step === 2 && (
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 shadow-[0_10px_30px_rgba(37,99,235,0.2)] max-w-lg mx-auto transform transition-all">
                        <h4 className="text-2xl font-bold mb-2">Gợi ý dành riêng cho bạn!</h4>
                        <p className="text-gray-300 mb-6">Chúng tôi đã tìm thấy bộ tài liệu phù hợp với định hướng của bạn.</p>
                        <button
                            onClick={onOpenModal}
                            className="bg-blue-600 text-white w-full py-3 rounded-xl font-bold hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-1 transition-all duration-300"
                        >
                            Nhận tài liệu chuyên ngành ngay →
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}