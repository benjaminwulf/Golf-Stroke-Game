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

// END document ready
});


//===================================================================
// List of things I would like to additionally accomplish
// 18 turns // stroke per hole
// front 9 // back 9
