const UserAnswers = ({ questions }) => {
  const displayUserAnswers = (questions) => {
    const array = [];
    questions.map((question) => {
      return array.push(<p>{question.questionText}</p>);
    });
    return array;
  };
  return <div>{displayUserAnswers(questions)}</div>;
};

export default UserAnswers;
