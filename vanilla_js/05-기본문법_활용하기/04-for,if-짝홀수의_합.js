let oddSum = 0; // 홀수의 합
let evenSum = 0; // 짝수의 합

// i가 1~10까지 1씩 증가하는 동안 반복
for(let i=1;i<=10;i++){
    if(i % 2 == 0){
        console.log(i + "은/는 짝수");
        evenSum += i;
    }else{
        console.log(i + "은/는 홀수");
        oddSum += i;
    }
}

console.log("1~10까지 홀수들의 합 = " + oddSum);
console.log("1~10까지 짝수들의 합 = " + evenSum);