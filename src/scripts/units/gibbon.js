import Unit from './unit';

class Gibbon extends Unit{
    constructor(board, pos, player){
        super(board, pos, player,'./src/assets/sounds/gibbon.mp3')
        this.imgMove = './src/assets/units/gibbonMove.png';
        this.imgBase = './src/assets/units/gibbonStand.png';
        this.imgFight = './src/assets/units/gibbonFight.png';
        this.attackImg ='./src/assets/units/gibbonAttack.png';
        this.speed = 1;
        this.range = 2;
        this.attack = 17;
        this.health = 30;
        this.unit.src = this.imgBase;
        this.healthBar.innerHTML = this.health;
    }

    moveAttack(){
        super.moveAttack();
        this.attackMade.style.top = this.attackMade.offsetTop -  (Math.sin(this.attackDirection)* 4) + 'px'; 
        this.attackMade.style.left = this.attackMade.offsetLeft -  (Math.cos(this.attackDirection) * 4) + 'px'; 
    }


}

export default Gibbon;