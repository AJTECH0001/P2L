import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWallet } from "../WalletContext";
import cardImage from "../assets/card-image.png";
import quizBg from "../assets/quiz-bg.png";
import { questions } from "./questions";

const QuizGame: React.FC = () => {
  const { account, connectWallet, isConnecting } = useWallet();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [missedQuestions, setMissedQuestions] = useState<
    { question: string; userAnswer: string; correctAnswer: string }[]
  >([]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [blink, setBlink] = useState(false);
  const [activeCard, setActiveCard] = useState<number>(0); // Track which card (0, 1, or 2) is active
  const navigate = useNavigate();

  // Calculate score: 100 points per correct answer
  const score = correctAnswers * 100;

  useEffect(() => {
    if (timeLeft <= 0) {
      setGameOver(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    if (showFeedback) {
      const blinkInterval = setInterval(() => {
        setBlink((prev) => !prev);
      }, 300); // Blink every 300ms
      return () => clearInterval(blinkInterval);
    }
  }, [showFeedback]);

  // Determine the questions for each card
  const currentQuestion = questions[currentQuestionIndex];
  const nextQuestion = questions[(currentQuestionIndex + 1) % questions.length];
  const thirdQuestion = questions[(currentQuestionIndex + 2) % questions.length];

  // Determine the active question based on the active card
  const activeQuestion =
    activeCard === 0
      ? currentQuestion
      : activeCard === 1
      ? nextQuestion
      : thirdQuestion;

  const handleAnswer = (selectedAnswer: string) => {
    if (gameOver || showFeedback) return;

    setSelectedAnswer(selectedAnswer);
    setShowFeedback(true);

    setAnsweredQuestions((prev) => prev + 1);
    const isCorrect = selectedAnswer === activeQuestion.correctAnswer;

    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    } else {
      setMissedQuestions((prev) => [
        ...prev,
        {
          question: activeQuestion.question,
          userAnswer: selectedAnswer,
          correctAnswer: activeQuestion.correctAnswer,
        },
      ]);
    }
  };

  const handleContinue = () => {
    if (!showFeedback) return;

    setShowFeedback(false);
    setSelectedAnswer(null);
    setBlink(false);
    const nextQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    const nextCardIndex = (activeCard + 1) % 3; // Cycle through card positions (0, 1, 2)
    setCurrentQuestionIndex(nextQuestionIndex);
    setActiveCard(nextCardIndex);
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  if (!account) {
    return (
      <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
        <img src={quizBg} alt="background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="relative z-20 text-white text-center">
          <h1 className="text-3xl font-bold mb-4">Connect Your Universal Profile</h1>
          <p className="text-lg mb-4">You need to connect your Universal Profile to play the Quiz Game.</p>
          <button
            onClick={connectWallet}
            disabled={isConnecting}
            className={`bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-bold hover:bg-blue-700 ${
              isConnecting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isConnecting ? "Connecting..." : "Connect Wallet"}
          </button>
        </div>
      </div>
    );
  }

  if (gameOver) {
    return (
      <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
        <img src={quizBg} alt="background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="relative z-20 text-white text-center">
          <h1 className="text-4xl font-bold mb-4 text-yellow-400">VICTORY</h1>
          <p className="text-2xl mb-2">SCORE: {score}</p>
          <p className="text-lg mb-6">Total Questions Answered: {answeredQuestions}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Correct Answers Section */}
            <div>
              <h2 className="text-xl font-bold mb-4">Correct Answers</h2>
              {correctAnswers > 0 ? (
                questions
                  .filter((q) => {
                    const missed = missedQuestions.find(
                      (m) => m.question === q.question
                    );
                    return !missed; // Show only questions that weren't missed
                  })
                  .map((q, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 p-4 rounded-lg mb-4 flex items-center"
                    >
                      <img
                        src={cardImage}
                        alt="Card"
                        className="w-16 h-24 mr-4 object-cover"
                      />
                      <div className="text-left">
                        <p className="text-sm font-bold">{q.question}</p>
                        <p className="text-sm text-gray-400">
                          {q.correctAnswer}
                        </p>
                      </div>
                    </div>
                  ))
              ) : (
                <p className="text-gray-400">No correct answers.</p>
              )}
            </div>

            {/* Wrong Answers Section */}
            <div>
              <h2 className="text-xl font-bold mb-4">Wrong Answers</h2>
              {missedQuestions.length > 0 ? (
                missedQuestions.map((missed, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-4 rounded-lg mb-4 flex items-center"
                  >
                    <img
                      src={cardImage}
                      alt="Card"
                      className="w-16 h-24 mr-4 object-cover"
                    />
                    <div className="text-left">
                      <p className="text-sm font-bold">{missed.question}</p>
                      <p className="text-sm text-red-400">
                        {missed.userAnswer}
                      </p>
                      <p className="text-sm text-green-400">
                        Correct: {missed.correctAnswer}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No wrong answers.</p>
              )}
            </div>
          </div>

          <button
            onClick={handleBackToHome}
            className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg text-lg font-bold hover:bg-purple-700"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
      <img src={quizBg} alt="background" className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="relative z-20 w-full max-w-4xl">
        <div className="flex justify-between items-center mb-4 text-white">
          <p className="text-lg">Time Left: {timeLeft}s</p>
          <p className="text-lg">Question {currentQuestionIndex + 1} of {questions.length}</p>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:items-end">
          {/* First Card */}
          <div className="relative w-full sm:w-48 md:w-64 h-64 sm:h-80 md:h-96 flex flex-col items-center justify-between">
            <img src={cardImage} alt="Card" className="absolute inset-0 w-full h-full object-cover" />
            {activeCard === 0 && (
              <div className="relative z-10 w-full h-full flex flex-col justify-between items-center bg-gradient-to-b from-purple-100 to-white border-2 border-purple-600 rounded-lg p-2">
                <p className="text-black text-sm sm:text-base font-bold">The Web3 Quest</p>
                <p className="text-purple-800 text-lg sm:text-2xl font-bold text-center px-2">
                  {currentQuestion.question}
                </p>
                <p className="text-black text-sm sm:text-base font-bold">PLAY2LEARN</p>
              </div>
            )}
          </div>

          {/* Second Card */}
          <div className="relative w-full sm:w-48 md:w-64 h-64 sm:h-80 md:h-96 flex flex-col items-center justify-end">
            <img src={cardImage} alt="Card" className="absolute inset-0 w-full h-full object-cover" />
            {activeCard === 1 && (
              <div className="relative z-10 w-full h-full flex flex-col justify-between items-center bg-gradient-to-b from-purple-100 to-white border-2 border-purple-600 rounded-lg p-2">
                <p className="text-black text-sm sm:text-base font-bold">The Web3 Quest</p>
                <p className="text-purple-800 text-lg sm:text-2xl font-bold text-center px-2">
                  {nextQuestion.question}
                </p>
                <p className="text-black text-sm sm:text-base font-bold">PLAY2LEARN</p>
              </div>
            )}
          </div>

          {/* Third Card */}
          <div className="relative w-full sm:w-48 md:w-64 h-64 sm:h-80 md:h-96 flex flex-col items-center justify-end">
            <img src={cardImage} alt="Card" className="absolute inset-0 w-full h-full object-cover" />
            {activeCard === 2 && (
              <div className="relative z-10 w-full h-full flex flex-col justify-between items-center bg-gradient-to-b from-purple-100 to-white border-2 border-purple-600 rounded-lg p-2">
                <p className="text-black text-sm sm:text-base font-bold">The Web3 Quest</p>
                <p className="text-purple-800 text-lg sm:text-2xl font-bold text-center px-2">
                  {thirdQuestion.question}
                </p>
                <p className="text-black text-sm sm:text-base font-bold">PLAY2LEARN</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4 justify-center">
          {activeQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === activeQuestion.correctAnswer;
            let buttonClass = "text-white px-4 py-2 rounded-lg text-sm sm:text-base font-bold ";

            if (showFeedback) {
              if (isSelected && !isCorrect) {
                buttonClass += blink ? "bg-red-600" : "bg-gray-600";
              } else if (isCorrect) {
                buttonClass += blink ? "bg-green-600" : "bg-gray-600";
              } else {
                buttonClass += "bg-gray-600";
              }
            } else {
              buttonClass += "bg-gray-600 hover:bg-gray-700";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={buttonClass}
                disabled={showFeedback}
              >
                {String.fromCharCode(65 + index)}. {option}
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div className="flex justify-end mt-4">
            <button
              onClick={handleContinue}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg text-sm sm:text-base font-bold hover:bg-purple-700"
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizGame;