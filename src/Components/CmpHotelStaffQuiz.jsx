"use client"

import { useState } from "react"
import image from "/hotel-staff.png"
import { useNavigate } from "react-router-dom"

export const CmpHotelStaffQuiz = () => {
  const navigate = useNavigate()

  const levelData = [
    {
      title: "𝗟𝗲𝘃𝗲𝗹 𝟭: 𝗘𝗮𝘀𝘆 𝗥𝗼𝘂𝗻𝗱",
      intro: "Let's warm up! Time to get familiar with the basics.",
      desc: "This level introduces simple, real-world scenarios to help you build confidence and foundational hospitality skills.",
      questions: [
        {
          level: "🟢 EASY",
          question: "A guest calls the front desk at 2 AM complaining their room is too cold. What should you do?",
          options: [
            "Tell them to wait until morning",
            "Apologize and send someone to assist ASAP",
            "Suggest they try adjusting the thermostat themselves",
            "Tell them it's probably working fine",
          ],
          correct: 1,
          explanation:
            "Comfort is 24/7 in hospitality. Immediate action shows responsiveness and care, no matter the time.",
        },
        {
          level: "🟢 EASY",
          question:
            "A guest walks in, angry because their room isn't ready at check-in time. What's your best response?",
          options: [
            "Tell them to wait patiently",
            "Blame housekeeping for the delay",
            "Apologize, offer a drink or lounge access, and give updates",
            "Ignore them until their room is ready",
          ],
          correct: 2,
          explanation:
            "Service recovery is about acknowledging the issue and softening the wait. Blame is never professional — solutions are.",
        },
        {
          level: "🟢 EASY",
          question: "A guest asks for extra towels. What should you do?",
          options: [
            "Say housekeeping will bring them eventually",
            "Tell them there's a limit per guest",
            "Politely confirm their request and send them right away",
            "Ask them to get the towels themselves from the laundry",
          ],
          correct: 2,
          explanation: "Timely response to simple requests builds a great impression and shows efficiency.",
        },
        {
          level: "🟢 EASY",
          question: "A child is crying in the lobby and seems lost. What should you do first?",
          options: [
            "Ignore it — someone will come",
            "Ask the child where their parents are and stay with them",
            "Call security immediately without speaking to the child",
            "Let another staff member handle it",
          ],
          correct: 1,
          explanation:
            "Safety is a priority. Calm, caring response helps reunite families and reassures everyone nearby.",
        },
        {
          level: "🟢 EASY",
          question: "A guest politely compliments your service. What's the best way to respond?",
          options: [
            'Say "That\'s nothing."',
            "Ignore it and keep working",
            "Smile and thank them genuinely",
            'Say "I\'m just doing my job."',
          ],
          correct: 2,
          explanation: "Hospitality is about human connection — appreciation should be welcomed and reciprocated.",
        },
        {
          level: "🟢 EASY",
          question: "A tourist guest asks for directions to a nearby restaurant. What should you do?",
          options: [
            'Point vaguely and say "over there"',
            "Tell them to search online",
            "Kindly give directions or offer to show it on a map",
            "Say you're not from around here",
          ],
          correct: 2,
          explanation: "Personalized help enhances guest experience and reflects knowledge and care.",
        },
        {
          level: "🟢 EASY",
          question: "A guest forgets their room key. What should you do?",
          options: [
            "Give them a new key without checking ID",
            "Tell them to go find their original key",
            "Politely verify their identity, then issue a new key",
            "Ask them to pay for a new key",
          ],
          correct: 2,
          explanation: "Guest security comes first. Always confirm identity before providing access.",
        },
        {
          level: "🟢 EASY",
          question: "You see a spill in the hallway. What should you do?",
          options: [
            "Walk past — not your department",
            "Block the area and report it for immediate cleaning",
            "Wait until someone slips",
            "Ignore it until your shift ends",
          ],
          correct: 1,
          explanation: "Preventing accidents is part of every hotel staff's duty, even beyond their job title.",
        },
        {
          level: "🟢 EASY",
          question: "A guest asks for wake-up service. What should you do?",
          options: [
            "Tell them to set their own alarm",
            "Forget it and hope they wake up",
            "Log the request and confirm the time with them",
            "Say the service is not available",
          ],
          correct: 2,
          explanation: "Wake-up calls are a key guest request. Accuracy and clarity are crucial.",
        },
        {
          level: "🟢 EASY",
          question: "A guest is looking for the gym. What should you do?",
          options: [
            'Point and say "just follow the signs"',
            "Personally guide them or give clear directions",
            "Say it's closed (even if it's not)",
            "Tell them it's not your concern",
          ],
          correct: 1,
          explanation: "Personalized assistance boosts guest satisfaction and reflects attentiveness.",
        },
      ],
    },
    {
      title: "𝗟𝗲𝘃𝗲𝗹 𝟮: 𝗔𝘃𝗲𝗿𝗮𝗴𝗲 𝗥𝗼𝘂𝗻𝗱",
      intro: "Nice work finishing Level 1! Ready to raise the bar?",
      desc: "This level will test your problem-solving skills in real-world hotel scenarios that require thoughtful responses.",
      questions: [
        {
          level: "🟡 AVERAGE",
          question: "A guest complains that the bathroom smells bad even after cleaning. What's the best next move?",
          options: [
            "Send housekeeping again without telling the guest",
            "Apologize and offer to inspect the room yourself or provide another room if available",
            "Spray air freshener and hope they don't complain again",
            "Tell them it meets cleanliness standards",
          ],
          correct: 1,
          explanation:
            "Taking ownership with presence + options shows high-level hospitality. You're not just fixing — you're restoring confidence.",
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
          explanation: "Guests value effort and honesty. Even if it's not perfect, gesture + empathy = great service.",
        },
        {
          level: "🟡 AVERAGE",
          question: "A guest is unhappy with slow Wi-Fi. What do you do?",
          options: [
            "Blame the provider",
            "Apologize and report it to IT, then offer to help them with alternatives",
            "Tell them to go to a café",
            "Say it's not your job",
          ],
          correct: 1,
          explanation: "Managing tech issues with empathy and action builds guest trust.",
        },
        {
          level: "🟡 AVERAGE",
          question: "A guest leaves a bad review online while still checked in. What should you do?",
          options: [
            "Ignore it",
            "Respond publicly and blame them",
            "Approach the guest in person to resolve their concerns respectfully",
            "Call them out at the front desk",
          ],
          correct: 2,
          explanation: "Addressing issues while the guest is still present can fix the problem and change the review.",
        },
        {
          level: "🟡 AVERAGE",
          question:
            "A guest calls furious — they've been charged twice for the same stay. You check and see a system glitch. What's your best response?",
          options: [
            "Tell them to call accounting on Monday",
            "Apologize, explain the issue, and assure them you'll personally follow up on the refund process",
            "Say it's not your fault and they'll need to wait",
            "Ask them to show proof before doing anything",
          ],
          correct: 1,
          explanation:
            "In hotel work, you represent the entire system. Owning the problem and taking action fast makes all the difference.",
        },
        {
          level: "🟡 AVERAGE",
          question: "A guest requests a late checkout. What's your best response?",
          options: [
            "Tell them it's not allowed",
            "Ask for an extra charge right away",
            "Politely check availability and offer it if possible",
            "Ignore the request",
          ],
          correct: 2,
          explanation: "Flexibility is key in hospitality. Meeting a guest's needs strengthens their experience.",
        },
        {
          level: "🟡 AVERAGE",
          question: "A guest is celebrating a birthday. What's a thoughtful gesture?",
          options: [
            "Ignore it — it's personal",
            "Offer a complimentary treat or card if available",
            'Say "Happy Birthday" and move on',
            "Ask for a tip",
          ],
          correct: 1,
          explanation: "Small surprises create memorable experiences and encourage loyalty.",
        },
        {
          level: "🟡 AVERAGE",
          question: "A VIP guest checks in. What should you prioritize?",
          options: [
            "Treat them like everyone else",
            "Rush them through without interaction",
            "Give them personalized attention and ensure all requests are pre-fulfilled",
            "Wait for your manager to handle it",
          ],
          correct: 2,
          explanation: "VIPs expect top-tier treatment. Preparation and personal touch matter.",
        },
        {
          level: "🟡 AVERAGE",
          question: "A guest is asking about tourist attractions. What should you do?",
          options: [
            "Refer them to Google",
            "Recommend popular spots and provide maps or brochures",
            "Say you don't go out much",
            "Tell them it's not your job",
          ],
          correct: 1,
          explanation: "Being a local guide enhances your value as staff and builds rapport.",
        },
        {
          level: "🟡 AVERAGE",
          question:
            "A guest requests a late checkout, but the hotel is fully booked for the next day. What should you do?",
          options: [
            "Say no and hang up",
            "Promise a late checkout anyway",
            "Politely explain the situation, and offer alternatives like storing luggage or access to amenities after checkout",
            "Ignore the request",
          ],
          correct: 2,
          explanation:
            "Hospitality is about solutions, not just yes or no. Offering alternatives keeps the guest experience positive, even with limitations.",
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
            "A guest calls furious — they've been charged twice for the same stay. You check and see a system glitch. What's your best response?",
          options: [
            "Tell them to call accounting on Monday",
            "Apologize, explain the issue, and assure them you'll personally follow up on the refund process",
            "Say it's not your fault and they'll need to wait",
            "Ask them to show proof before doing anything",
          ],
          correct: 1,
          explanation:
            "In hotel work, you represent the entire system. Owning the problem and taking action fast makes all the difference.",
        },
        {
          level: "🔴 HARD",
          question: "A staff member is being rude to guests. What should you do?",
          options: [
            "Ignore it — not your problem",
            "Talk to them publicly",
            "Discreetly report to a supervisor and support the guest",
            "Join in to avoid conflict",
          ],
          correct: 2,
          explanation:
            "Maintaining the hotel's reputation means holding everyone to standards — discreetly and professionally.",
        },
        {
          level: "🔴 HARD",
          question: "A guest needs an urgent doctor, but speaks little English. What's your move?",
          options: [
            "Try to communicate with gestures and call for emergency medical help",
            "Wait for someone who speaks their language",
            "Ignore it — not your responsibility",
            "Tell them to rest and see later",
          ],
          correct: 0,
          explanation: "Health issues demand urgent action, even with communication barriers.",
        },
        {
          level: "🔴 HARD",
          question: "A fire alarm goes off. What's your first action at the front desk?",
          options: [
            "Run out",
            "Stay calm, follow emergency protocol, and guide guests as needed",
            "Wait for the manager",
            "Tell guests it's probably a drill",
          ],
          correct: 1,
          explanation: "In emergencies, leadership and clarity save lives.",
        },
        {
          level: "🔴 HARD",
          question:
            "A guest has been waiting at check-in for a long time due to system issues. What's your best approach?",
          options: [
            "Ignore them and keep working",
            "Apologize, offer compensation, and expedite the process",
            "Tell them to be patient",
            "Blame the IT department",
          ],
          correct: 1,
          explanation: "Proactive solutions and compensation help smooth over frustrations.",
        },
        {
          level: "🔴 HARD",
          question: "A guest wants to check in without their ID, claiming they left it in the car. What should you do?",
          options: [
            "Let them check in without ID",
            "Insist they return with ID before proceeding",
            "Politely verify identity through other means (e.g., credit card, reservation)",
            "Let someone else handle it",
          ],
          correct: 2,
          explanation: "Guest security and privacy are essential, so verification is a must.",
        },
        {
          level: "🔴 HARD",
          question: "A guest is making unreasonable demands during a busy period. What's the best way to respond?",
          options: [
            "Give in to their demands to avoid conflict",
            "Set clear boundaries while offering realistic alternatives",
            "Ignore them until they leave",
            "Blame your supervisor",
          ],
          correct: 1,
          explanation: "Diplomacy is key in balancing guest expectations with hotel operations.",
        },
        {
          level: "🔴 HARD",
          question: "A guest requests a room change due to noise but you're fully booked. How do you handle it?",
          options: [
            "Tell them nothing can be done",
            "Apologize and offer other solutions (e.g., earplugs, access to quieter spaces)",
            "Offer them a discounted rate for the inconvenience",
            "Ask them to wait for the next day",
          ],
          correct: 1,
          explanation:
            "Solutions-focused responses show care and maintain guest satisfaction even when the ideal outcome isn't possible.",
        },
        {
          level: "🔴 HARD",
          question: "A guest makes a legal complaint about their room (e.g., they slipped). What should you do?",
          options: [
            "Deny responsibility",
            "Document everything and inform management immediately",
            "Offer cash on the spot",
            "Ignore it",
          ],
          correct: 1,
          explanation: "Serious complaints require thorough handling and proper documentation.",
        },
        {
          level: "🔴 HARD",
          question: "A group is checking in for a conference, but their reservations are missing. What now?",
          options: [
            "Tell them to book again",
            "Stay calm, look for alternatives, offer temporary solutions, and keep them updated",
            "Blame their organizer",
            "Send them to another hotel",
          ],
          correct: 1,
          explanation: "Grace under pressure defines top-level hotel staff — turning problems into opportunities.",
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
          <img src={image || "/placeholder.svg"} alt="Hotel Staff" className="h-32 w-auto rounded-lg shadow-md" />
        </div>

        <h1 className="text-3xl font-extrabold text-blue-800 text-center mb-4">Hotel Staff Quiz</h1>

        {finished ? (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-green-700">🎉 You completed the quiz!</h2>
            <p className="text-lg">
              You got <span className="font-bold">{score}</span> out of{" "}
              {levelData.reduce((acc, l) => acc + l.questions.length, 0)} questions correct.
            </p>
            <p className="text-sm text-gray-500 italic">
              {score === levelData.reduce((acc, l) => acc + l.questions.length, 0)
                ? "Perfect score! You're a hospitality pro! 💯"
                : score >= 15
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
