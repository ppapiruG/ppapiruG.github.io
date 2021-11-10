/**
 * 예제코드 중간중간 에러가 발생하는 코드가 포함되어 있음
 * 에러 발생시 그 이후의 코드는 실행하지 않으므로
 * Code Runner를 사용할 경우 실행하고자 하는 부분만 드래그 한 상태로 실행할 것!
 */

/** 1) var 중복 선언 */
if(false){
    var num1 = 100;
    console.log("블록 안: "+ num1);
}

// if문의 실행 여부에 따라 num1이 선언되므로
// if문의 실행 여부에 num1의 식별 가능 여부가 결정됨
// num1을 식별하지 못할 경우 정의되지 않은 값(undefined)가 된다.
console.log("블록 밖 : " + num1);

/** 2) let 중복 선언 */
if(true){
    let num2 = 100;
    console.log("블록 안 : " + num2);
}

// let으로 선언된 변수는 if문의 실행 여부와 상관 없이 블록을 빠져나올 수 없다.
// --> 프로그램 에러
console.log("블록 밖 : " + num2);

/** 3) for문의 초기식을 var로 선언한 경우 */
for(var i =0;i<10;i++){
    console.log("반복문 안 ::: "+ i);
}
console.log("반복문 안 ::: "+ i);

/** 4) for문의 초기식을 let으로 선언한 경우 */
for(let j = 0; j<10; j++){
    console.log("반복문 안 ::: " + j);
}

// for 문의 초기식도 {}에 속한 것으로 보기 때문에 j값은 for 블록을 빠져나올 수 없다.
console.log("반복문 밖 >>> " + j);

/** 5) 선언되지 않은 변수의 경우 */ // 중요★ let과 var의 차이
// let 키워드는 반드시 선언 -> 할당의 순서로만 사용 가능함.
x = 100; // 할당
let x; //선언
console.log(x);

//var 키워드는 할당 후 선언이 가능함
y =200;
var y;
console.log(y);