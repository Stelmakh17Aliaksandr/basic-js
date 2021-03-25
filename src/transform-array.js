const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
let newArr =[],
    result = [];
  for (i = 0 ; i < arr.length; i++) {
    switch (arr[i]) {
      case undefined:
        break;
      case `--discard-next`:

        arr[i+1] = undefined

        break;
      case `--discard-prev`:
        newArr.splice(newArr.length-1)
        break;
      case `--double-next`:
        if(arr[i+1] == undefined) {
          break;
        }
        newArr.push(arr[i+1])
        break;
      case `--double-prev`:
        if(arr[i-1] == undefined) {
          break;
        }
        newArr.push(arr[i-1])
        break;
      default:

         newArr.push(arr[i])
         break;
    }
  }
  return newArr

};

