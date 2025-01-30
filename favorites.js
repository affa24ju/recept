//Backend API url
const apiUrl ="http://localhost:8080/api/favorites";

//Funktion för att lägga till som favorit

function addFavorit(meal){
    const recipe = {
        id: meal.idMeal,
        name: meal.strMeal,
        imageUrl: meal.strMealThumb,
        instructions: meal.strInstructions
    };
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Receptet tillagt som favorit');
        document.getElementById("popup").style.display = "block";
        setTimeout(() => {
            document.getElementById("popup").style.display = "none";
        }, 2000);
            
    })
    .catch(error => console.error('Fel vid tillägg av favorit: ', error));
}



//Funktion för att visa alla favoriter
function showFavorites(){
    //ska implementerat
}

//Funktion för att ta bort en favorit
function deleteFavorit(){
    //Ska implementera
}