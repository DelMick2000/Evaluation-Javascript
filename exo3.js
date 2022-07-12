
    var tableau = ["Audrey","Aurelien","Flavien","Jeremy","Laurent","Melik","Nouara","Salem","Samuel","Stephane"];
    var saisie = window.prompt("Veuillez choisir un prénom Audrey,Aurelien,Flavien,Jeremy,Laurent,Melik,Nouara,Salem,Samuel,Stephane.")
    if (tableau.includes(saisie)){
        tableau.splice (tableau.indexOf(saisie),1);
        tableau.push(" ");
        console.log(tableau)
    }
    else { 
        alert ("erreur")
    }