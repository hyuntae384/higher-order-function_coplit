function filterOddLengthWords(words) {
  // TODO: 여기에 코드를 작성합니다.
  //문자열의 길이가 홀수인 요소만 갖는 배열로 리턴
  return words.filter(function(el){
    return el.length % 2 !== 0;
  })
}
