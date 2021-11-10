/** 1) 다른 JSON 객체를 value로 포함하는 경우 */

// 단일 형태의 JSON
var centerPoint = {
    x : 5, // x좌표
    y : 10 // y좌표
};

// 다른 JSON을 포함하는 JSON
var circle01 = {
    center : centerPoint, // 중심의 좌표
    radius : 5.10 // 반지름
};

console.group("circle01");
console.log("원의 중점 : (%d, %d)", circle01.center.x, circle01.center.y);// %d : decimal (정수로 변환)
console.log("원의 반지름 : %d", circle01.radius);
console.groupEnd();

/** 2) 계층적으로 정의된 경우 */
var circle02 = {
    center : {
        center : {
            x:5,
            y:10
        },
    },
    radius:5.10
};

console.group("circle02");
console.log("원의 중점 : (%d, %d)", circle02.center.x, circle02.center.y);
console.log("원의 반지름 : %d", circle02.radius);
console.groupEnd();