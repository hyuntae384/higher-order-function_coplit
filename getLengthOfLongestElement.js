function getLengthOfLongestElement(arr) {
  // 여기에 코드를 입력하세요
  return arr.reduce(function(acc, cur){
    if(acc.length < cur.length){
      return cur
    } else {
      return acc
    }
  }, '').length
}
