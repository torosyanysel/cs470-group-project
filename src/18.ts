function calculateBMI(height: number, weight: number): number {
  const bmi = weight / Math.pow(height / 100, 2);
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal";
  } else {
    return "Overweight";
  }
}

console.log(calculateBMI(68, 70));
