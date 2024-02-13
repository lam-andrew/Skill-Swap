import React from 'react';

const PageHeader = () => {
  return (
    <header className="bg-slate-grey text-white py-4 mb-5">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold outine">SKILL SWAP</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-bermuda">HOME</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">ABOUT</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">SERVICES</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">CONTACT</a>
            </li>
          </ul>
        </nav>
        <div className=''>
            <button className='bg-sky-blue hover:bg-blue-700 text-charcoal-black py-2 px-4 rounded outline mr-2'>SIGN IN</button>
            <button className='bg-sky-blue hover:bg-blue-700 text-charcoal-black py-2 px-4 rounded-tr-xl outline'>JOIN US</button>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
