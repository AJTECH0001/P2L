import React from 'react';
import Card from './Card';

const MainContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-grow">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-8 text-center">
        WEB3 QUIZ
      </h1>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:items-end">
        <Card title="The Web3 Quest" />
        <Card title="The Web3 Quest" isMiddle={true} />
        <Card title="The Web3 Quest" />
      </div>
    </div>
  );
};

export default MainContent;