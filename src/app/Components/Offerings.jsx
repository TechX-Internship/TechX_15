import ButtonOutline from '@/components/ButtonOutline'
import SectionTitle from '@/components/SectionTitle'
import Image from 'next/image'

const offers = [
    {
        icon: '/Frame.svg',
        title: 'Airport Pick-up Services'
    },
    {
        icon: '/Frame-1.svg',
        title: 'Housekeeper Services'
    },
    {
        icon: '/Frame-3.svg',
        title: 'WIFI & Internet'
    },
    {
        icon: '/Frame-4.svg',
        title: 'laundry service'
    },
    {
        icon: '/Frame-2.svg',
        title: 'Breakfast In Bed '
    },
    {
        icon: '/Frame-5.svg',
        title: 'Swimming Pool'
    },
]


const Offerings = () => {
    return (
        <section className='py-24 bg-black'>
            <div className="container m-auto flex items-center justify-center">
                <div className="w-7/12 px-3">
                    <SectionTitle title='Our Amenities' />
                    <h3 className="playfair mb-6 text-5xl capitalize text-white">Our <span className="color-primary">Luxurious</span> Offerings </h3>
                    <div className="flex flex-wrap mt-10 mb-6">
                        {offers.map((offer, index) => (
                            <div className="w-6/12 flex items-center mb-5" key={index}>
                                <div className='icon-container border border-primary p-3 flex items-center justify-center'>
                                    <Image src={offer.icon} width={40} height={40} alt='no' />
                                </div>
                                <div className="offers-content pl-4">
                                    <h5 className='outfit text-white text-xl'>{offer.title}</h5>
                                    <p className='color-secondary text-base'>Lorem ipsum dolor sit amet, consecte tur adipiscing elit Maecenas.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ButtonOutline title='View More' />
                </div>
                <div className='w-5/12 px-3'>
                    <Image src={'/offers-image.png'} height={100} width={100} alt='no' style={{width: '100%'}} quality={100} layout='responsive' />
                </div>
            </div>
        </section>
    )
}

export default Offerings