import React from 'react';

const Navbar = () => {
  const toggleMenu = () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
  };

  return (
    <header>
      <nav className="backdrop-blur-[2px] w-full fixed h-16 bg-[#040404] bg-opacity-50 flex justify-between px-10 items-center">
        <div className="text-white font-bold text-2xl">
          It's me <span className="text-amber-300">Sarthak</span>
        </div>
        <ul id="menu" className="md:flex hidden font-semibold">
          <li className="mx-[10px] text-white cursor-pointer hover:bg-amber-300 hover:text-black hover:font-bold px-2 py-1 rounded-md">
            <a href="#Home">Home</a>
          </li>
          <li className="mx-[10px] text-white cursor-pointer hover:bg-amber-300 hover:text-black hover:font-bold px-2 py-1 rounded-md">
            <a href="#About">About</a>
          </li>
          <li className="mx-[10px] text-white cursor-pointer hover:bg-amber-300 hover:text-black hover:font-bold px-2 py-1 rounded-md">
            <a href="">Skills</a>
          </li>
          <li className="mx-[10px] text-white cursor-pointer hover:bg-amber-300 hover:text-black hover:font-bold px-2 py-1 rounded-md">
            <a href="">Personal blogs</a>
          </li>
          <li className="mx-[10px] text-white cursor-pointer hover:bg-amber-300 hover:text-black hover:font-bold px-2 py-1 rounded-md">
            <a href="">Interests</a>
          </li>
        </ul>
        <div id="toggle-menu" className="md:hidden">
          <a className="text-5xl text-white" href="#" onClick={toggleMenu}>
            &#8801;
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
