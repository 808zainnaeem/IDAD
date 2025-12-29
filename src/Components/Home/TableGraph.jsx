import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, ComposedChart, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

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

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-xl text-sm">
                    <p className="font-bold text-gray-800">{payload[0].payload.year}</p>
                    {payload.map((entry, index) => (
                        <p key={index} style={{ color: entry.color }} className="mt-1">
                            {entry.name}: {entry.value}
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    const CustomBoxPlot = () => {
        const boxData = [
            { min: 5.8, q1: 6.9, median: 7.1, q3: 7.4, max: 8.8 },
            { min: 6.2, q1: 7.3, median: 7.6, q3: 7.9, max: 9.4 },
            { min: 6.3, q1: 7.5, median: 7.7, q3: 8.0, max: 9.5 },
            { min: 5.7, q1: 7.2, median: 7.4, q3: 7.7, max: 9.6 },
            { min: 5.7, q1: 7.1, median: 7.3, q3: 7.6, max: 9.7 },
            { min: 5.4, q1: 7.0, median: 7.2, q3: 7.5, max: 9.8 },
            { min: 5.4, q1: 6.8, median: 7.0, q3: 7.3, max: 9.3 },
            { min: 5.0, q1: 6.9, median: 7.1, q3: 7.4, max: 9.6 },
            { min: 6.3, q1: 7.6, median: 7.8, q3: 8.1, max: 9.7 },
            { min: 6.5, q1: 7.7, median: 7.9, q3: 8.2, max: 9.4 },
            { min: 5.9, q1: 7.2, median: 7.4, q3: 7.7, max: 9.5 },
            { min: 5.9, q1: 7.2, median: 7.4, q3: 7.7, max: 9.5 },
        ];

        return (
            <div className="w-full  bg-white">
                <svg viewBox="0 0 800 480" preserveAspectRatio="xMidYMid meet" className="w-full h-auto">
                    {/* Horizontal grid lines */}
                    {[0, 2, 4, 6, 8, 10].map((val) => {
                        const y = 300 - (val / 10) * 280;
                        return <line key={`hgrid-${val}`} x1="80" y1={y} x2="720" y2={y} stroke="#e5e7eb" strokeWidth="1" />;
                    })}

                    {/* Axes */}
                    <line x1="80" y1="20" x2="80" y2="300" stroke="#333" strokeWidth="2" />
                    <line x1="80" y1="300" x2="720" y2="300" stroke="#333" strokeWidth="2" />

                    {/* Y-axis ticks and labels */}
                    {[0, 2, 4, 6, 8, 10].map((val) => {
                        const y = 300 - (val / 10) * 280;
                        return (
                            <g key={`ytick-${val}`}>
                                <line x1="75" y1={y} x2="80" y2={y} stroke="#333" strokeWidth="2" />
                                <text x="70" y={y + 5} fontSize="14" textAnchor="end" fill="#333">
                                    {val}
                                </text>
                            </g>
                        );
                    })}

                    {/* X-axis month labels */}
                    {[...Array(12)].map((_, i) => {
                        const x = 80 + (i + 0.5) * (640 / 12);
                        return (
                            <text key={`xlabel-${i}`} x={x} y="320" fontSize="14" textAnchor="middle" fill="#333">
                                {i + 1}
                            </text>
                        );
                    })}

                    {/* Box plots */}
                    {boxData.map((data, i) => {
                        const centerX = 80 + (i + 0.5) * (640 / 12);
                        const boxWidth = 30;
                        const yMax = 300 - (data.max / 10) * 280;
                        const yQ3 = 300 - (data.q3 / 10) * 280;
                        const yMedian = 300 - (data.median / 10) * 280;
                        const yQ1 = 300 - (data.q1 / 10) * 280;
                        const yMin = 300 - (data.min / 10) * 280;

                        return (
                            <g key={i}>
                                <line x1={centerX} y1={yMax} x2={centerX} y2={yQ3} stroke="#333" strokeWidth="2" />
                                <line x1={centerX} y1={yQ1} x2={centerX} y2={yMin} stroke="#333" strokeWidth="2" />
                                <rect x={centerX - 12} y={yMax - 4} width="24" height="8" rx="2" fill="#333" />
                                <rect x={centerX - 12} y={yMin - 4} width="24" height="8" rx="2" fill="#333" />
                                <rect
                                    x={centerX - boxWidth / 2}
                                    y={yQ3}
                                    width={boxWidth}
                                    height={yQ1 - yQ3}
                                    fill="#01a96b"
                                    stroke="#059669"
                                    strokeWidth="2"
                                />
                                <line
                                    x1={centerX - boxWidth / 2}
                                    y1={yMedian}
                                    x2={centerX + boxWidth / 2}
                                    y2={yMedian}
                                    stroke="#065f46"
                                    strokeWidth="3"
                                />
                            </g>
                        );
                    })}

                    {/* Y-axis label */}
                    <text x="30" y="160" fontSize="16" fill="#333" transform="rotate(-90, 30, 160)" textAnchor="middle">
                        Average Annualised Returns %
                    </text>
                </svg>

                {/* Legend */}
                <div className="flex flex-wrap justify-center gap-6 mt-6 text-gray-700 text-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#01a96b] border-2 border-[#059669] rounded"></div>
                        <span className="font-medium">Interquartile Range</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-1 bg-gray-800"></div>
                        <span className="font-medium">Whiskers (Min–Max)</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-1 bg-gray-800"></div>
                        <span className="font-medium">Median</span>
                    </div>
                </div>
            </div>
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:py-12">
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10"
                >
                    FTSE Only Capital at Risk Autocall Plans
                </motion.h1>

                {/* Charts Section - Stack on mobile, side-by-side on larger screens */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Issue Volume & Average Term</h2>
                        <ResponsiveContainer width="100%" height={420}>
                            <ComposedChart data={topChartData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                <XAxis dataKey="year" tick={{ fontSize: 12 }} angle={-45} textAnchor="end" height={80} />
                                <YAxis
                                    yAxisId="left"
                                    label={{ value: 'Issue Volume', angle: -90, position: 'insideLeft', style: { fontSize: '14px' } }}
                                    domain={[0, 450]}
                                    ticks={[0, 100, 200, 300, 400]}
                                />
                                <YAxis
                                    yAxisId="right"
                                    orientation="right"
                                    label={{ value: 'Average Term (years)', angle: 90, position: 'insideRight', style: { fontSize: '14px' } }}
                                    domain={[0, 3]}
                                    ticks={[0, 1, 2, 3]}
                                />
                                <Tooltip content={<CustomTooltip />} />
                                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                                <Bar yAxisId="left" dataKey="positive" fill="#01a96b" name="Positive Returns" barSize={30} />
                                <Bar yAxisId="left" dataKey="noReturn" fill="#e2e8f0" name="Capital Only" barSize={30} />
                                <Line
                                    yAxisId="right"
                                    type="monotone"
                                    dataKey="avgTerm"
                                    stroke="#059669"
                                    strokeWidth={4}
                                    name="Avg Term (years)"
                                    dot={{ fill: '#01a96b', r: 6 }}
                                />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Monthly Distribution of Annualised Returns (Decade)</h2>
                        <CustomBoxPlot />
                    </motion.div>
                </div>

                {/* Dashboard Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8"
                >
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Decade Performance Dashboard</h2>
                        <div className="w-24 h-1 bg-[#01a96b] mx-auto mb-4"></div>
                        <p className="text-lg sm:text-xl font-semibold text-gray-700">
                            Over 2,000 Maturities | 99.7% Positive Returns | 7.44% Average p.a.
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                            UK Retail Public Offer FTSE-Linked*, Capital-at-Risk Autocall Maturities 2016 - 2025
                        </p>
                    </div>

                    {/* Tables - Stack on mobile */}
                    <div className="flex flex-col gap-8 lg:gap-12">
                        {/* Maturity Table */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Maturity Outcomes by Year</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[600px] border-collapse text-sm">
                                    <thead>
                                        <tr>
                                            <th className="bg-gray-900 text-white py-3 px-4 text-left font-semibold sticky left-0"></th>
                                            {years.map((year, i) => (
                                                <th key={i} className="bg-gray-900 text-white py-3 px-4 text-center font-semibold">
                                                    {year.replace('\n', ' ')}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {maturityData.map((row, i) => (
                                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                                <td className="bg-[#01a96b] text-white py-3 px-4 font-medium sticky left-0">
                                                    {row.label}
                                                </td>
                                                {row.values.map((val, j) => (
                                                    <td key={j} className="py-3 px-4 text-center border border-gray-200">
                                                        {typeof val === 'number' && row.label.includes('duration') ? val.toFixed(2) : val}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Returns Table */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Average Annualised Returns</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[600px] border-collapse text-sm">
                                    <thead>
                                        <tr>
                                            <th className="bg-gray-900 text-white py-3 px-4 text-left font-semibold sticky left-0"></th>
                                            {years.map((year, i) => (
                                                <th key={i} className="bg-gray-900 text-white py-3 px-4 text-center font-semibold">
                                                    {year.replace('\n', ' ')}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {returnsData.map((row, i) => (
                                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                                <td className="bg-[#01a96b] text-white py-3 px-4 font-medium sticky left-0">
                                                    {row.label}
                                                </td>
                                                {row.values.map((val, j) => (
                                                    <td key={j} className="py-3 px-4 text-center border border-gray-200 font-semibold">
                                                        {val}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default FTSECapitalCharts;