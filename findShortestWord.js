function findShortestWord(arr) {
  // TODO: 여기에 코드를 작성합니다.
  const filteredArr = arr.filter(function(el){
    return typeof el === 'string'
  })

  if(filteredArr.length === 0){return '';}
  return filteredArr.reduce(function(acc, cur){
    if(acc.length > cur.length){
      return cur
    } else{
      return acc
    }
  })
}
