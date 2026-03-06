//on récupère le formulaire
const form = document.getElementById("citation-form");
//on récupère le dv contenant les citations
const quoteList = document.getElementById("quote-list");
//on ecoute le submit
form.addEventListener("submit", (event) => {
  event.preventDefault();
  //on stocke les citations et les auteurs
  const citation = document.getElementById("citation").value;
  const author = document.getElementById("author").value;
  //on cree un nouvel element div
  const quote = document.createElement("div");
  //on insere le texte du form dans le nouvel element
  quote.innerHTML = `<p class="text">${citation}</p><p class="author">${author}</p>`;
  quoteList.appendChild(quote);
});
