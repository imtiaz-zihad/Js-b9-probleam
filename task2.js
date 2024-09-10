function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid";
  }
  let lastLetter = name.slice(-1).toLowerCase();
  let checkArray = ["a", "e", "y", "i", "o", "u", "w"];
  //   console.log(lastLetter);
//   let result = false;
  

//   for (const char of checkArray) {
//     if (char === lastLetter) {
//       result = true;
//     }
//   }
let result =checkArray.includes(lastLetter)
  return result ? "Good name" : "Bad Name";
}

console.log(checkName("salmaE"));
console.log(checkName(5));
