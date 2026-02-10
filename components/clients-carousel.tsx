'use client'

const clients = [
  { name: 'Hadiyah', logo: '/images/clients/hg.png', type: 'image' },
  { name: 'Giftech Global', logo: '/images/clients/gg.png', type: 'image' },
  { name: 'Mayur Computers', logo: '/images/clients/mayurcomputers.png', type: 'image' },
  { name: 'IMOG', logo: '/images/clients/imog.png', type: 'image' },
  { name: 'Rixe.io', type: 'text' },
]

export function ClientsCarousel() {
  const tripleClients = [...clients, ...clients, ...clients]

  return (
    <div className="w-full overflow-hidden py-10">
      <div className="flex gap-24 animate-scroll items-center">
        {tripleClients.map((client, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-80 h-40 flex items-center justify-center grayscale-0 transition-transform duration-300 hover:scale-110"
          >
            {client.type === 'image' ? (
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <span className="text-4xl font-bold text-white tracking-wide">
                {client.name}
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-24 animate-scroll items-center mt-[-10rem]" aria-hidden="true">
        {tripleClients.map((client, idx) => (
          <div
            key={`duplicate-${idx}`}
            className="flex-shrink-0 w-80 h-40 flex items-center justify-center grayscale-0 transition-transform duration-300 hover:scale-110"
          >
            {client.type === 'image' ? (
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <span className="text-4xl font-bold text-white tracking-wide">
                {client.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
