import React from 'react';

function Aboutconf() {
  return (
    <section className="relative w-full py-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div 
          className="relative bg-black/40 backdrop-blur-md border-2 border-purple-700 rounded-2xl p-6 md:p-12 shadow-[0_0_20px_rgba(126,34,206,0.2)]"
          data-aos="fade-right"
        >
          {/* Header Section */}
          <div className="mb-8">
            <span className="text-white text-xs sm:text-sm md:text-base font-light tracking-[0.2em] uppercase opacity-80" style={{ fontFamily: 'Audiowide-Regular, sans-serif' }}>
              ABOUT
            </span>
            <h2 
              className="text-white font-bold uppercase mt-1"
              style={{ 
                fontFamily: 'Audiowide-Regular, sans-serif',
                fontSize: 'clamp(1.3rem, 6vw, 2.5rem)', 
                lineHeight: '1.3',
                wordSpacing: '2px'
              }}
            >
              CHAKRAVYUHA '26
            </h2>
            {/* Separate Purple Line for better spacing */}
            <div className="w-full sm:w-64 h-1 bg-purple-600 mt-2 rounded-full shadow-[0_0_10px_#9333ea]"></div>
          </div>

          {/* Description */}
          <div className="text-gray-200 text-justify sm:text-left text-sm sm:text-base lg:text-lg leading-relaxed space-y-6">
            <p>
              Chakravyuha symbolizes the fusion of intricate strategy, intelligence, and innovation—qualities that define both ancient warfare and modern technology. In the Mahabharata, only the most skilled and strategic minds could navigate this formation, and today’s tech landscape is no different. To thrive, one must embrace adaptability, problem-solving, and futuristic thinking.
            </p>
            <p>
              Just like the interwoven layers of the Chakravyuha, today’s world is built on the seamless integration of robotics, IoT, AI, software engineering, and entrepreneurship—each a vital component in shaping the next era of technological breakthroughs.
            </p>
            <p>
              Chakravyuha’26 is a two-day fest where all technical clubs of MIT come together to host a dynamic lineup of events, workshops, and competitions—challenging minds, fostering collaboration, and pushing the boundaries of innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutconf;