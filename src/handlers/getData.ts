import type { FullData } from '../types';

const getData = (id: string, data: FullData) => {

  for (const iterator in data) {
    const currentData = data[iterator];

    for (const key in currentData) {
      const item = currentData[key];

      if (item?.id === id) {
        return { [key]: currentData[key as keyof typeof currentData] };
      }
    }
  }
};

export default getData;
