const titleCase = (sentence) => {
  const words = sentence.split(' ');

  const capitalisedSentence = words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(' ');

  return capitalisedSentence;
};

export default titleCase;
