const footerData = {
    vi: {
        desc: "Kho tàng tri thức mở giúp bạn làm chủ công nghệ và tư duy Digital Marketing trong kỷ nguyên số.",
        copyright: "Dự án mô phỏng phục vụ mục đích giáo dục & Assignment.",
        supportTitle: "Hỗ trợ & Liên hệ",
        address: "Địa chỉ: Cần Thơ, Việt Nam",
        credit: "Thiết kế & Phát triển bởi Nguyễn Quang Huy"
    },
    en: {
        desc: "An open knowledge hub to help you master technology and Digital Marketing mindset in the digital era.",
        copyright: "A simulation project for educational purposes & Assignments.",
        supportTitle: "Support & Contact",
        address: "Address: Can Tho, Vietnam",
        credit: "Designed & Developed by Nguyen Quang Huy"
    }
};

export default function Footer({ lang }: { lang: 'vi' | 'en' }) {
    const data = footerData[lang];

    return (
        <footer className="bg-[#050810] pt-16 pb-6 border-t border-white/10 text-gray-400 text-sm">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

                <div>
                    <h4 className="text-2xl font-black text-white mb-4 tracking-widest">TECHSHELF</h4>
                    <p className="mb-4 leading-relaxed text-gray-400">{data.desc}</p>
                    <p className="text-xs text-gray-500">
                        © 2026 TECHSHELF Library. All rights reserved. <br />{data.copyright}
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-4">{data.supportTitle}</h4>
                    <ul className="space-y-2">
                        <li>Email: support@techshelf.vn</li>
                        <li>Hotline: 09xx xxx xxx</li>
                        <li>{data.address}</li>
                    </ul>
                </div>

            </div>

            <div className="max-w-6xl mx-auto px-6 mt-12 pt-6 border-t border-white/5 text-center text-xs text-gray-500">
                <p>{data.credit}.</p>
            </div>
        </footer>
    );
}