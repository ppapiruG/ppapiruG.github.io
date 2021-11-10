const k = 10;

// k의 범위를 결정하는 조건문
// -> k를 2~9사이로 제한
if(k>1 && k<10){
    for(let i =1; i<10; i++){
        console.log(k + " x " + i + " = " + (k*i));
    }
}else{
    console.log("2~9 사이의 곱셈만 출력합니다.");
}