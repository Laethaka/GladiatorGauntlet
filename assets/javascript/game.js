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
var enemy = {};
// var opponentsArr = [thraex, retarius, murmilla, maximus];
var heroChosen = false;
var enemyChosen = false;

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

//GLADIATOR PIC CLICK EVENTS
$('.gladiatorPic').on('click', function() {
    if (!heroChosen) {//HERO PICKED
        $('#instructions').text('Choose your opponent!');
        heroChosen = true;
        $('.headerImg').fadeOut('slow');
        if ($(this).attr('id') === 'thraexPic') { ///PLAYER CHOSE THRAEX
            hero = thraex;
            $('#thraex').addClass('heroClass');
            $('#retarius, #murmilla, #maximus').addClass('opponentClass');
            $('#thraexHealth').addClass('heroHealth');
            $('.opponentClass .attackLine').addClass('invisible');
        } else if ($(this).attr('id') === 'retariusPic') { //PLAYER CHOSE RETARIUS
            hero = retarius;
            $('#retarius').addClass('heroClass');
            $('#thraex, #murmilla, #maximus').addClass('opponentClass')
            $('#retariusHealth').addClass('heroHealth');
            $('.opponentClass .attackLine').addClass('invisible');
        } else if ($(this).attr('id') === 'murmillaPic') { //PLAYER CHOSE MURMILLA
            hero = murmilla;
            $('#murmilla').addClass('heroClass');
            $('#retarius, #thraex, #maximus').addClass('opponentClass')
            $('#murmillaHealth').addClass('heroHealth');
            $('.opponentClass .attackLine').addClass('invisible');
        } else if ($(this).attr('id') === 'maximusPic') { //PLAYER CHOSE MAXIMUS
            hero = maximus;
            $('#maximus').addClass('heroClass md-auto');
            $('#retarius, #murmilla, #thraex').addClass('opponentClass')
            $('#maximusHealth').addClass('heroHealth');
            $('.opponentClass .attackLine').addClass('invisible');
        }
        $('.heroClass').animate ({bottom: '+=200px'}, 'slow');

    } else if ((!enemyChosen) && heroChosen) {//ENEMY PICKED; DOES NOT PREVENT ENEMY FROM BEING HERO
        $('#instructions').text('Engage in glorious combat!')
        enemyChosen = true;
        $('#attackBtn').removeClass('invisible');
        if (($(this).attr('id') === 'thraexPic') && (hero !== thraex)) {
            enemy = thraex;
            $('#thraex').removeClass('opponentClass').addClass('enemyClass');
            $('#thraexHealth').addClass('enemyHealth');
        } else if (($(this).attr('id') === 'retariusPic') && (hero !== retarius)) {
            enemy = retarius;
            $('#retarius').removeClass('opponentClass').addClass('enemyClass');
            $('#retariusHealth').addClass('enemyHealth');
        } else if (($(this).attr('id') === 'murmillaPic') && (hero !== murmilla)) {
            enemy = murmilla;
            $('#murmilla').removeClass('opponentClass').addClass('enemyClass');
            $('#murmillaHealth').addClass('enemyHealth');
        } else if (($(this).attr('id') === 'maximusPic') && (hero !== maximus)) {
            enemy = maximus;
            $('#maximus').removeClass('opponentClass').addClass('enemyClass');
            $('#maximusHealth').addClass('enemyHealth');
        }
        $('.enemyClass').animate ({bottom: '+=200px'}, 'slow');
    }
    
})


function combat() {
    enemy.health -= hero.attack;
    $('.enemyHealth').text(enemy.health);
        if (enemy.health <= 0) { //ENEMY KILLED
            $('.enemyClass').animate ({top: '+=200px'}, 'slow');
            $('.enemyClass .gladiatorHeader').text("DEAD");
            $('.enemyClass .healthLine').addClass('invisible');
            $('.enemyClass').removeClass('enemyClass').addClass('deadClass');
            enemyChosen = false;
            enemy = {};
            $('#attackBtn').addClass('invisible');
            $('#instructions').text('Choose your next opponent!');
        };
    hero.health -= enemy.attack;
    $('.heroClass')
}


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