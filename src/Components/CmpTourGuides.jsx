import React, { useState } from "react";
import logo from "/logo.png";
import image from "/tour-guide.png";
import { useNavigate } from "react-router-dom";

export const CmpTourGuides = () => {
  
  const navigate = useNavigate(); 
  
  const tourGuideQuestions = [
    {
      level: "🟢 EASY",
      question: "A tourist in your group keeps walking ahead of the others. What’s the best response?",
      options: [
        "Call them out in front of the group",
        "Let them go since they’re fast",
        "Remind the group, including them, to stay together for safety",
        "Ignore it unless someone complains",
      ],
      correct: 2,
      explanation: "This avoids confrontation but still reasserts safety and group unity. No shame, just guidance.",
    },
    {
      level: "🟢 EASY",
      question: "Someone asks you a question about the landmark you haven’t researched well. What’s the best response?",
      options: [
        "Make up something that sounds smart",
        "Say “I’m not sure” and promise to find the answer",
        "Redirect the question to another tourist",
        "Laugh it off and ignore it",
      ],
      correct: 1,
      explanation: "Honesty + curiosity = trust + growth. Guests respect that more than fake answers.",
    },
    {
      level: "🟡 AVERAGE",
      question: "You’re running late for the next stop and a tourist wants to take extra photos. How should you handle it?",
      options: [
        "Tell them to hurry up and respect the group",
        "Let them take more pics and delay the entire schedule",
        "Remind them of time gently, offer to take a quick photo for them, then regroup",
        "Ask the rest to wait while you go with the tourist",
      ],
      correct: 2,
      explanation:
        "This balances guest satisfaction AND time management. Offering to take the pic shows service mindset while keeping control.",
    },
    {
      level: "🟡 AVERAGE",
      question: "During your cultural explanation, one guest makes an insensitive joke about a tradition. What’s your best move?",
      options: [
        "Laugh to avoid awkwardness",
        "Ignore it and keep going",
        "Gently redirect with a respectful reminder about cultural sensitivity",
        "Stop the tour and scold them",
      ],
      correct: 2,
      explanation:
        "You protect the respect of the place and people without making the guest feel attacked. Guides are culture keepers — but also peacekeepers.",
    },
    {
      level: "🔴 HARD",
      question: "A couple in your group starts arguing loudly during the tour. It’s affecting the group vibe. What should you do?",
      options: [
        "Interrupt them and tell them to stop",
        "Continue the tour and ignore it",
        "Find a moment to approach privately, check if they’re okay, and offer space if needed",
        "Ask the group if they’re bothered, then take a vote on whether to address it",
      ],
      correct: 2,
      explanation:
        "You stay non-confrontational, show empathy, and avoid public embarrassment — but you don’t ignore it either. True professionalism = calm intervention without drama.",
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
    if (index === tourGuideQuestions[currentQ].correct) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ < tourGuideQuestions.length - 1) {
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

  const question = tourGuideQuestions[currentQ];
  const isCorrect = selected === question?.correct;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4 py-8">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-6 md:p-10 space-y-6">
      <a onClick={handleMenu} className="cursor-grab font-bold">Back to Menu</a>
        {/* Logo and image */}
        <div className="flex flex-col items-center space-y-2">
          <img src={image} alt="Hotel Staff" className="h-32 w-auto rounded-lg shadow-md" />
        </div>


        <h1 className="text-3xl font-extrabold text-blue-800 text-center mb-4">Tour Guide Quiz</h1>

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
                  {currentQ < tourGuideQuestions.length - 1 ? "Next" : "Finish"}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-green-700">🎉 You completed the quiz!</h2>
            <p className="text-lg">
              You got <span className="font-bold">{score}</span> out of {tourGuideQuestions.length} questions correct.
            </p>
            <p className="text-sm text-gray-500 italic">
              {score === tourGuideQuestions.length
                ? "Perfect score! You're a certified tour pro! 💯"
                : score >= 3
                ? "Great job! You’re well on your way. 👏"
                : "Keep practicing — you’ve got this! 💪"}
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
