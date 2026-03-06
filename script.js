//on récupère le formulaire
const form = document.getElementById("citation-form");
//on récupère le dv contenant les citations
const quoteList = document.getElementById("quote-list");
let quoteCount = 0;

//on ecoute le submit
function listenForm() {
  form.addEventListener("submit", (event) => {
    event.preventDefault(); //Pour éviter le rechargement de la page à chaque submit;
    //on stocke les citations et les auteurs
    const citation = document.getElementById("citation").value;
    const author = document.getElementById("author").value;
    addQuote(citation, author);
  });
  function addQuote(citation, author) {
    //on crée deux élement p:
    const textQuote = document.createElement("p");
    const authorQuote = document.createElement("p");
    //on insere le texte du form dans les nouveaux éléments p :
    textQuote.className = "citationText";
    textQuote.innerText = citation;
    authorQuote.className = "author";
    authorQuote.innerText = author;
    console.log(textQuote);
    console.log(authorQuote);
    //On crée un nouvelle div intermédiaire
    const quote = document.createElement("div");
    quote.className = "quote"; //on applique la classe à la div
    //On lie les éléments précédents à la liste:
    quote.appendChild(textQuote);
    quote.appendChild(authorQuote);
    //On relie cette nouvelle div à la liste:
    quoteList.appendChild(quote);
    console.log(quoteList);
    //Compteur:
    quoteCount += 1; //Je met une incrémentation à chaque citations déposées
    let count = document.getElementById("count");
    count.innerText = `${quoteCount} citations`;
  }
}

listenForm();
