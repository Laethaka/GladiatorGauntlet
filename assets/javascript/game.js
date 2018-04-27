//GLADIATOR OBJECT PARENT
class Gladiator {
    constructor(name, health, attack, riposte) {
        this._name = name;
        this._health = health;
        this._attack = attack;
        this._riposte = riposte;
    }

    get name() {
        return this._name;
    }
    get health() {
        return this._health;
    }
    get attack() {
        return this._attack;
    }
    get riposte() {
        return this._riposte;
    }

    takeDamage(damage) {
        this._health -= damage;
    }
}

//GLADIATOR OBJECTS
const thraex = new Gladiator('Thraex', 110, 10, 15);
const retarius = new Gladiator('Retarius', 90, 15, 15);
const murmilla = new Gladiator('Murmilla', 135, 5, 15);
const maximus = new Gladiator('Maximus', 120, 20, 15);



// GLADIATOR INFO UPDATE
function thraexUpdate() {
    $(`#thraexHeader`).text(thraex.name);
    $(`#thraexHealth`).text(thraex.health);
    $('#thraexAttack').text(thraex.attack);
};
// function gladiatorUpdate(gladiator) {
//     $(`#retariusHeader`).text(gladiator.name);
// };
// function gladiatorUpdate(gladiator) {
//     $(`#murmillaHeader`).text(gladiator.name);
// };
// function gladiatorUpdate(gladiator) {
// };

gladiatorUpdate(gladiator);

//SET GLADIATOR DOMS WITH INITIAL VALUES
$('#thraexPic').attr('src', 'assets/images/thraex.jpg')
$('#retariusPic').attr('src', 'assets/images/retarius.jpg')
$('#murmillaPic').attr('src', 'assets/images/murmilla.jpg')
$('#maximusPic').attr('src', 'assets/images/maximus.jpg')





//COLORCYCLING TEXT
var colorIndex = 0;
var colors = ["red", "orange", "yellow", "white"];
var color = document.getElementById("colorCycling");
setInterval(function() {
    if (colorIndex >= colors.length)
        colorIndex = 0;
    color.style.color = colors[colorIndex];
    colorIndex++;
}, 1500);