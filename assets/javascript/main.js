$(document).ready(function () {
    console.log("connected");
    // Here we are creating a global var to display to id="number-to-guess" //bww trying to ge to id="number-to-display"
    // var numberToDisplay = 0;
    $("#number-to-guess").on("click", function () {
        // var randomNumber = 0;
        randomNumber = Math.floor(Math.random() * 120);
        // numberToDisplay = $("#number-to-display").html();
        $("#number-to-display").text(randomNumber);

        console.log("#number-to-display: ", randomNumber);
    });

//=================================================================================

// numberToDisplay = 0;
var randomNumber = 0;
var strokes = 0;
var sumPoints = 0;
var winCounter = 0;
var lossCounter = 0;
var counter = 0;

//=================================================================================


// Function that resets the game.
function resetGame() {
    // Generate a random target number and render it to the page.
    // numberToDisplay = 0;
    randomNumber = 0;
    strokes = 0;
    sumPoints = 0;
    winCounter = 0;
    lossCounter = 0;
    counter = 0;
  };

$("#resetGame").on("click", function() {
    resetGame();
    $("#number-to-display").text(randomNumber);
    $("#strokes").text(strokes);
    $("#sum-points").text(sumPoints);
    $(".hole").text("X"); 
});

//=================================================================================
var golfBalls = randomNumGolfBall();

  // Function that generates random values for our crystals and returns our crystals object.
function randomNumGolfBall() {
    // Crystals object.
    return {
      green: {
        points: Math.floor(Math.random() * 12) + 1,
        src: "https://s3-us-west-2.amazonaws.com/benji.to/img-ball_green.png"
      },
      blue: {
        points: Math.floor(Math.random() * 12) + 1,
        src: "https://s3-us-west-2.amazonaws.com/benji.to/img-ball_blue.png"
      },
      orange: {
        points: Math.floor(Math.random() * 12) + 1,
        src: "https://s3-us-west-2.amazonaws.com/benji.to/img-ball_orange.png"
      },
      pink: {
        points: Math.floor(Math.random() * 12) + 1,
        src: "https://s3-us-west-2.amazonaws.com/benji.to/img-ball_pink.png"
      }
    };
  };


var newDiv = "<img src='" + golfBalls.green.src + "' class='ball-image' id='ball-green'>";
    newDiv += "<img src='" + golfBalls.blue.src + "' class='ball-image' id='ball-blue'>";
    newDiv += "<img src='" + golfBalls.orange.src + "' class='ball-image' id='ball-orange'>";
    newDiv += "<img src='" + golfBalls.pink.src + "' class='ball-image' id='ball-pink'>";

$("#golf-ball").append(newDiv);

//=================================================================================



//=================================================================================

var greenPoints = golfBalls.green.points;
var bluePoints = golfBalls.blue.points;
var orangePoints = golfBalls.orange.points;
var pinkPoints = golfBalls.pink.points;

$("#ball-green").on("click", function() {
    sumPoints += greenPoints;
    counter++;
    gameChecker();
    $("#strokes").text(greenPoints);
    $("#sum-points").text(sumPoints);
});
$("#ball-blue").on("click", function() {
    sumPoints += bluePoints;
    counter++;
    gameChecker();
    $("#strokes").text(bluePoints);
    $("#sum-points").text(sumPoints);
});
$("#ball-orange").on("click", function() {
    sumPoints += orangePoints;
    counter++;
    gameChecker();
    $("#strokes").text(orangePoints);
    $("#sum-points").text(sumPoints);
});
$("#ball-pink").on("click", function() {
    sumPoints += pinkPoints;
    counter++;
    gameChecker();
    $("#strokes").text(pinkPoints);
    $("#sum-points").text(sumPoints);
});
//=================================================================================



//=================================================================================
$(".ball-image").on("click", function () {

switch (counter) {
    case 0:
    counter = 0;
    break;
    case 1:
    counter = 1;
    $("#hole-01").text(sumPoints);
    break;
    case 2:
    counter = 2;
    $("#hole-02").text(sumPoints);
    break;
    case 3:
    counter = 3;
    $("#hole-03").text(sumPoints);
    break;
    case 4:
    counter = 4;
    $("#hole-04").text(sumPoints);
    break;
    case 5:
    counter = 5;
    $("#hole-05").text(sumPoints);
    break;
    case 6:
    counter = 6;
    $("#hole-06").text(sumPoints);
    break;
    case 7:
    counter = 7;
    $("#hole-07").text(sumPoints);
    break;
    case 8:
    counter = 8;
    $("#hole-08").text(sumPoints);
    break;
    case 9:
    counter = 9;
    $("#hole-09").text(sumPoints);
    break;
    case 10:
    counter = 10;
    $("#hole-10").text(sumPoints);
    break;
    case 11:
    counter = 11;
    $("#hole-11").text(sumPoints);
    break;
    case 12:
    counter = 12;
    $("#hole-12").text(sumPoints);
    break;
    case 13:
    counter = 13;
    $("#hole-13").text(sumPoints);
    break;
    case 14:
    counter = 14;
    $("#hole-14").text(sumPoints);
    break;
    case 15:
    counter = 15;
    $("#hole-15").text(sumPoints);
    break;
    case 16:
    counter = 16;
    $("#hole-16").text(sumPoints);
    break;
    case 17:
    counter = 17;
    $("#hole-17").text(sumPoints);
    break;
    case 18:
    counter = 18;
    $("#hole-18").text(sumPoints);
    break;
    }
});

//=================================================================================

function gameChecker() {
    if (sumPoints == randomNumber && sumPoints !== 0) {
    winCounter++;
    $("#display-message").text("Winner!");
    console.log("Winner");
    console.log(winCounter);
}  else if (sumPoints > randomNumber) {
    lossCounter++;
    $("#display-message").text("Loser!");
    console.log("Loser");
    console.log(lossCounter);
} else {
    console.log("Next Hole...")

}
};

//=================================================================================
    Array.prototype.shuffle = function(){
        for (var i = 0; i < this.length; i++){
            var a = this[i];
            var b = Math.floor(Math.random() * this.length);
            this[i] = this[b];
            this[b] = a;
        }
    };
    
    randomNumGolfBall = shuffleProperties(randomNumGolfBall()); // run shuffle
    
    function shuffleProperties(randomNumGolfBall) {
        var new_obj = {};
        var keys = getKeys(randomNumGolfBall);
        keys.shuffle();
        for (var key in keys){
            if (key == "shuffle") continue; // skip our prototype method
            new_obj[keys[key]] = randomNumGolfBall[keys[key]];
        }
        return new_obj;
    }
    
    function getKeys(randomNumGolfBall){
        var arr = new Array();
        for (var key in randomNumGolfBall)
            arr.push(key);
        return arr;
    };

    shuffleProperties(randomNumGolfBall);
    console.log(Object.keys(randomNumGolfBall));

    // END document ready
});


//===================================================================
