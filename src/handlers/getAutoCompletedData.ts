import getAllQuestions from './getAllQuestions';

const getAutoCompletedData = (): string[] => {
  const question = getAllQuestions();
  
  return question.map((question) => `${question.title} (${question.stack})`);
};

export default getAutoCompletedData;
