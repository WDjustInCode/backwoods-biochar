import { useState } from 'react'
import Link from 'next/link'
import { FaInstagram, FaFacebook, FaShoppingCart } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-transparent" role="navigation" aria-label="main navigation">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <img src="/backwoods bird.png" alt="Backwoods Biochar" className="h-8 w-auto object-contain" />
          </Link>

          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            <Link href="/shop" className="text-gray-700 hover:text-gray-900 font-medium tracking-widest text-sm uppercase">Shop</Link>
            <Link href="/services" className="text-gray-700 hover:text-gray-900 font-medium tracking-widest text-sm uppercase">Services</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium tracking-widest text-sm uppercase">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium tracking-widest text-sm uppercase">Contact</Link>
          </div>

          <div className="hidden md:flex items-center space-x-5">
            <a href="https://www.instagram.com/backwoods_biochar_llc/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.facebook.com/Backwoods-Biochar-104956791259951" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <FaFacebook size={20} />
            </a>
            <span className="text-gray-600">
              <FaShoppingCart size={20} />
            </span>
          </div>

          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-200 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-200 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-200 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-gray-200 pt-3 bg-white bg-opacity-90">
            <Link href="/shop" className="block py-2 text-gray-700 hover:text-gray-900 font-medium uppercase tracking-widest text-sm">Shop</Link>
            <Link href="/services" className="block py-2 text-gray-700 hover:text-gray-900 font-medium uppercase tracking-widest text-sm">Services</Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-gray-900 font-medium uppercase tracking-widest text-sm">About</Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-gray-900 font-medium uppercase tracking-widest text-sm">Contact</Link>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.instagram.com/backwoods_biochar_llc/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} className="text-gray-600" />
              </a>
              <a href="https://www.facebook.com/Backwoods-Biochar-104956791259951" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} className="text-gray-600" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
