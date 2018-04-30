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
var thraex = new Gladiator('Thraex', 100, 16, 15);
var retarius = new Gladiator('Retarius', 80, 22, 15);
var murmilla = new Gladiator('Murmilla', 110, 14, 15);
var maximus = new Gladiator('Maximus', 90, 18, 15);

//OTHER VARIABLES SETUP
var hero = {};
var enemy = {};
var levelUp = 0;
var enemiesRemaining = 3;
// var opponentsArr = [thraex, retarius, murmilla, maximus];
var heroChosen = false;
var enemyChosen = false;
var wins = 0;
$('#winSpan').text(wins);
var losses = 0;
$('#lossSpan').text(losses);

//GLADIATOR STAT PUSH FUNCTIONS
function thraexUpdate() {
    $(`#thraexHeader`).text(thraex.name);
    $(`#thraex #gladiatorHealth`).text(thraex.health);
    $('#thraex #gladiatorAttack').text(thraex.attack);
};
function retariusUpdate() {
    $(`#retariusHeader`).text(retarius.name);
    $(`#retarius #gladiatorHealth`).text(retarius.health);
    $('#retarius #gladiatorAttack').text(retarius.attack);
};
function murmillaUpdate() {
    $(`#murmillaHeader`).text(murmilla.name);
    $(`#murmilla #gladiatorHealth`).text(murmilla.health);
    $('#murmilla #gladiatorAttack').text(murmilla.attack);
};
function maximusUpdate() {
    $('#maximusHeader').text(maximus.name);
    $(`#maximus #gladiatorHealth`).text(maximus.health);
    $('#maximus #gladiatorAttack').text(maximus.attack);
};

//CALLS TO SET INITIAL VALUES ON DOM
thraexUpdate();
retariusUpdate();
murmillaUpdate();
maximusUpdate();

//GAME RESET FUNCTION
function gameReset() {
    $('#headerImg').attr('src', 'assets/images/r_gladiators.jpg');
    $('.opponentClass').removeClass('opponentClass');
    $('.heroPic').removeClass('heroPic');
    $('.heroClass .healthLine').html('Health: <span id="gladiatorHealth"></span>');
    $('.heroClass').removeClass('heroClass');
    $('.deadClass').removeClass('deadClass');
    $('.deadPic').removeClass('deadPic');
    $('.gladiator .healthLine').removeClass('invisible');
    $('.gladiator .attackLine').removeClass('invisible');
    $('#instructions').text('Pick a gladiator to be your champion in the arena!');
    enemiesRemaining = 3;
    heroChosen = false;
    enemyChosen = false;
    thraex = new Gladiator('Thraex', 100, 16, 15);
    retarius = new Gladiator('Retarius', 80, 22, 15);
    murmilla = new Gladiator('Murmilla', 110, 14, 15);
    maximus = new Gladiator('Maximus', 90, 18, 15);
    thraexUpdate();
    retariusUpdate();
    murmillaUpdate();
    maximusUpdate();
    $('#gameResetBtn').addClass('invisible');
};

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
        $('#headerImg').fadeOut('slow');
        if ($(this).attr('id') === 'thraexPic') { ///PLAYER CHOSE THRAEX
            hero = thraex;
            levelUp = thraex.attack;
            $('#thraex').addClass('heroClass');
            $('#thraexPic').addClass('heroPic');
            $('#retarius, #murmilla, #maximus').addClass('opponentClass');
            $('#thraexHealth').addClass('heroHealth');
            // $('.opponentClass .attackLine').addClass('invisible');
        } else if ($(this).attr('id') === 'retariusPic') { //PLAYER CHOSE RETARIUS
            hero = retarius;
            levelUp = retarius.attack;
            $('#retarius').addClass('heroClass');
            $('#retariusPic').addClass('heroPic');
            $('#thraex, #murmilla, #maximus').addClass('opponentClass')
            $('#retariusHealth').addClass('heroHealth');
            // $('.opponentClass .attackLine').addClass('invisible');
        } else if ($(this).attr('id') === 'murmillaPic') { //PLAYER CHOSE MURMILLA
            hero = murmilla;
            levelUp = murmilla.attack;
            $('#murmilla').addClass('heroClass');
            $('#murmillaPic').addClass('heroPic');
            $('#retarius, #thraex, #maximus').addClass('opponentClass')
            $('#murmillaHealth').addClass('heroHealth');
            // $('.opponentClass .attackLine').text('Strength: 15');
        } else if ($(this).attr('id') === 'maximusPic') { //PLAYER CHOSE MAXIMUS
            hero = maximus;
            levelUp = maximus.attack;
            $('#maximus').addClass('heroClass');
            $('#maximusPic').addClass('heroPic');
            $('#retarius, #murmilla, #thraex').addClass('opponentClass')
            $('#maximusHealth').addClass('heroHealth');
            // $('.opponentClass .attackLine').addClass('invisible');
        }
        $('.heroClass').animate ({top: '-=200px'}, 'slow');

    } else if ((!enemyChosen) && heroChosen && (enemiesRemaining > 0) && ($(this).attr('class') !== 'card-img-top gladiatorPic mx-auto heroPic') && ($(this).attr('class') !== 'card-img-top gladiatorPic mx-auto deadPic') && (hero.health > 0)) {//ENEMY PICKED
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
        $('.enemyClass').animate ({top: '-=200px'}, 'slow');
    }
    
})


