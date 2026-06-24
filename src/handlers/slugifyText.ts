import { slugify } from 'transliteration';

const slugifyText = (str: string): string => {
  return slugify(str).replace(/\.+/g, '-');
};

export default slugifyText;
