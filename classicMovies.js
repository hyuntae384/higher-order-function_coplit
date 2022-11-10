function classicMovies(arr, year) {
  // TODO: 여기에 코드를 작성합니다.
  //해당 연도 이전 영화를 갖는 요소들로만 필터링

  const AfterYear = arr.filter(function(el){
    return el.year < year
  })
  //형태 변형해서 출력
  return AfterYear.map(function(el){
    return `${el.title} by ${el.director}`
  })
}
