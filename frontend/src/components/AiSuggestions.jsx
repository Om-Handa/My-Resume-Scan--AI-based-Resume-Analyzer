import React from 'react'

const AiSuggestions = ({ suggestions }) => {

    if (!suggestions || suggestions.length === 0) {
        return (
            <div className='p-5 text-gray-500'>
                No Suggestions available
            </div>
        )
    }
    return (
        <div className='p-5 flex flex-col gap-4'>
            {suggestions.map((item, index) => (
                <div key={index} className='bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3'>
                    <div className='w-2 h-2 rounded-full bg-blue-600 mt-2'></div>
                    <p className='text-gray-700 font-medium'>
                        {item}
                    </p>
                </div>

            ))

            }
        </div>
    )
}

export default AiSuggestions