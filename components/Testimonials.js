export default function Testimonials({ testimonials }) {
  return (
    <div className="my-6 space-y-4">
      {testimonials.map((t, i) => (
        <div key={i} className="border border-gray-200 rounded p-4">
          <p className="mb-2">{t.quote}</p>
          <cite className="text-sm text-gray-600 not-italic"> – {t.author}</cite>
        </div>
      ))}
    </div>
  )
}
