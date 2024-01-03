import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <section className='footer pt-16 bg-less-dark'>
            <div className="w-7/12 m-auto flex flex-col items-center justify-center">
                <div className="logo mb-4">
                    <Image src='/logo-center.png' width={100} height={100} alt="no" quality={100} layout="responsive" />
                </div>
                <p className="color-secondary text-center mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at orci aliquet, lobortis sapien et, posuere mi. Nullam at tellus enim. Praesent eros neque, malesuada eu velit ut, vestibulum commodo mi. Ut augue diam.</p>
                <ul className="menu flex items-center gap-7 text-white mb-4">
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
            </div>
            <hr />
            <div className="w-9/12 m-auto sub-footer flex items-center justify-between py-3">
                <div>
                    <ul className="flex gap-3">
                        <li className="color-primary text-2xl">
                            <i className="ri-google-fill"></i>
                        </li>
                        <li className="color-primary text-2xl">
                            <i className="ri-linkedin-box-fill"></i>
                        </li>
                        <li className="color-primary text-2xl">
                            <i className="ri-instagram-fill"></i>
                        </li>
                        <li className="color-primary text-2xl">
                            <i className="ri-twitter-fill"></i>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="color-secondary">© Copyright 2023 | Park Infinity | All right reserved</p>
                </div>
            </div>
        </section>
    )
}

export default Footer