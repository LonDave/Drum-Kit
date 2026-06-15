
// Ottiene il numero totale di bottoni con la classe drum
let numberIfDrumButtonns = document.querySelectorAll(".drum").length;

// Ciclo per prendere incrementivamente tutti i btn drum al fine di avere i vari eventListener
for (let i = 0; i<numberIfDrumButtonns; i++){

    // Il valore [i] fa riferimento a quanto presente nel for
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        // Codice eseguito una volta che il btn viene cliccato
        console.log("Premuto");
    });
}