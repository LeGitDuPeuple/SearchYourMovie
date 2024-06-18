const button = document.getElementById("bouton");
       

        const nomDuFilm = document.getElementById("input");


        const apiKey = "apikey=b670b179"; 

        document.getElementById("carte")

       



        const cinema2 = async () => {
            let URL3 = "http://www.omdbapi.com/?s=" + nomDuFilm.value + "&" + apiKey;

            console.log(URL3);
        
      const buttonID = document.getElementById("sendo") 
      console.log(buttonID);   


           


            fetch(URL3)
                .then(response => response.json())
                .then(data => {
                    let myData = data.Search;
                    console.log(data);

                    if (data.Response === "False") {
                        alert("Aucun film n'a été trouver ")
                                    }
                    document.getElementById("carte").innerHTML = "";
                   
                    for (let i = 0; i < myData.length; i++) {
                        let monHtml = `
                            <article class="cartouche"> 
                                <div>
                                    <h1> ${myData[i].Title}</h1>
                                    <p>Date de parution : ${myData[i].Year}</p>
                                    <img src="${myData[i].Poster}" alt="Affiche du film">
                                    <a href="./index2.html?id=${myData[i].imdbID }">SELECTION</a>
                                    <p>${myData[i].imdbID}</p>
                                </div>
                            </article>`;
    
                        console.log(myData);
                        document.getElementById("carte").innerHTML += monHtml;
                  
        
        
                   
                //   })
                        

                    }
                })
                .catch(erreur => console.log("erreur", erreur));
        };
      

        button.addEventListener("click", () => {
            console.log(button);
            if (nomDuFilm.value === ""){
                alert("Le champs est vite")
             }
            
             else {

                cinema2();
            }
            // console.log(searchParams.get('imdbId'));
        });

        