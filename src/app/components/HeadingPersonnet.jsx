import React from 'react'

function HeadingPersonnet({text}) {
    return (
        <div className="relative bg-cover bg-center h-[12rem]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center ">
                <div className="text-white">
                    <h1 className="text-4xl font-bold pt-[5rem] pl-[5rem]">
                        {text}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default HeadingPersonnet