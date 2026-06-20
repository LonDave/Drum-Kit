
// Ottiene il numero totale di bottoni con la classe drum
let numberIfDrumButtonns = document.querySelectorAll(".drum").length;

// Ciclo per prendere incrementivamente tutti i btn drum al fine di avere i vari eventListener
for (let i = 0; i < numberIfDrumButtonns; i++) {

    // Il valore [i] fa riferimento a quanto presente nel for
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        // Selezione del bottone che viene premuto
        let buttonInnerHTML = this.innerHTML;

        // Selezione per pressione tastiera
        soundsDrum(buttonInnerHTML);

        // Selezione animazione
        btnAnimation(buttonInnerHTML);

    });
}

// Come selezionare la tastiera come input
document.addEventListener('keydown', function (event) {
    soundsDrum(event.key);
    btnAnimation(event.key);
});

// Funzione per richiamare i suoni
function soundsDrum(key) {

    // Il valore di riferimento è l'evento
    switch (key) {
        case "w":
            let tomOne = new Audio('sounds/tom-1.mp3')
            tomOne.play();
            break;
        case "a":
            let tomTwo = new Audio('sounds/tom-2.mp3')
            tomTwo.play();
            break;
        case "s":
            let tomThree = new Audio('sounds/tom-3.mp3')
            tomThree.play();
            break;
        case "d":
            let tomFour = new Audio('sounds/tom-4.mp3')
            tomFour.play();
            break;
        case "j":
            let snare = new Audio('sounds/snare.mp3')
            snare.play();
            break;
        case "k":
            let crash = new Audio('sounds/crash.mp3')
            crash.play();
            break;
        case "l":
            let kick = new Audio('sounds/kick-bass.mp3')
            kick.play();
            break;

        default:
            console.log(buttonInnerHTML)
    }
}

// Animazioni
function btnAnimation(currentKey){
    let activeBtn = document.querySelector("." + currentKey)
    activeBtn.classList.add("pressed");
    
    // Timeout per animazione
    setTimeout(function(){
        activeBtn.classList.remove("pressed");

    }, 100);
}