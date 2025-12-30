import React, { useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Line,
    ComposedChart,
    ResponsiveContainer,
    Cell,
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

const FTSECapitalCharts = () => {
    const topChartData = [
        { year: '2016', positive: 90, noReturn: 0, avgTerm: 2.4 },
        { year: '2017', positive: 190, noReturn: 0, avgTerm: 2.4 },
        { year: '2018', positive: 130, noReturn: 0, avgTerm: 2.3 },
        { year: '2019', positive: 95, noReturn: 0, avgTerm: 2.3 },
        { year: '2020', positive: 40, noReturn: 0, avgTerm: 2.4 },
        { year: '2021', positive: 225, noReturn: 0, avgTerm: 2.5 },
        { year: '2022', positive: 300, noReturn: 0, avgTerm: 2.5 },
        { year: '2023', positive: 300, noReturn: 0, avgTerm: 2.5 },
        { year: '2024', positive: 360, noReturn: 0, avgTerm: 2.4 },
        { year: '2025', positive: 335, noReturn: 0, avgTerm: 2.2 },
        { year: 'Decades\navg', positive: 205, noReturn: 0, avgTerm: 2.4 },
    ];

    const [hoveredBarIndex, setHoveredBarIndex] = useState(null);

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white p-5 border border-gray-300 rounded-2xl shadow-2xl text-sm backdrop-blur-md"
                    style={{ boxShadow: '0 15px 35px rgba(0,0,0,0.18)' }}
                >
                    <p className="font-bold text-lg text-gray-800 mb-3">{label}</p>
                    {payload.map((entry, index) => (
                        <p key={index} className="mt-2 flex items-center gap-3">
                            <span className="w-4 h-4 rounded" style={{ backgroundColor: entry.color }}></span>
                            <span className="font-medium">{entry.name}:</span>
                            <span className="font-bold text-emerald-600">
                                {entry.value}{entry.name.includes('Term') ? ' years' : ''}
                            </span>
                        </p>
                    ))}
                    <p className="text-xs text-gray-500 mt-4 italic">Scroll • Hover • Explore</p>
                </motion.div>
            );
        }
        return null;
    };

    const CustomBoxPlot = () => {
        const [hoveredMonth, setHoveredMonth] = useState(null);

        const boxData = [
            { month: 'Jan', min: 5.8, q1: 6.9, median: 7.1, q3: 7.4, max: 8.8 },
            { month: 'Feb', min: 6.2, q1: 7.3, median: 7.6, q3: 7.9, max: 9.4 },
            { month: 'Mar', min: 6.3, q1: 7.5, median: 7.7, q3: 8.0, max: 9.5 },
            { month: 'Apr', min: 5.7, q1: 7.2, median: 7.4, q3: 7.7, max: 9.6 },
            { month: 'May', min: 5.7, q1: 7.1, median: 7.3, q3: 7.6, max: 9.7 },
            { month: 'Jun', min: 5.4, q1: 7.0, median: 7.2, q3: 7.5, max: 9.8 },
            { month: 'Jul', min: 5.4, q1: 6.8, median: 7.0, q3: 7.3, max: 9.3 },
            { month: 'Aug', min: 5.0, q1: 6.9, median: 7.1, q3: 7.4, max: 9.6 },
            { month: 'Sep', min: 6.3, q1: 7.6, median: 7.8, q3: 8.1, max: 9.7 },
            { month: 'Oct', min: 6.5, q1: 7.7, median: 7.9, q3: 8.2, max: 9.4 },
            { month: 'Nov', min: 5.9, q1: 7.2, median: 7.4, q3: 7.7, max: 9.5 },
            { month: 'Dec', min: 5.9, q1: 7.2, median: 7.4, q3: 7.7, max: 9.5 },
        ];

        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        return (
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2 }}
                className="w-full bg-white relative"
            >
                <svg viewBox="0 0 800 540" preserveAspectRatio="xMidYMid meet" className="w-full h-auto">
                    <defs>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Grid Lines */}
                    {[0, 2, 4, 6, 8, 10].map((val, i) => {
                        const y = 360 - (val / 10) * 340;
                        return (
                            <motion.line
                                key={`grid-${val}`}
                                initial={{ pathLength: 0, opacity: 0.4 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 1.3, delay: i * 0.12 }}
                                x1="80" y1={y} x2="720" y2={y}
                                stroke="#e5e7eb" strokeWidth="1.5"
                            />
                        );
                    })}

                    {/* Axes */}
                    <motion.line
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.6, ease: "easeInOut" }}
                        x1="80" y1="20" x2="80" y2="360" stroke="#1f2937" strokeWidth="3"
                    />
                    <motion.line
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
                        x1="80" y1="360" x2="720" y2="360" stroke="#1f2937" strokeWidth="3"
                    />

                    {/* Y-axis Labels */}
                    {[0, 2, 4, 6, 8, 10].map((val, i) => {
                        const y = 360 - (val / 10) * 340;
                        return (
                            <motion.g
                                key={`ylabel-${val}`}
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                            >
                                <text x="70" y={y + 5} fontSize="15" textAnchor="end" fill="#1f2937" fontWeight="600">
                                    {val}%
                                </text>
                            </motion.g>
                        );
                    })}

                    {/* X-axis Labels */}
                    {monthNames.map((month, i) => {
                        const x = 80 + (i + 0.5) * (640 / 12);
                        return (
                            <motion.text
                                key={`month-${i}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.8, delay: i * 0.08 }}
                                x={x} y="385" fontSize="16" textAnchor="middle" fill="#374151" fontWeight="600"
                            >
                                {month}
                            </motion.text>
                        );
                    })}

                    {/* Box Plots */}
                    {boxData.map((data, i) => {
                        const centerX = 80 + (i + 0.5) * (640 / 12);
                        const boxWidth = 38;
                        const isHovered = hoveredMonth === i;

                        const yMax = 360 - (data.max / 10) * 340;
                        const yQ3 = 360 - (data.q3 / 10) * 340;
                        const yMedian = 360 - (data.median / 10) * 340;
                        const yQ1 = 360 - (data.q1 / 10) * 340;
                        const yMin = 360 - (data.min / 10) * 340;

                        return (
                            <motion.g
                                key={i}
                                initial={{ opacity: 0, scaleY: 0.1 }}
                                whileInView={{ opacity: 1, scaleY: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 1, delay: i * 0.1, ease: "backOut" }}
                                style={{ transformOrigin: `${centerX}px 360px` }}
                                onMouseEnter={() => setHoveredMonth(i)}
                                onMouseLeave={() => setHoveredMonth(null)}
                                cursor="pointer"
                            >
                                <motion.line
                                    x1={centerX} y1={yMax} x2={centerX} y2={yQ3}
                                    stroke={isHovered ? "#10b981" : "#374151"}
                                    strokeWidth={isHovered ? 5 : 2}
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.9 }}
                                />
                                <motion.line
                                    x1={centerX} y1={yQ1} x2={centerX} y2={yMin}
                                    stroke={isHovered ? "#10b981" : "#374151"}
                                    strokeWidth={isHovered ? 5 : 2}
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.9, delay: 0.1 }}
                                />

                                <rect x={centerX - 18} y={yMax - 7} width="36" height="14" rx="4" fill="#1f2937" opacity={isHovered ? 1 : 0.9} />
                                <rect x={centerX - 18} y={yMin - 7} width="36" height="14" rx="4" fill="#1f2937" opacity={isHovered ? 1 : 0.9} />

                                <motion.rect
                                    x={centerX - boxWidth / 2}
                                    y={yQ3}
                                    width={boxWidth}
                                    height={Math.max(yQ1 - yQ3, 1)}
                                    fill={isHovered ? "#10b981" : "#01a96b"}
                                    stroke={isHovered ? "#059669" : "#059669"}
                                    strokeWidth={isHovered ? 5 : 2}
                                    rx="8"
                                    filter={isHovered ? "url(#glow)" : ""}
                                    animate={{ scale: isHovered ? 1.2 : 1 }}
                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                />

                                <motion.line
                                    x1={centerX - boxWidth / 2}
                                    y1={yMedian}
                                    x2={centerX + boxWidth / 2}
                                    y2={yMedian}
                                    stroke="#064e3b"
                                    strokeWidth={isHovered ? 6 : 4}
                                />
                            </motion.g>
                        );
                    })}

                    <motion.text
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.2, delay: 0.8 }}
                        x="20" y="190" fontSize="18" fill="#1f2937" fontWeight="bold"
                        transform="rotate(-90, 20, 190)" textAnchor="middle"
                    >
                        Average Annualised Returns (%)
                    </motion.text>
                </svg>

                <AnimatePresence>
                    {hoveredMonth !== null && (
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.9 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="absolute top-12 left-1/2 -translate-x-1/2 bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 text-white p-7 rounded-3xl shadow-2xl pointer-events-none z-50 min-w-[300px] border border-emerald-400"
                        >
                            <h4 className="text-2xl font-bold mb-5 text-center">{boxData[hoveredMonth].month}</h4>
                            <div className="space-y-3 text-sm font-medium">
                                <div className="flex justify-between"><span>Min:</span> <strong>{boxData[hoveredMonth].min.toFixed(1)}%</strong></div>
                                <div className="flex justify-between"><span>Q1:</span> <strong>{boxData[hoveredMonth].q1.toFixed(1)}%</strong></div>
                                <div className="flex justify-between text-yellow-200"><span>Median:</span> <strong>{boxData[hoveredMonth].median.toFixed(1)}%</strong></div>
                                <div className="flex justify-between"><span>Q3:</span> <strong>{boxData[hoveredMonth].q3.toFixed(1)}%</strong></div>
                                <div className="flex justify-between"><span>Max:</span> <strong>{boxData[hoveredMonth].max.toFixed(1)}%</strong></div>
                            </div>
                            <div className="mt-4 pt-3 border-t border-emerald-400 text-xs opacity-90 text-center font-semibold">
                                IQR: {(boxData[hoveredMonth].q3 - boxData[hoveredMonth].q1).toFixed(1)}%
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex flex-wrap justify-center gap-10 mt-12 text-gray-700 text-sm font-medium"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 border-4 border-emerald-700 rounded-lg shadow-lg"></div>
                        <span>Interquartile Range (Q1–Q3)</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-1.5 bg-gray-800"></div>
                        <span>Whiskers (Min–Max)</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-3 bg-emerald-900 rounded"></div>
                        <span>Median</span>
                    </div>
                </motion.div> */}
            </motion.div>
        );
    };

    const years = ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', 'Decade Avg.'];

    const maturityData = [
        { label: 'Number of maturities', values: [85, 187, 128, 97, 40, 227, 307, 300, 363, 338, 207.2] },
        { label: 'Producing positive returns', values: [84, 187, 128, 97, 40, 227, 307, 295, 363, 338, 206.6] },
        { label: 'Returning capital only', values: [1, 0, 0, 0, 0, 0, 0, 5, 0, 0, 6] },
        { label: 'Returning a loss', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { label: 'Average duration (years)', values: [2.38, 2.31, 2.15, 2.15, 2.33, 2.47, 2.54, 2.46, 2.3, 1.98, 2.3] },
    ];

    const returnsData = [
        { label: 'All', values: ['7.17%', '7.62%', '7.71%', '7.41%', '7.31%', '7.23%', '7.06%', '7.17%', '7.84%', '7.85%', '7.44%'] },
        { label: 'Upper quartile', values: ['8.78%', '9.36%', '9.40%', '9.48%', '9.59%', '9.70%', '9.28%', '9.47%', '9.54%', '9.33%', '9.39%'] },
        { label: 'Lower quartile', values: ['5.78%', '6.23%', '6.32%', '5.71%', '5.37%', '5.43%', '5.42%', '5.04%', '6.32%', '6.54%', '5.5%'] },
    ];

    const tableRowVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" }
        })
    };

    return (
        <div className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200  px-4">
            <div className="max-w-7xl mx-auto">

                {/* Hero Dashboard */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-10 mb-16 overflow-hidden"
                >
                    <motion.div
                        initial={{ scale: 0.94 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl sm:text-4xl font-extrabold text-gray-800 mb-4">Decade Performance Dashboard</h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="w-40 h-1.5 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto mb-8 rounded-full"
                        />
                        <p className="text-2xl font-bold text-gray-700">
                            Over 2,000 Maturities | 99.7% Positive Returns | 7.44% Average p.a.
                        </p>
                        <p className="text-sm text-gray-600 mt-4">
                            UK Retail Public Offer FTSE-Linked*, Capital-at-Risk Autocall Maturities 2016 - 2025
                        </p>
                    </motion.div>

                    <div className="space-y-16">
                        {/* Maturity Table */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center lg:text-left">Maturity Outcomes by Year</h3>
                            <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
                                <table className="w-full min-w-[800px] border-collapse text-sm bg-white">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                                            <th className="py-5 px-8 text-left font-bold sticky left-0 z-10 bg-gray-900">Metric</th>
                                            {years.map((year, i) => (
                                                <motion.th
                                                    key={i}
                                                    initial={{ opacity: 0, y: -30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true, amount: 0.3 }}
                                                    transition={{ delay: i * 0.06, duration: 0.6 }}
                                                    className="py-5 px-6 text-center font-bold"
                                                >
                                                    {year.replace('\n', ' ')}
                                                </motion.th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {maturityData.map((row, i) => (
                                            <motion.tr
                                                key={i}
                                                custom={i}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, amount: 0.2 }}
                                                variants={tableRowVariants}
                                                className="border-b border-gray-200 hover:bg-emerald-50 transition-all duration-300"
                                            >
                                                <td className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-5 px-8 font-semibold sticky left-0 z-10 shadow-lg">
                                                    {row.label}
                                                </td>
                                                {row.values.map((val, j) => (
                                                    <td key={j} className="py-5 px-6 text-center font-medium text-gray-800">
                                                        {typeof val === 'number' && row.label.includes('duration') ? val.toFixed(2) : val}
                                                    </td>
                                                ))}
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>

                        {/* Returns Table */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center lg:text-left">Average Annualised Returns</h3>
                            <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
                                <table className="w-full min-w-[800px] border-collapse text-sm bg-white">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                                            <th className="py-5 px-8 text-left font-bold sticky left-0 z-10 bg-gray-900">Category</th>
                                            {years.map((year, i) => (
                                                <motion.th
                                                    key={i}
                                                    initial={{ opacity: 0, y: -30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true, amount: 0.3 }}
                                                    transition={{ delay: i * 0.06, duration: 0.6 }}
                                                    className="py-5 px-6 text-center font-bold"
                                                >
                                                    {year.replace('\n', ' ')}
                                                </motion.th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {returnsData.map((row, i) => (
                                            <motion.tr
                                                key={i}
                                                custom={i}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, amount: 0.2 }}
                                                variants={tableRowVariants}
                                                className="border-b border-gray-200 hover:bg-emerald-50 transition-all duration-300"
                                            >
                                                <td className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-5 px-8 font-semibold sticky left-0 z-10 shadow-lg">
                                                    {row.label}
                                                </td>
                                                {row.values.map((val, j) => (
                                                    <td key={j} className="py-5 px-6 text-center font-bold text-emerald-700">
                                                        {val}
                                                    </td>
                                                ))}
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.3, ease: "easeOut" }}
                    className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-20 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 text-transparent bg-clip-text"
                >
                    FTSE Only Capital at Risk Autocall Plans
                </motion.h1>

                {/* Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Bar + Line Chart */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.3, ease: "easeOut" }}
                        className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-5 mb-10"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.9 }}
                            className="text-3xl font-bold text-gray-800 mb-10 text-center lg:text-left"
                        >
                            Issue Volume & Average Term
                        </motion.h2>

                        <ResponsiveContainer width="100%" >
                            <ComposedChart
                                data={topChartData}
                                margin={{ top: 20, right: 40, left: 30, bottom: 100 }}
                                onMouseLeave={() => setHoveredBarIndex(null)}
                            >
                                <CartesianGrid strokeDasharray="5 5" stroke="#e0e0e0" />
                                <XAxis dataKey="year" tick={{ fontSize: 14, fill: '#444' }} angle={-45} textAnchor="end" height={100} />
                                <YAxis yAxisId="left" label={{ value: 'Issue Volume', angle: -90, position: 'insideLeft', style: { fontSize: '16px', fontWeight: 'bold' } }} domain={[0, 450]} ticks={[0, 100, 200, 300, 400]} tick={{ fill: '#01a96b' }} />
                                <YAxis yAxisId="right" orientation="right" label={{ value: 'Average Term (years)', angle: 90, position: 'insideRight', style: { fontSize: '16px', fontWeight: 'bold' } }} domain={[0, 3]} ticks={[0, 1, 2, 3]} tick={{ fill: '#059669' }} />
                                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(1,169,107,0.12)' }} />
                                <Legend wrapperStyle={{ paddingTop: '40px' }} iconType="rect" />

                                <Bar yAxisId="left" dataKey="positive" name="Positive Returns" barSize={40}>
                                    {topChartData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={hoveredBarIndex === index ? '#10b981' : '#01a96b'}
                                            style={{
                                                cursor: 'pointer',
                                                transition: 'all 0.35s ease',
                                                filter: hoveredBarIndex === index ? 'drop-shadow(0 10px 20px rgba(16,185,129,0.4))' : 'none',
                                                transform: hoveredBarIndex === index ? 'scale(1.07)' : 'scale(1)',
                                                transformOrigin: 'bottom'
                                            }}
                                            onMouseEnter={() => setHoveredBarIndex(index)}
                                        />
                                    ))}
                                </Bar>

                                <Bar yAxisId="left" dataKey="noReturn" fill="#e2e8f0" name="Capital Only" barSize={40} />

                                <Line
                                    yAxisId="right"
                                    type="monotone"
                                    dataKey="avgTerm"
                                    stroke="#059669"
                                    strokeWidth={hoveredBarIndex !== null ? 8 : 6}
                                    name="Avg Term (years)"
                                    dot={{ fill: '#01a96b', r: hoveredBarIndex !== null ? 12 : 10, strokeWidth: 4, stroke: '#fff' }}
                                    activeDot={{ r: 15, stroke: '#10b981', strokeWidth: 5 }}
                                    animationDuration={2200}
                                />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </motion.div>

                    {/* Box Plot */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
                        className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-5 overflow-hidden mb-10"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.9, delay: 0.3 }}
                            className="text-3xl font-bold text-gray-800 mb-10 text-center lg:text-left bg-gradient-to-r from-emerald-600 to-green-700 text-transparent bg-clip-text"
                        >
                            Monthly Distribution of Annualised Returns (Decade)
                        </motion.h2>
                        <CustomBoxPlot />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default FTSECapitalCharts;