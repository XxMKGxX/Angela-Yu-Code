for (var i = 0; i < document.querySelectorAll(".drum").length; i++)

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)

function handleClick() {
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
}