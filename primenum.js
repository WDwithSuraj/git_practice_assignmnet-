let num = 7;
let count = 0;
for (i = 1; i <= num; i++) {
  if (num % 1 == 0) {
    count++;
  }
}
if (count == 2) {
  console.log(num, "is a prime number");
} else {
  console.log(num, "is not a prime number");
}
