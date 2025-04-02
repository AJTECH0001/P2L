import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cardImage from '../assets/card-image.png';

const Sidebar: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleGameSelect = (game: string) => {
    setSelectedGame(game);
  };

  const handlePlay = () => {
    if (selectedGame === 'QUIZ') {
      navigate('/quiz-game');
    }
    // Add logic for other game types (SYMBOL, ABBREVIATION) if needed
  };

  return (
    <div className="w-full flex flex-col space-y-4 p-4">
      {/* SELECT GAMES Button with Card Image Background */}
      <button
        className="w-full px-4 py-2 rounded font-bold text-sm sm:text-base text-yellow-400 bg-cover bg-opacity-50 bg-center"
        style={{ backgroundImage: `url(${cardImage})` }}
        onClick={() => handleGameSelect('SELECT GAMES')}
      >
        SELECT GAMES
      </button>

      {/* SYMBOL Button */}
      <button
        className={`w-full px-4 py-2 rounded font-bold text-center align-middle font-quantico ${
          selectedGame === 'SYMBOL'
            ? 'bg-gray-800 bg-opacity-80 text-yellow-400'
            : 'bg-gray-500 bg-opacity-50 text-white'
        }`}
        style={{
          fontSize: '20px',
          fontWeight: 400,
          lineHeight: '141%',
          letterSpacing: '0px',
          fontVariantNumeric: 'lining-nums proportional-nums',
        }}
        onClick={() => handleGameSelect('SYMBOL')}
      >
        SYMBOL
      </button>

      {/* ABBREVIATION Button */}
      <button
        className={`w-full px-4 py-2 rounded font-bold text-center align-middle font-quantico ${
          selectedGame === 'ABBREVIATION'
           ? 'bg-gray-800 bg-opacity-80 text-yellow-400'
            : 'bg-gray-500 bg-opacity-50 text-white'
        }`}
        style={{
          fontSize: '20px',
          fontWeight: 400,
          lineHeight: '141%',
          letterSpacing: '0px',
          fontVariantNumeric: 'lining-nums proportional-nums',
        }}
        onClick={() => handleGameSelect('ABBREVIATION')}
      >
        ABBREVIATION
      </button>

      {/* QUIZ Button */}
      <button
        className={`w-full px-4 py-2 rounded font-bold text-center align-middle font-quantico ${
          selectedGame === 'QUIZ' ? 'bg-gray-800 bg-opacity-80 text-yellow-400'
            : 'bg-gray-500 bg-opacity-50 text-white'
        }`}
        style={{
          fontSize: '20px',
          fontWeight: 400,
          lineHeight: '141%',
          letterSpacing: '0px',
          fontVariantNumeric: 'lining-nums proportional-nums',
        }}
        onClick={() => handleGameSelect('QUIZ')}
      >
        QUIZ
      </button>

      {/* PLAY Button */}
      <button
        className="w-full bg-purple-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-lg sm:text-xl font-bold hover:bg-purple-700"
        onClick={handlePlay}
      >
        PLAY
      </button>
    </div>
  );
};

export default Sidebar;