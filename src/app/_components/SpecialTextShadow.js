import React from 'react'

export default function SpecialTextShadow({ content }) {
    return (
        <div className='drop-shadow-[3px_3px_1px_blue] bg-slate-950/5 px-4 py-2 rounded-lg'>
            <div className="drop-shadow-[-3px_-3px_1px_blue]">
                <div className="drop-shadow-[-2px_-2px_1px_yellow]">
                    <div className="drop-shadow-[2px_2px_1px_yellow]">
                        <div className="drop-shadow-[-1px_-1px_1px_red]">
                            <div className="drop-shadow-[1px_1px_1px_red] text-5xl font-extrabold text-blue-200">
                                {content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
