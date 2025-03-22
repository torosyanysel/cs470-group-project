function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    } else {
        const previous = 0;
        const current = 1;
        for (let i = 2; i < n; i++) {
            [previous, current] = [current, previous + current];
        }
        return current;
    }
}

console.log(fibonacci(10)); // Output: 55
