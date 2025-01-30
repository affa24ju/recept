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
                        <button id="deleteFavoritBtn" onclick="deleteFavorit('${recipe.id}')">Ta bort från favorit</button>
                    </div>
                `;
                favoriteList.appendChild(listItem);

            });
        })
        .catch(error => {
            console.error("Fel vid hämtning av favoriter: ", error);
        });
    
}



//Funktion för att ta bort en favorit
function deleteFavorit(id){
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok){
            //vid lyckad delete uppdaterar listan
            alert('Recept borttaget från favorit!');
            showFavorites();
        } else {
            alert('Fel vid borttagning av favorit!');
        }
    })
    .catch(error => {
        console.error("Fel vid borttagning av favorit: ", error);
        
    });

    
}