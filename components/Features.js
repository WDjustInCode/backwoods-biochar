export default function Features({ gridItems }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      {gridItems.map((item, i) => (
        <div key={i} className="text-center p-6">
          <div className="flex justify-center mb-4">
            <img
              src={item.image}
              alt={item.heading}
              className="object-contain"
              style={{ width: 240 }}
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">{item.heading}</h2>
          <p>{item.items}</p>
        </div>
      ))}
    </div>
  )
}
