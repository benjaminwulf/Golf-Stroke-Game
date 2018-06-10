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
    var counter = 0;

    // Here we will create four golf balls, each with unique stroke value
    // We begin with expanding an array for four options
    var frontNumbers = [10, 5, 3, 7]
    var backNumbmers = [4, 6, 8, 2]
    var handicap = 0;
    var strokesToMatch = (72 + handicap)
    var stroke = 0
    var count = 0

    // Creating nested objects of ball
    var obj = {  //bww was balls
        green: {
            frontValue: "10",
            backValue: "4",
            src: "https://s3-us-west-2.amazonaws.com/benji.to/img-ball_green.png"
        },
        blue: {
            frontValue: "5",
            backValue: "6",
            src: "https://s3-us-west-2.amazonaws.com/benji.to/img-ball_blue.png"
        },
        orange: {
            frontValue: "3",
            backValue: "8",
            src: "https://s3-us-west-2.amazonaws.com/benji.to/img-ball_orange.png"
        },
        pink: {
            frontValue: "7",
            backValue: "2",
            src: "https://s3-us-west-2.amazonaws.com/benji.to/img-ball_pink.png"
        }
    }
    console.log(Object.keys(obj));

//=================================================================================
    Array.prototype.shuffle = function(){
        for (var i = 0; i < this.length; i++){
            var a = this[i];
            var b = Math.floor(Math.random() * this.length);
            this[i] = this[b];
            this[b] = a;
        }
    }
    
    obj = shuffleProperties(obj); // run shuffle
    
    function shuffleProperties(obj) {
        var new_obj = {};
        var keys = getKeys(obj);
        keys.shuffle();
        for (var key in keys){
            if (key == "shuffle") continue; // skip our prototype method
            new_obj[keys[key]] = obj[keys[key]];
        }
        return new_obj;
    }
    
    function getKeys(obj){
        var arr = new Array();
        for (var key in obj)
            arr.push(key);
        return arr;
    }

    shuffleProperties(obj);
    console.log(Object.keys(obj));


    // END document ready
});


//===================================================================
// List of things I would like to additionally accomplish
// 18 turns // stroke per hole
// front 9 // back 9