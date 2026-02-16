import React from 'react';

function Aboutinst() {
  return (
    <section id="aboutinst" className="relative w-full py-8 md:py-16 px-3 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div 
          className="relative overflow-hidden bg-black/40 backdrop-blur-md border-2 border-purple-700 rounded-2xl p-5 sm:p-8 md:p-12 shadow-[0_0_20px_rgba(126,34,206,0.2)]"
          data-aos="fade-left"
        >
          {/* Header Section */}
          <div className="mb-6">
            <h5 className="text-white text-sm sm:text-base md:text-lg font-light tracking-widest inline-block border-b-2 sm:border-b-4 border-purple-700 pb-2 uppercase" style={{ fontFamily: 'Audiowide-Regular, sans-serif' }}>
              ABOUT<br />
              <span 
                className="font-bold block mt-2" 
                style={{ 
                  fontSize: 'clamp(1.25rem, 5vw, 2.5rem)', // Scales font between 20px and 40px
                  lineHeight: '1.2'
                }}
              >
                MADRAS INSTITUTE OF TECHNOLOGY
              </span>
            </h5>
          </div>

          {/* Description */}
          <div className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed space-y-4">
            <p className="text-justify md:text-left">
              Established in 1949 by the visionary C. Rajam, the Madras Institute of Technology (MIT) is one of India's premier engineering institutions. As a part of Anna University, MIT has been at the forefront of technological innovation and academic excellence, producing some of the nation’s most brilliant engineers, scientists, and researchers.
            </p>
            
            <p className="text-justify md:text-left">
              MIT is known for its pioneering efforts in Aeronautical Engineering, Electronics, Computer Science, and Robotics, among other disciplines. With a strong research culture, cutting-edge laboratories, and a dynamic learning environment, the institution continuously pushes the boundaries of innovation.
            </p>

            <p className="text-justify md:text-left">
              As an integral part of Anna University, MIT continues to shape the future of technology, empowering students with the skills, knowledge, and vision to drive progress and innovation globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutinst;