let item = [[291,500],[586,320],[460,100],[558,120],[18,92],[72,30]];
let total_price = 0;

for(let i =0; i<item.length;i++){
    let item_price = (item[i][0]*0.9) * item[i][1];
    total_price += item_price;
}
console.log("이 유저가 벌 수 있는 골드의 총액 : " + total_price);