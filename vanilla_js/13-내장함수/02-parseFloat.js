/**
 * parseFloat(value)
 * 
 * 주어진 값에서 분석한 부동소수점 수.
 * 분석할 수 없으면 NaN
 */

// 정상
console.log(parseFloat(3.14));
console.log(parseFloat('3.14'));
console.log(parseFloat('314e-2'));
console.log(parseFloat('0.0314E+2'));

// NaN을 반환
console.log(parseFloat("FF2"));