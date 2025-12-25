"use client";

import React, { useState } from "react";
import { Info, AlertCircle, TrendingUp, Ship, Droplet, ArrowRight, CheckCircle2 } from "lucide-react";

type System = "gulf" | "midcon";
type Scenario = "base" | "late" | "stress";

export function SchedulingCockpit() {
    const [selectedSystem, setSelectedSystem] = useState<System>("gulf");
    const [selectedScenario, setSelectedScenario] = useState<Scenario>("base");

    const data = {
        gulf: {
            base: {
                movements: 3,
                volume: "680,000 bbl",
                conflicts: 0,
                description: "Feasible next-day schedule with no major disruptions applied.",
                table: [
                    { id: "GC-01", asset: "Enbridge Mainline", type: "Pipeline", product: "WCS", volume: "50,000 bbl", window: "2025-03-02 06:00 → 18:00", location: "Cushing → Gulf Coast", status: "Planned", icon: <TrendingUp className="h-3 w-3 text-sky-400" /> },
                    { id: "GC-02", asset: "Chevron Tank 401 → 407", type: "Tank Transfer", product: "Maya", volume: "30,000 bbl", window: "2025-03-02 08:00 → 11:00", location: "Gulf Coast Terminal A", status: "Planned", icon: <Droplet className="h-3 w-3 text-indigo-400" /> },
                    { id: "GC-03", asset: "MT Gulf Voyager", type: "Vessel Discharge", product: "Mixed Crude", volume: "600,000 bbl", window: "2025-03-02 13:00 → 02:00", location: "Berth 3", status: "Planned", icon: <Ship className="h-3 w-3 text-emerald-400" /> },
                ],
                utilization: 42,
                occupancy: 12
            },
            late: {
                movements: 3,
                volume: "680,000 bbl",
                conflicts: 1,
                description: "MT Gulf Voyager delayed 18 hours. Dock availability mismatch detected.",
                table: [
                    { id: "GC-01", asset: "Enbridge Mainline", type: "Pipeline", product: "WCS", volume: "50,000 bbl", window: "2025-03-02 06:00 → 18:00", location: "Cushing → Gulf Coast", status: "Planned", icon: <TrendingUp className="h-3 w-3 text-sky-400" /> },
                    { id: "GC-02", asset: "Chevron Tank 401 → 407", type: "Tank Transfer", product: "Maya", volume: "30,000 bbl", window: "2025-03-02 08:00 → 11:00", location: "Gulf Coast Terminal A", status: "Planned", icon: <Droplet className="h-3 w-3 text-indigo-400" /> },
                    { id: "GC-03", asset: "MT Gulf Voyager", type: "Vessel Discharge", product: "Mixed Crude", volume: "600,000 bbl", window: "2025-03-03 07:00 → 20:00", location: "Berth 3", status: "Delayed", icon: <Ship className="h-3 w-3 text-amber-400" />, highlight: true },
                ],
                utilization: 38,
                occupancy: 45
            },
            stress: {
                movements: 4,
                volume: "820,000 bbl",
                conflicts: 2,
                description: "Upstream pipeline surge. Tank 401 approaching high-high level alarm.",
                table: [
                    { id: "GC-01", asset: "Enbridge Mainline", type: "Pipeline", product: "WCS", volume: "120,000 bbl", window: "2025-03-02 06:00 → 18:00", location: "Cushing → Gulf Coast", status: "Critical", icon: <TrendingUp className="h-3 w-3 text-rose-400" />, highlight: true },
                    { id: "GC-02", asset: "Chevron Tank 401 → 407", type: "Tank Transfer", product: "Maya", volume: "30,000 bbl", window: "2025-03-02 08:00 → 11:00", location: "Gulf Coast Terminal A", status: "Planned", icon: <Droplet className="h-3 w-3 text-indigo-400" /> },
                    { id: "GC-03", asset: "MT Gulf Voyager", type: "Vessel Discharge", product: "Mixed Crude", volume: "600,000 bbl", window: "2025-03-02 13:00 → 02:00", location: "Berth 3", status: "Planned", icon: <Ship className="h-3 w-3 text-emerald-400" /> },
                    { id: "GC-04", asset: "Capline", type: "Pipeline", product: "LLS", volume: "70,000 bbl", window: "2025-03-02 10:00 → 22:00", location: "St. James → Terminal B", status: "Planned", icon: <TrendingUp className="h-3 w-3 text-sky-400" /> },
                ],
                utilization: 94,
                occupancy: 12
            }
        },
        midcon: {
            base: {
                movements: 2,
                volume: "120,000 bbl",
                conflicts: 0,
                description: "Normal product distribution schedule for Midcon region.",
                table: [
                    { id: "MC-01", asset: "Explorer Pipeline", type: "Pipeline", product: "ULSD", volume: "80,000 bbl", window: "2025-03-02 04:00 → 16:00", location: "Houston → Tulsa", status: "Planned", icon: <TrendingUp className="h-3 w-3 text-sky-400" /> },
                    { id: "MC-02", asset: "Truck Rack B", type: "Rack Loading", product: "Gasoline", volume: "40,000 bbl", window: "2025-03-02 00:00 → 23:59", location: "Wichita Terminal", status: "Active", icon: <Droplet className="h-3 w-3 text-indigo-400" /> },
                ],
                utilization: 55,
                occupancy: 0
            },
            late: {
                movements: 2,
                volume: "120,000 bbl",
                conflicts: 1,
                description: "Rack maintenance delay. Loading queues exceeding 4 hours.",
                table: [
                    { id: "MC-01", asset: "Explorer Pipeline", type: "Pipeline", product: "ULSD", volume: "80,000 bbl", window: "2025-03-02 04:00 → 16:00", location: "Houston → Tulsa", status: "Planned", icon: <TrendingUp className="h-3 w-3 text-sky-400" /> },
                    { id: "MC-02", asset: "Truck Rack B", type: "Rack Loading", product: "Gasoline", volume: "40,000 bbl", window: "2025-03-02 00:00 → 23:59", location: "Wichita Terminal", status: "Congested", icon: <Droplet className="h-3 w-3 text-amber-400" />, highlight: true },
                ],
                utilization: 58,
                occupancy: 0
            },
            stress: {
                movements: 3,
                volume: "185,000 bbl",
                conflicts: 2,
                description: "Severe weather alert. Inventory drawdown for emergency supply.",
                table: [
                    { id: "MC-01", asset: "Explorer Pipeline", type: "Pipeline", product: "ULSD", volume: "80,000 bbl", window: "2025-03-02 04:00 → 16:00", location: "Houston → Tulsa", status: "Planned", icon: <TrendingUp className="h-3 w-3 text-sky-400" /> },
                    { id: "MC-02", asset: "Truck Rack B", type: "Rack Loading", product: "Gasoline", volume: "65,000 bbl", window: "2025-03-02 00:00 → 23:59", location: "Wichita Terminal", status: "Priority", icon: <Droplet className="h-3 w-3 text-indigo-400" /> },
                    { id: "MC-03", asset: "Magellan 12\"", type: "Pipeline", product: "Jet A", volume: "40,000 bbl", window: "2025-03-02 08:00 → 20:00", location: "Kansas City Hub", status: "Active", icon: <TrendingUp className="h-3 w-3 text-rose-400" />, highlight: true },
                ],
                utilization: 82,
                occupancy: 0
            }
        }
    };

    const currentData = data[selectedSystem][selectedScenario];

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
                        <button
                            onClick={() => setSelectedSystem("gulf")}
                            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${selectedSystem === "gulf" ? "bg-amber-600/20 text-amber-200 border border-amber-600/30" : "text-slate-400 hover:text-slate-200"}`}
                        >
                            Gulf Coast Crude
                        </button>
                        <button
                            onClick={() => setSelectedSystem("midcon")}
                            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${selectedSystem === "midcon" ? "bg-amber-600/20 text-amber-200 border border-amber-600/30" : "text-slate-400 hover:text-slate-200"}`}
                        >
                            Midcon Products
                        </button>
                    </div>

                    <div className="hidden h-8 w-px bg-slate-800 md:block" />

                    <div className="inline-flex rounded-full border border-slate-700 bg-slate-900/50 p-1">
                        <button
                            onClick={() => setSelectedScenario("base")}
                            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${selectedScenario === "base" ? "bg-slate-800 text-slate-200 border border-slate-700" : "text-slate-400 hover:text-slate-200"}`}
                        >
                            Base Plan
                        </button>
                        <button
                            onClick={() => setSelectedScenario("late")}
                            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${selectedScenario === "late" ? "bg-slate-800 text-slate-200 border border-slate-700" : "text-slate-400 hover:text-slate-200"}`}
                        >
                            Late Vessel
                        </button>
                        <button
                            onClick={() => setSelectedScenario("stress")}
                            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${selectedScenario === "stress" ? "bg-slate-800 text-slate-200 border border-slate-700" : "text-slate-400 hover:text-slate-200"}`}
                        >
                            Tank Stress
                        </button>
                    </div>
                </div>
            </div>

            <p className="text-xs text-slate-500 mb-4 h-4">
                {currentData.description}
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
                            <p className="text-2xl font-bold text-slate-100 transition-all">{currentData.movements}</p>
                            <p className="text-[0.65rem] text-slate-500 mt-1">
                                Pipelines, tank transfers, and vessels.
                            </p>
                        </div>
                        <div className="rounded-lg border border-slate-800 bg-slate-900/30 p-3">
                            <p className="text-[0.6rem] uppercase tracking-wider text-slate-500 font-semibold mb-1">
                                Total Volume
                            </p>
                            <p className="text-2xl font-bold text-slate-100 transition-all">{currentData.volume}</p>
                            <p className="text-[0.65rem] text-slate-500 mt-1">
                                Across the filtered schedule.
                            </p>
                        </div>
                        <div className="rounded-lg border border-slate-800 bg-slate-900/30 p-3">
                            <p className="text-[0.6rem] uppercase tracking-wider text-slate-500 font-semibold mb-1">
                                Conflicts Flagged
                            </p>
                            <p className={`text-2xl font-bold transition-all ${currentData.conflicts > 0 ? "text-amber-500" : "text-slate-100"}`}>
                                {currentData.conflicts}
                            </p>
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
                                    {currentData.table.map((row) => (
                                        <tr key={row.id} className={`transition-colors ${(row as any).highlight ? "bg-amber-500/5 hover:bg-amber-500/10" : "hover:bg-slate-800/20"}`}>
                                            <td className="px-4 py-3 font-mono text-slate-500">{row.id}</td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-2">
                                                    {row.icon}
                                                    <div>
                                                        <span className="block font-medium text-slate-200">{row.asset}</span>
                                                        <span className="text-[0.6rem] text-slate-500 uppercase">{row.type}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3">{row.product}</td>
                                            <td className="px-4 py-3">{row.volume}</td>
                                            <td className="px-4 py-3 text-[0.65rem] leading-tight text-slate-400">
                                                {row.window.split(" → ").map((part, i) => (
                                                    <React.Fragment key={i}>
                                                        {part}
                                                        {i === 0 && <br />}
                                                        {i === 0 && "→ "}
                                                    </React.Fragment>
                                                ))}
                                            </td>
                                            <td className="px-4 py-3">
                                                {row.location.split(" → ").map((part, i) => (
                                                    <React.Fragment key={i}>
                                                        {part}
                                                        {i === 0 && row.location.includes(" → ") && <><br />→</>}
                                                    </React.Fragment>
                                                ))}
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className={`inline-flex rounded-full px-2 py-0.5 text-[0.6rem] font-medium border ${row.status === "Planned" ? "bg-slate-800 text-slate-300 border-slate-700" :
                                                        row.status === "Delayed" || row.status === "Congested" ? "bg-amber-500/10 text-amber-300 border-amber-500/30" :
                                                            row.status === "Critical" ? "bg-rose-500/10 text-rose-300 border-rose-500/30" :
                                                                "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                                                    }`}>
                                                    {row.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
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

                    {currentData.conflicts === 0 ? (
                        <div className="rounded-lg border border-emerald-900/50 bg-emerald-950/20 p-4 transition-all hover:bg-emerald-950/30">
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
                    ) : (
                        <div className="space-y-4">
                            {selectedScenario === "late" && (
                                <div className="rounded-lg border border-amber-900/50 bg-amber-950/20 p-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <div className="flex items-start gap-3">
                                        <AlertCircle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="text-sm font-semibold text-amber-100">Dock Conflict: Berth 3</h4>
                                            <p className="mt-2 text-xs text-amber-200/70 leading-relaxed">
                                                MT Gulf Voyager delay overlaps with next scheduled arrival at 19:00.
                                            </p>
                                            <button className="mt-3 text-[0.65rem] font-bold text-amber-400 hover:text-amber-300 border border-amber-400/30 px-2 py-1 rounded">
                                                Suggest Alternative
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {selectedScenario === "stress" && (
                                <>
                                    <div className="rounded-lg border border-rose-900/50 bg-rose-950/20 p-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                        <div className="flex items-start gap-3">
                                            <AlertCircle className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
                                            <div>
                                                <h4 className="text-sm font-semibold text-rose-100">Tank 401: Capacity Violation</h4>
                                                <p className="mt-2 text-xs text-rose-200/70 leading-relaxed">
                                                    Projected receipt exceeds available ullage by 12,500 bbl.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-lg border border-amber-900/50 bg-amber-950/20 p-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                        <div className="flex items-start gap-3">
                                            <Info className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                                            <div>
                                                <h4 className="text-sm font-semibold text-amber-100">Suggested Action</h4>
                                                <p className="mt-1 text-xs text-amber-200/70 leading-relaxed">
                                                    Direct Enbridge flow to Tank 405 (Slack) or coordinate rate reduction.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    <div className="mt-8">
                        <div className="h-px bg-slate-800 w-full mb-4"></div>
                        <p className="text-[0.65rem] uppercase tracking-wider text-slate-600 font-semibold mb-3">System Health</p>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-400">Tank Utilization</span>
                                <span className={`font-mono ${currentData.utilization > 90 ? "text-rose-400" : currentData.utilization > 70 ? "text-amber-400" : "text-emerald-400"}`}>
                                    {currentData.utilization}%
                                </span>
                            </div>
                            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                <div
                                    className={`h-full transition-all duration-500 ${currentData.utilization > 90 ? "bg-rose-500" : currentData.utilization > 70 ? "bg-amber-500" : "bg-emerald-500"}`}
                                    style={{ width: `${currentData.utilization}%` }}
                                ></div>
                            </div>
                        </div>
                        {currentData.occupancy > 0 && (
                            <div className="space-y-3 mt-4 animate-in fade-in duration-300">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-slate-400">Berth Occupancy</span>
                                    <span className="text-slate-200 font-mono">{currentData.occupancy}%</span>
                                </div>
                                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                    <div
                                        className="bg-slate-500 h-full transition-all duration-500"
                                        style={{ width: `${currentData.occupancy}%` }}
                                    ></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
