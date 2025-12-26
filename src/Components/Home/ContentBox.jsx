import React from 'react';

export default function ContentBox() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-center text-gray-900 mb-8 leading-tight">
          Build your future with
          <br />
          a partner who believes
          <br />
          in your vision.
        </h1>

        {/* Subheading */}
        <p className="text-center text-gray-600 text-sm md:text-base max-w-3xl mx-auto mb-16 uppercase tracking-wide leading-relaxed">
          We enable entrepreneurs to reach their goals by connecting
          them to our international network of investors and
          business mentors, helping them to access new markets and
          accelerating their marketing efforts.
        </p>

        {/* Two Column Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div className="bg-gradient-to-br from-teal-900 to-teal-950 p-12 rounded-lg min-h-[300px] flex items-end">
            <div className="text-teal-400 text-4xl font-bold">
              Betcha
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-gradient-to-br from-teal-900 to-teal-950 p-12 rounded-lg min-h-[300px] flex items-center justify-center">
            <div className="w-24 h-24 bg-teal-600 rounded-xl flex items-center justify-center transform rotate-12">
              <div className="text-white text-5xl font-bold transform -rotate-12">
                $
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}