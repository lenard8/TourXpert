import React, { useState } from "react";
import logo from "/logo.png";
import image from "/flight-attendant.png"; 
import { useNavigate } from "react-router-dom";

export const CmpFlightAttendantQuiz = () => {
  
  const navigate = useNavigate(); 

  const flightAttendantQuestions = [
    {
      level: "🟢 EASY",
      question: "A passenger politely asks for assistance with their overhead bag before takeoff. What’s the best action?",
      options: [
        "Say you’re not allowed to help",
        "Assist them with proper posture and technique to avoid injury",
        "Tell them to ask a seatmate",
        "Ignore the request — it’s not your responsibility",
      ],
      correct: 1,
      explanation: "FA’s may assist as long as safety is maintained. Proper form avoids injury, and helping shows professionalism.",
    },
    {
      level: "🟢 EASY",
      question: "The plane is about to land and a passenger still has their tray table down. What should you do?",
      options: [
        "Wait until the plane touches down",
        "Let them be — it’s not a big deal",
        "Calmly remind them to stow it for landing",
        "Ask the captain to delay landing",
      ],
      correct: 2,
      explanation: "Small details = big safety concerns. Always address non-compliance before impact moments like landing.",
    },
    {
      level: "🟡 AVERAGE",
      question: "A vegetarian passenger is upset because their pre-booked meal wasn’t loaded. What’s the best response?",
      options: [
        "Apologize, explain the situation, and offer the best alternative meal option",
        "Tell them to eat around the meat",
        "Offer extra snacks and move on",
        "Blame catering and tell them to complain online",
      ],
      correct: 0,
      explanation: "You’re the face of the airline onboard. You must own the moment with empathy and problem-solving, even if it wasn’t your fault.",
    },
    {
      level: "🟡 AVERAGE",
      question: "During beverage service, a passenger rudely demands a second drink while you’re assisting another guest. What’s your best move?",
      options: [
        "Tell them to wait like everyone else",
        "Smile and say you’ll return right after serving the current passenger",
        "Give them the drink quickly to avoid conflict",
        "Skip them in the next round",
      ],
      correct: 1,
      explanation: "You maintain calm professionalism and fairness. Never reward rudeness, but never escalate either. Boundaries with grace.",
    },
    {
      level: "🔴 HARD",
      question: "Mid-flight, a passenger suddenly has difficulty breathing and clutches their chest. You’re alone in the aisle. What’s your first and best action?",
      options: [
        "Shout for help and continue observing",
        "Call the pilot first",
        "Immediately assess responsiveness and breathing, notify the purser, and prepare for emergency medical procedures",
        "Wait for another crew member to assist before doing anything",
      ],
      correct: 2,
      explanation: "Life-threatening = every second counts. No waiting. You’re trained to act fast and communicate. This is where real safety skills matter — and hesitation is the biggest mistake.",
    },
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleMenu = () => {
    navigate('../character'); 
  };

  const handleSelect = (index) => {
    if (showAnswer) return;
    setSelected(index);
    setShowAnswer(true);
    if (index === flightAttendantQuestions[currentQ].correct) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ < flightAttendantQuestions.length - 1) {
      setCurrentQ((prev) => prev + 1);
      setSelected(null);
      setShowAnswer(false);
    } else {
      setFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setSelected(null);
    setShowAnswer(false);
    setScore(0);
    setFinished(false);
  };

  const question = flightAttendantQuestions[currentQ];
  const isCorrect = selected === question?.correct;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4 py-8">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-6 md:p-10 space-y-6">
        {/* Logo and image */}
        <a onClick={handleMenu} className="cursor-grab font-bold">Back to Menu</a>
        <div className="flex flex-col items-center space-y-2">
          <img src={image} alt="Flight Attendant" className="h-32 w-auto rounded-lg shadow-md" />
        </div>

        <h1 className="text-3xl font-extrabold text-blue-800 text-center mt-2">Flight Attendant Quiz</h1>

        {!finished ? (
          <>
            <div className="text-sm text-blue-600 font-semibold">{question.level}</div>
            <h2 className="text-lg font-bold text-gray-800">{question.question}</h2>
            <div className="space-y-3">
              {question.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 border ${
                    showAnswer
                      ? idx === question.correct
                        ? "bg-green-100 border-green-600 text-green-800 font-semibold"
                        : idx === selected
                        ? "bg-red-100 border-red-600 text-red-800"
                        : "bg-gray-50 text-gray-700"
                      : "hover:bg-blue-100 border-blue-200"
                  }`}
                  disabled={showAnswer}
                >
                  {opt}
                </button>
              ))}
            </div>

            {showAnswer && (
              <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-700 rounded-lg">
                <p className="font-semibold">{isCorrect ? "✅ Correct!" : "❌ Incorrect"}</p>
                <p className="mt-1 text-sm">{question.explanation}</p>
              </div>
            )}

            {showAnswer && (
              <div className="text-right">
                <button
                  onClick={nextQuestion}
                  className="mt-4 px-5 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  {currentQ < flightAttendantQuestions.length - 1 ? "Next" : "Finish"}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-green-700">🎉 You completed the quiz!</h2>
            <p className="text-lg">
              You got <span className="font-bold">{score}</span> out of {flightAttendantQuestions.length} questions correct.
            </p>
            <p className="text-sm text-gray-500 italic">
              {score === flightAttendantQuestions.length
                ? "Perfect score! You’re a flight safety pro! 💯"
                : score >= 3
                ? "Great job! You’re a fantastic flight attendant. 👏"
                : "Keep practicing — you're almost there! 💪"}
            </p>
            <button
              onClick={restartQuiz}
              className="mt-4 px-6 py-2 bg-blue-700 text-white rounded-xl hover:bg-blue-600 transition"
            >
              Restart Quiz
            </button>
            <button
              onClick={handleMenu}
              className="mt-4 px-6 py-2 mx-2 bg-blue-700 text-white rounded-xl hover:bg-blue-600 transition"
            >
              Main Menu
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
