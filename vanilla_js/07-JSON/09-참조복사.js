/** 값 복사 --> 일반 변수끼리의 복사 */
let a = 100;
let b = a;
console.log("a = " + a + ", b = " + b);

// 일반 변수끼리 복사한 경우 원본이 변경되면 복사본에는 영향이 없다.
a++;
console.log("a = " + a + ", b = " + b);

/** 참조복사 (= 얕은복사) */
// 배열, JSON, 객체 끼리의 복사는 참조처리 된다.
// 원본을 수정하면 복사본도 함께 수정된다. (반대의 경우도 마찬가지)
const user = {
    name : "Lee"
};

const memeber = user;
console.log(user);
console.log(memeber);

memeber.name = "Kim";
console.log(user);
console.log(memeber);

const d1 = [1,2,3];
const d2 = d1;
console.log(d1);
console.log(d2);

d1[0] += 10;
d1[1] += 10;
d1[2] += 10;
console.log(d1);
console.log(d2);

class Test {
    constructor(){
        this.data = null;
    }
}

const t1 = new Test();
t1.data = "hello";
console.log(t1);

const t2 = t1;
t2.data = "world";
console.log(t1);
console.log(t2);

/** 배열끼리의 값복사 방법(=깊은복사) */
const a1 = [1,2,3];

// 원본과 동일한 길이를 갖는 배열을 생성
const a2 = new Array(a1.length);

// 배열을 온전히 값복사하기 위해서는 원소끼리 개별복사 해야 함
for(let i = 0; i<a1.length; i++){
    a2[i] = a1[i];
}

// 배열객체가 갖는 메서드를 활용한 깊은 복사 방법
const a3 = a1.slice();

