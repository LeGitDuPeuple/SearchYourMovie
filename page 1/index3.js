const filmInfo = localStorage.getItem("filmInfo");

const filmParse = JSON.parse(filmInfo);
console.log(filmParse);


document.body.innerHTML += ` <h1>${filmParse.Title}</h1>
                    <p>Date de parution : ${filmParse.Year}</p>
                    <img src="${filmParse.Poster}" alt="Affiche du film">`
