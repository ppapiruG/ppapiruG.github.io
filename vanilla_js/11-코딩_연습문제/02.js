var grade = [75, 82, 91];
var sum = 0;
var avg = 0;

// 총점 구하기
for(let i = 0; i<grade.length;i++){
    sum += grade[i];
}

// 평균 구하기
avg = sum / grade.length;

// arr 값을 소수점 둘째 자리까지로 제한한다.
avg = avg.toFixed(2);
console.log("총점 : " + sum + "점, 평균점수 : " + avg + "점");