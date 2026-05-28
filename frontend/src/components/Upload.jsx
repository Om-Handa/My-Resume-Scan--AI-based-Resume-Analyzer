import React from 'react'
import { FaBolt } from "react-icons/fa6";

const Upload = ({ file, setFile, jobDescription, setJobDescription, handleUpload, loading }) => {

    const handleDrop=(e)=>{
        e.preventDefault()
        const droppedFile= e.dataTransfer.files[0]

        if(droppedFile && droppedFile.type==="application/pdf"){
            setFile(droppedFile)
        }
    }

    const handleDragOver=(e)=>{
        e.preventDefault()
    }

    return (
        <div className='w-full h-full flex flex-col'>

            <div className='md:h-[20%] w-full mt-4 pl-4'>
                <p className='font-bold text-2xl md:text-4xl leading-tight'>Analyze Your Resume</p>
                <p className='font-bold text-base leading-snug md:text-xl'>Upload Your Resume in PDF format and paste Job Description below.</p>
            </div>

            <div className='flex justify-evenly items-center md:flex-row flex-col gap-6 py-4'>
                <div className='md:w-1/2 w-full p-3 flex flex-col justify-center items-center'>
                    <p className='p-2 w-full text-l font-bold text-gray-400'>Resume (PDF)</p>

                    <label onDrop={handleDrop} onDragOver={handleDragOver} className="w-[90%] h-60 border-2 bg-[#F2F4F6] border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">
                        <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files[0])} className="hidden" />
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                            📄
                        </div>
                        <h2 className="text-lg font-semibold">
                            Upload PDF
                        </h2>
                        {file && (
                            <p className="text-sm text-blue-600 mt-2">
                                {file.name}
                            </p>
                        )}
                        <p className="text-gray-500 text-sm mt-2">
                            Drag and drop or click to browse
                        </p>
                    </label>
                </div>

                <div className='md:w-1/2 w-full flex flex-col justify-center items-center'>
                    <p className='p-2 w-full text-l font-bold text-gray-400'>Job Descriptions</p>
                    <label className="w-[90%] h-60 bg-[#F2F4F6] border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center cursor-text hover:border-blue-500 hover:bg-blue-50 transition p-4">
                        <textarea
                            placeholder="Paste Job Description"
                            onChange={(e) => setJobDescription(e.target.value)}
                            className="w-full h-full bg-transparent outline-none resize-none text-center flex items-center justify-center text-gray-600 placeholder:text-gray-400"
                        ></textarea>

                    </label>
                </div>
            </div>
            <div className="flex items-center justify-center md:justify-end mt-6 mb-4 px-4">
                <button onClick={handleUpload} disabled={loading} className="bg-blue-600 text-white px-6 py-2 rounded mr-2 flex items-center gap-3 hover:scale-105 transition-all duration-300">
                    <>
                    {loading?(<p>Analyzing</p>):(<><FaBolt /><p>Analyze Resume</p></>)}
                    </>
                </button>
            </div>
        </div>
    )
}

export default Upload
