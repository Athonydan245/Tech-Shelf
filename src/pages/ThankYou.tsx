import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { trackEvent } from '../utils/tracking';

export default function ThankYou() {
    const navigate = useNavigate();

    useEffect(() => {
        // Bắn sự kiện Conversion (Chuyển đổi thành công) cho Facebook/Google
        trackEvent('generate_lead_success', { page: 'Thank You Page' });
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#080B12] text-white flex items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-2xl w-full bg-[#0B1020] border border-white/10 rounded-3xl p-10 md:p-16 text-center relative z-10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <div className="w-24 h-24 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-8 text-5xl">
                    ✓
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Đăng ký thành công!</h1>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    Tài liệu đang được hệ thống đóng gói. Vui lòng kiểm tra <strong>Hộp thư đến</strong> (hoặc mục Spam/Quảng cáo) của bạn trong vòng 1-3 phút tới.
                </p>

                <div className="p-6 bg-blue-900/20 border border-blue-500/30 rounded-2xl mb-8 text-left">
                    <h3 className="font-bold text-blue-400 mb-2">🚀 Bước tiếp theo (Quan trọng):</h3>
                    <p className="text-sm text-gray-300 mb-4">
                        Hãy tham gia vào Nhóm Zalo kín của TECHSHELF để nhận thông báo mỗi khi có bản cập nhật tài liệu mới và giao lưu cùng các chuyên gia.
                    </p>
                    <a href="https://zalo.me" target="_blank" rel="noreferrer" className="inline-block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all shadow-[0_5px_20px_rgba(37,99,235,0.4)] hover:-translate-y-1">
                        Tham gia Nhóm Zalo Cộng Đồng
                    </a>
                </div>

                <button onClick={() => navigate('/')} className="text-gray-400 hover:text-white transition-colors underline underline-offset-4">
                    ← Quay lại trang chủ
                </button>
            </div>
        </div>
    );
}