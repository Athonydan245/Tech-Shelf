import { useState } from 'react';
import { trackEvent } from '../utils/tracking';

// Bộ 5 câu hỏi phân tích hành vi chuẩn CRO
const quizQuestions = [
    {
        question: "Mục tiêu nghề nghiệp chính của bạn trong 2 năm tới là gì?",
        options: [
            { text: "Quản lý chiến dịch, tối ưu tỷ lệ chuyển đổi và tăng doanh thu.", category: "dm" },
            { text: "Phân tích số liệu phức tạp để đưa ra quyết định chiến lược.", category: "data" },
            { text: "Tự động hóa quy trình làm việc để tăng 10x hiệu suất.", category: "ai" },
            { text: "Tự tay lập trình và xây dựng các sản phẩm công nghệ.", category: "web" }
        ]
    },
    {
        question: "Khi gặp một vấn đề kinh doanh, cách tiếp cận của bạn thường là:",
        options: [
            { text: "Tìm hiểu xem khách hàng đang nghĩ gì và hành vi của họ ra sao.", category: "dm" },
            { text: "Thu thập dữ liệu lịch sử để tìm ra quy luật và nguyên nhân.", category: "data" },
            { text: "Tìm kiếm công cụ hoặc AI mới nhất để giải quyết nhanh gọn.", category: "ai" },
            { text: "Vẽ sơ đồ luồng đi (flowchart) và viết logic xử lý.", category: "web" }
        ]
    },
    {
        question: "Bạn cảm thấy hứng thú nhất khi làm việc với công cụ nào?",
        options: [
            { text: "Facebook Ads, Google Analytics, Canva.", category: "dm" },
            { text: "Excel, Looker Studio, PowerBI, SQL.", category: "data" },
            { text: "ChatGPT, Midjourney, Zapier, Make.", category: "ai" },
            { text: "VS Code, GitHub, Terminal, Figma.", category: "web" }
        ]
    },
    {
        question: "Trở ngại lớn nhất hiện tại trong công việc/học tập của bạn là gì?",
        options: [
            { text: "Chi phí quảng cáo tăng cao, làm content nhưng không ra số.", category: "dm" },
            { text: "Có quá nhiều số liệu nhưng không biết đọc hiểu và gom cụm.", category: "data" },
            { text: "Làm việc thủ công lặp đi lặp lại quá nhiều, tốn thời gian.", category: "ai" },
            { text: "Muốn tự xây dựng landing page/website nhưng mù tịt về Code.", category: "web" }
        ]
    },
    {
        question: "Nếu được tặng một cuốn cẩm nang, bạn sẽ chọn chủ đề nào?",
        options: [
            { text: "Bí quyết viết Content thôi miên & Tối ưu chuyển đổi UX.", category: "dm" },
            { text: "Truy vấn dữ liệu & Nghệ thuật kể chuyện bằng số liệu (Data Storytelling).", category: "data" },
            { text: "Khai thác sức mạnh AI & Kỹ năng Prompt Engineering.", category: "ai" },
            { text: "Nhập môn Lập trình cho người tay ngang (HTML, CSS, JS cơ bản).", category: "web" }
        ]
    }
];

// Data kết quả sách gợi ý
const bookRecommendations: Record<string, any> = {
    dm: {
        title: "Cẩm Nang Digital Marketing & Tối Ưu Chuyển Đổi",
        desc: "Tài liệu hoàn hảo giúp bạn nắm bắt tâm lý khách hàng, viết content sắc bén và tối ưu hóa các chiến dịch quảng cáo ra số thực tế.",
        tag: "Marketing", color: "blue"
    },
    data: {
        title: "Đo Lường & Tối Ưu UX Bằng Data Analytics",
        desc: "Bí kíp đọc vị dữ liệu từ Google Analytics, Looker Studio để tìm ra 'điểm mù' trên website và tăng trưởng doanh thu dựa trên số liệu.",
        tag: "Data", color: "purple"
    },
    ai: {
        title: "Cẩm Nang AI Content & Automation 2026",
        desc: "Hơn 100+ prompt và quy trình ứng dụng AI để tự động hóa công việc viết lách, thiết kế và quản trị chiến dịch Marketing.",
        tag: "AI", color: "cyan"
    },
    web: {
        title: "Lập Trình Cơ Bản (Coding) Dành Cho Marketer",
        desc: "Không cần nền tảng IT. Cuốn sách giúp bạn hiểu bản chất HTML/CSS/JS, tự gắn mã Tracking và làm chủ hoàn toàn các nền tảng Web.",
        tag: "Code", color: "green"
    }
};

