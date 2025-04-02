import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4 text-white space-y-4 md:space-y-0">
      {/* Left: Profile Section */}
      <div className="flex items-center space-x-2">
        <img
          src="/assets/profile-pic.png"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-sm">ID: 4567822</p>
          <p className="text-sm font-bold">MINER'S</p>
        </div>
      </div>

      {/* Center: Points and Cash */}
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center">
        <div className="flex items-center justify-center space-x-1">
          <span className="text-yellow-400">●</span>
          <p>POINTS EARNED: 0 pts</p>
        </div>
        <div className="flex items-center justify-center space-x-1">
          <span className="text-blue-400">●</span>
          <p>CASH EARNED: USD 5000</p>
        </div>
      </div>

      {/* Right: Connect Button */}
      <button className="flex items-center space-x-1 bg-gray-700 px-3 py-1 rounded">
        <span>20206</span>
        <FaPlus />
        <span>Connect</span>
      </button>
    </header>
  );
};

export default Header;