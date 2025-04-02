import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cardImage from "../assets/card-image.png";
import quizBg from "../assets/quiz-bg.png";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    question: "What is a Blockchain?",
    options: [
      "A type of cryptocurrency",
      "decentralized ledger",
      "centralized database",
    ],
    correctAnswer: "decentralized ledger",
  },
  {
    question: "What does NFT stand for?",
    options: [
      "Non-Fungible Token",
      "New Financial Technology",
      "Network File Transfer",
    ],
    correctAnswer: "Non-Fungible Token",
  },
  {
    question: "What is the primary purpose of a smart contract?",
    options: [
      "To mine cryptocurrency",
      "To automate agreements",
      "To store data",
    ],
    correctAnswer: "To automate agreements",
  },
  // Add more questions as needed
];

const QuizGame: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [missedQuestions, setMissedQuestions] = useState<
    { question: string; userAnswer: string; correctAnswer: string }[]
  >([]);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds timer
  const [gameOver, setGameOver] = useState(false);
  const navigate = useNavigate();

  // Timer logic
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

  const handleAnswer = (selectedAnswer: string) => {
    if (gameOver) return;

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    // Update stats
    setAnsweredQuestions((prev) => prev + 1);
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    } else {
      setMissedQuestions((prev) => [
        ...prev,
        {
          question: currentQuestion.question,
          userAnswer: selectedAnswer,
          correctAnswer: currentQuestion.correctAnswer,
        },
      ]);
    }

    // Move to the next question
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      // Loop back to the first question if we run out
      setCurrentQuestionIndex(0);
    }
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  if (gameOver) {
    return (
      <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
       {/* Background Image */}
  <img
    src={quizBg}
    alt="background"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />
  

        {/* Summary */}
        <div className="relative z-20 text-white text-center">
          <h1 className="text-3xl font-bold mb-4">Game Over!</h1>
          <p className="text-lg mb-2">
            Total Questions Answered: {answeredQuestions}
          </p>
          <p className="text-lg mb-2">Correct Answers: {correctAnswers}</p>
          <p className="text-lg mb-4">
            Missed Answers: {answeredQuestions - correctAnswers}
          </p>

          {missedQuestions.length > 0 && (
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Missed Questions:</h2>
              <ul className="space-y-2">
                {missedQuestions.map((missed, index) => (
                  <li key={index}>
                    <p>
                      <strong>Question:</strong> {missed.question}
                    </p>
                    <p>
                      <strong>Your Answer:</strong> {missed.userAnswer}
                    </p>
                    <p>
                      <strong>Correct Answer:</strong> {missed.correctAnswer}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            onClick={handleBackToHome}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg text-lg font-bold hover:bg-purple-700"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
     
      {/* Background Image */}
      <img
        src={quizBg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
     

      {/* Quiz Content */}
      <div className="relative z-20 w-full max-w-4xl">
        {/* Timer and Question Counter */}
        <div className="flex justify-between items-center mb-4 text-white">
          <p className="text-lg">Time Left: {timeLeft}s</p>
          <p className="text-lg">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
        </div>

        {/* Answers Label */}
        <div className="text-center text-white mb-4">
          <h2 className="text-xl font-bold">Answers</h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:items-end">
          <div className="relative w-full sm:w-48 md:w-64 h-64 sm:h-80 md:h-96 flex flex-col items-center justify-end">
            <img
              src={cardImage}
              alt="Card"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-10 bg-white text-black px-2 sm:px-4 py-1 sm:py-2 w-3/4 text-center rounded-t-lg">
              <p className="text-sm sm:text-lg font-bold">
                {currentQuestion.question}
              </p>
            </div>
          </div>
          <div className="relative w-full sm:w-48 md:w-64 h-64 sm:h-80 md:h-[26rem] flex flex-col items-center justify-end">
            <img
              src={cardImage}
              alt="Card"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-10 bg-white text-black px-2 sm:px-4 py-1 sm:py-2 w-3/4 text-center rounded-t-lg">
              <p className="text-sm sm:text-lg font-bold">The Web3 Quest</p>
            </div>
          </div>
          <div className="relative w-full sm:w-48 md:w-64 h-64 sm:h-80 md:h-96 flex flex-col items-center justify-end">
            <img
              src={cardImage}
              alt="Card"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-10 bg-white text-black px-2 sm:px-4 py-1 sm:py-2 w-3/4 text-center rounded-t-lg">
              <p className="text-sm sm:text-lg font-bold">One Web3 Mep</p>
            </div>
          </div>
        </div>

        {/* Answer Options */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm sm:text-base font-bold hover:bg-red-700"
            >
              {String.fromCharCode(65 + index)}. {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizGame;
