const getData = (id, data) => {
  for (const iterator in data) {
    const curData = data[iterator]
    for (const key in curData) {
      if (curData[key]?.id == id) {
        return { [key]: curData[key] }
      }
    }
  }
}

export default getData
