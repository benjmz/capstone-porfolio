const button = document.querySelector(".btn");
button.addEventListener("click", function () {
    letsBoogie();
}
)

const diceOne = document.querySelector("#dice1");
const diceTwo = document.querySelector("#dice2");

function letsBoogie() {
    var diceRoll1 = Math.floor(Math.random() * 6 + 1);
    var diceRoll2 = Math.floor(Math.random() * 6 + 1);

    diceOne.classList.remove("rolling");
    diceTwo.classList.remove("rolling");
    diceOne.classList.add("rolling");
    diceTwo.classList.add("rolling");

    for (var i = 1; i <= 6; i++) {
        diceOne.classList.remove("show-"+ i);
        if (i === diceRoll1)
        diceOne.classList.add("show-"+ i);
    }

    for (var j = 1; j <= 6; j++) {
        diceTwo.classList.remove("show-"+ j);
        if (j === diceRoll2)
        diceTwo.classList.add("show-"+ j);
    }
    setTimeout(() => {
        diceOne.classList.remove("rolling");
        diceTwo.classList.remove("rolling");
    }, 2000);
}


