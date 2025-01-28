//Variables som tar imot html element
let searchBtn = document.getElementById("searchBtn");
let result = document.getElementById("result");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

let userInput = document.getElementById("userInput").value;

fetch(url + "big mac")
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
            <h2>${myMeal.strArea}</h2>
        </div>
        `;
        
        
    });
