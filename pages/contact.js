import Layout from '../components/Layout'
import TexturedSection from '../components/TexturedSection'
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <Layout>
      <TexturedSection variant={0} className="pt-32 pb-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-900">Contact</h1>
          <p className="text-lg text-gray-600 mt-2">We'll find the right option for your land.</p>
        </div>
      </TexturedSection>

      <TexturedSection variant={1} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white bg-opacity-70 p-10 border border-gray-200">
              <h2 className="text-2xl font-bold text-brand-green mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:border-brand-green bg-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:border-brand-green bg-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">What are you working on?</label>
                  <textarea
                    rows={5}
                    className="w-full border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:border-brand-green resize-none bg-transparent"
                    placeholder="Tell us about your land, your goals, and the scale of your project..."
                  />
                </div>
                <button type="submit" className="btn w-full text-center">Send Message</button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-green mb-8">Get in Touch Directly</h2>
              <div className="space-y-6">
                {[
                  { href: 'tel:+13602412244', Icon: FaPhone, label: 'Phone', value: '+1 (360) 241-2244' },
                  { href: 'mailto:joshua@backwoodsbiochar.com', Icon: FaEnvelope, label: 'Email', value: 'joshua@backwoodsbiochar.com' },
                  { href: 'https://www.instagram.com/backwoods_biochar_llc/', Icon: FaInstagram, label: 'Instagram', value: '@backwoods_biochar_llc', external: true },
                  { href: 'https://www.facebook.com/Backwoods-Biochar-104956791259951', Icon: FaFacebook, label: 'Facebook', value: 'Backwoods Biochar', external: true },
                ].map(({ href, Icon, label, value, external }) => (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex items-center gap-4 text-gray-700 hover:text-brand-green group"
                  >
                    <div className="w-12 h-12 border border-gray-300 bg-white bg-opacity-60 flex items-center justify-center group-hover:border-brand-green transition-colors">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-gray-400 mb-1">{label}</div>
                      <div className="font-medium">{value}</div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-12 p-6 border-l-4 border-brand-green bg-white bg-opacity-60">
                <p className="text-gray-600 text-sm">
                  <strong className="text-gray-800">Based in the Pacific Northwest.</strong> We serve growers
                  and land managers throughout Washington and Oregon. For large orders or out-of-region
                  delivery, reach out and we'll work something out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </TexturedSection>
    </Layout>
  )
}
