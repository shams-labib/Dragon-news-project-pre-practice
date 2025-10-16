import React from 'react';
import Marquee from 'react-fast-marquee';

const Ticket = () => {
    return (
         <div className='bg-gray-400 p-2 flex items-center justify-center'>
                <button className=' w-[100px] h-[50px] px-5 font-semibold flex items-center bg-blue-400 border-none text-white'>Latest</button>
              <div>
                 <Marquee gradient={false} speed={80} pauseOnHover={true} style={{ color: "white", padding: "10px" }}>
                       🔥 আজকের সর্বশেষ খবর: বাংলাদেশ জিতেছে সিরিজে ৩-০ ব্যবধানে! 🇧🇩 | 
                             ইউরোপে তীব্র শীত পড়ছে ❄️ | 
                            নতুন স্মার্টফোন প্রকাশ করেছে TechNova 📱 |
                         </Marquee>
              </div>
               </div>
    );
};

export default Ticket;