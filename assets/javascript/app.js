$(document).ready(function() {
    // hides everything other than the title, timer and start button on the page.
    function hide() {
        $("#q1").hide();
        $("#q2").hide();
        $("#q3").hide();
        $("#q4").hide();
        $("#q5").hide();
        $("#q6").hide();
        $("#q7").hide();
        $("#q8").hide();
        $("#q9").hide();
        $("#q10").hide();
        $("#q1r").hide();
        $("#q1w").hide();
        $("#q2r").hide();
        $("#q2w").hide();
        $("#q3r").hide();
        $("#q3w").hide();
        $("#q4r").hide();
        $("#q4w").hide();
        $("#q5r").hide();
        $("#q5w").hide();
        $("#q6r").hide();
        $("#q6w").hide();
        $("#q7r").hide();
        $("#q7w").hide();
        $("#q8r").hide();
        $("#q8w").hide();
        $("#q9r").hide();
        $("#q9w").hide();
        $("#q10r").hide();
        $("#q10w").hide();
        $("#results").hide();
        $("#q1t").hide();
        $("#q2t").hide();
        $("#q3t").hide();
        $("#q4t").hide();
        $("#q5t").hide();
        $("#q6t").hide();
        $("#q7t").hide();
        $("#q8t").hide();
        $("#q9t").hide();
        $("#q10t").hide();        
    }
    // Runs the hide function
    hide();
    // hides the timer until start is clicked
    $("#countdown").hide();
    // Setting Variables
    var number = 31;
    var countdownTimer;
    var correctAns = 0;
    var incorrectAns = 0;
    var nonAns = 0;
    var qT;
    // Function to show the results at the end.
    function results(){
    	$("#results").show();
    	$("#correctAns").html(correctAns);
    	$("#incorrectAns").html(incorrectAns);
    	$("#nonAns").html(nonAns);
    	$("#restart").show();
    }
    // Starts the countdown timer
    function run() {
        countdownTimer = setInterval(countdown, 1000);
    }
    // Function for the countdown timer
    function countdown() {
        number--;

        $("#timer").html(number);

        if (number === 0) {
            stop();
        }
    }
    // Stops the countdown
    function stop() {
        clearInterval(countdownTimer);
    }
    // Resets the timer back to 30 seconds
    function resetTimer() {
        number = 31;
    }
    // Shows the countdown timer on the page
    function timer() {
        $("#countdown").show();
        run();
    }
 	// Runs when start button is clicked
    $("#start").on("click", function() {
        $("#countdown").show();
        $("#start").hide();
        run();
        q1();
    })
    $("#restart").on("click", function() {
        $("#countdown").show();
        $("#restart").hide();
        $("#results").hide();
        run();
        q1();
        correctAns = 0;
    	incorrectAns = 0;
    	nonAns = 0;
    })
    // Sets background color to Light Blue when the mouse hovers over it and turns back to blue
    $(".answer").hover(function() {
        $(this).css("background-color", "LightBlue");
    }, function() {
        $(this).css("background-color", "blue");
    });
    // Function to display Question 1
    function q1() {
        $("#q1").show();
        qT = setTimeout(q1t, 1000 * 32);
    }
    // Function to display Question 2
    function q2() {
        $("#q2").show();
        qT = setTimeout(q2t, 1000 * 32);
    }
    // Function to display Question 3
    function q3() {
        $("#q3").show();
        qT = setTimeout(q3t, 1000 * 32);
    }
    // Function to display Question 4
    function q4() {
        $("#q4").show();
        qT = setTimeout(q4t, 1000 * 32);
    }
    // Function to display Question 5
    function q5() {
        $("#q5").show();
        qT = setTimeout(q5t, 1000 * 32);
    }
    // Function to display Question 6
    function q6() {
        $("#q6").show();
        qT = setTimeout(q6t, 1000 * 32);
    }
    // Function to display Question 7
    function q7() {
        $("#q7").show();
        qT = setTimeout(q7t, 1000 * 32);
    }
    // Function to display Question 8
    function q8() {
        $("#q8").show();
        qT = setTimeout(q8t, 1000 * 32);
    }
    // Function to display Question 9
    function q9() {
        $("#q9").show();
        qT = setTimeout(q9t, 1000 * 32);
    }
    // Function to display Question 10
    function q10() {
        $("#q10").show();
        qT = setTimeout(q10t, 1000 * 32);
    }
    // If time runs out for Question 1
    function q1t() {
    	$("#q1").hide();
    	$("#q1t").show();
    	stop();
        resetTimer();
        $("#countdown").hide();
    	nonAns++
    	setTimeout(hide, 1000 * 7);
        setTimeout(q2, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    }
    // If time runs out for Question 2
    function q2t() {
    	$("#q2").hide();
    	$("#q2t").show();
    	stop();
        resetTimer();
        $("#countdown").hide();
    	nonAns++
    	setTimeout(hide, 1000 * 7);
        setTimeout(q3, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    }
    // If time runs out for Question 3
    function q3t() {
    	$("#q3").hide();
    	$("#q3t").show();
    	stop();
        resetTimer();
        $("#countdown").hide();
    	nonAns++
    	setTimeout(hide, 1000 * 7);
        setTimeout(q4, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    }
    // If time runs out for Question 4
    function q4t() {
    	$("#q4").hide();
    	$("#q4t").show();
    	stop();
        resetTimer();
        $("#countdown").hide();
    	nonAns++
    	setTimeout(hide, 1000 * 7);
        setTimeout(q5, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    }
    // If time runs out for Question 5
    function q5t() {
    	$("#q5").hide();
    	$("#q5t").show();
    	stop();
        resetTimer();
        $("#countdown").hide();
    	nonAns++
    	setTimeout(hide, 1000 * 7);
        setTimeout(q6, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    }
    // If time runs out for Question 6
    function q6t() {
    	$("#q6").hide();
    	$("#q6t").show();
    	stop();
        resetTimer();
        $("#countdown").hide();
    	nonAns++
    	setTimeout(hide, 1000 * 7);
        setTimeout(q7, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    }
    // If time runs out for Question 7
    function q7t() {
    	$("#q7").hide();
    	$("#q7t").show();
    	stop();
        resetTimer();
        $("#countdown").hide();
    	nonAns++
    	setTimeout(hide, 1000 * 7);
        setTimeout(q8, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    }
    //If time runs out for Question 8
    function q8t() {
    	$("#q8").hide();
    	$("#q8t").show();
    	stop();
        resetTimer();
        $("#countdown").hide();
    	nonAns++
    	setTimeout(hide, 1000 * 7);
        setTimeout(q9, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    }
    // If time runs out for Question 9
    function q9t() {
    	$("#q9").hide();
    	$("#q9t").show();
    	stop();
        resetTimer();
        $("#countdown").hide();
    	nonAns++
    	setTimeout(hide, 1000 * 7);
        setTimeout(q10, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    }
    // If time runs out for Question 10
    function q10t(){
    	$("#q10").hide();
        $("#q10t").show();
        stop();
        resetTimer();
        $("#countdown").hide();
        nonAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(results, 1000 * 7);
    }
    // If user clicks on correct answer for Question 1
    $("#q1c").on("click", function() {
        $("#q1").hide();
        $("#q1r").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        correctAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q2, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on an incorrect answer for Question 1
    $(".q1i").on("click", function() {
        $("#q1").hide();
        $("#q1w").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        incorrectAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q2, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on correct answer for Question 2
    $("#q2c").on("click", function() {
        $("#q2").hide();
        $("#q2r").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        correctAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q3, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on an incorrect answer for Question 2
    $(".q2i").on("click", function() {
        $("#q2").hide();
        $("#q2w").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        incorrectAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q3, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on correct answer for Question 3
    $("#q3c").on("click", function() {
        $("#q3").hide();
        $("#q3r").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        correctAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q4, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on an incorrect answer for Question 3
    $(".q3i").on("click", function() {
        $("#q3").hide();
        $("#q3w").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        incorrectAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q4, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on correct answer for Question 4
    $("#q4c").on("click", function() {
        $("#q4").hide();
        $("#q4r").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        correctAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q5, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on an incorrect answer for Question 4
    $(".q4i").on("click", function() {
        $("#q4").hide();
        $("#q4w").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        incorrectAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q5, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on correct answer for Question 5
    $("#q5c").on("click", function() {
        $("#q5").hide();
        $("#q5r").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        correctAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q6, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on an incorrect answer for Question 5
    $(".q5i").on("click", function() {
        $("#q5").hide();
        $("#q5w").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        incorrectAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q6, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on correct answer for Question 6
    $("#q6c").on("click", function() {
        $("#q6").hide();
        $("#q6r").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        correctAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q7, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on an incorrect answer for Question 6
    $(".q6i").on("click", function() {
        $("#q6").hide();
        $("#q6w").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        incorrectAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q7, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on correct answer for Question 7
    $("#q7c").on("click", function() {
        $("#q7").hide();
        $("#q7r").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        correctAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q8, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on an incorrect answer for Question 7
    $(".q7i").on("click", function() {
        $("#q7").hide();
        $("#q7w").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        incorrectAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q8, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on correct answer for Question 8
    $("#q8c").on("click", function() {
        $("#q8").hide();
        $("#q8r").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        correctAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q9, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on an incorrect answer for Question 8
    $(".q8i").on("click", function() {
        $("#q8").hide();
        $("#q8w").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        incorrectAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q9, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on correct answer for Question 9
    $("#q9c").on("click", function() {
        $("#q9").hide();
        $("#q9r").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        correctAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q10, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on an incorrect answer for Question 9
    $(".q9i").on("click", function() {
        $("#q9").hide();
        $("#q9w").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        incorrectAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q10, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on correct answer for Question 10
    $("#q10c").on("click", function() {
        $("#q10").hide();
        $("#q10r").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        correctAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(results, 1000 * 7);
    });
    // If user clicks on an incorrect answer for Question 10
    $(".q10i").on("click", function() {
        $("#q10").hide();
        $("#q10w").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        incorrectAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(results, 1000 * 7);
    });

}); // End of document ready