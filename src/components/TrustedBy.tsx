export default function TrustedBy() {
    return (
        <section className="py-12 border-y border-white/5 bg-[#080B12]">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">
                    Được tin dùng bởi các chuyên gia từ
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="text-2xl font-bold text-white">TechCorp</span>
                    <span className="text-2xl font-bold text-white">GlobalMedia</span>
                    <span className="text-2xl font-bold text-white italic">NextGen</span>
                    <span className="text-2xl font-bold text-white tracking-widest">DATAHUB</span>
                </div>
            </div>
        </section>
    );
}