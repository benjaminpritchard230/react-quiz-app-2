import { useState, useEffect } from "react";
import UserAnswersDisplay from "./components/UserAnswersDisplay";

function App() {
  const [questions, setQuestions] = useState([
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
      answer: "Paris",
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
      answer: "Elon Musk",
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
      answer: "Apple",
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
      answer: "7",
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    console.log(userAnswers);
  }, [userAnswers]);

  const handleClick = (answer) => {
    if (answer.isCorrect === true) {
      console.log("correct");
      setScore(score + 1);
    } else {
      console.log("incorrect");
    }
    setUserAnswers([...userAnswers, answer.answerText]);

    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="row">
        {currentQuestion < questions.length ? (
          <div className="col-12 ">
            <h1>{questions[currentQuestion].questionText}</h1>
            <div className="row">
              <div className="col-6">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    handleClick(questions[currentQuestion].answerOptions[0]);
                  }}
                >
                  {questions[currentQuestion].answerOptions[0].answerText}
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    handleClick(questions[currentQuestion].answerOptions[1]);
                  }}
                >
                  {questions[currentQuestion].answerOptions[1].answerText}
                </button>
              </div>
              <div className="col-6">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    handleClick(questions[currentQuestion].answerOptions[2]);
                  }}
                >
                  {questions[currentQuestion].answerOptions[2].answerText}
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    handleClick(questions[currentQuestion].answerOptions[3]);
                  }}
                >
                  {questions[currentQuestion].answerOptions[3].answerText}
                </button>
              </div>
            </div>

            <p>{`Question ${currentQuestion + 1} of ${questions.length}.`}</p>
          </div>
        ) : (
          <div>
            <h1>{`You answered ${score} out of ${questions.length} questions correctly.`}</h1>
            <UserAnswersDisplay
              questions={questions}
              userAnswers={userAnswers}
            />
            <button
              className="btn btn-primary"
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
                setUserAnswers([]);
              }}
            >
              Try again!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
