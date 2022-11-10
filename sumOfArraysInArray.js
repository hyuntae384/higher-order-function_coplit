function sumOfArraysInArray(arr) {
  // TODO: 여기에 코드를 작성합니다.
  //1차원 배열로 변경
  const Arr1 = arr.reduce(function(acc, cur){
    return acc.concat(cur)
  });
  
  //num타입만 취하기
  const Arr2 = Arr1.filter(function(el){
    return typeof el === 'number'
  })
  //reduce로 합계 구하기
  return Arr2.reduce(function(acc, cur){
    return acc + cur
  },0)
}
