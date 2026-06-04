import Layout from '../components/Layout'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <Layout>
      <section className="py-24 text-center">
        <h1 className="text-6xl font-bold text-brand-green mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found.</p>
        <Link href="/" className="btn">Go Home</Link>
      </section>
    </Layout>
  )
}
