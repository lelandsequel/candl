import { Info, AlertCircle, TrendingUp, Ship, Droplet, ArrowRight, CheckCircle2 } from "lucide-react";

export function SchedulingCockpit() {
    return (
        <div className="w-full rounded-xl border border-slate-800 bg-[#0B1121] p-6 shadow-2xl shadow-black/50 overflow-hidden font-sans">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-amber-500">
                            Scheduling Cockpit (Demo)
                        </p>
                        <h3 className="mt-1 text-xl font-semibold text-slate-100">
                            See tomorrow's barrel flows, not someone's spreadsheet
                        </h3>
                        <p className="mt-2 text-sm text-slate-400 max-w-2xl">
                            Flip between systems and scenarios to see how ChevronLift represents crude & product
                            movements, flags conflicts, and surfaces suggested actions schedulers can actually use.
                        </p>
                    </div>
                    <div className="hidden lg:block rounded-lg border border-slate-800 bg-slate-900/50 p-4 max-w-xs">
                        <h4 className="text-[0.65rem] font-bold uppercase tracking-wider text-amber-500 mb-2">
                            How to play with this demo
                        </h4>
                        <ol className="space-y-1 text-xs text-slate-400 list-decimal list-inside">
                            <li>Pick a system (Gulf crude vs. Midcon products).</li>
                            <li>Switch between Base, Late Vessel, and Tank Stress.</li>
                            <li>Watch the plan and conflicts update together.</li>
                        </ol>
                    </div>
                </div>

                {/* Controls */}
                <div className="mt-6 flex flex-wrap gap-4">
                    <div className="inline-flex rounded-full border border-slate-700 bg-slate-900/50 p-1">
                        <button className="rounded-full bg-amber-600/20 px-4 py-1.5 text-xs font-medium text-amber-200 border border-amber-600/30">
                            Gulf Coast Crude
                        </button>
                        <button className="rounded-full px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors">
                            Midcon Products
                        </button>
                    </div>

                    <div className="hidden h-8 w-px bg-slate-800 md:block" />

                    <div className="inline-flex rounded-full border border-slate-700 bg-slate-900/50 p-1">
                        <button className="rounded-full bg-slate-800 px-4 py-1.5 text-xs font-medium text-slate-200 border border-slate-700">
                            Base Plan
                        </button>
                        <button className="rounded-full px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors">
                            Late Vessel
                        </button>
                        <button className="rounded-full px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors">
                            Tank Stress
                        </button>
                    </div>
                </div>
            </div>

            <p className="text-xs text-slate-500 mb-4">
                Feasible next-day schedule with no major disruptions applied.
            </p>

            {/* Main Grid */}
            <div className="grid gap-6 lg:grid-cols-3">
                {/* Left Column: Stats & Table */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-3">
                        <div className="rounded-lg border border-slate-800 bg-slate-900/30 p-3">
                            <p className="text-[0.6rem] uppercase tracking-wider text-slate-500 font-semibold mb-1">
                                Movements in View
                            </p>
                            <p className="text-2xl font-bold text-slate-100">3</p>
                            <p className="text-[0.65rem] text-slate-500 mt-1">
                                Pipelines, tank transfers, and vessels.
                            </p>
                        </div>
                        <div className="rounded-lg border border-slate-800 bg-slate-900/30 p-3">
                            <p className="text-[0.6rem] uppercase tracking-wider text-slate-500 font-semibold mb-1">
                                Total Volume
                            </p>
                            <p className="text-2xl font-bold text-slate-100">680,000 bbl</p>
                            <p className="text-[0.65rem] text-slate-500 mt-1">
                                Across the filtered schedule.
                            </p>
                        </div>
                        <div className="rounded-lg border border-slate-800 bg-slate-900/30 p-3">
                            <p className="text-[0.6rem] uppercase tracking-wider text-slate-500 font-semibold mb-1">
                                Conflicts Flagged
                            </p>
                            <p className="text-2xl font-bold text-slate-100">0</p>
                            <p className="text-[0.65rem] text-slate-500 mt-1">
                                Issues requiring scheduler judgment.
                            </p>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="rounded-lg border border-slate-800 bg-slate-900/20 overflow-hidden">
                        <div className="bg-slate-900/50 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                            <p className="text-[0.65rem] uppercase tracking-wider text-slate-400 font-bold">
                                Movement Plan (Demo Data)
                            </p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs">
                                <thead className="bg-slate-900/30 text-slate-500">
                                    <tr>
                                        <th className="px-4 py-3 font-medium">ID</th>
                                        <th className="px-4 py-3 font-medium">Asset</th>
                                        <th className="px-4 py-3 font-medium">Product</th>
                                        <th className="px-4 py-3 font-medium">Volume</th>
                                        <th className="px-4 py-3 font-medium">Window</th>
                                        <th className="px-4 py-3 font-medium">Location</th>
                                        <th className="px-4 py-3 font-medium">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/50 text-slate-300">
                                    <tr className="hover:bg-slate-800/20 transition-colors">
                                        <td className="px-4 py-3 font-mono text-slate-500">GC-01</td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2">
                                                <TrendingUp className="h-3 w-3 text-sky-400" />
                                                <div>
                                                    <span className="block font-medium text-slate-200">Enbridge Mainline</span>
                                                    <span className="text-[0.6rem] text-slate-500 uppercase">Pipeline</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">WCS</td>
                                        <td className="px-4 py-3">50,000 bbl</td>
                                        <td className="px-4 py-3 text-[0.65rem] leading-tight text-slate-400">
                                            2025-03-02 06:00
                                            <br />
                                            → 2025-03-02 18:00
                                        </td>
                                        <td className="px-4 py-3">
                                            Cushing →
                                            <br />
                                            Gulf Coast
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className="inline-flex rounded-full bg-slate-800 px-2 py-0.5 text-[0.6rem] font-medium text-slate-300 border border-slate-700">
                                                Planned
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-slate-800/20 transition-colors">
                                        <td className="px-4 py-3 font-mono text-slate-500">GC-02</td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2">
                                                <Droplet className="h-3 w-3 text-indigo-400" />
                                                <div>
                                                    <span className="block font-medium text-slate-200">Chevron Tank 401 → 407</span>
                                                    <span className="text-[0.6rem] text-slate-500 uppercase">Tank Transfer</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">Maya</td>
                                        <td className="px-4 py-3">30,000 bbl</td>
                                        <td className="px-4 py-3 text-[0.65rem] leading-tight text-slate-400">
                                            2025-03-02 08:00
                                            <br />
                                            → 2025-03-02 11:00
                                        </td>
                                        <td className="px-4 py-3">
                                            Gulf Coast
                                            <br />
                                            Terminal A
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className="inline-flex rounded-full bg-slate-800 px-2 py-0.5 text-[0.6rem] font-medium text-slate-300 border border-slate-700">
                                                Planned
                                            </span>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-slate-800/20 transition-colors">
                                        <td className="px-4 py-3 font-mono text-slate-500">GC-03</td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2">
                                                <Ship className="h-3 w-3 text-emerald-400" />
                                                <div>
                                                    <span className="block font-medium text-slate-200">MT Gulf Voyager</span>
                                                    <span className="text-[0.6rem] text-slate-500 uppercase">Vessel Discharge</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">Mixed Crude</td>
                                        <td className="px-4 py-3">600,000 bbl</td>
                                        <td className="px-4 py-3 text-[0.65rem] leading-tight text-slate-400">
                                            2025-03-02 13:00
                                            <br />
                                            → 2025-03-04 02:00
                                        </td>
                                        <td className="px-4 py-3">
                                            Berth 3
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className="inline-flex rounded-full bg-slate-800 px-2 py-0.5 text-[0.6rem] font-medium text-slate-300 border border-slate-700">
                                                Planned
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Right Column: Conflicts & Risk */}
                <div className="rounded-lg border border-slate-800 bg-slate-900/20 p-4 h-full">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-amber-500 mb-2">
                        Conflicts & Risk (Demo)
                    </p>
                    <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                        Operational issues surfaced for this system and scenario — things schedulers
                        care about before traders feel it in P&L.
                    </p>

                    <div className="rounded-lg border border-emerald-900/50 bg-emerald-950/20 p-4">
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-sm font-semibold text-emerald-100">No conflicts detected.</h4>
                                <p className="mt-2 text-xs text-emerald-200/70 leading-relaxed">
                                    For this demo scenario, ChevronLift doesn't see any projected tank, dock,
                                    or compatibility issues.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="h-px bg-slate-800 w-full mb-4"></div>
                        <p className="text-[0.65rem] uppercase tracking-wider text-slate-600 font-semibold mb-3">System Health</p>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-400">Tank Utilization</span>
                                <span className="text-emerald-400 font-mono">42%</span>
                            </div>
                            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-emerald-500 h-full w-[42%]"></div>
                            </div>
                        </div>
                        <div className="space-y-3 mt-4">
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-400">Berth Occupancy</span>
                                <span className="text-slate-200 font-mono">12%</span>
                            </div>
                            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-slate-500 h-full w-[12%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
