//Au chargement de la page récupérer les items du tableau :
let quoteSave = JSON.parse(localStorage.getItem("quoteStorage")) || [];

//Déclaration des variables hors fonctions:
const form = document.getElementById("citation-form"); //on récupère le formulaire
const quoteList = document.getElementById("quote-list"); //on récupère la div principale contenant les citations
let quoteCount = 0; //Initialisation de la variable compteur
//Déclaration d'un tableau objet pour l'étape 7 :
const citationArray = [
  {
    author: "Benoîte Groult",
    citation: "Ca dure toute la vie une évasion, c'est tout temps à refaire.",
  },
  {
    author: "Virginia Woolf",
    citation:
      "Une femme doit avoir de l'argent et une chambre à soi pour écrire de la fiction.",
  },
];

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
//Fonction ajouter une citation et la push dans localstorage :
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
  //Changer l'objet en string et le sauvegarder dans le localstorage:
  localStorage.setItem("quoteStorage", JSON.stringify(quoteSave));
}

//Fonction ajouter une citation sans la push dans le localstorage:
function displayQuote(citation, author) {
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
}
listenForm();

//Fonction pour afficher les citations du tableau ou du localstorage :
function loadQuotes() {
  if (quoteSave.length === 0) {
    citationArray.forEach((quoteItem) =>
      addQuote(quoteItem.citation, quoteItem.author),
    );
  } else {
    quoteSave.forEach((quoteItem) =>
      displayQuote(quoteItem.citation, quoteItem.author),
    );
  }
}

loadQuotes();
