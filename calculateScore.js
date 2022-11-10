function calculateScore(records, value) {
  // TODO: Your code here!
  // 각 요소의 animal 속성값이 문자열과 일치할 경우
  const newRecords = records.filter(function(el){
    return el.animal === value
  })
  //해당 요소의 score 속성값을 모두 더한 값을 리턴
  return newRecords.reduce(function(acc, cur){
    return acc + cur.score
  },0);
}
