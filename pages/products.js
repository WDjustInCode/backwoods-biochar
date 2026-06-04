import Layout from '../components/Layout'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Link from 'next/link'

const testimonials = [
  {
    quote: "The first time I tried Kaldi's coffee, I couldn't even believe that was the same thing I've been drinking every morning.",
    author: 'Elisabeth Kaurismäki',
  },
  {
    quote: "Kaldi is the place to go if you want the best quality coffee. I love their stance on empowering farmers and transparency.",
    author: 'Philipp Trommler',
  },
]

const pricingPlans = [
  {
    plan: 'Super Sack',
    price: '320.99',
    description: 'Per cubic yards',
    items: ['1 cubic yard', 'Self Storing', 'About 350 lbs'],
  },
  {
    plan: 'Super Sack Stack',
    price: '299.99',
    description: 'Per cubic yards',
    items: ['$599.99 double stack', '2 cubic yards', 'Save > 5%'],
  },
  {
    plan: 'Bagged Truckload',
    price: '288.99',
    description: 'Per cubic yard',
    items: ['$14,999.99', '52 cubic yards', 'Save > 10%'],
  },
]

export default function ProductsPage() {
  return (
    <Layout>
      <div
        className="w-full flex items-center justify-center"
        style={{
          backgroundImage: "url('/img/jumbotron.jpg')",
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          transform: 'rotate(180deg)',
          height: 400,
        }}
      >
        <h1
          className="text-5xl font-bold text-white px-4"
          style={{ transform: 'rotate(180deg)' }}
        >
          Our Biochar
        </h1>
      </div>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="max-w-2xl mb-8 ml-4 lg:ml-8">
            <h3 className="text-4xl font-semibold mb-4 text-brand-green">Great coffee with a conscience</h3>
            <p>
              Kaldi is the ultimate spot for coffee lovers who want to learn about their java&apos;s origin and support
              the farmers that grew it. We take coffee production, roasting and brewing seriously and we&apos;re glad to
              pass that knowledge to anyone.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-4 flex-1">
                <img src="/img/products-grid3.jpg" alt="A close-up of a paper filter filled with ground coffee" className="w-full object-cover" />
                <img src="/img/products-grid2.jpg" alt="A green cup of coffee on a wooden table" className="w-full object-cover" />
              </div>
              <div className="flex-1">
                <img src="/img/products-grid1.jpg" alt="Coffee beans" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <Testimonials testimonials={testimonials} />
          </div>

          <div
            className="w-full my-8"
            style={{
              backgroundImage: "url('/img/products-full-width.jpg')",
              backgroundPosition: '58% 60%',
              backgroundSize: 'cover',
              height: 400,
            }}
          />

          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-semibold mb-2 text-brand-green">Purchase Options</h2>
            <p className="text-lg mb-6">
              We make it easy for you to recieve and store your biochar. Choose one of our preferred purchase options to
              receive premium biochar at a destination of your choice. Contact us about more details and payment info.
            </p>
            <Pricing data={pricingPlans} />
          </div>

          <div className="text-center mt-8">
            <Link href="/contact" className="btn">Contact Us</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
