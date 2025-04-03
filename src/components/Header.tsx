import React from "react";
import { useWallet } from "../WalletContext";

const Header: React.FC = () => {
  const { account, connectWallet, disconnectWallet } = useWallet();

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <header
      className="text-white p-4 flex justify-between items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t-2 border-yellow-500"
      style={{
        backgroundImage: "url('/assets/wave-pattern.png')", // Add a wave pattern if available
        backgroundSize: "cover",
      }}
    >
      {/* Profile Section */}
      <div className="flex items-center space-x-3">
        <img
          src="/assets/profile-pic.png"
          alt="Profile"
          className="w-12 h-12 rounded-full border-2 border-yellow-500"
        />
        <div>
          <p className="text-xs text-gray-300">ID: 4567822</p>
          <p className="text-sm font-bold text-white">MINER'S</p>
        </div>
      </div>

      {/* Points and Cash Section */}
      <div className="flex space-x-6">
        <div className="flex items-center space-x-2">
          <span className="text-yellow-400 text-2xl">●</span>
          <div>
            <p className="text-xs text-gray-300 uppercase">Points Earned</p>
            <p className="text-sm font-bold">0 pts</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-blue-400 text-2xl">●</span>
          <div>
            <p className="text-xs text-gray-300 uppercase">Cash Earned</p>
            <p className="text-sm font-bold">USD 5000</p>
          </div>
        </div>
      </div>

      {/* Connect/Disconnect Button */}
      <div>
        {account ? (
          <div className="flex items-center space-x-2">
            <span className="text-sm">{truncateAddress(account)}</span>
            <button
              onClick={disconnectWallet}
              className="bg-red-600 text-white px-4 py-1.5 rounded-lg font-bold text-sm hover:bg-red-700 transition"
            >
              Disconnect
            </button>
          </div>
        ) : (
          <button
            onClick={connectWallet}
            className="bg-transparent border-2 border-blue-400 text-blue-400 px-4 py-1.5 rounded-lg font-bold text-sm hover:bg-blue-400 hover:text-white transition"
          >
            Connect
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;