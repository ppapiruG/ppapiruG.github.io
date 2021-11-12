/** 종족의 공통 특성을 갖는 클래스 */
class Protoss{
    /** 모든 객체가 갖는 명시적 특성들을 멤버변수로 정의 */
    constructor(name,hp,dps){
        this._name = name;
        this._hp = hp;
        this._dps = dps;
        console.log("[%s] 체력 : %d, 공격력 : %d" , name, hp, dps);
    }

    /** 객체가 수행해야 하는 동작들을 함수 형태로 정의 */
    move(position){
        console.log(this._name + "이/가 " + position + "까지 이동합니다.");
    }
    attack(target){
        console.log(this._name + "이/가 " + target + "을/를 공격합니다. 데미지 : " + this._dps);
    }

}

class Zealot extends Protoss {
    sword(target){
        this.attack(target);
        console.log(" >>>> 검으로 찌르기");
    }
}

class Dragon extends Protoss {
    fire(target){
        this.attack(target);
        console.log(" >>>> 원거리 공격");
    }
}

var z1 = new Zealot("질럿1", 300, 20);
z1.move("본진");
z1.sword("본진");

var z2 = new Zealot("질럿2", 300, 25);
z1.move("멀티");
z1.sword("멀티");

var z1 = new Dragon("질럿1", 250, 40);
z1.move("본진");
z1.fire("본진");

var z1 = new Dragon("질럿1", 200, 35);
z1.move("멀티");
z1.fire("멀티");
