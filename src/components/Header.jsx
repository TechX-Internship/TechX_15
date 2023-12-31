import Image from "next/image"
import Link from "next/link"
import ButtonOutline from "./ButtonOutline"

const Header = () => {
    return (
        <header className="w-full absolute bg-transparent p-5 border-b border-gray-300">
            <div className="m-auto container flex items-center justify-between">
                <div className="logo">
                    <Link href={'/'}>
                        <Image src={'/logo.png'} width={100} height={100} alt="no" priority style={{width: 'auto', height: 'auto'}}></Image>
                    </Link>
                </div>
                <ul className="menu flex items-center gap-7 text-white">
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/'}>About Us</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Galary</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Amentities</Link>
                    </li>
                    <li>
                        <Link href={'/'}>Contact-Us</Link>
                    </li>
                </ul>
                <ButtonOutline title={'Book Now'}/>
            </div>
        </header>
    )
}

export default Header