const student = {
    studNum: 10101,
    grade: 1,
    name: "학생1",
    phoneNum: "010-1231-2342"
};

// JSON이나 멤버변수를 갖는 객체에 대한 반복문
for(let key in student){
    console.log(key);
    console.log(student[key]);
}
