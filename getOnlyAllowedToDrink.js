function getOnlyAllowedToDrink(arr) {
  // TODO: 여기에 코드를 작성합니다.
  //18세 이상 필터

  const newArr = arr.filter(function(el){
    return el.age >= 18
  })
  // 이름만 출력
  return newArr.map(function(el){
    return el.name
  })
}
