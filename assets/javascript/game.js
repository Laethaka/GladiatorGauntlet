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



// GLADIATOR UPDATE FUNCTIONS
function thraexUpdate() {
    $(`#thraexHeader`).text(thraex.name);
    $(`#thraexHealth`).text(thraex.health);
    $('#thraexAttack').text(thraex.attack);
};
function retariusUpdate() {
    $(`#retariusHeader`).text(retarius.name);
    $(`#retariusHealth`).text(retarius.health);
    $('#retariusAttack').text(retarius.attack);
};
function murmillaUpdate() {
    $(`#murmillaHeader`).text(murmilla.name);
    $(`#murmillaHealth`).text(murmilla.health);
    $('#murmillaAttack').text(murmilla.attack);
};
function maximusUpdate() {
    $(`#maximusHeader`).text(maximus.name);
    $(`#maximusHealth`).text(maximus.health);
    $('#maximusAttack').text(maximus.attack);
};

//SET INITIAL VALUES ON DOM
thraexUpdate();
retariusUpdate();
murmillaUpdate();
maximusUpdate();





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