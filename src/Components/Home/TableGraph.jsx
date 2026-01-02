import React from 'react';
import {
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Line,
    ComposedChart,
    ResponsiveContainer,
} from 'recharts';
import { motion } from 'framer-motion';

const FTSECapitalCharts = () => {
    const years = ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', 'Decade Avg.'];

    const maturityData = [
        { label: 'Number of maturities', values: [85, 187, 128, 97, 40, 227, 307, 300, 363, 338, 207.2] },
        { label: 'Producing positive returns', values: [84, 187, 128, 97, 40, 227, 307, 295, 363, 338, 206.6] },
        { label: 'Returning capital only', values: [1, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0.6] },
        { label: 'Returning a loss', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { label: 'Average duration (years)', values: [2.38, 2.31, 2.15, 2.15, 2.33, 2.47, 2.54, 2.46, 2.3, 1.98, 2.3] },
    ];

    const returnsData = [
        { label: 'All', values: ['7.17%', '7.62%', '7.71%', '7.41%', '7.31%', '7.23%', '7.06%', '7.17%', '7.84%', '7.85%', '7.44%'] },
        { label: 'Upper quartile', values: ['8.78%', '9.36%', '9.40%', '9.48%', '9.59%', '9.70%', '9.28%', '9.47%', '9.54%', '9.33%', '9.39%'] },
        { label: 'Lower quartile', values: ['5.78%', '6.23%', '6.32%', '5.71%', '5.71%', '5.45%', '5.42%', '5.04%', '6.32%', '6.54%', '5.85%'] },
    ];

    const chartData = [
        { year: '2016', positiveReturns: 82, returningCapital: 0, avgTerm: 2.45 },
        { year: '2017', positiveReturns: 187, returningCapital: 0, avgTerm: 2.40 },
        { year: '2018', positiveReturns: 128, returningCapital: 0, avgTerm: 2.28 },
        { year: '2019', positiveReturns: 96, returningCapital: 0, avgTerm: 2.30 },
        { year: '2020', positiveReturns: 39, returningCapital: 0, avgTerm: 2.42 },
        { year: '2021', positiveReturns: 226, returningCapital: 0, avgTerm: 2.52 },
        { year: '2022', positiveReturns: 304, returningCapital: 0, avgTerm: 2.58 },
        { year: '2023', positiveReturns: 294, returningCapital: 0, avgTerm: 2.50 },
        { year: '2024', positiveReturns: 362, returningCapital: 0, avgTerm: 2.40 },
        { year: '2025', positiveReturns: 336, returningCapital: 0, avgTerm: 2.00 },
        { year: 'Decade Avg.', positiveReturns: 205, returningCapital: 0, avgTerm: 2.39 },
    ];

    const CustomDot = ({ cx, cy }) => (
        <circle cx={cx} cy={cy} r={8} fill="#8BC34A" stroke="#fff" strokeWidth={2} />
    );

    const CustomLegend = () => (
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-800 rounded"></div>
                <span>No. of Positive Returns</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-400 rounded"></div>
                <span>No. Returning Capital Only</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span>Average Term (years - RHS)</span>
            </div>
        </div>
    );

    return (
        <div className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 px-4 py-12 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-16"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Decade Performance Dashboard</h2>
                        <div className="w-40 h-1.5 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto mb-8 rounded-full" />
                        <p className="text-xl font-bold text-gray-700">Over 2,000 Maturities | 99.7% Positive Returns | 7.44% Average p.a.</p>
                        <p className="text-sm text-gray-600 mt-4 max-w-4xl mx-auto">
                            UK Retail Public Offer FTSE-Linked*, Capital-at-Risk Autocall Maturities 2016 - 2025
                        </p>
                    </div>

                    <div className="space-y-20">
                        {/* Maturity Outcomes Table - NOW VISIBLE ON MOBILE */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Maturity Outcomes by Year</h3>
                            <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200 -mx-4 sm:mx-0">
                                <div className="min-w-[800px] bg-white">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                                                <th className="py-4 px-6 text-left font-bold sticky left-0 bg-gray-900 z-10">Metric</th>
                                                {years.map((year) => (
                                                    <th key={year} className="py-4 px-4 text-center font-bold whitespace-nowrap">
                                                        {year.replace('Avg.', 'Avg')}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {maturityData.map((row) => (
                                                <tr key={row.label} className="border-b border-gray-200 hover:bg-emerald-50 transition">
                                                    <td className="py-4 px-6 font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 sticky left-0 z-10">
                                                        {row.label}
                                                    </td>
                                                    {row.values.map((val, i) => (
                                                        <td key={i} className="py-4 px-4 text-center text-gray-800">
                                                            {row.label.includes('duration') ? val.toFixed(2) : val % 1 === 0 ? val : val.toFixed(1)}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* Scroll hint for mobile */}
                            <p className="text-xs text-gray-500 text-center mt-3 sm:hidden">← Scroll horizontally to view all years →</p>
                        </div>

                        {/* Average Returns Table - NOW VISIBLE ON MOBILE */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Average Annualised Returns of All Maturities</h3>
                            <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200 -mx-4 sm:mx-0">
                                <div className="min-w-[800px] bg-white">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                                                <th className="py-4 px-6 text-left font-bold sticky left-0 bg-gray-900 z-10">Category</th>
                                                {years.map((year) => (
                                                    <th key={year} className="py-4 px-4 text-center font-bold whitespace-nowrap">
                                                        {year.replace('Avg.', 'Avg')}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {returnsData.map((row) => (
                                                <tr key={row.label} className="border-b border-gray-200 hover:bg-emerald-50 transition">
                                                    <td className="py-4 px-6 font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 sticky left-0 z-10">
                                                        {row.label}
                                                    </td>
                                                    {row.values.map((val, i) => (
                                                        <td key={i} className="py-4 px-4 text-center font-bold text-emerald-700">
                                                            {val}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 text-center mt-3 sm:hidden">← Scroll horizontally to view all years →</p>
                        </div>

                        <p className="text-sm text-gray-600 mt-12 text-center italic max-w-4xl mx-auto px-4">
                            *FTSE-linked – single index autocalls using, as underlying either the FTSE 100 or FTSE CSDI which tracks the same shares as FTSE 100 with the same weightings but accounts for dividends differently.
                        </p>
                    </div>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-20 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 text-transparent bg-clip-text"
                >
                    UK Retail Public Offer FTSE-Linked, Capital-at-Risk Autocall Maturities 2016 – 2025
                </motion.h1>
                <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">Maturity Volume & Average Duration</h2>

                {/* Chart - Bottom-to-Top Animation */}
                <div className="hidden lg:block" style={{ width: '100%', height: '80%', padding: '0px 20px', backgroundColor: '#fff' }}>

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 sm:p-8"
                    >

                        <ResponsiveContainer width="100%" height={450}>
                            <ComposedChart data={chartData} margin={{ top: 20, right: 30, bottom: 60, left: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                                <XAxis
                                    dataKey="year"
                                    tick={{ fill: '#666', fontSize: 13 }}
                                    axisLine={{ stroke: '#ccc' }}
                                    tickLine={false}
                                    angle={-45}
                                    textAnchor="end"
                                    height={80}
                                />
                                <YAxis
                                    yAxisId="left"
                                    domain={[0, 400]}
                                    ticks={[0, 100, 200, 300, 400]}
                                    label={{ value: 'Maturity Volume', angle: -90, position: 'insideLeft', style: { fill: '#666' } }}
                                />
                                <YAxis
                                    yAxisId="right"
                                    orientation="right"
                                    domain={[0, 3]}
                                    ticks={[0, 0.5, 1, 1.5, 2, 2.5, 3]}
                                    label={{ value: 'Average Term (Years)', angle: 90, position: 'insideRight', style: { fill: '#666' } }}
                                />
                                <Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} />

                                {/* Bars animate from bottom to top */}
                                <Bar
                                    yAxisId="left"
                                    dataKey="positiveReturns"
                                    fill="#333"
                                    barSize={35}
                                    animationDuration={1400}
                                    animationEasing="ease-out"
                                />
                                <Bar
                                    yAxisId="left"
                                    dataKey="returningCapital"
                                    fill="#999"
                                    barSize={35}
                                    animationBegin={400}
                                    animationDuration={1400}
                                />
                                <Line
                                    yAxisId="right"
                                    type="monotone"
                                    dataKey="avgTerm"
                                    stroke="#8BC34A"
                                    strokeWidth={4}
                                    dot={<CustomDot />}
                                    animationDuration={1600}
                                />
                            </ComposedChart>
                        </ResponsiveContainer>

                        <CustomLegend />
                    </motion.div>
                </div>
                <div className="block lg:hidden w-full">
                    {/* <h2 className="text-2xl sm:text-2xl text-gray-800 mb-10 text-center">
                        FTSE Only Capital at Risk Autocall Plans
                    </h2> */}
                    <img
                        src="/chartbar.jpg"
                        alt="Maturity Volume & Average Duration (2016–2025)"
                        className="w-full h-40 rounded-xl shadow-lg"
                    />
                </div>

                {/* Other Charts (Images) */}
                <div className="grid md:grid-cols-2 gap-12 mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200"
                    >
                        <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-600 to-green-700 text-transparent bg-clip-text">
                            Monthly Distribution of Annualised Returns (Decade)
                        </h2>
                        <img src="/chart2.jpg" alt="Monthly returns" className="w-full rounded-xl shadow" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200"
                    >
                        <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-600 to-green-700 text-transparent bg-clip-text">
                            2025 Maturity Performance by Shape
                        </h2>
                        <img src="/chart3.jpg" alt="2025 performance" className="w-full rounded-xl shadow" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default FTSECapitalCharts;