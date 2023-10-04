const n = parseInt(prompt("Введіть число від 1 до 50:"));

if (n >= 1 && n <= 50) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    alert(`Факторіал ${n} дорівнює ${factorial}`);
} else {
    alert("Введене число не знаходиться в межах від 1 до 50.");
}