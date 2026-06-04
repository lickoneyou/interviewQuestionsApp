import data from '../data/data';

import { Data, DataItemWithStack } from '../types';

const getAllQuestions = () => {
  const result: DataItemWithStack[] = [];

  for (const key in data) {
    const currentData: Data = data[key as keyof typeof data];

    for (const i in currentData) {
      result.push({...currentData[i as keyof typeof currentData], stack: key});
    }
  }

  return result;
};

export default getAllQuestions;
