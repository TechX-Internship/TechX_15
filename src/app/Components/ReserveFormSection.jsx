import ButtonOutline from '@/components/ButtonOutline'
import FormLabelInput from '@/components/FormLabelInput'
import SectionTitle from '@/components/SectionTitle'
import Image from 'next/image'
import React from 'react'

let inputs = [
    {
        title: 'Check In Date',
        placeholder: 'DD / MM / YY',
    },
    {
        title: 'Check Out Date',
        placeholder: 'DD / MM / YY',
    },
    {
        title: 'Rooms',
        placeholder: 'Rooms',
    },
    {
        title: 'Adults',
        placeholder: 'Adults',
    }
]

const ReserveFormSection = () => {
    return (
        <section className='py-28 reserve-form bg-black'>
            <div className="container m-auto flex items-center">
                <div className="w-6/12 px-3">
                    <SectionTitle title='Reserve Your Day' />
                    <h3 className="playfair mb-6 text-5xl capitalize text-white">Book Your <span className="color-primary">Dream Room</span>  </h3>
                    <div className="form flex flex-wrap items-top">
                        {inputs.map((ip, id) => (
                            <div className="w-6/12 my-3" key={id}>
                                <FormLabelInput title={ip.title} placeholder={ip.placeholder} />
                            </div>
                        ))}
                    </div>
                    <div className='mt-7'>
                        <ButtonOutline title={'Book Now'} css='w-11/12 justify-center' />
                    </div>
                </div>
                <div className="w-6/12 px-3">
                    <Image src='/reserve-form-img.jpg' width={100} height={100} alt='no' className='w-full' quality={100} layout='responsive' />
                </div>
            </div>
        </section>
    )
}

export default ReserveFormSection