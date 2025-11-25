let villes =[
    {id: "paris", timezone:"Europe/Paris"},
    {id: "londre", timezone:"Europe/London"},
    {id: "newYork", timezone:"America/New_York"},
    {id: "tokyo", timezone:"Asia/Tokyo"}
]

function heure(id, timezone){
    let date = new Date();
    let heure_repaire = date.toLocaleTimeString("fr-FR", {timeZone:timezone});
    document.getElementById(id).textContent = heure_repaire
}

function Actualiser(){
    villes.forEach(elt =>{
        heure(elt.id, elt.timezone);
        setInterval(()=> heure(elt.id, elt.timezone), 500)
    })
}

window.onload = Actualiser();