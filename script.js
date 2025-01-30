//Variables som tar emot html element
let searchBtn = document.getElementById("searchBtn");
let result = document.getElementById("result");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

searchBtn.addEventListener("click", () => {
    let userInput = document.getElementById("userInput").value;
    if (userInput.length == 0) {
        result.innerHTML = `<h3>Måste skriva nåt... t.ex. pizza!</h3>`;
    } else {
        fetch(url + userInput)
    .then((response) => response.json())
    .then((data) => {
        //console.log(data);
        let myMeal = data.meals[0];
        /*console.log(myMeal);
        console.log(myMeal.strMealThumb);
        console.log(myMeal.strMeal);
        console.log(myMeal.strArea);
        console.log(myMeal.strInstructions); */     
        let count = 1;
        let ingredients = [];
        for (let i in myMeal) {
            let ingredient = "";
            let measure = "";
            if (i.startsWith("strIngredient") && myMeal[i]) {
                ingredient = myMeal[i];
                measure = myMeal[`strMeasure` + count];
                count += 1;
                //console.log(ingredient, measure);
                ingredients.push(`${measure} ${ingredient}`);
                
            }
        }
        console.log(ingredients);

        result.innerHTML = `
        <img src=${myMeal.strMealThumb}>
        <div class="details">
            <h2>${myMeal.strMeal}</h2>
            <h4>${myMeal.strArea}</h4>
        </div>
        <div id="ingredient-con"></div>
        <div id="receipe">
            <button id="hide-receipe">X</button>
            <pre id="instructions">${myMeal.strInstructions}</pre>
        </div>
        <button id="show-receipe">Visa Recept</button>
        <button id="add-favorit">Lägg till som favorit</button>
        <div id="popup">Lagt till som favorit.</div>
        `;

        let ingredientCon = document.getElementById("ingredient-con");
        let parent = document.createElement("ul");
        let receipe = document.getElementById("receipe");
        let hideReceipe = document.getElementById("hide-receipe");
        let showReceipe = document.getElementById("show-receipe");
        let addFavorit = document.getElementById("add-favorit");
        let popup = document.getElementById("popup");

        ingredients.forEach((i) => {
            let child = document.createElement("li");
            child.innerText = i;
            parent.appendChild(child);
            ingredientCon.appendChild(parent);
        });

        hideReceipe.addEventListener("click", () => {
            receipe.style.display = "none";
        });
        showReceipe.addEventListener("click", () => {
            receipe.style.display = "block";
        });
        addFavorit.addEventListener("click", () => {
            console.log("Lägger till favorit...");
            //addFavorit(myMeal);
            const recipe = {
                id: myMeal.idMeal,
                name: myMeal.strMeal,
                imageUrl: myMeal.strMealThumb,
                instructions: myMeal.strInstructions
            };
            fetch("http://localhost:8080/api/favorites", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recipe),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Receptet tillagt som favorit');
                popup.style.display = "block";
                setTimeout(() => {
                    popup.style.display = "none";
                }, 2000);
                    
            })
            .catch(error => console.error('Fel vid tillägg av favorit: ', error));

        });

        
    })
    .catch(() => {
        result.innerHTML = `<h3>Ogiltig text! Försök igen.</h3>`;
    });
    
    }
});
//funktion för att lägga till som favorit
/*
function addFavorit(meal){
    let popup = document.getElementById("popup");
    const recipe = {
        id: meal.idMeal,
        name: meal.strMeal,
        imageUrl: meal.strMealThumb,
        instructions: meal.strInstructions
    };
    fetch("http://localhost:8080/api/favorites", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Receptet tillagt som favorit');
        popup.style.display = "block";
        setTimeout(() => {
            popup.style.display = "none";
        }, 2000);
            
    })
    .catch(error => console.error('Fel vid tillägg av favorit: ', error));
}*/



