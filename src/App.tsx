import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Benefits from './components/Benefits';
import QuizGame from './components/QuizGame';
import { WalletProvider } from "./WalletContext";

const App: React.FC = () => {
  return (
    <WalletProvider>
    <Router>
      <div className="relative min-h-screen">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/background-video.mp4" type="video/mp4" />
          <p>
            Video failed to load. Check the file path or browser compatibility.
          </p>
        </video>

        {/* Overlay to Darken the Video */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}

        {/* Content */}
        <div className="relative z-20 flex flex-col min-h-screen">
          <Routes>
            {/* Landing Page Route */}
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <div className="flex flex-col lg:flex-row flex-grow">
                    {/* Left: Benefits */}
                    <div className="w-full lg:w-1/4 p-4 flex items-center justify-center">
                      <Benefits />
                    </div>

                    {/* Center: Main Content */}
                    <div className="flex-grow flex items-center justify-center p-4">
                      <MainContent />
                    </div>

                    {/* Right: Sidebar */}
                    <div className="w-full lg:w-1/4 p-4 flex items-center justify-center">
                      <Sidebar />
                    </div>
                  </div>
                </>
              }
            />
            {/* Quiz Game Route */}
            <Route path="/quiz-game" element={<QuizGame />} />
          </Routes>
        </div>
      </div>
    </Router>
    </WalletProvider>
  );
};

export default App;