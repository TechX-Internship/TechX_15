import ButtonOutline from '@/components/ButtonOutline'
import Image from 'next/image'
import React from 'react'

let list = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'bulum interdum ultricies maximus. Aenean egestas sodales vehicula.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'bulum interdum ultricies maximus. Aenean egestas .'
]

const AboutUs = () => {
    return (
        <section className='bg-black py-20 about'>
            <div className="container m-auto flex items-center">
                <div className='w-6/12 px-3'>
                    <Image src={'/about-left.jpg'} quality={100} layout='responsive' width={100} height={100} alt='Not Available' className='about-img' />
                </div>
                <div className='w-6/12 pl-10'>
                    <h6 className='outfit mb-6 text-2xl color-primary'>ABOUT US</h6>
                    <h3 className="playfair mb-6 text-5xl capitalize text-white">Crafting <span className="color-primary">Unforgettable</span> Experiences at <span className="color-primary">Park Infinity</span> </h3>
                    <p className='color-secondary outfit mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at orci aliquet, lobortis sapien et, posuere mi. Nullam at tellus enim. Praesent eros neque, malesuada eu velit ut, vestibulum commodo mi. Ut augue diam, vehicula et cursus sit amet, sagittis consequat lectus. Vestibulum interdum ultricies maximus. Aenean egestas sodales vehicula.</p>
                    <ul className='mb-7'>
                        {
                            list.map((item, idx) => (
                                <li className='outfit text-white mb-2 font-light' key={idx}>
                                    <i className="ri-checkbox-circle-line mr-2 color-primary"></i>
                                    <span>{item}</span>
                                </li>
                            ))
                        }
                    </ul>
                    <ButtonOutline title={'Read More'}/>
                </div>
            </div>
        </section>
    )
}

export default AboutUs