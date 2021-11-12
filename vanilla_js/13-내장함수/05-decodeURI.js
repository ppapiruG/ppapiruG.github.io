/**
 * decodeURI(string)
 * 
 * encodeURI로 변환된 문자열을 원래의 문자열로 해석한다.
 */

var set1 = ';,/?:@&=+$#'; // 예약 문자
var set2 = "-_.!~*'()"; // 비예약 표식
var set3 = 'ABC abc 123'; // 알파벳 및 숫자, 공백
var set4 = "자바스크립트";

console.log(encodeURI(set1));
console.log(encodeURI(set2));
console.log(encodeURI(set3));
console.log(encodeURI(set4));

console.log(decodeURI(set1));
console.log(decodeURI(set2));
console.log(decodeURI(set3));
console.log(decodeURI(set4));
