class MyClass {
  private _value: number;

  constructor(value: number) {
    this._value = value;
  }

  getValue(): number {
    return this._value;
  }
}

// Usage example
const myClassInstance = new MyClass(10);
console.log(myClassInstance.getValue()); // Output: 10
