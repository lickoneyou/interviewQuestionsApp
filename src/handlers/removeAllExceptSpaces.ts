const removeAllExceptSpaces = (str: string): string => {
  return str.replace(/[^ ]/g, '');
};

export default removeAllExceptSpaces;
