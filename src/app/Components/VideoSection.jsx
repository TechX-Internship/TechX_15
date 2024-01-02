import React from 'react'

const VideoSection = () => {
    return (
        <section className='video-section py-36 relative'>
            <div className="container m-auto flex flex-col items-center justify-center z-10 relative">
                <div className='play-btn h-14 w-14 bg-primary flex items-center justify-center text-4xl shadow-lg shadow-slate-700'>
                    <i className="ri-play-mini-fill"></i>
                </div>
                <h3 className="playfair mt-6 text-5xl capitalize text-white">Take a Tour of <span className="color-primary">Luxury</span></h3>
            </div>
        </section>
    )
}

export default VideoSection