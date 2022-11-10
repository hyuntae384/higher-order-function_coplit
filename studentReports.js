function studentReports(students) {
  // TODO: 여기에 코드를 작성합니다.
  //남학생들 정보는 제외하는 필터링
  const femaleStd = students.filter(function(el){
    return el.gender === 'female'
  })

  //grade 를 reduce로 평균값을 구하고 매핑으로 수정
  return femaleStd.map(function(el){
    el.grades = el.grades.reduce(function(acc, cur){
      return acc + cur
    }) / el.grades.length
    return el
  })
}
