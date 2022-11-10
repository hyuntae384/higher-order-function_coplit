function pipe(...func) {
  // TODO: 여기에 코드를 작성합니다.
  return function(num){
    let result = num;
    for(let i=0; i < func.length; i++){
      num = func[i](result)
    }
    return num;
  }
}
