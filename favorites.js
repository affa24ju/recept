//Backend API url
const apiUrl ="http://localhost:8080/api/favorites";
let showFavoritesBtn = document.getElementById("showFavoritesBtn");

showFavoritesBtn.addEventListener("click", () => {
    window.location.href = "favoriter.html";
});
//Funktion för att visa sparade favoriter
function showFavorites(){
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let favoriteList = document.getElementById("favorit-list");
            //Kontrollera om det finns några sparade favoriter
            if (data.length === 0){
                favoriteList.innerHTML = "<p>Det finns inga sparade favoriter.</p>";
                return;
            }
            //Tömmar listan innan lägger till nya element
            favoriteList.innerHTML = "";
            //Loopar genom alla favoriter & skapar listobjekt
            data.forEach(recipe => {
                let listItem = document.createElement("li");
                listItem.innerHTML = `
                    <div>
                        <h3>${recipe.name}</h3>
                        <img src="${recipe.imageUrl}" alt="${recipe.name}" style="width: 100px;">
                        <button onclick="deleteFavorit('${recipe.id}')">Ta bort favorti</button>
                    </div>
                `;
                favoriteList.appendChild(listItem);

            });
        })
        .catch(error => {
            console.error("Fel vid hämtning av favoriter: ", error);
        });
    
}
//Lägger till eventlistener till 'Visa favoriter' knapp


//Funktion för att ta bort en favorit
function deleteFavorit(){
    //Ska implementera
}