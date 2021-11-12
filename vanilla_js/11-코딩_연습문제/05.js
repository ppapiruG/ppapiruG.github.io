var price = [38000, 20000, 17900, 17900];
var qty = [6, 4, 3, 5];
var money = 0;

for(let i=0; i<price.length;i++){
    var sum = price[i] * qty[i];

    if(money < sum){
        money = sum;
    }
}


console.log("가장 높은 상품 금액 : " + money + "원");