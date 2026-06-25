import getAllQuestions from './getAllQuestions';
import slugifyText from './slugifyText';

const getQuestionIndex = (id: string, stack: string) => {
  const questions = getAllQuestions();

  return questions.findIndex((question) => {
    return question.id === id && slugifyText(question.stack) === stack;
  });
};

export default getQuestionIndex;
