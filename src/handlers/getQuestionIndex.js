import getAllQuestions from "./getAllQuestions"

const getQuestionIndex = (id) => {
  return getAllQuestions().findIndex((el) => el.id == id)
}

export default getQuestionIndex
