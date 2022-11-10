function callbackOnly(callback, response) {
  // TODO: 여기에 코드를 작성합니다.
  //status 가 success인지 확인
  if(response.status === 'success'){
    //맞으면 callback함수 실행
    return callback(response.data);
  } else {
    return 'something went wrong!'
  }
  

  //fail이면 somethinf~ 출력

}