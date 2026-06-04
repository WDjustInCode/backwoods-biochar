import Layout from '../components/Layout'
import TexturedSection from '../components/TexturedSection'
import Link from 'next/link'

const products = [
  {
    name: 'Super Sack',
    price: '$320.99',
    unit: 'per cubic yard',
    description: 'Our standard super sack is perfect for small-to-mid-scale growers. Self-storing and easy to handle.',
    details: ['1 cubic yard', '~350 lbs', 'Self-storing bag', 'Free delivery available'],
  },
  {
    name: 'Super Sack Stack',
    price: '$299.99',
    unit: 'per cubic yard',
    description: 'Double up and save. Our stacked option gives you twice the volume at a better per-yard rate.',
    details: ['2 cubic yards', '$599.99 total', 'Save over 5%', 'Free delivery available'],
    featured: true,
  },
  {
    name: 'Bagged Truckload',
    price: '$288.99',
    unit: 'per cubic yard',
    description: 'For large-scale operations. A full truckload of bagged premium biochar at our best rate.',
    details: ['52 cubic yards', '$14,999.99 total', 'Save over 10%', 'Delivery included'],
  },
]

export default function ShopPage() {
  return (
    <Layout>
      <TexturedSection variant={0} className="pt-32 pb-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-900">Shop</h1>
          <p className="text-lg text-gray-600 mt-2">Premium hardwood biochar, delivered to you.</p>
        </div>
      </TexturedSection>

      <TexturedSection variant={1} className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-brand-green mb-4">Purchase Options</h2>
            <p className="text-gray-600 text-lg">
              We make it easy to receive and store your biochar. Choose the option that fits your scale.
              All biochar is 100% hardwood, heated at optimum conditions for maximum soil benefit.
              Contact us for custom quantities or payment arrangements.
            </p>
          </div>
        </div>
      </TexturedSection>

      <TexturedSection variant={2} className="pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className={`border-2 p-8 flex flex-col bg-white bg-opacity-70 ${product.featured ? 'border-brand-green' : 'border-gray-200'}`}
              >
                {product.featured && (
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-green mb-3">Most Popular</span>
                )}
                <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-brand-green">{product.price}</span>
                  <span className="text-gray-500 text-sm ml-1">{product.unit}</span>
                </div>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {product.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-gray-700">
                      <span className="text-brand-green font-bold">✓</span> {d}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn text-center">Order Now</Link>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-10 text-sm">
            All orders are fulfilled through direct contact.{' '}
            <Link href="/contact" className="underline text-brand-green">Reach out</Link> to place your order.
          </p>
        </div>
      </TexturedSection>
    </Layout>
  )
}
