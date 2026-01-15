// Recuperation des elements html
const btn = document.getElementById("btn");
let liste = document.querySelector("ul");
let input = document.querySelector("input");


let tab_taches = [];

// Recuperation des taches deja enreg dans localStorage
const savedTaches = localStorage.getItem('taches');
if (savedTaches) {
    tab_taches = JSON.parse(savedTaches);
    afficherTache();
}

// fonction affichage des taches
function afficherTache() {
  liste.innerHTML = "";

  tab_taches.forEach((tache, index) => {

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tache.fait;

    checkbox.addEventListener('change', () => {
        tab_taches[index].fait = checkbox.checked;
        localStorage.setItem('taches', JSON.stringify(tab_taches));
        // afficherTache();
         span.classList.toggle('fait', tache.fait);
    });

    const span = document.createElement("span");
    span.textContent = tache.texte;

    if (tache.fait) {
            span.classList.add('fait');
        }

    const btnSup = document.createElement('button');
    btnSup.innerText = 'x';

    btnSup.addEventListener('click', () => {
        tab_taches.splice(index, 1);
        localStorage.setItem('taches', JSON.stringify(tab_taches));
        afficherTache();
        
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btnSup);
    liste.appendChild(li);
  });
}


function ajouterTache() {
    if (input.value.trim() === '') return;

    tab_taches.push({
        texte: input.value,
        fait: false
    });
    // Enregistrement dans localStorage
localStorage.setItem('taches', JSON.stringify(tab_taches));
    input.value = '';
    afficherTache();
}

btn.addEventListener("click", ajouterTache);
input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        ajouterTache();
    }
});
