import React, { useState } from "react";
import logo from "/logo.png";
import image from "/travel-agent.png";
import { useNavigate } from "react-router-dom";

export const CmpTravelAgentQuiz = () => {
  
  const navigate = useNavigate(); 
  
  const travelAgentQuestions = [
    {
      level: "🟢 EASY",
      question:
        "A client calls in a panic because they accidentally booked the wrong travel dates. What should you do first?",
      options: [
        "Tell them there's nothing you can do",
        "Ask for their booking details and check change policies immediately",
        "Tell them to just call the airline",
        "Tell them to rebook themselves online",
      ],
      correct: 1,
      explanation:
        "A great agent stays calm and takes control of the solution — even if it’s the client’s fault. Guiding them through options is your role.",
    },
    {
      level: "🟢 EASY",
      question:
        "A walk-in client says, “I want a cheap beach vacation but I don’t care where.” What’s your best response?",
      options: [
        "Book the cheapest destination on the list",
        "Ask more questions about their preferences before recommending",
        "Give them a flyer and let them decide",
        "Send them a list of resorts",
      ],
      correct: 1,
      explanation:
        "“Cheap” means different things to different people. Clarifying needs first = better matches = satisfied clients.",
    },
    {
      level: "🟡 AVERAGE",
      question:
        "A client is choosing between two flights: one has a layover, one is direct but costs more. They ask you what to book. What do you do?",
      options: [
        "Book the cheaper one to save them money",
        "Recommend the direct flight for convenience, but explain the pros and cons of both",
        "Let them decide without giving input",
        "Choose whichever gives your agency more commission",
      ],
      correct: 1,
      explanation:
        "You provide value by offering insight, not just options. But you let the client decide. You’re not a robot — you’re their guide.",
    },
    {
      level: "🟡 AVERAGE",
      question:
        "A regular client asks for a full itinerary for a last-minute trip and wants a discount “as usual.” But prices have increased. What should you do?",
      options: [
        "Give the discount anyway to keep them loyal",
        "Apologize, explain why rates changed, and offer value in other ways (like better flight times or perks)",
        "Ask your boss to approve a discount",
        "Say you’ll try, but book it at full price without telling them",
      ],
      correct: 1,
      explanation:
        "Being honest while offering creative value protects trust and shows you’re still working in their best interest, even without discounts.",
    },
    {
      level: "🔴 HARD",
      question:
        "You discover that the resort you booked for a client is under renovation — their trip is in 2 days and they haven’t been informed yet. What’s your best move?",
      options: [
        "Wait and hope it won’t affect them",
        "Email the resort and ask them to deal with the guest directly",
        "Immediately contact the client, explain the issue, and offer a rebooking or alternative with upgrades if possible",
        "Cancel the booking without telling the client and try again",
      ],
      correct: 2,
      explanation:
        "Transparency builds long-term trust. Acting fast and offering solutions shows you’re proactive, not reactive — exactly what clients want in a great agent.",
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
    if (index === travelAgentQuestions[currentQ].correct) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ < travelAgentQuestions.length - 1) {
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

  const question = travelAgentQuestions[currentQ];
  const isCorrect = selected === question?.correct;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-100 to-teal-300 px-4 py-8">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-6 md:p-10 space-y-6">
      <a onClick={handleMenu} className="cursor-grab font-bold">Back to Menu</a>
        <div className="flex flex-col items-center space-y-2">
          <img src={image} alt="Hotel Staff" className="h-32 w-auto rounded-lg shadow-md" />
        </div>

        <h1 className="text-3xl font-extrabold text-teal-800 text-center mb-2">Travel Agent Quiz</h1>

        {!finished ? (
          <>
            <div className="text-sm text-teal-600 font-semibold">{question.level}</div>
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
                      : "hover:bg-teal-100 border-teal-200"
                  }`}
                  disabled={showAnswer}
                >
                  {opt}
                </button>
              ))}
            </div>

            {showAnswer && (
              <div className="mt-4 p-4 bg-teal-50 border-l-4 border-teal-500 text-teal-700 rounded-lg">
                <p className="font-semibold">
                  {isCorrect ? "✅ Correct!" : "❌ Incorrect"}
                </p>
                <p className="mt-1 text-sm">{question.explanation}</p>
              </div>
            )}

            {showAnswer && (
              <div className="text-right">
                <button
                  onClick={nextQuestion}
                  className="mt-4 px-5 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-600 transition"
                >
                  {currentQ < travelAgentQuestions.length - 1 ? "Next" : "Finish"}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-green-700">🎉 You completed the quiz!</h2>
            <p className="text-lg">
              You got <span className="font-bold">{score}</span> out of {travelAgentQuestions.length} questions correct.
            </p>
            <p className="text-sm text-gray-500 italic">
              {score === travelAgentQuestions.length
                ? "Perfect score! You're a pro travel planner! 💯"
                : score >= 3
                ? "Awesome job! You’ve got what it takes. ✈️"
                : "Keep going — every great agent starts somewhere! 🌍"}
            </p>
            <button
              onClick={restartQuiz}
              className="mt-4 px-6 py-2 bg-teal-700 text-white rounded-xl hover:bg-teal-600 transition"
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
