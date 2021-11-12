/** 학생이름 배열 */
const student = ['둘리', '도우너', '또치', '희동'];
    
/** 성적표 배열 */
const grade = [
        [ 78, 89, 96 ],
        [ 62, 77, 67 ],
        [ 54, 90, 80 ],
        [ 100, 99, 98 ],
];

// 총점과 평균점수를 저장할 변수
let sum = 0, avg = 0, totalAvg =0, totalSum =0;

/** 총점과 평균 구하기 */
for (let i=0; i<grade.length; i++) {
    sum = 0;

    for (let j=0; j < grade[i].length; j++) {
        sum += grade[i][j];
    }

    avg = sum/grade[i].length;

    totalSum += avg;
    avg = avg.toFixed(2);
    
}

totalAvg = totalSum / student.length;
totalAvg = totalAvg.toFixed(2);
console.log("P반의 평균 점수 : " + totalAvg + "점");