var price = [38000, 20000, 17900, 17900];
var qty = [6, 4, 3, 5];
var freeD = 0;

for(let i=0; i<price.length;i++){
    var sum = price[i] * qty[i];

    if(sum >= 80000){
        freeD++;
    }
}


console.log("무료배송 항목 : " + freeD + "건");