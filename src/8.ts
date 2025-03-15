const getRandomTSCode = () => {
  const num = Math.random() * 10;
  const str = 'abcdefghijklmnopqrstuvwxyz';
  const randChar = str[Math.floor(num)];
  return randChar;
};
