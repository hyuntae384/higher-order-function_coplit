function mapCallback(func, arr) {
  // TODO: 여기에 코드를 작성합니다.
  //배열을 입력받아 각 요소별로 func실행하여 새로운 배열 리턴
  const newArr =[];
  for(let i=0; i<arr.length; i++){
    newArr.push(func(arr[i]));
  }
  return newArr;
}
