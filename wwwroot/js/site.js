// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(document).ready( () => {

    let count = 1;
    const colorlist = ["skyblue", "yellow", "red", "darkseagreen"];

    $("#slidingDiv").css("background-color", colorlist[Math.floor(Math.random() * 4)]);

    $("#slidingDiv").on("animationiteration", function () {
        if (count >= 10) {
            $("#slidingDiv").addClass("paused");
            $("#ModalScoreSpan").text($("#scoreSpan").text());
            $("#EndModal").modal('show');
        }
        count++;
        IntializeImage();
    });

    $(".colorDiv").click( function(){
        if ($("#slidingDiv").css("background-color") == $(this).css("background-color")) {
            $("#scoreSpan").text(parseInt($("#scoreSpan").text()) + 20);

            count++;

            $("#slidingDiv").addClass("paused");

            var currentposition = $("#slidingDiv").position();
            var destinationpostion = $(this).position();

            if ($(this).css("background-color") == "rgb(255, 0, 0)") {

                $("#slidingDiv").animate({
                    right: 0, top: -currentposition.top,
                    opacity: 0.00
                }, 3000, "linear", function () {
                    $("#slidingDiv").addClass("remove-animation");
                    RepeatImages();
                });
            }

            if ($(this).css("background-color") == "rgb(135, 206, 235)") {
                $("#slidingDiv").animate({
                    left: 0, top: -currentposition.top,
                    opacity: 0.00
                }, 3000, "linear", function () {
                    $("#slidingDiv").addClass("remove-animation");
                    RepeatImages();
                });
            }

            if ($(this).css("background-color") == "rgb(255, 255, 0)") {
                $("#slidingDiv").animate({
                    left: 0, top: destinationpostion.top,
                    opacity: 0.00
                }, 3000, "linear", function () {
                    $("#slidingDiv").addClass("remove-animation");
                    RepeatImages();
                });
            }

            if ($(this).css("background-color") == "rgb(143, 188, 143)") {
                $("#slidingDiv").animate({
                    right: 0, top: destinationpostion.top,
                    opacity: 0.00
                }, 3000, "linear", function () {
                    $("#slidingDiv").addClass("remove-animation");
                    RepeatImages();
                });
            }
        }
        else {
            $("#scoreSpan").text(parseInt($("#scoreSpan").text()) - 5);
        }
    })

    $("#ReplayGameBtn").click(() => {
        replayGame();
    });

    function RepeatImages() {
        setTimeout(removeStyle, 1000);
        $("#slidingDiv").removeClass("paused");
        IntializeImage();
    }

    function IntializeImage() {
        $("#slidingDiv").css("background-color", colorlist[Math.floor(Math.random() * 4)]);
    }


    function removeStyle() {
        $("#slidingDiv").removeAttr("class");
        $("#slidingDiv").removeAttr("style");
        $("#slidingDiv").addClass("slideDiv");
        $("#slidingDiv").css("top", `0px`);
    }

    function replayGame() {
        count = 1;
        $("#EndModal").modal('hide');
        $("#scoreSpan").text('0');
        RepeatImages();
    }
})