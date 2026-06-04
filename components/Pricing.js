export default function Pricing({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
      {data.map((price) => (
        <div key={price.plan} className="p-6">
          <h4 className="text-center font-semibold text-lg">{price.plan}</h4>
          <h2 className="text-6xl font-bold text-center my-5 text-brand-green">${price.price}</h2>
          <p className="font-semibold text-center mb-5">{price.description}</p>
          <ul className="space-y-1">
            {price.items.map((item) => (
              <li key={item} className="text-lg">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
