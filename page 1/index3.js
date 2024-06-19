// on recupere l'objet dans le local storage
const filmInfo = localStorage.getItem("filmInfo");

// on transforme le json en javascript utilisable
const filmParse = JSON.parse(filmInfo);
console.log(filmParse);

const div = document.querySelector(".main");
console.log(div);



let html =  ` 
<article>   
<i class="fa-regular fa-circle-xmark" id="croix"></i>
<h2>${filmParse.Title}</h2>
<p>Date de parution : ${filmParse.Year}</p>
<img src="${filmParse.Poster}" alt="Affiche du film ">
</article>`

div.innerHTML += html


const croix = document.getElementById("croix");
console.log(croix);

const article = document.querySelector("article");
console.log(article);


croix.addEventListener("click", (e) => {
    if (e.target.id) {
      article.remove();
      localStorage.removeItem('filmInfo');
    }
})