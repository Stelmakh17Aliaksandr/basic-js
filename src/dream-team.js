const CustomError = require("../extensions/custom-error");

module.exports =
function createDreamTeam(members) {
  let currentMember,
    resultArr = [],
      result =``;
  if(typeof(members) != "object" || members == null) {
    return false;
  }
  for(i = 0; i < members.length; i++){
    if (typeof(members[i]) == `string`) {
      currentMember = members[i].trimStart()
      resultArr.push(currentMember[0].toUpperCase())
    }
  }
  resultArr.sort(function(a, b){
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
})
for (i =0; i< resultArr.length; i++) {
  result = result+ resultArr[i]
}
  return result;

};

//console.log(createDreamTeam([`Tima`, `Gay`,`genshi`, `null`, null, true, "pohui"]))