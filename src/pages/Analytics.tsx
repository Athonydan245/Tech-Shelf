import { useState, useEffect } from 'react';

export default function Analytics() {
    const [visitors, setVisitors] = useState(5240);
    const [clicks, setClicks] = useState(3144);
    const [formOpens, setFormOpens] = useState(1572);
    const [leads, setLeads] = useState(482);

    const conversionRate = ((leads / visitors) * 100).toFixed(1);

    useEffect(() => {
        const interval = setInterval(() => {
            const newVisitors = Math.floor(Math.random() * 3) + 1;
            setVisitors(prev => prev + newVisitors);
            if (Math.random() > 0.4) setClicks(prev => prev + 1);
            if (Math.random() > 0.7) setFormOpens(prev => prev + 1);
            if (Math.random() > 0.9) setLeads(prev => prev + 1);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-[#080B12] text-white p-8 font-sans selection:bg-blue-500/30">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold flex items-center gap-3">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">TECHSHELF</span>
                            Digital Marketing Dashboard
                        </h1>
                        <p className="text-gray-400 mt-2">Dữ liệu minh họa phục vụ bài tập Digital Marketing (Looker Studio Demo)</p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-lg text-sm text-green-400 flex items-center gap-2 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Live Tracking Active
                    </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                    <div className="bg-[#0B1020] p-6 rounded-2xl border border-white/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-white/20 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        <p className="text-gray-400 text-sm mb-2">Total Visitors</p>
                        <h3 className="text-4xl font-bold text-white transition-all">{visitors.toLocaleString()}</h3>
                        <p className="text-green-500 text-sm mt-2 flex items-center gap-1">↑ Đang tăng</p>
                    </div>
                    <div className="bg-[#0B1020] p-6 rounded-2xl border border-white/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-white/20 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        <p className="text-gray-400 text-sm mb-2">Leads Generated</p>
                        <h3 className="text-4xl font-bold text-blue-400 transition-all">{leads.toLocaleString()}</h3>
                        <p className="text-green-500 text-sm mt-2 flex items-center gap-1">↑ Cập nhật liên tục</p>
                    </div>
                    <div className="bg-[#0B1020] p-6 rounded-2xl border border-white/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-white/20 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        <p className="text-gray-400 text-sm mb-2">Conversion Rate</p>
                        <h3 className="text-4xl font-bold text-white transition-all">{conversionRate}%</h3>
                        <p className="text-green-500 text-sm mt-2 flex items-center gap-1">↑ 1.1% so với tháng trước</p>
                    </div>
                    <div className="bg-[#0B1020] p-6 rounded-2xl border border-white/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-white/20 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        <p className="text-gray-400 text-sm mb-2">Cost Per Lead (Mock)</p>
                        <h3 className="text-4xl font-bold text-white">12,500đ</h3>
                        <p className="text-green-500 text-sm mt-2 flex items-center gap-1">↓ Giảm 5.0%</p>
                    </div>
                </div>

                {/* Charts Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#0B1020] p-6 rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:border-white/20 transition-colors duration-300">
                        <h3 className="text-xl font-bold mb-6 text-white">Conversion Funnel</h3>
                        <div className="space-y-4">
                            <div className="relative h-12 bg-[#080B12] rounded-lg overflow-hidden flex items-center px-4 border border-white/5">
                                <div className="absolute left-0 top-0 h-full bg-blue-600/30 w-full transition-all duration-500"></div>
                                <span className="relative z-10 w-32 text-gray-300">Page Views</span>
                                <span className="relative z-10 ml-auto font-bold text-white">{visitors.toLocaleString()}</span>
                            </div>
                            <div className="relative h-12 bg-[#080B12] rounded-lg overflow-hidden flex items-center px-4 border border-white/5">
                                <div className="absolute left-0 top-0 h-full bg-blue-600/40 w-[60%] transition-all duration-500"></div>
                                <span className="relative z-10 w-32 text-gray-300">Button Clicks</span>
                                <span className="relative z-10 ml-auto font-bold text-white">{clicks.toLocaleString()} ({((clicks / visitors) * 100).toFixed(0)}%)</span>
                            </div>
                            <div className="relative h-12 bg-[#080B12] rounded-lg overflow-hidden flex items-center px-4 border border-white/5">
                                <div className="absolute left-0 top-0 h-full bg-blue-600/60 w-[30%] transition-all duration-500"></div>
                                <span className="relative z-10 w-32 text-gray-300">Form Opens</span>
                                <span className="relative z-10 ml-auto font-bold text-white">{formOpens.toLocaleString()} ({((formOpens / visitors) * 100).toFixed(0)}%)</span>
                            </div>
                            <div className="relative h-12 bg-[#080B12] rounded-lg overflow-hidden flex items-center px-4 border border-white/5">
                                <div className="absolute left-0 top-0 h-full bg-green-500/40 transition-all duration-500" style={{ width: `${conversionRate}%` }}></div>
                                <span className="relative z-10 w-32 text-gray-300">Leads (Success)</span>
                                <span className="relative z-10 ml-auto font-bold text-green-400">{leads.toLocaleString()} ({conversionRate}%)</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#0B1020] p-6 rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:border-white/20 transition-colors duration-300">
                        <h3 className="text-xl font-bold mb-6 text-white">Traffic by Channel</h3>
                        <ul className="space-y-5 text-sm text-gray-300">
                            <li className="flex justify-between items-center bg-[#080B12] p-3 rounded-lg border border-white/5">
                                <span className="flex items-center gap-3"><div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div> Facebook Ads</span>
                                <span className="font-bold text-white">45%</span>
                            </li>
                            <li className="flex justify-between items-center bg-[#080B12] p-3 rounded-lg border border-white/5">
                                <span className="flex items-center gap-3"><div className="w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div> Organic Search (SEO)</span>
                                <span className="font-bold text-white">30%</span>
                            </li>
                            <li className="flex justify-between items-center bg-[#080B12] p-3 rounded-lg border border-white/5">
                                <span className="flex items-center gap-3"><div className="w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div> Direct</span>
                                <span className="font-bold text-white">15%</span>
                            </li>
                            <li className="flex justify-between items-center bg-[#080B12] p-3 rounded-lg border border-white/5">
                                <span className="flex items-center gap-3"><div className="w-3 h-3 bg-gray-500 rounded-full"></div> Referral</span>
                                <span className="font-bold text-white">10%</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}