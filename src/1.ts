import { ts } from 'ts';

const tsCode = `
interface User {
  name: string;
}

function greet(user: User) {
  console.log(\`Hello, \${user.name}!\`);
}

greet({ name: "Alice" }); // prints 'Hello, Alice!'
`;

export default tsCode;