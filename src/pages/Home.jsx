import React , {useState} from 'react';
import phoneGIF from '../assets/phone.gif';
import destination from '../assets/destination.gif';
import camera from '../assets/camera.gif';
import { useNavigate } from 'react-router-dom'; 
import AnimatedCard from '../components/AnimatedCard';
function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-orange-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Welcome to My Travel Diary
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join me on my adventures around the world as I explore new places, 
            meet amazing people, and create unforgettable memories.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <AnimatedCard navigateTo={() => navigate('/destinations')}>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-teal-600 text-2xl">
                  <img src={destination} alt="Destination" />
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Destinations</h3>
              <p className="text-gray-600">
                Discover the amazing places I've visited and the stories behind each journey.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard navigateTo={() => navigate('/gallery')}>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">
                  <img src={camera} alt="Camera" />
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Gallery</h3>
              <p className="text-gray-600">
                Browse through my collection of travel photos capturing beautiful moments.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard navigateTo={() => navigate('/contact')}>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="bg-pink-100 text-pink-600 text-2xl">
                  <img src={phoneGIF} alt="Contacts" />
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact</h3>
              <p className="text-gray-600">
                Get in touch with me to share your own travel stories or ask questions.
              </p>
            </div>
          </AnimatedCard>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">About My Journey</h2>
          <div className="max-w-2xl mx-auto text-gray-600 space-y-4">
            <p>
              Traveling has always been my passion. There's something magical about stepping 
              into a new place, experiencing different cultures, and meeting people from all 
              walks of life. Each destination has taught me something new about the world and 
              about myself.
            </p>
            <p>
              This travel diary is my way of documenting these incredible experiences and 
              sharing them with fellow travel enthusiasts. From bustling cities to serene 
              countryside, from ancient landmarks to modern marvels – every place has its 
              own unique story to tell.
            </p>
            <p>
              I hope my adventures inspire you to explore the world and create your own 
              unforgettable memories. After all, the world is a book, and those who don't 
              travel read only one page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;