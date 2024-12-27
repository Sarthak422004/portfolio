import React from 'react';

const Hobbies = () => {
  return (
    <section className="px-4 py-24 bg-gradient-to-tr from-[#000000] to-[#1a1a1a] text-white" id="Hobbies">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">My Hobbies</h2>
            <div className="w-16 h-1 bg-amber-300 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-110 transition duration-300">
              <div className="bg-gradient-to-br from-pink-400 to-purple-500 p-6">
                <i className="text-6xl text-gray-900 fas fa-music mb-4"></i>
                <h3 className="text-2xl font-bold mb-2">Playing Music</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-400">Music is my passion. I love playing various instruments and creating melodious tunes.</p>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-110 transition duration-300">
              <div className="bg-gradient-to-br from-blue-400 to-green-500 p-6">
                <i className="text-6xl text-gray-900 fas fa-camera-retro mb-4"></i>
                <h3 className="text-2xl font-bold mb-2">Photography</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-400">Capturing moments and telling stories through the lens is something that brings me joy.</p>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-110 transition duration-300">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-6">
                <i className="text-6xl text-gray-900 fas fa-book-open mb-4"></i>
                <h3 className="text-2xl font-bold mb-2">Reading Books</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-400">Books are my companions. I enjoy exploring different genres and expanding my knowledge.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
