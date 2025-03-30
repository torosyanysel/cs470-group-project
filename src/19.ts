let x = 10;
console.log(x);

function addNumbers(a: number, b: number): number {
    let result = a + b;
    console.log(result);
    return result;
}

addNumbers(5, 3); // Output: 8

function printArray(arr: any[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Element at index ${i}: ${arr[i]}`);
    }
}

printArray([1, 2, 3]); // Output: 1
