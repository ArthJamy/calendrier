// Variable pour vérifier si les flocons ont déjà été générés
let snowflakesGenerated = false;

// Fonction pour afficher le contenu dans une case
function revealImage(element) {
    const today = new Date(); // Récupère la date actuelle
    const currentDay = today.getDate(); // Numéro du jour actuel (1 à 31)
    const currentMonth = today.getMonth(); // Mois actuel (0 = Janvier, 11 = Décembre)


    // Récupère le jour cliqué à partir du texte de la div
    const clickedDay = parseInt(element.textContent.trim(), 10);
    
    // Vérifie si le mois actuel est décembre (11 en JS)
    if (currentMonth !== 11) {
        alert("Ce n'est pas encore décembre !😼");
        return; // Arrête l'exécution ici
    }
    
    // Vérifie si le jour cliqué est supérieur au jour actuel
    if (clickedDay > currentDay) {
        alert("Sois patiente ! 😼");
        return; // Arrête l'exécution ici
    }
    
    element.classList.add("active");

    // Si les flocons n'ont pas encore été générés, les créer
    if (!snowflakesGenerated) {
        snowflakesGenerated = true; // Marque les flocons comme générés
        // Générer les flocons à intervalle régulier
        setInterval(generateSnowflakes, 1000);
        generateSnowflakes(); // Démarrage initial
    }
    
}

// Fonction pour générer des flocons sur toute la page
function generateSnowflakes() {
    const body = document.body;
    for (let i = 0; i < 35; i++) { // Ajustez le nombre de flocons
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.textContent = "❄️";
        snowflake.style.left = Math.random() * 100 + "vw";
        snowflake.style.fontSize = Math.random() * 20 + 10 + "px";
        snowflake.style.animationDuration = Math.random() * 5 + 5 + "s";
        snowflake.style.opacity = Math.random() * 0.7 + 0.3;
        body.appendChild(snowflake);

        // Supprime les flocons après l'animation
        setTimeout(() => snowflake.remove(), 10000);
    }
}


// script.js pour agrandir l'image
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('close');
    const thumbnails = document.querySelectorAll('.thumbnail');

    // Lorsqu'on clique sur une image
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = thumbnail.src;
        });
    });

    // Lorsqu'on clique sur le bouton de fermeture
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    });

    // Fermer la lightbox en cliquant à l'extérieur de l'image
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
        }
    });
});
