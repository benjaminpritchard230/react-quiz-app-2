const UserAnswersDisplay = ({ questions, userAnswers }) => {
  const displayUserAnswers = (questions) => {
    const array = [];
    questions.map((question, index) => {
      const questionDisplay = question.questionText;
      const answerDisplay = userAnswers[index];
      let correctAnswer = false;
      if (question.answer === userAnswers[index]) {
        correctAnswer = true;
      }
      return array.push(
        <>
          <b>
            <p>
              {questionDisplay}{" "}
              {correctAnswer ? "" : `Correct answer: ${question.answer}.`}
            </p>
          </b>
          <p style={correctAnswer ? { color: "green" } : { color: "red" }}>
            {`Your answer: ${answerDisplay}`}{" "}
            {correctAnswer ? "\u2713" : "\u00d7"}
          </p>
        </>
      );
    });
    return array;
  };
  return <div>{displayUserAnswers(questions)}</div>;
};

export default UserAnswersDisplay;
