import getAllQuestions from './getAllQuestions';

const getQuestionIndex = (id: string) => {
  const questions = getAllQuestions();

  return questions.findIndex((question) => question.id === id);
};

export default getQuestionIndex;
