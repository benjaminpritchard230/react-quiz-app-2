const UserAnswersDisplay = ({ questions, userAnswers }) => {
  const displayUserAnswers = (questions) => {
    const array = [];
    questions.map((question, index) => {
      const questionDisplay = question.questionText;
      const answerDisplay = userAnswers[index];
      return array.push(
        <>
          <b>
            <p>{questionDisplay}</p>
          </b>
          <p
            style={
              question.answer === userAnswers[index]
                ? { color: "green" }
                : { color: "red" }
            }
          >{`Your answer: ${answerDisplay}`}</p>
        </>
      );
    });
    return array;
  };
  return <div>{displayUserAnswers(questions)}</div>;
};

export default UserAnswersDisplay;
