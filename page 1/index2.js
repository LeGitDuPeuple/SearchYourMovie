
    const urlParams = new URLSearchParams(window.location.search);
    const ID = urlParams.get("id");
    console.log(ID);
   
    const apiKey = "apikey=b670b179"

    const carteOuvert = document.getElementById("openCard")

    
   
 

    const openCard = async  () => {
        let URL = "http://www.omdbapi.com/?i=" + ID + "&" + apiKey;
        console.log(URL);

        fetch(URL)
        .then (response => response.json())
        .then (data =>  {
    
            console.log(data);

            for (let i = 0; i < data.length; i++){

                 let html = `
                            <article class="cartoucheOpen"> 
                                <div>
                                    <h1> ${data[i].Title}</h1>
                                    <p>Date de parution : ${data[i].Year}</p>
                                    <img src="${data[i].Poster}" alt="Affiche du film">
                                    <a href="./index2.html?id=${data[i].imdbID }">SELECTION</a>
                                    <p>${data[i].imdbID}</p>
                                </div>
                            </article>`;
                            carteOuvert.innerHTML += html;
            }
        })
        .catch(erreur => console.log("erreur", erreur));
    }

    openCard()


   