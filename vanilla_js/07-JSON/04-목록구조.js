/** 목록의 아이템으로 사용될 JSON 객체 정의하기 */
const student01 = {
    studNum : 10101,
    grade: 1,
    name: "학생01"
};

const student02 = {
    studNum : 20202,
    grade: 2,
    name: "학생02"
};

/** 목록 구조를 갖는 JSON 객체 */
const classRoom = {
    student: [student01, student02]
};
console.log(classRoom);

/** 배열의 기본 특성을 활용하여 반복문으로 접근할 수 있다. */
for(let i = 0;i<classRoom.student.length;i++){
    console.group(i + "번째 학생");
    console.log(" >> 학번 : " + classRoom.student[i].studNum);
    console.log(" >> 학년 : " + classRoom.student[i].grade);
    console.log(" >> 이름 : " + classRoom.student[i].name);
    console.groupEnd();
}
