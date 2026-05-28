import React from 'react'
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"

const Analysis = ({analysis, downloadReport}) => {

    const atsData = [
        {
            name: "ATS Score",
            value:analysis?.ats_score || 0 
        },
        {
            name: "Remaining",
            value:100-(analysis?.ats_score ||0)
        }
    ]
    const atsColors = ["#003EC7", "#DAE2FD"]

    const otherData = [
        {
            name: "Keywords",
            score: analysis?.keyword_score || 0
        },
        {
            name: "Semantic",
            score: analysis?.semantic_score || 0
        },
        {
            name: "Formatting",
            score: analysis?.formatting_score || 0
        },
        {
            name: "Quality",
            score: analysis?.quality_score || 0
        }
    ]

    return (
        <div className='w-full flex flex-col mt-5'>

            <div className="bg-white p-6 rounded-2xl w-full h-fit flex flex-col items-center justify-center">
                <h2 className="text-2   xl font-semibold mb-4 text-center">
                    ATS Score
                </h2>
                <div className="relative flex items-center justify-center">

                    <PieChart width={200} height={200}>
                        <Pie data={atsData} cx="50%" cy="50%" innerRadius={70} outerRadius={100} dataKey="value" startAngle={90} endAngle={-270}>
                            {atsData.map((entry, index) => (
                                <Cell key={index} fill={atsColors[index]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </div>

                <h1 className="absolute text-4xl text-blue-700 font-bold">
                    {analysis?.ats_score || 0}%
                </h1>
            </div>

            <div className="bg-white p-6 rounded-2xl w-full h-fit flex flex-col justify-center gap-6">
                <h1 className="text-2xl font-bold">
                    Score Breakdown
                </h1>
                {otherData.map((item, index) => (
                    <div key={index}>
                        <div className="flex justify-between mb-2">
                            <h2 className="font-medium">
                                {item.name}
                            </h2>
                            <span className="font-semibold text-blue-600">
                                {item.score}%
                            </span>
                        </div>
                        <div className="w-full h-4 bg-gray-200 rounded-full">
                            <div className="h-4 bg-blue-600 rounded-full transition-all duration-1000" style={{ width: `${item.score}%` }} />
                        </div>
                    </div>
                ))}
            </div>

            {
                analysis && (
                    <button onClick={downloadReport} className='bg-blue-600 text-white px-6 py-2 rounded hover:scale-105 transition-all duration-300'>Download Report</button>
                )
            }
        </div>
    )
}

export default Analysis