import Layout from '../components/Layout'
import TexturedSection from '../components/TexturedSection'
import Link from 'next/link'
import { FaFlask, FaTractor, FaSeedling, FaComments, FaRecycle, FaLeaf } from 'react-icons/fa'

const services = [
  {
    icon: FaSeedling,
    title: 'Soil Amendment',
    description: 'We assess your soil composition and apply biochar at the correct rate and depth for your crop or land type. Tailored to your specific pH, texture, and nutrient profile.',
  },
  {
    icon: FaRecycle,
    title: 'Compost Integration',
    description: 'Biochar supercharges compost by reducing nitrogen loss, cutting odor, and increasing microbial diversity. We handle blending and application for gardens, farms, and large-scale operations.',
  },
  {
    icon: FaFlask,
    title: 'Soil Testing & Analysis',
    description: 'Before any application, we test your soil to establish a baseline — pH, organic matter, CEC, nutrient levels — and deliver a custom biochar application recommendation.',
  },
  {
    icon: FaTractor,
    title: 'Large-Scale Application',
    description: 'For agricultural operations and land managers, we coordinate bulk delivery and mechanical application across acreage. Designed for farms, vineyards, orchards, and restoration projects.',
  },
  {
    icon: FaComments,
    title: 'Consultation',
    description: 'Not sure where to start? Our consultation walks you through everything — from what biochar is to how to integrate it into your existing soil management plan.',
  },
  {
    icon: FaLeaf,
    title: 'Ongoing Land Management',
    description: 'Seasonal follow-up and long-term land management plans to monitor results, re-test soil, and adjust applications year over year for compounding benefit.',
  },
]

export default function ServicesPage() {
  return (
    <Layout>
      <TexturedSection variant={0} className="pt-32 pb-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-900">Services</h1>
          <p className="text-lg text-gray-600 mt-2">From soil testing to large-scale application.</p>
        </div>
      </TexturedSection>

      <TexturedSection variant={1} className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-brand-green mb-4">What We Do</h2>
            <p className="text-gray-600 text-lg">
              Backwoods Biochar isn't just a product — it's a soil service. We work directly with growers,
              farmers, composters, and land stewards to assess, apply, and monitor biochar in a way that
              delivers measurable, lasting results.
            </p>
          </div>
        </div>
      </TexturedSection>

      <TexturedSection variant={2} className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="border border-gray-300 p-8 bg-white bg-opacity-60">
                  <div className="text-brand-green mb-4"><Icon size={32} /></div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </TexturedSection>

      <TexturedSection variant={3} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-brand-green mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { step: '01', label: 'Reach Out', desc: 'Contact us with your project size and goals.' },
              { step: '02', label: 'Soil Assessment', desc: 'We test and analyze your current soil conditions.' },
              { step: '03', label: 'Custom Plan', desc: 'We build a tailored biochar application plan.' },
              { step: '04', label: 'Apply & Monitor', desc: 'We apply and follow up to track your results.' },
            ].map(({ step, label, desc }) => (
              <div key={step}>
                <div className="text-5xl font-bold text-brand-green opacity-30 mb-2">{step}</div>
                <h4 className="text-lg font-bold mb-2">{label}</h4>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </TexturedSection>

      <TexturedSection variant={0} className="py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h3 className="text-3xl font-bold text-brand-green mb-4">Let's improve your soil.</h3>
          <p className="text-gray-600 mb-8">Get in touch and we'll find the right service for your land.</p>
          <Link href="/contact" className="btn">Contact Us</Link>
        </div>
      </TexturedSection>
    </Layout>
  )
}
