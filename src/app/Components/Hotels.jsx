import ButtonOutline from '@/components/ButtonOutline'
import SectionTitle from '@/components/SectionTitle'
import React from 'react'

const Hotels = () => {
    return (
        <section className='flex bg-black items-center'>
            <div className='w-6/12 bg-hotels brightness-50'></div>
            <div className='w-6/12 pl-10'>
                    <SectionTitle title='luxury hotels & Resorts' />
                    <h3 className="playfair mb-6 text-5xl capitalize text-white">Your <span className="color-primary">Comfort</span> Is Our <span className="color-primary">Priority</span>  </h3>
                    <p className='color-secondary outfit mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at orci aliquet, lobortis sapien et, posuere mi. Nullam at tellus enim. Praesent eros neque, malesuada eu velit ut, vestibulum commodo mi. Ut augue diam, vehicula et cursus sit amet, sagittis consequat lectus. Vestibulum interdum ultricies maximus. Aenean egestas sodales vehicula.</p>
                    <p className='color-secondary outfit mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at orci aliquet, lobortis sapien et, posuere mi. Nullam at tellus enim. Praesent eros neque, malesuada eu velit ut, vestibulum commodo mi. Ut augue diam, vehicula et cursus sit amet, sagittis consequat lectus. Vestibulum interdum ultricies maximus. Aenean egestas sodales vehicula.</p>
                    <ButtonOutline title={'Read More'}/>
                </div>
        </section>
    )
}

export default Hotels