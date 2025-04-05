import React from 'react';

const Benefits: React.FC = () => {
  return (
    <div
      className="w-full max-w-md p-4 sm:p-6 text-white rounded-lg mx-auto"
      style={{
        background: 'linear-gradient(to bottom, #FFFFFF 0%, #999999 0%, #333333 100%)',
      }}
    >
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400 mb-4 text-center">
        UNLOCK THESE AWESOME BENEFITS:
      </h2>
      <ul className="space-y-2 text-sm sm:text-base md:text-lg">
        <li className="text-center">Learn crypto and Web3 through fun, interactive games.</li>
        <li className="text-center">Connect with fellow learners and Web3 enthusiasts.</li>
        <li className="text-center">EARN tokens and badges for completing challenges.</li>
      </ul>
    </div>
  );
};

export default Benefits;