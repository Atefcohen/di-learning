let pattern = "";

for (let i = 1; i <= 6; i++) {
    pattern += "*".repeat(i) + "\n";
}
console.log(pattern);

pattern = "";

for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    pattern += "\n";
}
console.log(pattern);