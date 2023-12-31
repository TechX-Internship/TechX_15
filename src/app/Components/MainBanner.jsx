import ButtonOutline from "@/components/ButtonOutline"
import Image from "next/image"

const MainBanner = () => {
    return (
        <section className="main-banner h-screen flex items-center justify-center">
            <div className="container">
                <div className="w-7/12 pl-20 relative">
                    <Image src={'/banner-side-image.png'} width={100} height={100} alt="no" className="banner-side-img"/>
                    <h6 className="outfit mb-7 text-2xl color-primary">Welcome To Park Infinity</h6>
                    <h1 className="playfair mb-7 text-6xl capitalize text-white">Discover Your Perfact Stay at <span className="color-primary">Park Infinity</span></h1>
                    <p className="color-secondary outfit mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sed reiciendis quaerat quas ex saepe illo eaque cupiditate beatae dolore. Sit excepturi, nisi provident repellendus nihil voluptate earum. Adipisci, eaque.</p>
                    <ButtonOutline title={'Book Now'} />
                </div>
            </div>
        </section>
    )
}

export default MainBanner