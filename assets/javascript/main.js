$(document).ready(function() {
console.log("connected");
// Here we are creating a global var to display to id="number-to-guess" //bww trying to ge to id="number-to-display"
var numberToDisplay = 0;
    $("#number-to-guess").on("click", function () {
        var randomNumber = 0;
        randomNumber = Math.floor(Math.random() * 120);
        numberToDisplay = $( "#number-to-display" ).html();
            $( "#number-to-display" ).text( randomNumber );

        console.log("#number-to-display: ", numberToDisplay);
    });
var counter = 0;

// Here we will create four golf balls, each with unique stroke value
// We begin with expanding an array for four options
// var numberOptions = [10, 5, 3, 7]


//Creating nexted ojects of ball
var ball = {
    green: {
        frontValue: "10",
        backValue: "4",
        src: "https://s3-us-west-2.amazonaws.com/benji.to/img-ball_green.png"
    }
    blue: {
        frontValue: "5",
        backValue: "6",
        src: "https://s3-us-west-2.amazonaws.com/benji.to/img-ball_blue.png"
    }
    orange: {
        frontValue: "3",
        backValue: "8",
        src: "https://s3-us-west-2.amazonaws.com/benji.to/img-ball_orange.png"
    }
    pink: {
        frontValue: "7",
        backValue: "2",
        src: "https://s3-us-west-2.amazonaws.com/benji.to/img-ball_pink.png"
    }
}

// Create a for loop to create golf balls for each number option
for (var i = 0; i < ball.length; i++) {
    
// Random use of src images for ball object
var keys = Object.keys(ball)
var rand = keys[Math.floor(Math.random() * keys.lenth)];
$("#golf-balls").html(ball[rand].src);

console.log("keys", keys);
console.log("rand", rand);
console.log("ball", ball);
console.log("src", ball.src);

}

// END document ready
});


//===================================================================
// List of things I would like to additionally accomplish
// 18 turns // stroke per hole
// front 9 // back 9
