// creation d'une fonction pour manipuler le tableau
function manipulerTableau(tab, operation){
    // soit deux tableaux (tab1 et tab2) de nombre positif et negatif saisis par l'utilisateur :
let tab1 = document.getElementById('tab1').value;
let tab2 = document.getElementById('tab2').value;
// conversion des chaines e nombre et utilisation de split pour separer les element par virgules

tab1 = tab1.split(',').map(function(element){
    return Number(element);
});
tab2 = tab2.split(',').map(function(element){
    return Number(element);
});
    // recopier les element positives de tab1 dans tab3
    let tab3 = tab1.filter(function(element){
        return element > 0;
    });
    
    // remplacer les element de tab2 par 0 dans tab4
    let tab4 = tab2.map(function(element){
        return element = 0;
    });

    // afficher les element de tab3 et tab4
    document.getElementById('resulttab1').innerHTML = tab1;
    document.getElementById('resulttab2').innerHTML = tab2;
    document.getElementById('resulttab3').innerHTML = tab3;
    document.getElementById('resulttab4').innerHTML = tab4;
    
}