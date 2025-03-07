async function generateRandomTsCode(): Promise<string> {
  const possibleChars = 'abcdefghijklmnopqrstuvwxyz';
  let randomCode = '';
  for (let i = 0; i < 16; i++) {
    randomCode += possibleChars[Math.floor(Math.random() * possibleChars.length)];
  }
  return randomCode;
}
