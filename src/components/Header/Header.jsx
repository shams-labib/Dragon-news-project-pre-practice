import React from 'react';

const Header = () => {
    return (
  <div className='flex flex-col justify-center items-center space-y-3 my-4'>
                <div>
                    <img src="/src/assets/logo.png" alt="" />
                </div>
                <p className='text-gray-400 font-semibold'>Journalism Without Fear or Favour</p>
                <p className='font-bold text-gray-500'>Thursday , October 10 , 2025</p>

            </div>
    );
};

export default Header;