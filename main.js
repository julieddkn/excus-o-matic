let list = [
    "Mon chat est mort .. 🥹", 
    "C'est l'anniversaire de mon chat ! 🥳",
    "C'est l'anniversaire de la mort de mon chat 🤪",
    "Mon chien l'a mangé 🤷🏻‍♀️",
    "Panne de pile de batterie de mon réveil ! 🥸",
    "Panne de voiture de ma mère .. 😌",
    "J'trouvais plus mon pantalon ! 😯",
    "J'ai pas trouvé mes cheveux ! 😩",
    "Je trouvais plus les clés de mon réveil ..! 🫠"
];
let insertHere = document.getElementById('list');

function handleClick() {
    let listLenght = list.length;
    let random = Math.floor(Math.random() * listLenght);
    let excuse = list[random];
    insertHere.innerText = excuse;
}
    

