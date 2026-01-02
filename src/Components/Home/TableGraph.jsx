import React, { useState } from 'react';
import {
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
    const maturityChartData = [
        { year: '2016', positive: 90, noReturn: 1, avgTerm: 2.38 },
        { year: '2017', positive: 210, noReturn: 0, avgTerm: 2.31 },
        { year: '2018', positive: 150, noReturn: 0, avgTerm: 2.15 },
        { year: '2019', positive: 110, noReturn: 0, avgTerm: 2.15 },
        { year: '2020', positive: 60, noReturn: 0, avgTerm: 2.33 },
        { year: '2021', positive: 235, noReturn: 0, avgTerm: 2.47 },
        { year: '2022', positive: 320, noReturn: 0, avgTerm: 2.54 },
        { year: '2023', positive: 310, noReturn: 5, avgTerm: 2.46 },
        { year: '2024', positive: 390, noReturn: 0, avgTerm: 2.30 },
        { year: '2025', positive: 369, noReturn: 0, avgTerm: 1.98 },
        { year: 'Decade\nAvg', positive: 230.6, noReturn: 0.6, avgTerm: 2.30 },
    ];

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

    const data = [
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

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length && label) {
            const yearIndex = years.indexOf(label);
            if (yearIndex === -1) return null;
            const allReturn = returnsData[0].values[yearIndex];
            const upperReturn = returnsData[1].values[yearIndex];
            const lowerReturn = returnsData[2].values[yearIndex];

            return (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white p-6 border border-gray-300 rounded-2xl shadow-2xl text-sm backdrop-blur-md"
                    style={{ boxShadow: '0 15px 35px rgba(0,0,0,0.18)' }}
                >
                    <p className="font-semibold text-gray-700 mb-2">Average Annualised Returns</p>
                    <div className="space-y-2 ml-2">
                        <p className="flex justify-between">
                            <span className="text-gray-600">All:</span>
                            <span className="font-bold text-emerald-600">{allReturn}</span>
                        </p>
                        <p className="flex justify-between">
                            <span className="text-gray-600">Upper Quartile:</span>
                            <span className="font-bold text-amber-600">{upperReturn}</span>
                        </p>
                        <p className="flex justify-between">
                            <span className="text-gray-600">Lower Quartile:</span>
                            <span className="font-bold text-blue-600">{lowerReturn}</span>
                        </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-5 italic">Hover • Explore</p>
                </motion.div>
            );
        }
        return null;
    };

    const CustomLegend = () => (
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-8 text-sm text-gray-600">
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

    const CustomDot = ({ cx, cy }) => (
        <circle cx={cx} cy={cy} r={8} fill="#8BC34A" stroke="#fff" strokeWidth={2} />
    );

    return (
        <div className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 px-4 py-12 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Hero Dashboard */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-16"
                >
                    <motion.div
                        initial={{ scale: 0.94 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Decade Performance Dashboard</h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="w-40 h-1.5 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto mb-8 rounded-full"
                        />
                        <p className="text-xl font-bold text-gray-700">Over 2,000 Maturities | 99.7% Positive Returns | 7.44% Average p.a.</p>
                        <p className="text-sm text-gray-600 mt-4 max-w-4xl mx-auto px-4">
                            UK Retail Public Offer FTSE-Linked*, Capital-at-Risk Autocall Maturities 2016 - 2025
                        </p>
                    </motion.div>

                    <div className="space-y-16">
                        {/* Maturity Outcomes Table - Responsive */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Maturity Outcomes by Year</h3>

                            {/* Desktop Table */}
                            <div className="hidden md:block overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
                                <table className="w-full min-w-[900px] text-sm bg-white">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                                            <th className="py-5 px-8 text-left font-bold sticky left-0 bg-gray-900 z-10">Metric</th>
                                            {years.map((year) => (
                                                <th key={year} className="py-5 px-6 text-center font-bold">
                                                    {year.replace('\n', ' ')}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {maturityData.map((row) => (
                                            <tr key={row.label} className="border-b border-gray-200 hover:bg-emerald-50">
                                                <td className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-5 px-8 font-semibold sticky left-0 z-10">
                                                    {row.label}
                                                </td>
                                                {row.values.map((val, j) => (
                                                    <td key={j} className="py-5 px-6 text-center text-gray-800">
                                                        {row.label.includes('duration') ? val.toFixed(2) : val % 1 === 0 ? val : val.toFixed(1)}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile Cards */}
                            <div className="block md:hidden space-y-6">
                                {years.map((year, i) => (
                                    <motion.div
                                        key={year}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
                                    >
                                        <h4 className="font-bold text-lg text-center text-gray-800 mb-4">{year}</h4>
                                        {maturityData.map((row) => (
                                            <div key={row.label} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                                                <span className="text-gray-600 text-sm">{row.label}</span>
                                                <span className="font-semibold text-gray-800">
                                                    {row.label.includes('duration') ? row.values[i].toFixed(2) : row.values[i]}
                                                </span>
                                            </div>
                                        ))}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Average Returns Table - Responsive */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Average Annualised Returns of All Maturities</h3>

                            {/* Desktop Table */}
                            <div className="hidden md:block overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
                                <table className="w-full min-w-[900px] text-sm bg-white">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                                            <th className="py-5 px-8 text-left font-bold sticky left-0 bg-gray-900 z-10">Category</th>
                                            {years.map((year) => (
                                                <th key={year} className="py-5 px-6 text-center font-bold">
                                                    {year.replace('\n', ' ')}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {returnsData.map((row) => (
                                            <tr key={row.label} className="border-b border-gray-200 hover:bg-emerald-50">
                                                <td className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-5 px-8 font-semibold sticky left-0 z-10">
                                                    {row.label}
                                                </td>
                                                {row.values.map((val, j) => (
                                                    <td key={j} className="py-5 px-6 text-center font-bold text-emerald-700">
                                                        {val}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile Cards */}
                            <div className="block md:hidden space-y-6">
                                {years.map((year, i) => (
                                    <motion.div
                                        key={year}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
                                    >
                                        <h4 className="font-bold text-lg text-center text-gray-800 mb-4">{year}</h4>
                                        {returnsData.map((row) => (
                                            <div key={row.label} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                                                <span className="text-gray-600 text-sm">{row.label}</span>
                                                <span className="font-bold text-emerald-700">{row.values[i]}</span>
                                            </div>
                                        ))}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <p className="text-sm text-gray-600 mt-12 text-center italic max-w-4xl mx-auto px-4">
                            *FTSE-linked – single index autocalls using, as underlying either the FTSE 100 or FTSE CSDI which tracks the same shares as FTSE 100 with the same weightings but accounts for dividends differently.
                        </p>
                    </div>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.3 }}
                    className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 mb-20"
                >
                    UK Retail Public Offer FTSE-Linked, Capital-at-Risk Autocall Maturities 2016 – 2025
                </motion.h1>

                {/* Interactive Chart - Now works on all devices */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 sm:p-8 mb-12"
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">Maturity Volume & Average Duration</h2>

                    <ResponsiveContainer width="100%" height={420}>
                        <ComposedChart
                            data={data}
                            margin={{ top: 20, right: 30, bottom: 40, left: 20 }}
                        >
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
                                orientation="left"
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
                            <Bar
                                yAxisId="left"
                                dataKey="positiveReturns"
                                fill="#333"
                                barSize={30}
                                animationBegin={0}
                                animationDuration={1200}
                                isAnimationActive={true}
                                // Bottom-to-top animation
                                animationEasing="ease-out"
                            />
                            <Bar
                                yAxisId="left"
                                dataKey="returningCapital"
                                fill="#999"
                                barSize={30}
                                animationBegin={300}
                                animationDuration={1200}
                            />
                            <Line
                                yAxisId="right"
                                type="monotone"
                                dataKey="avgTerm"
                                stroke="#8BC34A"
                                strokeWidth={4}
                                dot={<CustomDot />}
                                activeDot={{ r: 10 }}
                                animationBegin={600}
                                animationDuration={1400}
                            />
                        </ComposedChart>
                    </ResponsiveContainer>

                    <CustomLegend />
                </motion.div>

                {/* Placeholder for other charts */}
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200"
                    >
                        <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-600 to-green-700 text-transparent bg-clip-text">
                            Monthly Distribution of Annualised Returns (Decade)
                        </h2>
                        <img src="/chart2.jpg" alt="Monthly returns distribution" className="w-full rounded-xl shadow" />
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
                        <img src="/chart3.jpg" alt="2025 performance by shape" className="w-full rounded-xl shadow" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default FTSECapitalCharts;