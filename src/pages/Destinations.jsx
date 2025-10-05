function Destinations() {
  const destinations = [
    { place: 'Paris', country: 'France', year: '2023' },
    { place: 'Tokyo', country: 'Japan', year: '2022' },
    { place: 'Santorini', country: 'Greece', year: '2023' },
    { place: 'Bali', country: 'Indonesia', year: '2021' },
    { place: 'Kyoto', country: 'Japan', year: '2024' },
    { place: 'Osaka', country: 'Japan', year: '2024' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-orange-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My Destinations
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are the amazing places I've had the privilege to visit. Each destination 
            holds special memories and unique experiences.
          </p>
        </div>

        <div className="bg-pink-50 rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <div role="table" aria-label="Destinations" className="w-full">
              <div role="rowgroup" className="bg-teal-600 text-white">
                <div role="row" className="grid grid-cols-3">
                  <div role="columnheader" className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Place
                  </div>
                  <div role="columnheader" className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Country
                  </div>
                  <div role="columnheader" className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Year Visited
                  </div>
                </div>
              </div>

              <div role="rowgroup" className="divide-y divide-gray-200">
                {destinations.map((destination, index) => (
                  <div
                    key={index}
                    role="row"
                    className="grid grid-cols-3 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div role="cell" className="px-6 py-4 whitespace-nowrap">
                      <div className="text-lg font-medium text-gray-900">
                        {destination.place}
                      </div>
                    </div>
                    <div role="cell" className="px-6 py-4 whitespace-nowrap">
                      <div className="text-lg text-gray-600">
                        {destination.country}
                      </div>
                    </div>
                    <div role="cell" className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-3 py-1 text-sm font-medium bg-orange-100 text-orange-800 rounded-full">
                        {destination.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            More Adventures Coming Soon!
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            I'm always planning my next adventure. Follow my journey as I continue to explore 
            new destinations and add them to this list. The world is full of incredible places 
            waiting to be discovered!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Destinations;