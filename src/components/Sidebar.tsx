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
  };

  return (
    <div className="w-full h-full max-w-md flex flex-col space-y-4 p-4 mx-auto justify-center">
      <button
        className="w-full px-4 py-2 rounded font-bold text-sm sm:text-base text-yellow-400 
          bg-cover bg-opacity-50 bg-center"
        style={{ backgroundImage: `url(${cardImage})` }}
        onClick={() => handleGameSelect('SELECT GAMES')}
      >
        SELECT GAMES
      </button>

      {['SYMBOL', 'ABBREVIATION', 'QUIZ'].map((game) => (
        <button
          key={game}
          className={`w-full px-4 py-2 rounded font-bold text-center align-middle font-quantico 
            ${selectedGame === game
              ? 'bg-gray-800 bg-opacity-80 text-yellow-400'
              : 'bg-gray-500 bg-opacity-50 text-white'
            }`}
          style={{
            fontSize: 'clamp(16px, 4vw, 20px)',
            fontWeight: 400,
            lineHeight: '141%',
          }}
          onClick={() => handleGameSelect(game)}
        >
          {game}
        </button>
      ))}

      <button
        className="w-full bg-purple-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg 
          text-base sm:text-lg md:text-xl font-bold hover:bg-purple-700"
        onClick={handlePlay}
      >
        PLAY
      </button>
    </div>
  );
};

export default Sidebar;