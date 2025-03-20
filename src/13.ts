interface User {
  name: string;
  age: number;
}

function greetUser(user: User) {
  console.log(`Hello, ${user.name}! You are ${user.age}.`);
}

greetUser({ name: "Alice", age: 30 });
