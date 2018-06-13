$(document).ready(function () {
    console.log("connected");
    // Here we are creating a global var to display to id="number-to-guess" //bww trying to ge to id="number-to-display"
    var numberToDisplay = 0;
    $("#number-to-guess").on("click", function () {
        var randomNumber = 0;
        randomNumber = Math.floor(Math.random() * 120);
        numberToDisplay = $("#number-to-display").html();
        $("#number-to-display").text(randomNumber);

        console.log("#number-to-display: ", numberToDisplay);
    });

//=================================================================================

// Function that resets the game.
function resetGame() {
    // Generate a random target number and render it to the page.
    numberToDisplay = 0;
    strokes = 0
    sumPoints = 0;
  };
$("#resetGame").on("click", function() {
    resetGame();
    $("#number-to-display").text(numberToDisplay);
    $("#user-points-to-display").text(strokes);
    $("#sum-points").text(sumPoints);
});

//=================================================================================


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

var golfBalls = randomNumGolfBall();

var newDiv = "<img src='" + golfBalls.green.src + "' class='ball-image' id='ball-green'>";
    newDiv += "<img src='" + golfBalls.blue.src + "' class='ball-image' id='ball-blue'>";
    newDiv += "<img src='" + golfBalls.orange.src + "' class='ball-image' id='ball-orange'>";
    newDiv += "<img src='" + golfBalls.pink.src + "' class='ball-image' id='ball-pink'>";

$("#golf-ball").append(newDiv);

//=================================================================================

var greenPoints = golfBalls.green.points;
var bluePoints = golfBalls.blue.points;
var orangePoints = golfBalls.orange.points;
var pinkPoints = golfBalls.pink.points;
var sumPoints = 0;

$("#ball-green").on("click", function() {
    sumPoints += greenPoints;
    $("#user-points-to-display").text(greenPoints);
    $("#sum-points").text(sumPoints);
});
$("#ball-blue").on("click", function() {
    sumPoints += bluePoints;
    $("#user-points-to-display").text(bluePoints);
    $("#sum-points").text(sumPoints);
});
$("#ball-orange").on("click", function() {
    sumPoints += orangePoints;
    $("#user-points-to-display").text(orangePoints);
    $("#sum-points").text(sumPoints);
});
$("#ball-pink").on("click", function() {
    sumPoints += pinkPoints;
    $("#user-points-to-display").text(pinkPoints);
    $("#sum-points").text(sumPoints);
});


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
