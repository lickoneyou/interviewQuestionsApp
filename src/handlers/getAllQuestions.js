import data from '@/data/data'

const getAllQuestions = () => {
  const res = []
  for (const key in data) {
    const curData = data[key]
    for (const i in data[key]) {
      res.push(curData[i])
    }
  }
  return res
}

export default getAllQuestions
