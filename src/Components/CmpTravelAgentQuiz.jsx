"use client"

import { useState } from "react"
import image from "/travel-agent.png"
import { useNavigate } from "react-router-dom"

export const CmpTravelAgentQuiz = () => {
  const navigate = useNavigate()

  const levelData = [
    {
      title: "𝗟𝗲𝘃𝗲𝗹 𝟭: 𝗘𝗮𝘀𝘆 𝗥𝗼𝘂𝗻𝗱",
      intro: "Let's warm up! Time to get familiar with the basics.",
      desc: "This level introduces simple, real-world scenarios to help you build confidence and foundational travel agent skills.",
      questions: [
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
            "A great agent stays calm and takes control of the solution — even if it's the client's fault. Guiding them through options is your role.",
        },
        {
          level: "🟢 EASY",
          question:
            "A walk-in client says, \"I want a cheap beach vacation but I don't care where.\" What's your best response?",
          options: [
            "Book the cheapest destination on the list",
            "Ask more questions about their preferences before recommending",
            "Give them a flyer and let them decide",
            "Send them a list of resorts",
          ],
          correct: 1,
          explanation:
            '"Cheap" means different things to different people. Clarifying needs first = better matches = satisfied clients.',
        },
        {
          level: "🟢 EASY",
          question: "A client asks for help booking a flight but doesn't have a passport yet. What should you do?",
          options: [
            "Book it anyway and hope it works out",
            "Tell them to call back once they have a passport",
            "Suggest a domestic trip instead without asking",
            "Explain that they'll need a valid passport before confirming international travel",
          ],
          correct: 3,
          explanation: "Being clear upfront avoids costly mistakes and builds trust through transparency.",
        },
        {
          level: "🟢 EASY",
          question:
            "A client wants to book a hotel they saw online, but the reviews are mostly negative. What's your best move?",
          options: [
            "Book it anyway since it's their choice",
            "Warn them it's a bad idea",
            "Say nothing unless they ask",
            "Share the reviews and suggest better-rated alternatives",
          ],
          correct: 3,
          explanation: "Offering informed guidance shows you care about their experience — not just the booking.",
        },
        {
          level: "🟢 EASY",
          question:
            "A client is frustrated because their travel insurance didn't cover a cancellation. What should you do?",
          options: [
            "Tell them to contact the insurance company",
            "Show empathy and help them understand the policy",
            "Remind them it's not your responsibility",
            "Offer a refund yourself",
          ],
          correct: 1,
          explanation: "Even if you didn't write the policy, being helpful shows service and professionalism.",
        },
        {
          level: "🟢 EASY",
          question:
            'Someone walks in and asks, "Why should I use a travel agent instead of booking online?" How do you respond?',
          options: [
            'Say "because we\'re better"',
            "Ignore the question and start suggesting trips",
            "Explain the benefits like expert advice, support, and personalized options",
            "Tell them it's really the same thing",
          ],
          correct: 2,
          explanation: "A confident, helpful answer shows your value and sets a positive tone.",
        },
        {
          level: "🟢 EASY",
          question: "A client is worried about safety in their destination. What should you do?",
          options: [
            "Tell them not to worry",
            "Give them the government's travel advisory and discuss safe options",
            "Cancel their trip",
            "Suggest somewhere random instead",
          ],
          correct: 1,
          explanation: "Facts + options = reassurance. You're their guide, not just their booker.",
        },
        {
          level: "🟢 EASY",
          question: 'A returning client says, "I want exactly what I had last time." What\'s your next step?',
          options: [
            "Book the exact same trip without asking",
            "Just repeat the destination only",
            "Say it's been too long to find that info",
            "Double-check what worked and ask if anything should be different",
          ],
          correct: 3,
          explanation: "People change — even repeat clients. Clarifying keeps your service sharp and personal.",
        },
        {
          level: "🟢 EASY",
          question: "A client doesn't understand part of the travel itinerary you sent. What's the best way to help?",
          options: [
            "Tell them to read it again",
            "Get annoyed because it's all there",
            "Send them a different itinerary",
            "Walk them through it step by step, simply",
          ],
          correct: 3,
          explanation: "Patience + clarity = happy clients. Confusion is your chance to show support.",
        },
        {
          level: "🟢 EASY",
          question: 'A family says they want a "kid-friendly" vacation. What should you ask next?',
          options: [
            "What their budget is",
            "How many kids and what ages",
            "If they want a beach",
            "If they have passports",
          ],
          correct: 1,
          explanation: "Kid-friendly means different things at different ages. Details lead to better recommendations.",
        },
      ],
    },
    {
      title: "𝗟𝗲𝘃𝗲𝗹 𝟮: 𝗔𝘃𝗲𝗿𝗮𝗴𝗲 𝗥𝗼𝘂𝗻𝗱",
      intro: "Nice work finishing Level 1! Ready to raise the bar?",
      desc: "This level will test your problem-solving skills in real-world travel scenarios that require thoughtful responses.",
      questions: [
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
            "You provide value by offering insight, not just options. But you let the client decide. You're not a robot — you're their guide.",
        },
        {
          level: "🟡 AVERAGE",
          question:
            'A regular client asks for a full itinerary for a last-minute trip and wants a discount "as usual." But prices have increased. What should you do?',
          options: [
            "Give the discount anyway to keep them loyal",
            "Apologize, explain why rates changed, and offer value in other ways (like better flight times or perks)",
            "Ask your boss to approve a discount",
            "Say you'll try, but book it at full price without telling them",
          ],
          correct: 1,
          explanation:
            "Being honest while offering creative value protects trust and shows you're still working in their best interest, even without discounts.",
        },
        {
          level: "🟡 AVERAGE",
          question: "A client wants to book a safari but has never traveled internationally. What's your best move?",
          options: [
            "Book it and hope they figure out the rest",
            "Suggest a less adventurous option to play it safe",
            "Walk them through the basics of international travel and help prep documents and expectations",
            "Tell them to research on their own first",
          ],
          correct: 2,
          explanation:
            "First-timers need guidance, not just bookings. Your support builds confidence and better outcomes.",
        },
        {
          level: "🟡 AVERAGE",
          question: "A client insists on booking a very tight connection between flights. What should you do?",
          options: [
            "Book it as requested",
            "Warn them of the risk, then offer to look for safer alternatives",
            "Refuse and cancel the booking",
            "Book it but don't note the risk",
          ],
          correct: 1,
          explanation: "You protect them with proactive insight while still respecting their final choice.",
        },
        {
          level: "🟡 AVERAGE",
          question: "A couple asks you to plan a honeymoon but can't agree on beach vs. city. What do you do?",
          options: [
            "Tell them to figure it out first",
            "Pick one and hope they're fine with it",
            "Propose a split-destination trip that includes both",
            "Side with the one who seems more decisive",
          ],
          correct: 2,
          explanation:
            "Finding creative compromises shows your value and keeps the mood collaborative — especially for trips that matter.",
        },
        {
          level: "🟡 AVERAGE",
          question:
            "A client is frustrated after a long hold with an airline. They want you to fix it, even though you didn't book the flight. What now?",
          options: [
            "Tell them it's not your problem",
            "Offer to contact the airline as a courtesy and explain the limits of your role",
            "Apologize and refund the trip",
            "Ignore them — it's not your job",
          ],
          correct: 1,
          explanation: "Even if it's not your fault, going the extra mile makes you memorable — and earns loyalty.",
        },
        {
          level: "🟡 AVERAGE",
          question:
            "A corporate client wants flights for ten team members but only gives first names and cities. What's the best next step?",
          options: [
            "Book flights with what you have",
            "Ask for full legal names, travel dates, and ID info before proceeding",
            "Wait until they notice the missing details",
            "Just email a quote based on guesses",
          ],
          correct: 1,
          explanation: "Accuracy is everything in group travel. You save time and avoid costly mistakes.",
        },
        {
          level: "🟡 AVERAGE",
          question: "A solo traveler says they're nervous about going abroad alone. What should you do?",
          options: [
            "Recommend they stay home",
            "Offer guided tour packages or group travel options",
            "Tell them it's normal and move on",
            "Suggest random trips with no support",
          ],
          correct: 1,
          explanation: "You listen, reassure, and adjust your advice to match the client's comfort level.",
        },
        {
          level: "🟡 AVERAGE",
          question:
            'A client wants to stay near "cool restaurants," but gives no specific city area. How do you proceed?',
          options: [
            "Book a random central hotel",
            "Ask what kind of food, atmosphere, and neighborhoods they like",
            "Pick the most expensive district",
            "Say it's too vague to help",
          ],
          correct: 1,
          explanation: "Digging deeper turns vague ideas into tailored experiences — that's the agent advantage.",
        },
        {
          level: "🟡 AVERAGE",
          question: "A client calls stressed because their visa application is delayed. What do you do?",
          options: [
            "Tell them to relax and hang up",
            "Explain their options: rescheduling or choosing visa-free destinations",
            "Say there's nothing you can do",
            "Offer to call the embassy for them",
          ],
          correct: 1,
          explanation: "Staying solution-focused shows professionalism. You stay calm so they can too.",
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
            "You discover that the resort you booked for a client is under renovation — their trip is in 2 days and they haven't been informed yet. What's your best move?",
          options: [
            "Wait and hope it won't affect them",
            "Email the resort and ask them to deal with the guest directly",
            "Immediately contact the client, explain the issue, and offer a rebooking or alternative with upgrades if possible",
            "Cancel the booking without telling the client and try again",
          ],
          correct: 2,
          explanation:
            "Transparency builds long-term trust. Acting fast and offering solutions shows you're proactive, not reactive — exactly what clients want in a great agent.",
        },
        {
          level: "🔴 HARD",
          question:
            "A client messages you from abroad saying their hotel doesn't have their reservation. What do you do?",
          options: [
            "Tell them to find another hotel themselves",
            "Contact the hotel immediately and try to resolve the issue while keeping the client updated",
            "Ask them to call the hotel directly",
            "Tell them to wait — it might sort itself out",
          ],
          correct: 1,
          explanation:
            "Even if you didn't cause the problem, your calm and active support is what builds reputation and loyalty.",
        },
        {
          level: "🔴 HARD",
          question:
            "A client accuses you of misquoting a price even though the increase was due to dynamic airline pricing. What should you do?",
          options: [
            "Blame the airline and get defensive",
            "Calmly explain how pricing works and show timestamped quotes or screenshots if available",
            "Offer to pay the difference out of pocket",
            "Ignore them until they cool off",
          ],
          correct: 1,
          explanation:
            "Being transparent and professional shows confidence in your process — and educates the client without blame.",
        },
        {
          level: "🔴 HARD",
          question:
            "A client missed their flight because they read the itinerary wrong and now they're demanding a refund. What do you do?",
          options: [
            "Apologize and offer a full refund",
            "Blame them outright",
            "Empathize, explain the situation, and help explore rebooking options while staying firm on refund policy",
            "Say there's nothing you can do",
          ],
          correct: 2,
          explanation:
            "Emotional intelligence matters. Being firm and helpful is the key to managing difficult conversations.",
        },
        {
          level: "🔴 HARD",
          question:
            "You realize you booked a non-refundable room instead of the flexible option your client requested. What's the best action?",
          options: [
            "Hope they don't notice",
            "Call the hotel, try to negotiate a change, and inform the client immediately",
            "Wait until they ask about it",
            "Cancel the room and rebook at full cost without telling them",
          ],
          correct: 1,
          explanation:
            "Owning your mistake with urgency and honesty protects your credibility and may even turn a mistake into a win.",
        },
        {
          level: "🔴 HARD",
          question:
            "A loyal client is being extremely rude to your new trainee in front of others. What's the best way to respond?",
          options: [
            "Let it go to avoid confrontation",
            "Take over the conversation and speak privately with the client later about respectful behavior",
            "Scold the client in front of the trainee",
            "Let the trainee handle it as a learning experience",
          ],
          correct: 1,
          explanation:
            "Protecting your team and maintaining professionalism means addressing the issue — just not publicly.",
        },
        {
          level: "🔴 HARD",
          question:
            "A group booking you managed has a mistake in one traveler's name, and the flight is tomorrow. What do you do?",
          options: [
            "Hope the airline overlooks it",
            "Call the airline immediately to request a name correction and explain the urgency",
            "Cancel the whole group's tickets",
            "Blame the group leader",
          ],
          correct: 1,
          explanation: "Speed and ownership are everything here. Fix what you can fast, no finger-pointing.",
        },
        {
          level: "🔴 HARD",
          question:
            'A high-end client says they were disappointed in the "VIP" experience you arranged. What\'s your best response?',
          options: [
            "Apologize vaguely and move on",
            "Ask what specific expectations weren't met, then offer to follow up with the supplier",
            "Defend the package and say you did your best",
            "Offer them a refund immediately",
          ],
          correct: 1,
          explanation:
            "Listening deeply and seeking accountability shows maturity — and keeps high-value clients feeling heard.",
        },
        {
          level: "🔴 HARD",
          question:
            "A client claims they were misled about a cruise's amenities, but you sent them full details earlier. What now?",
          options: [
            "Point out their mistake directly and move on",
            "Review the communication, then politely remind them of the details while offering a goodwill gesture if needed",
            "Ignore them",
            "Offer a full refund regardless",
          ],
          correct: 1,
          explanation: "Balancing facts with empathy keeps relationships strong — even when you're technically right.",
        },
        {
          level: "🔴 HARD",
          question:
            "Your system crashes during a complex multi-city booking, and you lose the entire session. The client is waiting. What should you do?",
          options: [
            "Panic and apologize repeatedly",
            "Stay calm, inform the client, and start rebuilding the quote step by step with full transparency",
            "Pretend you didn't lose anything",
            "Ask them to come back another day",
          ],
          correct: 1,
          explanation:
            "Grace under pressure is the mark of a pro. Clients remember how you recover more than how you fail.",
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
    if (index === question.correct) {
      setScore((prev) => prev + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQ < currentLevel.questions.length - 1) {
      setCurrentQ((prev) => prev + 1)
      setSelected(null)
      setShowAnswer(false)
    } else {
      // Done with this level
      if (levelIndex < levelData.length - 1) {
        setLevelIndex((prev) => prev + 1)
        setShowIntro(true)
        setCurrentQ(0)
        setSelected(null)
        setShowAnswer(false)
      } else {
        setFinished(true)
      }
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
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4 py-8">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-6 md:p-10 space-y-6">
        <a onClick={handleMenu} className="cursor-pointer font-bold text-blue-700">
          Back to Menu
        </a>

        <div className="flex flex-col items-center space-y-2">
          <img src={image || "/placeholder.svg"} alt="Travel Agent" className="h-32 w-auto rounded-lg shadow-md" />
        </div>

        <h1 className="text-3xl font-extrabold text-blue-800 text-center mb-4">Travel Agent Quiz</h1>

        {finished ? (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-green-700">🎉 You completed the quiz!</h2>
            <p className="text-lg">
              You got <span className="font-bold">{score}</span> out of{" "}
              {levelData.reduce((acc, l) => acc + l.questions.length, 0)} questions correct.
            </p>
            <p className="text-sm text-gray-500 italic">
              {score === levelData.reduce((acc, l) => acc + l.questions.length, 0)
                ? "Perfect score! You're a pro travel planner! 💯"
                : score >= 15
                  ? "Awesome job! You've got what it takes. ✈️"
                  : "Keep going — every great agent starts somewhere! 🌍"}
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
