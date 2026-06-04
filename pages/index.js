import Layout from '../components/Layout'
import TexturedSection from '../components/TexturedSection'
import Link from 'next/link'
import { FaLeaf, FaRecycle, FaGlobeAmericas } from 'react-icons/fa'

export default function IndexPage() {
  return (
    <Layout>
      <div className="w-full relative">
        <img src="/heroImage.png" alt="Backwoods Biochar" className="w-full block" />
      </div>

      <TexturedSection variant={0} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-brand-green mb-4">Premium Hardwood Biochar</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Backwoods Biochar is a 100% hardwood biochar produced at optimum conditions. We supply growers,
            composters, and land managers with the highest quality soil amendment available — and our customers
            report up to 20% increased production.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/shop" className="btn">Shop Biochar</Link>
            <Link href="/services" className="btn">Our Services</Link>
          </div>
        </div>
      </TexturedSection>

      <TexturedSection variant={1} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-brand-green mb-12">Why Biochar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="flex justify-center mb-4 text-brand-green"><FaLeaf size={40} /></div>
              <h3 className="text-xl font-bold mb-3">Soil Health</h3>
              <p className="text-gray-600">
                Improves porosity, increases water retention, boosts microbial activity, increases aggregation,
                and reduces soil acidity — creating the ideal growing environment.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4 text-brand-green"><FaRecycle size={40} /></div>
              <h3 className="text-xl font-bold mb-3">Compost Enhancement</h3>
              <p className="text-gray-600">
                Reduces bulk density, prevents nutrient loss, promotes microbial activity, reduces ammonia
                volatilization, and lowers greenhouse gas emissions from compost piles.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4 text-brand-green"><FaGlobeAmericas size={40} /></div>
              <h3 className="text-xl font-bold mb-3">Carbon Sequestration</h3>
              <p className="text-gray-600">
                Biochar is the byproduct of one of the only energy systems that puts more carbon back into the
                earth than it emits — a genuine net-negative carbon solution.
              </p>
            </div>
          </div>
        </div>
      </TexturedSection>

      <TexturedSection variant={2} className="py-24 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h3 className="text-3xl font-bold text-brand-green mb-4">Ready to enrich your soil?</h3>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Whether you need a single super sack or a full truckload, we have a purchase option for every scale.
          </p>
          <Link href="/shop" className="btn">See Pricing</Link>
        </div>
      </TexturedSection>
    </Layout>
  )
}
