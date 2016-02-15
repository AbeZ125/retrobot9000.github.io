var applePie = {
    Äpplen : 6,
    Smör : 150,
    Socker : 1.5,
    Havregryn : 3,
    Mjöl : 1.5,
    Bakpulver : 0.5,
    Sirap : 0.5,
    Mjölk : 2
};

function autoList(factor){
    for(var i in applePie) {
    document.body.innerHTML += i + ": " + applePie[i]*factor + "<br />";
    }
}

