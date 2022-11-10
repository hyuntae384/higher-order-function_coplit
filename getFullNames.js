function getFullNames(arr) {
  // TODO: 여기에 코드를 작성합니다.
  return arr.map(function(el){
    return `${el.firstName} ${el.lastName}`
  });
}
