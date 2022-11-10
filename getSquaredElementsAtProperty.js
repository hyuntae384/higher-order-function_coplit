function square(number) {
  return number * number;
}

function getSquaredElementsAtProperty(obj, property) {
  // TODO: 여기에 코드를 작성합니다.
  //키에 해당하는 값이 배열인지 확인
  if(Array.isArray(obj[property])){
    return obj[property].map(square)
  } else {
    return [];
  }
  //배열이 맞으면 각 요소를 제곱한 새로운 배열 리턴

}
