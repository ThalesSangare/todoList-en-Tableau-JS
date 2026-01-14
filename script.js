const btn = document.getElementById('btn');
let input = document.querySelector('input');
let liste = document.querySelector('ul');

let tableauTache = [];

function afficher() {
    liste.innerHTML = '';

    tableauTache.forEach((tache, index) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tache.fait;

        checkbox.addEventListener('change', () =>{
            tableauTache[index].fait = checkbox.checked;
            afficher();
        });

        const span = document.createElement('span');
        span.textContent = tache.texte;

        const btnSup = document.createElement('button');
        btnSup.textContent = "Delete";
        btnSup.addEventListener('click',() =>{
            tableauTache.splice(index,1);
            afficher();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(btnSup);
        liste.appendChild(li);
    });  
}

function ajouterTache(){
    if(input.value.trim() === '')
        return;
    tableauTache.push({
        texte: input.value,
        fait: false
    });
    input.value = '';
    afficher();
}
btn.addEventListener("click", ajouterTache);