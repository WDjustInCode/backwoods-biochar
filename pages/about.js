import Layout from '../components/Layout'
import TexturedSection from '../components/TexturedSection'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <Layout>
      <TexturedSection variant={0} className="pt-32 pb-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-900">About</h1>
          <p className="text-lg text-gray-600 mt-2">Rooted in the Pacific Northwest.</p>
        </div>
      </TexturedSection>

      <TexturedSection variant={1} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-brand-green mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              Backwoods Biochar was founded on a simple idea: that the best way to improve the land is to work
              with it, not against it. We produce premium 100% hardwood biochar from sustainable Pacific Northwest
              timber — heated at optimum temperatures to create the highest-quality soil amendment available.
            </p>
            <p className="text-lg text-gray-600">
              Biochar has been used to restore soil health for thousands of years. Our goal is to bring that
              ancient practice to modern growers, farmers, and land stewards at every scale — from backyard
              gardens to large agricultural operations.
            </p>
          </div>
        </div>
      </TexturedSection>

      <TexturedSection variant={2} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-green mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: '100% Hardwood',
                body: 'Not all biochar is equal. We use only Pacific Northwest hardwood — no agricultural byproducts, no mixed feedstocks. Hardwood biochar has a higher surface area, better pore structure, and more stable carbon than alternatives.',
              },
              {
                title: 'Optimum Conditions',
                body: 'Temperature and duration during pyrolysis have a direct impact on biochar quality. We produce at the range that maximizes porosity, surface area, and carbon stability — every batch, every time.',
              },
              {
                title: 'Sustainable Production',
                body: 'Biochar production is one of the only energy systems that sequesters more carbon than it emits. We take that responsibility seriously — our process is designed to maximize carbon capture while minimizing waste.',
              },
              {
                title: 'Direct Relationships',
                body: 'We work directly with the people who use our biochar. No middlemen, no distributors — just a direct conversation about your land and what it needs. Our customers report up to 20% increased production.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="border border-gray-300 p-8 bg-white bg-opacity-60">
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-gray-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </TexturedSection>

      <TexturedSection variant={3} className="py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h3 className="text-2xl font-bold text-brand-green mb-4">Want to work with us?</h3>
          <p className="text-gray-600 mb-8">We'd love to hear about your land and what you're trying to grow.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn">Get in Touch</Link>
            <Link href="/services" className="btn">View Services</Link>
          </div>
        </div>
      </TexturedSection>
    </Layout>
  )
}
