import Link from 'next/link'
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa'
import TexturedSection from './TexturedSection'

export default function Footer() {
  return (
    <TexturedSection as="footer" variant={3} className="w-full border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img src="/backwoods logo transparent.png" alt="Backwoods Biochar" className="h-32 w-auto object-contain" />
            </Link>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/shop" className="text-gray-700 hover:text-brand-green font-medium">Shop</Link></li>
              <li><Link href="/services" className="text-gray-700 hover:text-brand-green font-medium">Services</Link></li>
              <li><Link href="/about" className="text-gray-700 hover:text-brand-green font-medium">About</Link></li>
              <li><Link href="/contact" className="text-gray-700 hover:text-brand-green font-medium">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+13602412244" className="flex items-center gap-2 text-gray-700 hover:text-brand-green">
                  <FaPhone size={14} /> <span>+1 (360) 241-2244</span>
                </a>
              </li>
              <li>
                <a href="mailto:joshua@backwoodsbiochar.com" className="flex items-center gap-2 text-gray-700 hover:text-brand-green">
                  <FaEnvelope size={14} /> <span>joshua@backwoodsbiochar.com</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/backwoods_biochar_llc/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-brand-green">
                  <FaInstagram size={14} /> <span>@backwoods_biochar_llc</span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/Backwoods-Biochar-104956791259951" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-brand-green">
                  <FaFacebook size={14} /> <span>Backwoods Biochar</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-gray-300 text-center text-xs text-gray-400">
          © 2020 Backwoods Biochar LLC. All rights reserved.
        </div>
      </div>
    </TexturedSection>
  )
}
