import React, { useState } from 'react';
import { Heart, X } from 'lucide-react';

interface Profile {
  id: number;
  name: string;
  age: number;
  image: string;
  bio: string;
}

const profiles: Profile[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    age: 28,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    bio: "Adventure seeker | Coffee lover | Tech enthusiast"
  },
  {
    id: 2,
    name: "Michael Chen",
    age: 31,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    bio: "Photographer | Foodie | Travel addict"
  },
  {
    id: 3,
    name: "Emma Wilson",
    age: 26,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    bio: "Artist | Dog lover | Yoga instructor"
  }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  const handleSwipe = (direction: 'left' | 'right') => {
    setSwipeDirection(direction);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % profiles.length);
      setSwipeDirection(null);
    }, 300);
  };

  const currentProfile = profiles[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-100 to-teal-100 p-4">
      <div className="max-w-md mx-auto pt-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Tinder Clone</h1>
        
        <div className="relative h-[600px] w-full">
          <div
            className={`absolute w-full transition-all duration-300 transform
              ${swipeDirection === 'left' ? '-translate-x-full rotate-[-20deg]' : ''}
              ${swipeDirection === 'right' ? 'translate-x-full rotate-[20deg]' : ''}
            `}
          >
            <div className="relative w-full bg-white rounded-2xl shadow-xl overflow-hidden h-[600px]">
              <img
                src={currentProfile.image}
                alt={currentProfile.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h2 className="text-3xl font-bold text-white">
                  {currentProfile.name}, {currentProfile.age}
                </h2>
                <p className="text-white/90 mt-2">{currentProfile.bio}</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-6">
            <button
              onClick={() => handleSwipe('left')}
              className="bg-white p-4 rounded-full shadow-lg hover:bg-red-50 transition-colors"
            >
              <X className="w-8 h-8 text-red-500" />
            </button>
            <button
              onClick={() => handleSwipe('right')}
              className="bg-white p-4 rounded-full shadow-lg hover:bg-green-50 transition-colors"
            >
              <Heart className="w-8 h-8 text-green-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;