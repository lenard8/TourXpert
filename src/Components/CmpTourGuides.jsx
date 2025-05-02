"use client"

import { useState } from "react"
import image from "/tour-guide.png"
import { useNavigate } from "react-router-dom"

export const CmpTourGuides = () => {
  const navigate = useNavigate()

  const levelData = [
    {
      title: "𝗟𝗲𝘃𝗲𝗹 𝟭: 𝗘𝗮𝘀𝘆 𝗥𝗼𝘂𝗻𝗱",
      intro: "Let's warm up! Time to get familiar with the basics.",
      desc: "This level introduces simple, real-world scenarios to help you build confidence and foundational decision-making skills.",
      questions: [
        {
          level: "🟢 EASY",
          question: "A tourist in your group keeps walking ahead of the others. What's the best response?",
          options: [
            "Call them out in front of the group",
            "Let them go since they're fast",
            "Remind the group, including them, to stay together for safety",
            "Ignore it unless someone complains",
          ],
          correct: 2,
          explanation: "This avoids confrontation but still reasserts safety and group unity. No shame, just guidance.",
        },
        {
          level: "🟢 EASY",
          question:
            "Someone asks you a question about the landmark you haven't researched well. What's the best response?",
          options: [
            "Make up something that sounds smart",
            'Say "I\'m not sure" and promise to find the answer',
            "Redirect the question to another tourist",
            "Laugh it off and ignore it",
          ],
          correct: 1,
          explanation: "Honesty + curiosity = trust + growth. Guests respect that more than fake answers.",
        },
        {
          level: "🟢 EASY",
          question: "A guest in your group seems bored and uninterested. What's the best response?",
          options: [
            "Ignore them—they're not your responsibility",
            "Loudly ask if they're enjoying the tour",
            "Shorten the tour to get it over with",
            "Casually check in and ask if there's something they're hoping to see",
          ],
          correct: 3,
          explanation: "A personal touch can re-engage them without making it awkward. Shows care and professionalism.",
        },
        {
          level: "🟢 EASY",
          question: "It starts raining unexpectedly during your outdoor tour. What's the best move?",
          options: [
            "Complain about the weather with the group",
            "Cancel the rest of the tour",
            "Find a sheltered area and adjust your route as needed",
            "Keep going like nothing is happening",
          ],
          correct: 2,
          explanation: "Flexibility keeps things smooth and shows you're prepared, even when nature isn't.",
        },
        {
          level: "🟢 EASY",
          question: "A child in the group is acting out and disrupting the tour. What should you do?",
          options: [
            "Ask the parent to control their child immediately",
            "Get angry and ask them to leave",
            "Try to engage the child with a fun question or task",
            "Stop the tour until they quiet down",
          ],
          correct: 2,
          explanation: "Inclusion often diffuses energy and turns a distraction into a connection.",
        },
        {
          level: "🟢 EASY",
          question:
            "One of the tourists is consistently straying during stops to take long photos. What's your best approach?",
          options: [
            "Tell them they're slowing everyone down",
            "Ask the group to wait longer each time",
            "Privately ask them to stay with the group and assure photo time later",
            "Stop mentioning it—they'll catch up",
          ],
          correct: 2,
          explanation: "Keeps the group moving and the individual happy without shaming them.",
        },
        {
          level: "🟢 EASY",
          question: "You realize you skipped an important stop on the tour. What do you do?",
          options: [
            "Pretend it was never part of the plan",
            "Apologize and offer to loop back or explain it briefly on the spot",
            "Blame time constraints",
            "Wait and see if anyone notices",
          ],
          correct: 1,
          explanation: "Transparency plus action shows integrity and care for the guest experience.",
        },
        {
          level: "🟢 EASY",
          question: "A guest is struggling to understand your English. What's the best action?",
          options: [
            "Slow down and use gestures or simpler words",
            "Ask someone else to translate",
            "Repeat everything louder",
            "Ignore them to avoid slowing the group",
          ],
          correct: 0,
          explanation: "Clear, kind communication builds inclusion—and respect.",
        },
        {
          level: "🟢 EASY",
          question: "One guest is dominating the conversation and asking constant questions. What do you do?",
          options: [
            "Let them talk—it's less work for you",
            "Snap at them to stop interrupting",
            "Politely thank them, then suggest saving questions for the end or breaks",
            "Just skip the next few talking points",
          ],
          correct: 2,
          explanation: "Balances engagement with flow. You stay respectful while keeping things on track.",
        },
        {
          level: "🟢 EASY",
          question: "You're running behind schedule but the group is enjoying a site. What's your best move?",
          options: [
            "Rush them along without explanation",
            "Let them take their time and cut something else later",
            "Ask the group if they'd prefer more time here and adjust accordingly",
            "Skip the next location without telling them",
          ],
          correct: 2,
          explanation: "Empowering guests makes them feel valued. Flexibility = good leadership.",
        },
      ],
    },
    {
      title: "𝗟𝗲𝘃𝗲𝗹 𝟮: 𝗔𝘃𝗲𝗿𝗮𝗴𝗲 𝗥𝗼𝘂𝗻𝗱",
      intro: "Nice work finishing Level 1! Ready to raise the bar?",
      desc: "Now you'll face moderately challenging situations that test your instincts, empathy, and time management.",
      questions: [
        {
          level: "🟡 AVERAGE",
          question:
            "You're running late for the next stop and a tourist wants to take extra photos. How should you handle it?",
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
          question:
            "During your cultural explanation, one guest makes an insensitive joke about a tradition. What's your best move?",
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
          level: "🟡 AVERAGE",
          question: "A guest keeps interrupting your explanations with unrelated stories. How should you respond?",
          options: [
            "Tell them to stop interrupting",
            "Let them speak to avoid conflict",
            "Acknowledge them briefly, then steer the group back on topic",
            "Ignore them completely",
          ],
          correct: 2,
          explanation:
            "It keeps the tone respectful while maintaining group focus. You're managing both ego and energy.",
        },
        {
          level: "🟡 AVERAGE",
          question: "You notice one guest seems unwell but hasn't said anything. What's the right action?",
          options: [
            "Wait to see if they say something",
            "Ask them loudly in front of everyone if they're okay",
            "Check in quietly and offer help or a short break if needed",
            "Pretend not to notice to avoid slowing the tour",
          ],
          correct: 2,
          explanation: "Subtle, thoughtful care builds trust and ensures safety without embarrassing anyone.",
        },
        {
          level: "🟡 AVERAGE",
          question: "Two guests are arguing about something unrelated to the tour. What should you do?",
          options: [
            "Let them handle it themselves",
            "Step in, calm them down, and suggest continuing the tour",
            "Ask them both to leave the group",
            "Ignore it unless it gets physical",
          ],
          correct: 1,
          explanation: "Your job includes group harmony. Calm redirection shows leadership without escalating tension.",
        },
        {
          level: "🟡 AVERAGE",
          question: "A guest keeps asking personal questions that make you uncomfortable. What's the best move?",
          options: [
            "Answer briefly to be polite",
            "Joke your way out of it",
            "Set a polite boundary and shift the topic back to the tour",
            "Walk away mid-conversation",
          ],
          correct: 2,
          explanation:
            "Professionalism means setting limits with grace. You stay in control while protecting your space.",
        },
        {
          level: "🟡 AVERAGE",
          question: "A tourist questions your facts in front of everyone. What should you do?",
          options: [
            "Defend yourself and argue back",
            "Admit they might be right without checking",
            "Acknowledge their comment, offer to verify later, and keep the tour moving",
            "Ignore them and move on",
          ],
          correct: 2,
          explanation: "Confidence + humility builds credibility. You're open to feedback but still lead with calm.",
        },
        {
          level: "🟡 AVERAGE",
          question: "You realize you forgot to bring a key prop or visual aid. What do you do?",
          options: [
            "Apologize and skip that part",
            "Blame the company or other staff",
            "Adapt by describing it vividly or using another object",
            "Pretend you didn't plan to use anything",
          ],
          correct: 2,
          explanation: "Great guides improvise. Your ability to keep the experience alive matters more than the tool.",
        },
        {
          level: "🟡 AVERAGE",
          question: "A guest is constantly on their phone, ignoring the experience. What's the best way to handle it?",
          options: [
            "Call them out in front of the group",
            "Say nothing—it's their loss",
            "Make the tour more engaging to draw their attention back",
            "Ask them to put their phone away",
          ],
          correct: 2,
          explanation: "Winning attention through value is better than scolding. It lifts the whole group vibe, too.",
        },
        {
          level: "🟡 AVERAGE",
          question: "The weather suddenly changes and your planned route is no longer safe. What's your best response?",
          options: [
            "Push through anyway to stick to the plan",
            "Cancel the tour",
            "Quickly assess alternatives and calmly guide the group through the new plan",
            "Ask the group to decide what to do",
          ],
          correct: 2,
          explanation:
            "Confidence and adaptability under pressure earn trust. You're the expert—they follow your lead.",
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
            "A couple in your group starts arguing loudly during the tour. It's affecting the group vibe. What should you do?",
          options: [
            "Interrupt them and tell them to stop",
            "Continue the tour and ignore it",
            "Find a moment to approach privately, check if they're okay, and offer space if needed",
            "Ask the group if they're bothered, then take a vote on whether to address it",
          ],
          correct: 2,
          explanation:
            "You stay non-confrontational, show empathy, and avoid public embarrassment — but you don't ignore it either. True professionalism = calm intervention without drama.",
        },
        {
          level: "🔴 HARD",
          question:
            "A guest accuses you of favoritism, claiming you give more attention to others. What's your best move?",
          options: [
            "Deny it and say they're imagining things",
            "Apologize immediately and avoid them for the rest of the tour",
            "Listen calmly, thank them for the feedback, and make a conscious effort to engage everyone equally moving forward",
            "Laugh it off and change the subject",
          ],
          correct: 2,
          explanation: "You don't have to agree, but listening with openness diffuses tension and shows maturity.",
        },
        {
          level: "🔴 HARD",
          question:
            "Your bus driver suddenly tells you there's an unexpected road closure, cutting off the next major stop. What should you do?",
          options: [
            "Blame the driver and apologize to the group",
            "Announce the change and offer an alternative stop, keeping energy positive",
            "Panic and say you'll figure it out later",
            "Ask the group to wait in silence while you make calls",
          ],
          correct: 1,
          explanation: "Solutions > excuses. Your tone sets the tone. Flexibility and composure are key.",
        },
        {
          level: "🔴 HARD",
          question: "A local vendor claims one of your guests damaged something and demands payment. What do you do?",
          options: [
            "Tell the vendor to speak directly to the guest",
            "Side with the guest and walk away",
            "Stay neutral, listen to both sides, and mediate respectfully",
            "Pay the vendor yourself and ask for reimbursement later",
          ],
          correct: 2,
          explanation: "You represent the group—but also the destination. Mediation shows leadership and diplomacy.",
        },
        {
          level: "🔴 HARD",
          question: "One guest keeps wandering off despite repeated reminders. What's your best course of action?",
          options: [
            "Pull them aside, express concern firmly, and explain the risk to themselves and the group",
            "Leave them behind next time as a warning",
            "Yell at them in front of everyone",
            "Assign another guest to watch them",
          ],
          correct: 0,
          explanation:
            "Direct, respectful confrontation when necessary keeps everyone safe. Being firm can still be kind.",
        },
        {
          level: "🔴 HARD",
          question:
            "You accidentally mispronounce something culturally important and a local corrects you in front of the group. How should you respond?",
          options: [
            "Say it doesn't really matter",
            "Thank them, correct yourself, and turn it into a learning moment",
            "Get defensive and explain your version",
            "Make a joke to lighten the mood",
          ],
          correct: 1,
          explanation: "Owning your mistake with grace builds trust and shows cultural respect. Everyone wins.",
        },
        {
          level: "🔴 HARD",
          question:
            "A guest starts filming other tourists and locals without consent, making people uncomfortable. What should you do?",
          options: [
            "Tell them to stop immediately in front of everyone",
            "Say nothing—it's not your business",
            "Take them aside and explain the importance of privacy and cultural respect",
            "Ask the group how they feel about being filmed",
          ],
          correct: 2,
          explanation:
            "You're a bridge between guests and local norms. Quiet correction avoids conflict but upholds values.",
        },
        {
          level: "🔴 HARD",
          question: "A VIP in the group demands special treatment that disrupts your plan. What's the best move?",
          options: [
            "Say no—rules are rules",
            "Give them what they want to avoid complaints",
            "Let the group vote",
            "Respectfully explain the structure, offer small flexibility without compromising the group",
          ],
          correct: 3,
          explanation: "Balancing individual needs with group flow shows leadership, not favoritism.",
        },
        {
          level: "🔴 HARD",
          question: "A fellow guide gives your group incorrect info in front of you. How should you respond?",
          options: [
            "Correct them immediately and assert your knowledge",
            "Stay quiet to avoid conflict",
            "Politely clarify the correct info after they leave",
            "Laugh it off with the group",
          ],
          correct: 2,
          explanation: "Professionalism includes loyalty to truth without causing drama or public embarrassment.",
        },
        {
          level: "🔴 HARD",
          question: "A guest on your tour has lost something valuable and blames you. What should you do?",
          options: [
            "Defend yourself and say it's not your fault",
            "Apologize for their loss and help retrace steps",
            "Ask other guests if they've seen it",
            "Tell them to file a complaint with the office",
          ],
          correct: 1,
          explanation:
            "Even if you're not at fault, empathy and action are part of great service. They'll remember how you handled it.",
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
      {" "}
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-6 md:p-10 space-y-6">
        {" "}
        <a onClick={handleMenu} className="cursor-pointer font-bold text-blue-700">
          Back to Menu{" "}
        </a>
        <div className="flex flex-col items-center space-y-2">
          <img src={image || "/placeholder.svg"} alt="Tour Guide" className="h-32 w-auto rounded-lg shadow-md" />
        </div>
        <h1 className="text-3xl font-extrabold text-blue-800 text-center mb-4">Tour Guide Quiz</h1>
        {finished ? (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-green-700">🎉 You completed the quiz!</h2>
            <p className="text-lg">
              You got <span className="font-bold">{score}</span> out of{" "}
              {levelData.reduce((acc, l) => acc + l.questions.length, 0)} questions correct.
            </p>
            <p className="text-sm text-gray-500 italic">
              {score === levelData.reduce((acc, l) => acc + l.questions.length, 0)
                ? "Perfect score! You're a certified tour pro! 💯"
                : score >= 3
                  ? "Great job! You're well on your way. 👏"
                  : "Keep practicing — you've got this! 💪"}
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
            <p className="text-lg italic text-gray-700">“{currentLevel.intro}”</p>
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
