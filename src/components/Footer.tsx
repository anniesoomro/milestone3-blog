import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white px-4 py-8 md:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Top Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <Link href="/" className="text-xl font-semibold mb-4 md:mb-0">
            Exploring Horizons
          </Link>
          <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
            <Link href="/" className="hover:text-zinc-300 transition-colors">
              Home
            </Link>
            <Link
              href="/blog"
              className="hover:text-zinc-300 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="hover:text-zinc-300 transition-colors"
            >
              About us
            </Link>
            <Link
              href="/contact"
              className="hover:text-zinc-300 transition-colors"
            >
              Contact us
            </Link>
            <Link
              href="/privacy"
              className="hover:text-zinc-300 transition-colors"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>

        {/* Newsletter Section */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Subscribe to our news letter to get latest updates and news
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
            <Input
              type="email"
              placeholder="Enter Your Email"
              className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
            />
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-zinc-800">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-zinc-400 mb-1">
              Exploring Horizons © 2021. All Rights Reserved.
            </p>
           
          </div>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <FaFacebook size={20} />
            </Link>
            <Link
              href="#"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="#"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="#"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
