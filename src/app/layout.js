import { Montserrat } from 'next/font/google'
import { Outfit } from 'next/font/google'
import './globals.css'
import 'remixicon/fonts/remixicon.css'

const montserrat = Montserrat({ subsets: ['latin'] })
const outfit = Outfit({ subsets: ['latin'] })


export const metadata = {
  title: 'Park Infinity',
  description: 'Created By Anant Shah',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}