function getLongestElement(arr) {
  // TODO: 여기에 코드를 작성합니다.
  return arr.reduce(function(acc, cur){
    if(acc.length < cur.length){
      return cur
    } else {
      return acc
    }
  }, '')
}
