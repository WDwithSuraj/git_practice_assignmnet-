let str = "madam";
let bag = "";
for (let i = 0; i < str.length; i++) {
  bag += str[i];
}
if (str == bag) {
  console.log("Yes");
} else {
  console.log("No");
}
