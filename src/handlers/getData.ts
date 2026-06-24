import type { FullData } from '../types';
import slugifyText from './slugifyText';

const getData = (id: string, data: FullData, course: string) => {
  for (const iterator in data) {
    const currentData = data[iterator];
    if (slugifyText(iterator) === course) {
      for (const key in currentData) {
        const item = currentData[key];

        if (item?.id === id) {
          return { [key]: currentData[key as keyof typeof currentData] };
        }
      }
    }
  }
};

export default getData;
