function filterCallback(func, arr) {
  // TODO: 여기에 코드를 작성합니다.
  //배열을 각 요소에 함수를 적용
  //참인 요소만 새로운 배열을 리턴
  
  const newArr = [];
  for(let i=0; i<arr.length; i++){
    let data = func(arr[i])
    if(data){
      newArr.push(arr[i])
    }
  }
  return newArr;
}
