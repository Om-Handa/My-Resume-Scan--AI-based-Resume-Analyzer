import React from 'react'

const History = ({history}) => {
    return (
        <div className=" w-full max-w-4xl p-2">
            <div className="flex flex-col gap-4">
                {history.map((item) => (
                    <div key={item.id} className="border p-5 rounded shadow" >
                        <h2 className="text-xl font-bold">{item.filename}</h2>
                        <p className='text-lg'> ATS Score:<span className="font-bold">{" "} {item.ats_score}%</span></p>
                        <p className='text-lg'>Skills: {" "} {item.skills_found} </p>
                        <p className='text-lg'> Missing Skills: {" "} {item.missing_skills} </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default History