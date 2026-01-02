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

    const [hoveredBarIndex, setHoveredBarIndex] = useState(null);

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

    const tableRowVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" }
        })
    };
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
        { year: 'Decade Avg.', positiveReturns: 205, returningCapital: 0, avgTerm: 2.39 }];

    const CustomLegend = () => (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            fontSize: '14px',
            color: '#666',
            marginTop: '10px'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '16px', height: '16px', backgroundColor: '#333' }}></div>
                <span>No. of Positive Returns</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '16px', height: '16px', backgroundColor: '#999' }}></div>
                <span>No. Returning Capital Only</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#8BC34A' }}></div>
                <span>Average Term (years - RHS)</span>
            </div>
        </div>
    );
    const data2 = [
        { x: 1, allProducts: [5.8, 7.2, 7.4, 8.9], upper: 8.9, lower: 5.8, box: [7.2, 7.4] },
        { x: 2, allProducts: [6.3, 7.6, 7.9, 9.3], upper: 9.3, lower: 6.3, box: [7.6, 7.9] },
        { x: 3, allProducts: [6.4, 7.6, 7.9, 9.3], upper: 9.3, lower: 6.4, box: [7.6, 7.9] },
        { x: 4, allProducts: [5.7, 7.3, 7.6, 9.4], upper: 9.4, lower: 5.7, box: [7.3, 7.6] },
        { x: 5, allProducts: [5.7, 7.3, 7.6, 9.5], upper: 9.5, lower: 5.7, box: [7.3, 7.6] },
        { x: 6, allProducts: [5.4, 7.2, 7.5, 9.7], upper: 9.7, lower: 5.4, box: [7.2, 7.5] },
        { x: 7, allProducts: [5.4, 7.0, 7.3, 9.3], upper: 9.3, lower: 5.4, box: [7.0, 7.3] },
        { x: 8, allProducts: [5.0, 7.1, 7.4, 9.4], upper: 9.4, lower: 5.0, box: [7.1, 7.4] },
        { x: 9, allProducts: [6.4, 7.8, 8.1, 9.5], upper: 9.5, lower: 6.4, box: [7.8, 8.1] },
        { x: 10, allProducts: [6.6, 7.8, 8.1, 9.3], upper: 9.3, lower: 6.6, box: [7.8, 8.1] },
        { x: 11, allProducts: [5.9, 7.4, 7.7, 9.4], upper: 9.4, lower: 5.9, box: [7.4, 7.7] }
    ];

    const CustomBoxPlot = (props) => {
        const { x, y, width, height, payload } = props;

        if (!payload || !payload.box || !payload.upper || !payload.lower) return null;

        const chartHeight = 440;
        const yScale = chartHeight / 10;
        const baseY = 20;

        const upperY = baseY + (10 - payload.upper) * yScale;
        const lowerY = baseY + (10 - payload.lower) * yScale;
        const boxTop = baseY + (10 - payload.box[1]) * yScale;
        const boxBottom = baseY + (10 - payload.box[0]) * yScale;
        const boxHeight = boxBottom - boxTop;

        const centerX = x + width / 2;
        const boxWidth = 35;

        return (
            <g>
                {/* Upper whisker line */}
                <line
                    x1={centerX}
                    y1={upperY}
                    x2={centerX}
                    y2={boxTop}
                    stroke="#333"
                    strokeWidth={2}
                />
                {/* Upper whisker cap */}
                <line
                    x1={centerX - 15}
                    y1={upperY}
                    x2={centerX + 15}
                    y2={upperY}
                    stroke="#333"
                    strokeWidth={2}
                />

                {/* Box */}
                <rect
                    x={centerX - boxWidth / 2}
                    y={boxTop}
                    width={boxWidth}
                    height={boxHeight}
                    fill="#8BC34A"
                    stroke="#6D9B3A"
                    strokeWidth={1}
                />

                {/* Lower whisker line */}
                <line
                    x1={centerX}
                    y1={boxBottom}
                    x2={centerX}
                    y2={lowerY}
                    stroke="#666"
                    strokeWidth={2}
                />
                {/* Lower whisker cap */}
                <line
                    x1={centerX - 15}
                    y1={lowerY}
                    x2={centerX + 15}
                    y2={lowerY}
                    stroke="#666"
                    strokeWidth={2}
                />
            </g>
        );
    };

    const CustomLegend2 = () => (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            fontSize: '14px',
            color: '#666',
            marginTop: '20px'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '20px', height: '16px', backgroundColor: '#8BC34A', border: '1px solid #6D9B3A' }}></div>
                <span>All Products</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '20px', height: '2px', backgroundColor: '#333' }}></div>
                <span>Upper Quartile</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '20px', height: '2px', backgroundColor: '#666' }}></div>
                <span>Lower Quartile</span>
            </div>
        </div>
    );
    const CustomDot = ({ cx, cy }) => {
        return (
            <circle
                cx={cx - 20}   // 👈 MOVE LEFT (tweak -16 to -22 if needed)
                cy={cy}
                r={8}
                fill="#8BC34A"
            />
        );
    };

    return (
        <div className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 px-4 py-12">
            <div className="max-w-7xl mx-auto">

                {/* Hero Dashboard */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 sm:p-10 mb-16 overflow-visible"
                >
                    <motion.div
                        initial={{ scale: 0.94 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl sm:text-3xl font-bold text-black-800 mb-4">Decade Performance Dashboard</h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="w-40 h-1.5 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto mb-8 rounded-full"
                        />
                        <p className="text-xl sm:text-2xl font-bold text-gray-700">
                            Over 2,000 Maturities | 99.7% Positive Returns | 7.44% Average p.a.
                        </p>
                        <p className="text-sm text-gray-600 mt-4 max-w-4xl mx-auto px-4">
                            UK Retail Public Offer FTSE-Linked*, Capital-at-Risk Autocall Maturities 2016 - 2025
                        </p>
                    </motion.div>

                    <div className="space-y-16">

                        {/* =====================================================
       Maturity Outcomes
    ====================================================== */}

                        {/* ---------- MOBILE (CARDS) ---------- */}
                        <div className="sm:hidden space-y-6">
                            <h3 className="text-xl font-bold text-gray-800 text-center">
                                Maturity Outcomes by Year
                            </h3>

                            {maturityData.map((row, i) => (
                                <div
                                    key={i}
                                    className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
                                >
                                    <div className="bg-emerald-600 text-white px-4 py-3 font-semibold">
                                        {row.label}
                                    </div>

                                    <div className="divide-y">
                                        {row.values.map((val, j) => (
                                            <div
                                                key={j}
                                                className="flex justify-between items-center px-4 py-3 text-sm"
                                            >
                                                <span className="text-gray-500">
                                                    {years[j].replace('\n', ' ')}
                                                </span>
                                                <span className="font-semibold text-gray-800">
                                                    {row.label.includes('duration')
                                                        ? val.toFixed(2)
                                                        : Number.isInteger(val)
                                                            ? val
                                                            : val.toFixed(1)}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ---------- DESKTOP (TABLE) ---------- */}
                        <div className="hidden sm:block">
                            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                                Maturity Outcomes by Year
                            </h3>

                            <div className="rounded-2xl shadow-xl border border-gray-200 bg-white overflow-x-auto">
                                <table className="w-full min-w-[900px] border-collapse text-sm bg-white">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                                            <th className="py-5 px-8 text-left font-bold sticky left-0 bg-gray-900 z-10">
                                                Metric
                                            </th>
                                            {years.map((year, i) => (
                                                <th
                                                    key={i}
                                                    className="py-5 px-6 text-center font-bold"
                                                >
                                                    {year.replace('\n', ' ')}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {maturityData.map((row, i) => (
                                            <tr
                                                key={i}
                                                className="border-b border-gray-200 hover:bg-emerald-50 transition-all"
                                            >
                                                <td className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-5 px-8 font-semibold sticky left-0 z-10">
                                                    {row.label}
                                                </td>

                                                {row.values.map((val, j) => (
                                                    <td
                                                        key={j}
                                                        className="py-5 px-6 text-center font-medium text-gray-800"
                                                    >
                                                        {row.label.includes('duration')
                                                            ? val.toFixed(2)
                                                            : Number.isInteger(val)
                                                                ? val
                                                                : val.toFixed(1)}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* =====================================================
       Average Annualised Returns
    ====================================================== */}

                        {/* ---------- MOBILE (CARDS) ---------- */}
                        <div className="sm:hidden space-y-6">
                            <h3 className="text-xl font-bold text-gray-800 text-center">
                                Average Annualised Returns of All Maturities
                            </h3>

                            {returnsData.map((row, i) => (
                                <div
                                    key={i}
                                    className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
                                >
                                    <div className="bg-emerald-600 text-white px-4 py-3 font-semibold">
                                        {row.label}
                                    </div>

                                    <div className="divide-y">
                                        {row.values.map((val, j) => (
                                            <div
                                                key={j}
                                                className="flex justify-between items-center px-4 py-3 text-sm"
                                            >
                                                <span className="text-gray-500">
                                                    {years[j].replace('\n', ' ')}
                                                </span>
                                                <span className="font-bold text-emerald-700">
                                                    {val}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ---------- DESKTOP (TABLE) okkkkkkkkkkkkkk---------- */}
                        <div className="hidden sm:block">
                            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                                Average Annualised Returns of All Maturities
                            </h3>

                            <div className="rounded-2xl shadow-xl border border-gray-200 bg-white overflow-x-auto">
                                <table className="w-full min-w-[900px] border-collapse text-sm bg-white">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                                            <th className="py-5 px-8 text-left font-bold sticky left-0 bg-gray-900 z-10">
                                                Category
                                            </th>
                                            {years.map((year, i) => (
                                                <th
                                                    key={i}
                                                    className="py-5 px-6 text-center font-bold"
                                                >
                                                    {year.replace('\n', ' ')}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {returnsData.map((row, i) => (
                                            <tr
                                                key={i}
                                                className="border-b border-gray-200 hover:bg-emerald-50 transition-all"
                                            >
                                                <td className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-5 px-8 font-semibold sticky left-0 z-10">
                                                    {row.label}
                                                </td>

                                                {row.values.map((val, j) => (
                                                    <td
                                                        key={j}
                                                        className="py-5 px-6 text-center font-bold text-emerald-700"
                                                    >
                                                        {val}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* =====================================================
       FOOTER NOTE
    ====================================================== */}
                        <p className="text-sm text-gray-600 mt-8 max-w-4xl mx-auto px-4 text-center italic">
                            *FTSE-linked – single index autocalls using, as underlying either the FTSE 100 or FTSE CSDI which tracks the same shares as FTSE 100 with the same weightings but accounts for dividends differently.
                        </p>

                    </div>

                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.3, ease: "easeOut" }}
                    className="text-2xl sm:text-2xl font-bold text-center text-gray-800 mb-20 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 text-transparent bg-clip-text"
                >
                    UK Retail Public Offer FTSE-Linked, Capital-at-Risk Autocall
                    Maturities 2016 – 2025
                </motion.h1>

                {/* Charts Section */}
                <div className="flex flex-col gap-12 max-w-7xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.3, ease: "easeOut" }}
                        className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 sm:p-8"
                    >


                        {/* Interactive Chart - Hidden on mobile, shown on lg+ */}
                        <div className="hidden lg:block" style={{ width: '100%', height: '80%', padding: '0px 20px', backgroundColor: '#fff' }}>
                            <h2 className="text-2xl sm:text-2xl text-gray-800 mb-10 text-center">
                                Maturity Volume & Average Duration
                            </h2>

                            <ResponsiveContainer width="100%" height={350}>
                                <ComposedChart
                                    data={data}
                                    margin={{ top: 20, right: 60, bottom: 20, left: 60 }}
                                >
                                    <CartesianGrid
                                        strokeDasharray="0"
                                        stroke="#ddd"
                                        vertical={false}
                                    />

                                    <XAxis
                                        dataKey="year"
                                        axisLine={{ stroke: '#999' }}
                                        tickLine={false}
                                        tick={(props) => {
                                            const { x, y, payload } = props;
                                            if (payload.value === 'Decade\nAvg.') {
                                                return (
                                                    <g transform={`translate(${x},${y})`}>
                                                        <text x={0} y={0} dy={25} textAnchor="middle" fill="#666" fontSize={12}>
                                                            <tspan x="0" dy="8">Decade</tspan>
                                                            <tspan x="0" dy="20">Avg.</tspan>
                                                        </text>
                                                    </g>
                                                );
                                            }
                                            return (
                                                <text x={x} y={y} dy={15} dx={-20} textAnchor="middle" fill="#666" fontSize={14}>
                                                    {payload.value}
                                                </text>
                                            );

                                        }}
                                    />

                                    <YAxis
                                        yAxisId="left"
                                        orientation="left"
                                        domain={[0, 400]}
                                        ticks={[0, 50, 100, 150, 200, 250, 300, 350, 400]}
                                        axisLine={{ stroke: '#999' }}
                                        tick={{ fill: '#666', fontSize: 14 }}
                                        tickLine={false}
                                        label={{
                                            value: 'Maturity volume',
                                            angle: 270,              // 90 instead of 270 for natural reading direction
                                            position: 'insideRight',
                                            dx: -50,                // Fine-tune horizontal position if needed
                                            style: {
                                                fill: '#666',
                                                fontSize: 14,
                                                textAnchor: 'middle'  // Centers the label text vertically along the axis
                                            }
                                        }}
                                    />

                                    <YAxis
                                        yAxisId="right"
                                        orientation="right"
                                        domain={[0, 3]}
                                        ticks={[0, 0.5, 1, 1.5, 2, 2.5, 3]}
                                        axisLine={{ stroke: '#999' }}
                                        tick={{
                                            fill: '#666',
                                            fontSize: 14,
                                            textAnchor: 'middle'  // Centers the tick numbers horizontally
                                        }}
                                        tickLine={false}
                                        tickMargin={8}  // Optional: adds a little space between ticks and axis line
                                        label={{
                                            value: 'Average Term (Years)',
                                            angle: 270,              // 90 instead of 270 for natural reading direction
                                            position: 'insideRight',
                                            dx: -10,                // Fine-tune horizontal position if needed
                                            style: {
                                                fill: '#666',
                                                fontSize: 14,
                                                textAnchor: 'middle'  // Centers the label text vertically along the axis
                                            }
                                        }}
                                    />
                                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.05)' }} />
                                    <Bar
                                        yAxisId="left"
                                        dataKey="positiveReturns"
                                        fill="#333"
                                        barSize={40}
                                    />

                                    <Bar
                                        yAxisId="left"
                                        dataKey="returningCapital"
                                        fill="#999"
                                        barSize={40}
                                    />

                                    <Line
                                        yAxisId="right"
                                        type="monotone"
                                        dataKey="avgTerm"
                                        stroke="transparent"
                                        strokeWidth={0}
                                        dot={<CustomDot />}
                                    />

                                </ComposedChart>
                            </ResponsiveContainer>

                            <CustomLegend />
                        </div>

                        {/* Static Image - Shown only on mobile */}
                        <div className="block lg:hidden w-full">
                            <h2 className="text-2xl sm:text-2xl text-gray-800 mb-10 text-center">
                                FTSE Only Capital at Risk Autocall Plans
                            </h2>
                            <img
                                src="/chartbar.jpg"
                                alt="Maturity Volume & Average Duration (2016–2025)"
                                className="w-full h-40 rounded-xl shadow-lg"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
                        className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 sm:p-8"
                    >
                        <h2 className="text-2xl sm:text-2xl text-gray-800 mb-10 text-center bg-gradient-to-r from-emerald-600 to-green-700 text-transparent bg-clip-text">
                            Monthly Distribution of Annualised Returns (Decade)
                        </h2>

                        <img src="/chart2.jpg" alt="" />
                    </motion.div>

                </div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
                    className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 sm:p-8 mt-10"
                >
                    <h2 className="text-2xl sm:text-2xl text-gray-800 mb-10 text-center bg-gradient-to-r from-emerald-600 to-green-700 text-transparent bg-clip-text">
                        2025 Maturity Performance by Shape
                    </h2>

                    <img src="/chart3.jpg" alt="" />
                </motion.div>
            </div>
        </div>
    );
};

export default FTSECapitalCharts;