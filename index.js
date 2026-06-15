
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


function add(num1, num2){
    return num1+num2;
}

function multiply(num1, num2){
    return num1*num2;
}

// operator serve per chiamare una funzione add/multiplay
function calculator(num1, num2, operator){
    return operator(num1, num2); 
}

// debugger;
// calculator(2,3, multiply)