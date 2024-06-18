const urlParams = new URLSearchParams(window.location.search);
const ID = urlParams.get("id");
console.log(ID);

const apiKey = "apikey=b670b179"

function magain(data) {
    const objetStringifie = JSON.stringify(data);
    console.log(objetStringifie);
    localStorage.setItem("filmInfo", objetStringifie);
}

const openCard = async () => {
    let URL = "http://www.omdbapi.com/?i=" + ID + "&" + apiKey;
    console.log(URL);

    fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        let html = `
            <article class="cartoucheOpen"> 
                <div>
                    <h1>${data.Title}</h1>
                    <p>Date de parution : ${data.Year}</p>
                    <img src="${data.Poster}" alt="Affiche du film">
                    <a href="./index3.html?id=${data.imdbID}">Rajouter au panier </a>
                    
                </div>
            </article>`;
        document.body.innerHTML += html;

        magain(data);
    })
    .catch(erreur => console.log("erreur", erreur));
}

openCard();
