import data from '../data/data';

import { Data, DataItem } from '../types';

const getAllQuestions = () => {
  const result: DataItem[] = [];

  for (const key in data) {
    const currentData: Data = data[key as keyof typeof data];

    for (const i in currentData) {
      result.push(currentData[i as keyof typeof currentData]);
    }
  }

  return result;
};

export default getAllQuestions;