export default function Quiz({ onOpenModal }: { onOpenModal: () => void }) {
    const [step, setStep] = useState(0); // 0: Start, 1: Quiz, 2: Result
    const [currentQ, setCurrentQ] = useState(0);
    const [scores, setScores] = useState({ dm: 0, data: 0, ai: 0, web: 0 });

    const handleAnswer = (category: string) => {
        const newScores = { ...scores, [category as keyof typeof scores]: scores[category as keyof typeof scores] + 1 };
        setScores(newScores);
        if (currentQ < quizQuestions.length - 1) {
            setCurrentQ(currentQ + 1);
        } else {
            setStep(2);
            trackEvent('quiz_complete', { top_category: getTopCategory(newScores) });
        }
    };

    const getTopCategory = (finalScores = scores) => {
        return Object.keys(finalScores).reduce((a, b) => finalScores[a as keyof typeof finalScores] > finalScores[b as keyof typeof finalScores] ? a : b);
    };

    const topCat = getTopCategory();
    const recommendedBook = bookRecommendations[topCat];

    return (
        <section className="py-24 bg-[#0B1020] border-y border-white/5 text-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-3xl mx-auto px-6 relative z-10">

                {step === 0 && (
                    <div className="py-10">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Bạn nên bắt đầu học công nghệ từ đâu?</h3>
                        <p className="text-gray-400 mb-10 max-w-xl mx-auto">Thực hiện bài kiểm tra 5 câu hỏi (chưa tới 1 phút) để hệ thống phân tích định hướng và đề xuất bộ tài liệu phù hợp nhất với năng lực của bạn.</p>
                        <button
                            onClick={() => { setStep(1); trackEvent('quiz_start'); }}
                            className="bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] px-10 py-4 rounded-full font-bold transition-all duration-300 hover:-translate-y-1"
                        >
                            Bắt đầu bài trắc nghiệm ngay
                        </button>
                    </div>
                )}

                {step === 1 && (
                    <div className="max-w-2xl mx-auto text-left">
                        {/* Progress Bar */}
                        <div className="mb-8">
                            <div className="flex justify-between text-xs text-gray-400 mb-2 font-bold">
                                <span>Câu hỏi {currentQ + 1} / {quizQuestions.length}</span>
                                <span>Hoàn thành {((currentQ) / quizQuestions.length) * 100}%</span>
                            </div>
                            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-blue-500 transition-all duration-500 ease-out"
                                    style={{ width: `${((currentQ) / quizQuestions.length) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        <h4 className="text-2xl font-bold text-white mb-6 leading-relaxed">
                            {quizQuestions[currentQ].question}
                        </h4>

                        <div className="flex flex-col gap-4">
                            {quizQuestions[currentQ].options.map((opt, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswer(opt.category)}
                                    className="p-5 border border-white/10 rounded-xl text-left font-medium text-gray-300 bg-white/5 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 hover:shadow-[0_5px_15px_rgba(37,99,235,0.15)] hover:-translate-y-1 transition-all duration-300"
                                >
                                    {opt.text}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-2 text-white">Kết quả phân tích hồ sơ!</h3>
                        <p className="text-gray-400 mb-8">Dựa trên câu trả lời, chúng tôi nhận thấy bạn có tiềm năng cực lớn trong mảng <strong className="text-blue-400">{recommendedBook.tag}</strong>. Đây là ấn phẩm dành riêng cho bạn:</p>

                        <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.4)] transform transition-all text-left mb-8 backdrop-blur-md relative overflow-hidden">
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-${recommendedBook.color}-500/20 blur-[50px]`}></div>

                            <span className={`inline-block px-3 py-1 bg-${recommendedBook.color}-500/20 text-${recommendedBook.color}-400 text-xs font-bold rounded mb-4`}>
                                GỢI Ý PHÙ HỢP NHẤT
                            </span>
                            <h4 className="text-2xl font-bold text-white mb-3">{recommendedBook.title}</h4>
                            <p className="text-gray-300 text-sm leading-relaxed mb-6">{recommendedBook.desc}</p>

                            <button
                                onClick={onOpenModal}
                                className={`bg-${recommendedBook.color}-600 text-white w-full py-4 rounded-xl font-bold hover:bg-${recommendedBook.color}-500 hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300`}
                                style={{ backgroundColor: recommendedBook.color === 'blue' ? '#2563eb' : recommendedBook.color === 'purple' ? '#9333ea' : recommendedBook.color === 'cyan' ? '#0891b2' : '#16a34a' }}
                            >
                                Tải ngay cẩm nang này →
                            </button>
                        </div>

                        <div className="border-t border-white/10 pt-6">
                            <p className="text-sm text-gray-400 mb-4">Hoặc mở khóa toàn bộ Thư viện tri thức (Bao gồm sách gợi ý và 100+ tài liệu chuyên ngành khác).</p>
                            <button onClick={onOpenModal} className="text-blue-400 font-bold hover:text-blue-300 underline underline-offset-4">
                                Đăng ký nhận trọn bộ Starter Kit
                            </button>
                        </div>

                    </div>
                )}
            </div>
        </section>
    );
}