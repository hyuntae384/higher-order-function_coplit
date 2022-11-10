function lessThan100(number) {
  return number < 100;
}

function getElementsLessThan100AtProperty(obj, property) {
  // TODO: 여기에 코드를 작성합니다.
  //키에 해당하는 값이 배열일 경우
  //100보다 작은 요소들만 갖는 배열 리턴
  if(Array.isArray(obj[property])){
    return obj[property].filter(function(el){
      if(typeof el === 'number'){
        return lessThan100(el);
      }
    })
  } else {
    return [];
  }
  
}
