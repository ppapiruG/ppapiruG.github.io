class StudCard {
    constructor(){
        this._num = null;
        this._kind = null;
    }

    get num(){
        return this._num;
    }
    set num(param){
        if(param >=1 && param <=12){
            this._num = param;
        }
    }

    get kind(){
        return this._kind;
    }
    set kind(param){
        for(let i = 0; i<4; i++){
            this._kind = param;
        }
    }

}

const cards = new Array(12);

for(let i=0;i<cards.length;i++){
    cards[i] = new Array(4);
}

for(let i = 0;i<cards.length;i++){
    cards[i][j] = new StudCard();
    cards[i][j]
}
