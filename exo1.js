var jeune =0;
var moyen =0;
var vieux =0;
var total =0;

    while (total<=100)
{
    total = window.prompt("Entrez votre age");

    if (total <20)

        {
            jeune++;
        }

    else if (total >=20 && total <=40)

        {
            moyen++;
        }

        else if (total >40 && total <=100);
    
        {
            vieux++;
        }
}

        console.log ("les personnes moins de 20 ans" + jeune);
        console.log ("les personnes entre 40 et 20" + moyen);
        console.log ("les personnes entre 40 et 100 ans" + vieux);
        