function combat() {
    //HERO HITS FIRST
    enemy.health -= hero.attack; 
    $('.enemyClass #gladiatorHealth').text(enemy.health);
    hero.attack += levelUp;
    $('.heroClass #gladiatorAttack').text(hero.attack);
        if (enemy.health <= 0) { //ENEMY KILLED
            $('.enemyClass').animate ({top: '+=200px'}, 'slow');
            $('.enemyClass .gladiatorHeader').text("DEAD");
            $('.enemyClass .healthLine').addClass('invisible');
            $('.enemyClass .attackLine').addClass('invisible');
            $('.enemyClass .gladiatorPic').addClass('deadPic');
            $('.enemyClass').removeClass('enemyClass').addClass('deadClass');
            enemyChosen = false;
            enemiesRemaining -= 1;
            $('#attackBtn').addClass('invisible');
            $('#instructions').text('Choose your next opponent!');
                if (enemiesRemaining == 0) { //GAME WIN
                    wins++;
                    $('#winSpan').text(wins);
                    $('#instructions').text('A glorious victory!');
                    $('.heroClass .healthLine').text('WINNER');
                    $('#gameResetBtn').removeClass('invisible');
                    $('.heroClass').animate ({top: '+=200px'}, 'slow');
                    $('#headerImg').attr('src', 'assets/images/victory.jpg')
                    $('#headerImg').fadeIn('slow');
                };
        };
    //ENEMY HITS BACK
    hero.health -= enemy.attack;
    $('.heroClass #gladiatorHealth').text(hero.health);
        if ((hero.health <= 0) && (enemiesRemaining > 0)) { //GAME LOSS
            $('.enemyClass').animate ({top: '+=200px'}, 'slow');
            $('.heroClass').animate ({top: '+=200px'}, 'slow');
            $('.enemyClass').removeClass('enemyClass').addClass('opponentClass');
            losses++;
            $('#lossSpan').text(losses);
            $('#instructions').text('A humiliating defeat!');
            $('.heroClass .gladiatorHeader').text("YOU DIED");
            $('.heroClass').addClass('deadClass');
            $('#attackBtn').addClass('invisible');
            $('#gameResetBtn').removeClass('invisible');
            $('#headerImg').attr('src', 'assets/images/defeat.png')
            $('#headerImg').fadeIn('slow');
        }
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