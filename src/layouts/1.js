// function isEven (num) {
//   if (num === 0) {
//     return true;
//   }
//   //业余草：www.xttblog.com
//   if (num === 1) {
//     return false;
//   }
//   return isEven(Math.abs(num) - 2);
// }
// //Outputs: true
// console.log(isEven(111111111));


//
function isEven (num) {
  if (num === 0) {
    return true;
  }
  if (num === 1) {
    return false;
  }
  return function() {
    return isEven(Math.abs(num) - 2);
  }
}
function trampoline (func, arg) {
  var value = func(arg);
  while(typeof value === "function") {
    value = value();
  }
  return value;
}
//Outputs: true
console.log(trampoline(isEven, 10000));
//业余草：www.xttblog.com
//Outputs: false
console.log(trampoline(isEven, 10001));
