// Création de la nouvelle section
const section = document.createElement('section');

// Création du titre
const nouveauTitre = document.createElement('h2');
nouveauTitre.textContent = 'Titre ajouté en JavaScript';

// Création du paragraphe
const nouveauParagraphe = document.createElement('p');
nouveauParagraphe.textContent = 'Paragraphe inséré dynamiquement en JS.';
nouveauParagraphe.classList.add('bleu-gras');

// Ajout des éléments à la section
section.appendChild(nouveauTitre);
section.appendChild(nouveauParagraphe);

// Insertion de la section dans le body
document.body.appendChild(section);
