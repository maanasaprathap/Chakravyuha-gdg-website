import React from 'react';
import Inst from"./aboutinst.png";

function Aboutinst() {
  return (
    <>
    <div id="aboutinst"  className='mt-10 relative'>
            {/* <div className='animate-pulse pt-10 grid place-items-center lg:place-items-center lg:pt-20 lg:pl-30 opacity-70 '>
                <div className=' duration-500 scale-100  text-[16px] sm:text-sm md:text-xl lg:text-2xl w-40 sm:w-40 md:w-48 lg:w-60 p-4 lg:p-8 font-semibold bg-gradred/100'>
                    
                </div>
            </div> */}
            <div className='w-full pl-10 lg:mr-8 lg:-mt-15 lg:pl-50 lg:pr-20'>
                <div className='lg:w-full scale-100  pl-8 py-10 lg:pl-12 lg:py-10 w-11/12  bg-black/40 border-2 border-purple-700 rounded-xl' >
                <h5 className='w-70 text-[white] text-left border-b-4  border-purple-700 pb-2'>ABOUT<br></br>
                    <span className='font-bold'>MADRAS INSTITUTE OF TECHNOLOGY
                    </span></h5>
                    <br/>
                    <p className='lg:w-full text-white pl-4 pr-8 lg:pr-12 lg:pl-8  text-justify text-xs sm:text-sm md:text-sm lg:text-[16px] backdrop-blur'>
                    Established in 1949 by the visionary C. Rajam, the Madras Institute of Technology (MIT) is one of India's premier engineering institutions. As a part of Anna University, MIT has been at the forefront of technological innovation and academic excellence, producing some of the nation’s most brilliant engineers, scientists, and researchers.

                    MIT is known for its pioneering efforts in Aeronautical Engineering, Electronics, Computer Science, and Robotics, among other disciplines. With a strong research culture, cutting-edge laboratories, and a dynamic learning environment, the institution continuously pushes the boundaries of innovation.

                    As an integral part of Anna University, MIT continues to shape the future of technology, empowering students with the skills, knowledge, and vision to drive progress and innovation globally.
                    </p>
                </div>
            </div> 
        </div>  
    
    </>
    
  )
}

export default Aboutinst