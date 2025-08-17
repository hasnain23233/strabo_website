import React from 'react'
import img from '../assets/img.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'

const Slider = () => {
    const images = [img, img2, img3, img4, img5];
    return (
        <div className="relative overflow-hidden w-11/12 m-auto mt-3 py-8">
            {/* Left Blur */}
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
            {/* Right Blur */}
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="animate-marquee flex justify-between  w-full  gap-8">
                {[...images, ...images].map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`image-${index}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Slider
