//GLADIATOR OBJECT PARENT
class Gladiator {
    constructor(name, health, attack, riposte) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.riposte = riposte;
    }
}

//GLADIATOR OBJECTS SETUP
var thraex = new Gladiator('Thraex', 110, 10, 15);
var retarius = new Gladiator('Retarius', 90, 15, 15);
var murmilla = new Gladiator('Murmilla', 135, 5, 15);
var maximus = new Gladiator('Maximus', 120, 20, 15);

//OTHER VARIABLES SETUP
var hero = {};
var opponentsArr = [thraex, retarius, murmilla, maximus];
var heroChosen = false;

//GLADIATOR STAT PUSH FUNCTIONS
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

//CALLS TO SET INITIAL VALUES ON DOM
thraexUpdate();
retariusUpdate();
murmillaUpdate();
maximusUpdate();

//GLADIATOR FOCUS PIC STYLING
$('.gladiatorPic').on('mouseenter', event => {
    $(event.currentTarget).animate({width: '90%'}, 'fast')
  }).on('mouseleave', event => {
    $(event.currentTarget).animate({width: '80%'}, 'fast')
  })

//SET GLADIATOR PICS WITH INITIAL IMAGES
$('#thraexPic').attr('src', 'assets/images/thraex.jpg')
$('#retariusPic').attr('src', 'assets/images/retarius.jpg')
$('#murmillaPic').attr('src', 'assets/images/murmilla.jpg')
$('#maximusPic').attr('src', 'assets/images/maximus.jpg')

//GLADIATOR CHOICE
$('.gladiatorPic').on('click', function() {
    if (!heroChosen) {
        if ($(this).attr('id') === 'thraexPic') { ///PLAYER CHOSE THRAEX
            hero = thraex;
            opponentsArr.shift();
            $('#thraex').addClass('heroClass');
            $('#retarius, #murmilla, #maximus').addClass('opponentClass')
        } else if ($(this).attr('id') === 'retariusPic') { //PLAYER CHOSE RETARIUS
            hero = retarius;
            opponentsArr.splice(1,1);
            $('#retarius').addClass('heroClass');
            $('#thraex, #murmilla, #maximus').addClass('opponentClass')
        } else if ($(this).attr('id') === 'murmillaPic') { //PLAYER CHOSE MURMILLA
            hero = murmilla;
            opponentsArr.splice(2,1);
            $('#murmilla').addClass('heroClass');
            $('#retarius, #thraex, #maximus').addClass('opponentClass')
        } else if ($(this).attr('id') === 'maximusPic') { //PLAYER CHOSE MAXIMUS
            hero = maximus;
            opponentsArr.pop();
            $('#maximus').addClass('heroClass');
            $('#retarius, #murmilla, #thraex').addClass('opponentClass')
        }
    }
    heroChosen = true;
})



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