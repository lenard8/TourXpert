import React, { useState } from "react";
import logo from "/logo.png";
import image from "/hotel-staff.png"; 
import { useNavigate } from "react-router-dom";

export const CmpHotelStaffQuiz = () => {
  const navigate = useNavigate(); 
  
  const hotelStaffQuestions = [
    {
      level: "🟢 EASY",
      question: "A guest calls the front desk at 2 AM complaining their room is too cold. What should you do?",
      options: [
        "Tell them to wait until morning",
        "Apologize and send someone to assist ASAP",
        "Suggest they try adjusting the thermostat themselves",
        "Tell them it’s probably working fine",
      ],
      correct: 1,
      explanation: "Comfort is 24/7 in hospitality. Immediate action shows responsiveness and care, no matter the time.",
    },
    {
      level: "🟢 EASY",
      question: "A guest walks in, angry because their room isn’t ready at check-in time. What’s your best response?",
      options: [
        "Tell them to wait patiently",
        "Blame housekeeping for the delay",
        "Apologize, offer a drink or lounge access, and give updates",
        "Ignore them until their room is ready",
      ],
      correct: 2,
      explanation: "Service recovery is about acknowledging the issue and softening the wait. Blame is never professional — solutions are.",
    },
    {
      level: "🟡 AVERAGE",
      question: "A guest complains that the bathroom smells bad even after cleaning. What’s the best next move?",
      options: [
        "Send housekeeping again without telling the guest",
        "Apologize and offer to inspect the room yourself or provide another room if available",
        "Spray air freshener and hope they don’t complain again",
        "Tell them it meets cleanliness standards",
      ],
      correct: 1,
      explanation: "Taking ownership with presence + options shows high-level hospitality. You’re not just fixing — you’re restoring confidence.",
    },
    {
      level: "🟡 AVERAGE",
      question: "A couple requests a quiet room, but all rooms near the back are full. What should you do?",
      options: [
        "Give them any room and hope it's quiet",
        "Apologize and tell them nothing can be done",
        "Offer your quietest available room and maybe a small amenity to make up for it",
        "Tell them to check again tomorrow",
      ],
      correct: 2,
      explanation: "Guests value effort and honesty. Even if it’s not perfect, gesture + empathy = great service.",
    },
    {
      level: "🔴 HARD",
      question: "A guest calls furious — they’ve been charged twice for the same stay. You check and see a system glitch. What’s your best response?",
      options: [
        "Tell them to call accounting on Monday",
        "Apologize, explain the issue, and assure them you’ll personally follow up on the refund process",
        "Say it’s not your fault and they’ll need to wait",
        "Ask them to show proof before doing anything",
      ],
      correct: 1,
      explanation: "In hotel work, you represent the entire system. Owning the problem and taking action fast makes all the difference.",
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
    if (index === hotelStaffQuestions[currentQ].correct) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ < hotelStaffQuestions.length - 1) {
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

  const question = hotelStaffQuestions[currentQ];
  const isCorrect = selected === question?.correct;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4 py-8">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-6 md:p-10 space-y-6">
        {/* Logo and image */}
        <a onClick={handleMenu} className="cursor-grab font-bold">Back to Menu</a>
        <div className="flex flex-col items-center space-y-2">
          <img src={image} alt="Hotel Staff" className="h-32 w-auto rounded-lg shadow-md" />
        </div>

        <h1 className="text-3xl font-extrabold text-blue-800 text-center mt-2">Hotel Staff Quiz</h1>

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
                  {currentQ < hotelStaffQuestions.length - 1 ? "Next" : "Finish"}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-green-700">🎉 You completed the quiz!</h2>
            <p className="text-lg">
              You got <span className="font-bold">{score}</span> out of {hotelStaffQuestions.length} questions correct.
            </p>
            <p className="text-sm text-gray-500 italic">
              {score === hotelStaffQuestions.length
                ? "Perfect score! You’re a hospitality pro! 💯"
                : score >= 3
                ? "Great job! You're a fantastic hotel staff member. 👏"
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
