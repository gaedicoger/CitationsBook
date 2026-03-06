//Au chargement de la page récupérer la string stockée dans localStorage ou tableau vide pour éviter de retourner "null" :
let quoteSave = JSON.parse(localStorage.getItem("quoteStorage")) || [];

//Déclaration des variables hors fonctions:
const form = document.getElementById("citation-form"); //on récupère le formulaire
const quoteList = document.getElementById("quote-list"); //on récupère la div principale contenant les citations
let quoteCount = 0; //Initialisation de la variable compteur

//Parser le tableau pour le transformer en string et la stocker dans localStorage :
//localStorage.setItem("quoteStorage", JSON.stringify(citationArray));

//Fonction écoute du submit et stockage des propositions :
function listenForm() {
  form.addEventListener("submit", (event) => {
    event.preventDefault(); //Pour éviter le rechargement de la page à chaque submit;
    //on stocke les citations et les auteurs
    const citation = document.getElementById("citation").value;
    const author = document.getElementById("author").value;
    addQuote(citation, author);
  });
}
//Fonction ajouter une citation :
function addQuote(citation, author) {
  //on crée deux élement p:
  const textQuote = document.createElement("p");
  const authorQuote = document.createElement("p");
  //on insere le texte du form dans les nouveaux éléments p :
  textQuote.className = "citationText";
  textQuote.innerText = citation;
  authorQuote.className = "author";
  authorQuote.innerText = author;
  //console.log(textQuote);
  //console.log(authorQuote);
  //On crée un nouvelle div intermédiaire :
  const quote = document.createElement("div");
  quote.className = "quote"; //On applique la classe à la div

  //On lie les éléments précédents à la liste :
  quote.appendChild(textQuote);
  quote.appendChild(authorQuote);
  //On relie cette nouvelle div à la liste:
  quoteList.appendChild(quote);
  //console.log(quoteList);
  //Ajouter un espace entre les citations :
  const space = document.createElement("hr");
  quote.appendChild(space);

  //Compteur:
  quoteCount += 1; //Je met une incrémentation à chaque citations déposées
  const count = document.getElementById("count");
  count.innerText = `${quoteCount} citations`;

  //Etape 7 : Créer un objet:
  const newQuoteSave = { author: author, citation: citation };
  //Push l'objet dans le tableau quoteSave au début:
  quoteSave.push(newQuoteSave);
  //Changer l'objet en string et le sauvagarder dans le localstorage:
  localStorage.setItem("quoteStorage", JSON.stringify(quoteSave));
}

listenForm();

//Etape 7 en cours :
/*function save() {
  quoteSave.forEach((quoteItem) =>
    addQuote(quoteItem.citation, quoteItem.author),
  );
}*/
