import React from 'react'
import { useState } from 'react';
import { FaHome, FaHistory, FaFilePdf, FaDownload } from "react-icons/fa";

const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <div className={`h-screen w-1/4 min-w-55 bg-white border-r border-gray-200 shadow-lg flex flex-col justify-between py-6 top-0 left-0 transition-transform duration-300 fixed md:static ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`} >
            <button onClick={() => setSidebarOpen(false)} className="absolute top-4 right-4 text-2xl md:hidden">
                ✕
            </button>
            <div>
                <div className='flex items-center gap-3 mb-12 justify-center'>
                    <div className='w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-xl shadow-md'>
                        ⚡
                    </div>
                    <div>
                        <h1 className="text-2xl font-extrabold text-gray-900 leading-tight">ResumeScan</h1>
                        <p className='text-sm text-gray-500'>AI Resume Analyzer</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <button className='flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50 text-blue-700 font-semibold hover:bg-blue-100 transition-all duration-300'>
                        <FaHome />
                        Dashboard
                    </button>

                    <button className='flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition-all duration-300'>
                        <FaHistory />
                        History
                    </button>

                    <button className='flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition-all duration-300'>
                        <FaFilePdf />
                        Reports
                    </button>

                    <button className='flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition-all duration-300'>
                        <FaDownload />
                        Downloads
                    </button>

                </div>

            </div>

            {/* BOTTOM */}

            <div className='bg-blue-50 border border-blue-100 rounded-2xl p-4'>
                <p className='text-sm font-semibold text-blue-700'>
                    AI Resume Analyzer
                </p>

                <p className='text-xs text-gray-500 mt-1 leading-5'>
                    Improve ATS score and optimize resumes using AI-powered insights.
                </p>
            </div>

        </div>
    )
}

export default SideBar