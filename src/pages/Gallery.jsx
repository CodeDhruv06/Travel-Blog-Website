import { useState } from 'react';
import bali from '.../public/bali.jpeg';
import paris from '.../public/france.jpeg';
import greece from '.../public/greece.jpeg';
import tokyo from '.../public/tokyo.jpeg';
import kyoto from '.../public/kyoto.jpg';

function Gallery() {
  const photos = [
    {
      url: {paris},
      title: 'Eiffel Tower at Sunset',
      location: 'Paris, France',
    },
    {
      url: {tokyo},
      title: 'Cherry Blossoms in Spring',
      location: 'Tokyo, Japan',
    },
    {
      url: {greece},
      title: 'Santorini Blue Domes',
      location: 'Santorini, Greece',
    },
    {
      url: {bali},
      title: 'Rice Terraces',
      location: 'Bali, Indonesia',
    },
    {
      url: {kyoto},
      title: 'Sunset Over the City',
      location: 'Kyoto, Japan',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevPhoto = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const goToPhoto = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-orange-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Travel Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my favorite moments captured during my travels around the world.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            <div className="relative h-96 md:h-[500px]">
              <img
                src={photos[currentIndex].url}
                alt={photos[currentIndex].title}
                className="w-full h-full object-cover"
              />
              
              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity duration-200"
              >
                <span className="text-xl">‹</span>
              </button>
              
              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity duration-200"
              >
                <span className="text-xl">›</span>
              </button>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {photos[currentIndex].title}
                </h3>
                <p className="text-gray-200 text-lg">
                  {photos[currentIndex].location}
                </p>
              </div>
            </div>

            <div className="flex justify-center space-x-2 p-4 bg-gray-100">
              {photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => goToPhoto(index)}
                  className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                    index === currentIndex
                      ? 'border-teal-600 ring-2 ring-teal-200'
                      : 'border-gray-300 hover:border-teal-400'
                  }`}
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Photo {currentIndex + 1} of {photos.length}
          </p>
        </div>

        <div className="mt-12 bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Capturing Memories
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Every photo tells a story. These images represent some of my most cherished 
            travel memories, each one capturing a unique moment in time that I'll treasure forever.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;