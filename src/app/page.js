import Header from "@/components/Header";
import MainBanner from "./Components/MainBanner";
import AboutUs from "./Components/AboutUs";
import Hotels from "./Components/Hotels";
import Offerings from "./Components/Offerings";
import VideoSection from "./Components/VideoSection";
import ReserveFormSection from "./Components/ReserveFormSection";
import Footer from "@/components/Footer";


export default function Home() {
    return (
        <>
            <Header />
            <MainBanner />
            <AboutUs />
            <Offerings />
            <Hotels />
            <VideoSection />
            <ReserveFormSection />
            <Footer />
        </>
    )
}