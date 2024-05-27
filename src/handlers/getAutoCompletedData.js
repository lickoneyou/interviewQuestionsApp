import getAllQuestions from './getAllQuestions'

const getAutoCompletedData = () => {
  return getAllQuestions().map((el) => el.title)
}

export default getAutoCompletedData
