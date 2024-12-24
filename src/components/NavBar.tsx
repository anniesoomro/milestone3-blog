"use client"

import Link from "next/link";


export default function NavBar () {
    return (
        <header className="text-gray-500 body-font shadow-lg">
            <div className="bg-zinc-900 container mx-auto flex flex-wrap p-2 flex-col md:flex-row">
            <h1 className="text-3xl font-bold text-white mr-auto hover:text-red-600 ">Exploring Horizons</h1>
                <nav className="md:ml-auto flex flex-justify-between items-center text-white">
                    
                 <Link href="/" className="mr-5 hover:text-red-600 transition-colors duration-300 transform hover:scale-105">
                 Home
                 </Link>  
                 <Link href="/about" className="mr-5 hover:text-red-600 transition-colors duration-300 transform hover:scale-105">
                 About
                 </Link> 
                 <Link href="/blog" className="mr-5 hover:text-red-600 transition-colors duration-300 transform hover:scale-105">
                 Blog
                 </Link>
                 <Link href="/contact" className="mr-5 hover:text-red-600 transition-colors duration-300 transform hover:scale-105">
                 Contact
                 </Link>
                </nav>

                

            </div>
        </header>
    )
}