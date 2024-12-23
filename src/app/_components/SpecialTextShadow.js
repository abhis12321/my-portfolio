import React from 'react'

export default function SpecialTextShadow({ children }) {
    return (
        <div className='drop-shadow-[3px_3px_1px_blue] text-center my-5'>
            <div className="drop-shadow-[-3px_-3px_1px_blue]">
                <div className="drop-shadow-[-2px_-2px_1px_yellow]">
                    <div className="drop-shadow-[2px_2px_1px_yellow]">
                        <div className="drop-shadow-[-1px_-1px_1px_red]">
                            <div className="drop-shadow-[1px_1px_1px_red] text-4xl sm:text-5xl font-extrabold text-blue-200">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
