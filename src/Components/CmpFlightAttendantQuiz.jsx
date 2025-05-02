"use client"

import { useState } from "react"
import image from "/flight-attendant.png"
import { useNavigate } from "react-router-dom"

export const CmpFlightAttendantQuiz = () => {
  const navigate = useNavigate()

  const levelData = [
    {
      title: "𝗟𝗲𝘃𝗲𝗹 𝟭: 𝗘𝗮𝘀𝘆 𝗥𝗼𝘂𝗻𝗱",
      intro: "Let's warm up! Time to get familiar with the basics.",
      desc: "This level introduces simple, real-world scenarios to help you build confidence and foundational flight attendant skills.",
      questions: [
        {
          level: "🟢 EASY",
          question:
            "A passenger politely asks for assistance with their overhead bag before takeoff. What's the best action?",
          options: [
            "Say you're not allowed to help",
            "Assist them with proper posture and technique to avoid injury",
            "Tell them to ask a seatmate",
            "Ignore the request — it's not your responsibility",
          ],
          correct: 1,
          explanation:
            "FA's may assist as long as safety is maintained. Proper form avoids injury, and helping shows professionalism.",
        },
        {
          level: "🟢 EASY",
          question: "The plane is about to land and a passenger still has their tray table down. What should you do?",
          options: [
            "Wait until the plane touches down",
            "Let them be — it's not a big deal",
            "Calmly remind them to stow it for landing",
            "Ask the captain to delay landing",
          ],
          correct: 2,
          explanation:
            "Small details = big safety concerns. Always address non-compliance before impact moments like landing.",
        },
        {
          level: "🟢 EASY",
          question: "A passenger is unsure how to fasten their seatbelt.",
          options: [
            "Tell them to watch the safety video",
            "Ignore them and continue",
            "Demonstrate politely how to do it",
            "Ask another passenger to help",
          ],
          correct: 2,
          explanation:
            "Your role includes passenger safety. Patiently assisting helps ensure proper use and reduces confusion.",
        },
        {
          level: "🟢 EASY",
          question: "A guest accidentally presses the call bell but says they don't need anything.",
          options: [
            "Roll your eyes and reset it",
            "Ignore it",
            "Politely acknowledge and reset the button",
            "Tell them to stop pressing it",
          ],
          correct: 2,
          explanation:
            "Always respond professionally — it maintains cabin order and reassures passengers that help is available.",
        },
        {
          level: "🟢 EASY",
          question: "What's the best way to walk through the aisle with a cart?",
          options: [
            "Quickly to save time",
            "Let passengers move out of your way",
            "Slowly and cautiously, announcing yourself when needed",
            "Push fast and loudly to get through",
          ],
          correct: 2,
          explanation:
            "It prevents accidents, maintains courtesy, and ensures you don't injure passengers with sudden moves.",
        },
        {
          level: "🟢 EASY",
          question: "A passenger asks for water after service has ended.",
          options: [
            "Tell them service is over",
            "Say you're too busy",
            "Politely get them water",
            "Ask them to wait until landing",
          ],
          correct: 2,
          explanation:
            "Hospitality doesn't stop with service rounds. Meeting small needs boosts passenger satisfaction.",
        },
        {
          level: "🟢 EASY",
          question: "During boarding, what should you watch out for?",
          options: [
            "What passengers are wearing",
            "Who's using a phone",
            "Carry-on baggage size and seat assignments",
            "Who looks tired",
          ],
          correct: 2,
          explanation:
            "These impact safety and efficiency. FAs must ensure overhead bins close and seating is organized.",
        },
        {
          level: "🟢 EASY",
          question: "A passenger asks where the restroom is.",
          options: [
            "Point randomly",
            "Tell them to look around",
            "Smile and clearly give directions",
            "Say you're not sure",
          ],
          correct: 2,
          explanation:
            "Friendliness builds rapport. Clear communication prevents passengers from wandering or getting frustrated.",
        },
        {
          level: "🟢 EASY",
          question: "If turbulence starts suddenly, what do you do?",
          options: [
            "Run to the nearest jumpseat",
            "Sit down wherever you are and secure yourself",
            "Ask a passenger to help you",
            "Hold onto the ceiling",
          ],
          correct: 1,
          explanation:
            "Your safety comes first — you can't help others if you're injured. FAs must secure themselves immediately.",
        },
        {
          level: "🟢 EASY",
          question: "A child drops their toy in the aisle.",
          options: [
            "Step over it",
            "Pick it up and give it back with a smile",
            "Ask the parent to get it",
            "Kick it aside",
          ],
          correct: 1,
          explanation: "Small gestures make a big impact on service perception — and keep the aisle clear for safety.",
        },
      ],
    },
    {
      title: "𝗟𝗲𝘃𝗲𝗹 𝟮: 𝗔𝘃𝗲𝗿𝗮𝗴𝗲 𝗥𝗼𝘂𝗻𝗱",
      intro: "Nice work finishing Level 1! Ready to raise the bar?",
      desc: "This level will test your problem-solving skills in real-world flight scenarios that require thoughtful responses.",
      questions: [
        {
          level: "🟡 AVERAGE",
          question:
            "A vegetarian passenger is upset because their pre-booked meal wasn't loaded. What's the best response?",
          options: [
            "Apologize, explain the situation, and offer the best alternative meal option",
            "Tell them to eat around the meat",
            "Offer extra snacks and move on",
            "Blame catering and tell them to complain online",
          ],
          correct: 0,
          explanation:
            "You're the face of the airline onboard. You must own the moment with empathy and problem-solving, even if it wasn't your fault.",
        },
        {
          level: "🟡 AVERAGE",
          question:
            "During beverage service, a passenger rudely demands a second drink while you're assisting another guest. What's your best move?",
          options: [
            "Tell them to wait like everyone else",
            "Smile and say you'll return right after serving the current passenger",
            "Give them the drink quickly to avoid conflict",
            "Skip them in the next round",
          ],
          correct: 1,
          explanation:
            "You maintain calm professionalism and fairness. Never reward rudeness, but never escalate either. Boundaries with grace.",
        },
        {
          level: "🟡 AVERAGE",
          question: "A guest asks for medication.",
          options: [
            "Give them your personal meds",
            "Offer anything available",
            "Inform them FAs cannot give medication but can offer assistance",
            "Ignore the request",
          ],
          correct: 2,
          explanation:
            "FAs aren't allowed to administer meds. Offer help within protocol and contact medical assistance if needed.",
        },
        {
          level: "🟡 AVERAGE",
          question: "A guest complains about a seatmate's body odor.",
          options: [
            "Spray perfume nearby",
            "Apologize and walk away",
            "Discreetly assess the situation and involve the purser if needed",
            "Tell them to deal with it",
          ],
          correct: 2,
          explanation: "Be sensitive. Maintain dignity for both guests while trying to find a private solution.",
        },
        {
          level: "🟡 AVERAGE",
          question: "A passenger requests a kosher meal mid-flight but didn't pre-order.",
          options: [
            "Say there's nothing you can do",
            "Try to find any available meal that fits their needs and explain politely",
            "Tell them to eat snacks",
            "Ignore the request",
          ],
          correct: 1,
          explanation:
            "Making an effort shows service commitment and respect for dietary needs, even when options are limited.",
        },
        {
          level: "🟡 AVERAGE",
          question: "You notice a passenger looking very anxious during turbulence.",
          options: [
            "Ignore them",
            "Tell them to calm down",
            "Reassure them with calm words and presence",
            "Offer them medicine",
          ],
          correct: 2,
          explanation: "Emotional support is part of the job. Your calmness can ease passenger fears.",
        },
        {
          level: "🟡 AVERAGE",
          question: "A guest is upset they didn't get a window seat.",
          options: [
            "Say nothing",
            "Offer to check for available seats after takeoff",
            "Tell them to upgrade next time",
            "Blame check-in staff",
          ],
          correct: 1,
          explanation: "Even if you can't fix it, trying helps them feel heard and respected.",
        },
        {
          level: "🟡 AVERAGE",
          question: "A passenger keeps pressing the call button repeatedly.",
          options: [
            "Ignore it",
            "Ask why they keep doing it and assist if possible",
            "Turn off their button",
            "Warn them you'll report them",
          ],
          correct: 1,
          explanation: "Address the root cause calmly before it becomes a disruption.",
        },
        {
          level: "🟡 AVERAGE",
          question: "A passenger is filming the crew during safety demo.",
          options: [
            "Take their phone",
            "Walk away",
            "Continue professionally, unless it violates policy",
            "Tell them to delete it immediately",
          ],
          correct: 2,
          explanation: "Stay composed. Act only if recording disrupts operations or breaches security rules.",
        },
        {
          level: "🟡 AVERAGE",
          question: "Two passengers are sitting in the wrong seats and arguing.",
          options: [
            "Let them sort it",
            "Scold them both",
            "Calmly check their boarding passes and resolve the issue",
            "Call security immediately",
          ],
          correct: 2,
          explanation: "Be the neutral authority. Quick, fair solutions prevent escalation.",
        },
      ],
    },
    {
      title: "𝗟𝗲𝘃𝗲𝗹 𝟯: 𝗛𝗮𝗿𝗱 𝗥𝗼𝘂𝗻𝗱",
      intro: "Impressive! You've made it to the final challenge.",
      desc: "Level 3 throws complex, high-pressure situations at you — perfect for sharpening your calm, critical thinking, and professionalism.",
      questions: [
        {
          level: "🔴 HARD",
          question:
            "Mid-flight, a passenger suddenly has difficulty breathing and clutches their chest. You're alone in the aisle. What's your first and best action?",
          options: [
            "Shout for help and continue observing",
            "Call the pilot first",
            "Immediately assess responsiveness and breathing, notify the purser, and prepare for emergency medical procedures",
            "Wait for another crew member to assist before doing anything",
          ],
          correct: 2,
          explanation:
            "Life-threatening = every second counts. No waiting. You're trained to act fast and communicate. This is where real safety skills matter — and hesitation is the biggest mistake.",
        },
        {
          level: "🔴 HARD",
          question: "A guest is unconscious but breathing.",
          options: [
            "Shake them hard",
            "Leave them lying flat",
            "Place them in recovery position and monitor vitals",
            "Give water",
          ],
          correct: 2,
          explanation: "Keeps airways open and prevents choking while waiting for medical help.",
        },
        {
          level: "🔴 HARD",
          question: "A passenger reports seeing sparks from a wing during flight.",
          options: ["Say it's normal", "Ignore it", "Report it to the cockpit immediately", "Panic and shout"],
          correct: 2,
          explanation: "Never ignore a safety hazard. The flight deck must be informed ASAP.",
        },
        {
          level: "🔴 HARD",
          question: "You smell alcohol on a passenger who is acting erratically.",
          options: [
            "Give them more drinks",
            "Ignore them",
            "Monitor closely and inform the purser",
            "Joke about it with others",
          ],
          correct: 2,
          explanation: "Early observation helps prevent safety risks before they escalate.",
        },
        {
          level: "🔴 HARD",
          question: "A fire starts in the lavatory. First action?",
          options: [
            "Call for help",
            "Panic",
            "Use the fire extinguisher and alert the cockpit",
            "Wait for instructions",
          ],
          correct: 2,
          explanation: "Fire is deadly in-flight. Take immediate action and inform the captain for emergency protocol.",
        },
        {
          level: "🔴 HARD",
          question: "Passenger is having a seizure.",
          options: [
            "Restrain them",
            "Insert something in their mouth",
            "Protect their head, time the seizure, and notify medical team",
            "Move them forcefully",
          ],
          correct: 2,
          explanation: "Never restrain. Protect, monitor, and communicate.",
        },
        {
          level: "🔴 HARD",
          question: "A bomb threat is found written on a napkin.",
          options: [
            "Throw it away",
            "Show other passengers",
            "Notify the captain and follow security procedures",
            "Panic",
          ],
          correct: 2,
          explanation: "All threats must be treated seriously and reported immediately.",
        },
        {
          level: "🔴 HARD",
          question: "A physically aggressive passenger hits another guest.",
          options: [
            "Yell at them",
            "Walk away",
            "Separate them if safe, inform captain, begin restraint protocol if needed",
            "Let passengers deal with it",
          ],
          correct: 2,
          explanation: "Passenger safety is top priority. Follow procedures carefully.",
        },
        {
          level: "🔴 HARD",
          question: "After a hard landing, you see smoke in the cabin.",
          options: [
            "Wait for captain's announcement",
            "Panic",
            "Begin evacuation if instructed, guide passengers firmly",
            "Ignore it",
          ],
          correct: 2,
          explanation: "Evacuation is time-critical. Stay calm and take control.",
        },
        {
          level: "🔴 HARD",
          question: "A medical volunteer offers to help a sick passenger. What do you do?",
          options: [
            "Let them treat immediately",
            "Ignore them",
            "Confirm credentials discreetly and inform the purser",
            "Ask them to leave",
          ],
          correct: 2,
          explanation:
            "Always verify qualifications before allowing intervention. Protect the passenger and airline liability.",
        },
      ],
    },
  ]

  const [levelIndex, setLevelIndex] = useState(0)
  const [showIntro, setShowIntro] = useState(true)
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [levelCompleted, setLevelCompleted] = useState(false)
  const [levelScore, setLevelScore] = useState(0)
  const [levelScoreTracker, setLevelScoreTracker] = useState({
    0: {}, // Easy level scores
    1: {}, // Average level scores
    2: {}, // Hard level scores
  })

  const currentLevel = levelData[levelIndex]
  const question = currentLevel.questions[currentQ]
  const isCorrect = selected === question?.correct

  const handleMenu = () => {
    navigate("../character")
  }

  const handleSelect = (index) => {
    if (showAnswer) return
    setSelected(index)
    setShowAnswer(true)

    const isAnswerCorrect = index === question.correct

    if (isAnswerCorrect) {
      setScore((prev) => prev + 1)

      // Track this question as correct for the current level
      setLevelScoreTracker((prev) => ({
        ...prev,
        [levelIndex]: {
          ...prev[levelIndex],
          [currentQ]: true,
        },
      }))
    } else {
      // Track this question as incorrect for the current level
      setLevelScoreTracker((prev) => ({
        ...prev,
        [levelIndex]: {
          ...prev[levelIndex],
          [currentQ]: false,
        },
      }))
    }
  }

  const nextQuestion = () => {
    if (currentQ < currentLevel.questions.length - 1) {
      setCurrentQ((prev) => prev + 1)
      setSelected(null)
      setShowAnswer(false)
    } else {
      // Level completed
      setLevelCompleted(true)
      setLevelScore(
        currentLevel.questions.reduce((count, _, i) => {
          const questionIndex = i
          const questionState = levelScoreTracker[levelIndex]?.[questionIndex] || false
          return count + (questionState ? 1 : 0)
        }, 0),
      )
    }
  }

  const restartQuiz = () => {
    setLevelIndex(0)
    setShowIntro(true)
    setCurrentQ(0)
    setSelected(null)
    setShowAnswer(false)
    setScore(0)
    setFinished(false)
    setLevelCompleted(false)
    setLevelScoreTracker({
      0: {}, // Easy level scores
      1: {}, // Average level scores
      2: {}, // Hard level scores
    })
  }

  const continueToNextLevel = () => {
    if (levelIndex < levelData.length - 1) {
      setLevelIndex((prev) => prev + 1)
      setShowIntro(true)
      setCurrentQ(0)
      setSelected(null)
      setShowAnswer(false)
      setLevelCompleted(false)
    } else {
      setFinished(true)
    }
  }

  const goToMenu = () => {
    navigate("../character")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4 py-8">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-6 md:p-10 space-y-6">
        <a onClick={handleMenu} className="cursor-pointer font-bold text-blue-700">
          Back to Menu
        </a>

        <div className="flex flex-col items-center space-y-2">
          <img src={image || "/placeholder.svg"} alt="Flight Attendant" className="h-32 w-auto rounded-lg shadow-md" />
        </div>

        <h1 className="text-3xl font-extrabold text-blue-800 text-center mb-4">Flight Attendant Quiz</h1>

        {finished ? (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-green-700">🎉 You completed the quiz!</h2>
            <p className="text-lg">
              You got <span className="font-bold">{score}</span> out of{" "}
              {levelData.reduce((acc, l) => acc + l.questions.length, 0)} questions correct.
            </p>
            <p className="text-sm text-gray-500 italic">
              {score === levelData.reduce((acc, l) => acc + l.questions.length, 0)
                ? "Perfect score! You're a flight safety pro! 💯"
                : score >= 15
                  ? "Great job! You're a fantastic flight attendant. 👏"
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
        ) : levelCompleted ? (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">Level {levelIndex + 1} Completed!</h2>
            <div className="bg-blue-50 rounded-xl p-6 my-4">
              <p className="text-lg font-semibold">Your score for this level:</p>
              <p className="text-3xl font-bold text-blue-700 my-2">
                {levelScore} / {currentLevel.questions.length}
              </p>
              <p className="text-sm text-gray-600 italic">
                {levelScore === currentLevel.questions.length
                  ? "Perfect! You mastered this level! 🌟"
                  : levelScore >= currentLevel.questions.length * 0.7
                    ? "Great job! You're doing well! 👏"
                    : "Keep practicing to improve! 💪"}
              </p>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={goToMenu}
                className="px-6 py-2 bg-gray-500 text-white rounded-xl hover:bg-gray-400 transition"
              >
                Go Back to Menu
              </button>

              {levelIndex < levelData.length - 1 ? (
                <button
                  onClick={continueToNextLevel}
                  className="px-6 py-2 bg-blue-700 text-white rounded-xl hover:bg-blue-600 transition"
                >
                  Continue to Next Level
                </button>
              ) : (
                <div className="px-6 py-2 bg-blue-200 text-blue-800 rounded-xl border border-blue-300">
                  Coming Soon: Extreme Level 🔥
                </div>
              )}
            </div>
          </div>
        ) : showIntro ? (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">{currentLevel.title}</h2>
            <p className="text-lg italic text-gray-700">"{currentLevel.intro}"</p>
            <p className="text-sm text-gray-600">{currentLevel.desc}</p>
            <button
              onClick={() => setShowIntro(false)}
              className="mt-4 px-6 py-2 bg-blue-700 text-white rounded-xl hover:bg-blue-600 transition"
            >
              Continue
            </button>
          </div>
        ) : (
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
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
