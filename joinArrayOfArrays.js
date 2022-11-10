function joinArrayOfArrays(arr) {
  // TODO: 여기에 코드를 작성합니다.
const newArr = [];
const reducedArr = arr.reduce(function(acc1, cur1){
  return cur1.reduce(function(acc2, cur2){
    return newArr.push(cur2)
  },0)
},0)
return newArr
}
