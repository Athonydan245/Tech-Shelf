export default function TrustedBy({ lang }: { lang: 'vi' | 'en' }) {
    return (
        <section className="py-12 border-b border-white/5 bg-[#080B12]">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-8">
                    {lang === 'vi' ? 'Được tin dùng bởi các chuyên gia từ' : 'Trusted by experts from'}
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Logo 1 */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white">T</div>
                        <span className="text-xl font-bold font-serif text-white">TechCorp</span>
                    </div>
                    {/* Logo 2 */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full border-4 border-blue-500 flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <span className="text-xl font-bold tracking-tighter text-white">GlobalMedia</span>
                    </div>
                    {/* Logo 3 */}
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">NextGen</span>
                    </div>
                    {/* Logo 4 */}
                    <div className="flex items-center gap-2">
                        <div className="grid grid-cols-2 gap-1">
                            <div className="w-3 h-3 bg-purple-500 rounded-sm"></div><div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                            <div className="w-3 h-3 bg-blue-500 rounded-sm"></div><div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
                        </div>
                        <span className="text-xl font-bold tracking-widest text-white">DATAHUB</span>
                    </div>
                </div>
            </div>
        </section>
    );
}