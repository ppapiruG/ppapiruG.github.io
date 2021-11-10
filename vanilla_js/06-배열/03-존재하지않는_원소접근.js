// 100이라는 하나의 원소를 갖는 한 칸으로 구성된 배열
let myArr = [100];

// 0번째 원소를 변수에 할당하고 출력 -> ok
let item01 = myArr[0];
console.log(item01);

// 100번째 원소를 변수에 할당하고 출력 -> fail
// myArr은 1개의 원소를 갖기 때문에 인덱스 번호는 0만 존재함.
let item02 = myArr[100];
console.log(item01);

if(item02 !== undefined){
    console.log("100번째 원소 존재함");
}else{
    console.log("100번째 원소 존재하지 않음");
}