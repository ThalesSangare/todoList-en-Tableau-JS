TodoList en JavaScript
Description

Ce projet est une TodoList simple développée en JavaScript vanilla.
Il permet à l’utilisateur d’ajouter, afficher, valider et supprimer des tâches.
Les tâches sont stockées dans un tableau d’objets et sauvegardées dans le localStorage, ce qui permet de conserver les données même après un rechargement de la page.

Fonctionnalités

Ajouter une tâche via un champ de saisie
Ajouter une tâche en cliquant sur le bouton ou avec la touche Entrée
Marquer une tâche comme terminée avec une checkbox
Affichage visuel des tâches terminées (texte barré)
Supprimer une tâche
Sauvegarde automatique des tâches dans le localStorage
Chargement des tâches sauvegardées au démarrage

Fonctionnement du localStorage

Les tâches sont enregistrées avec la clé "taches"
Les données sont converties en JSON avant l’enregistrement
Au chargement de la page, les données sont récupérées et reconverties en tableau
localStorage.setItem('taches', JSON.stringify(tab_taches));
tab_taches = JSON.parse(localStorage.getItem('taches'));

Technologies utilisées

HTML
CSS
JavaScript (Vanilla)
localStorage

Aucune librairie ou framework externe n’est utilisé.

Organisation du code JavaScript

Séparation entre la logique de données et l’affichage
Utilisation de fonctions claires :
ajouterTache() : ajout d’une tâche
afficherTache() : affichage des tâches
Gestion des événements :
clic sur le bouton
touche Entrée
checkbox
suppression


Projet réalisé dans un but pédagogique pour pratiquer :

les tableaux
les objets
la manipulation du DOM
le localStorage en JavaScript
