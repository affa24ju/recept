# Recept
Den här är en frontend applikation som tar kontakt med två olika API'er. För det första använder den ett external API The Meal Database: https://www.themealdb.com/api.php för att visa recept. Och den andra är ett eget API skapats med Spring Boot som står helt seperat.

# Användning
Man kan söka för ett recept och lägga till som favorit. De favoriter sparats i en json fil i backend. Sedan kan man se sina tillagda favoriter och kan eventuellt ta bort ett från favorit. Blir du sugen på nåt gott...recept finns här :-)   

# Byggts med
Applikationen byggts med:
  * HTML
  * CSS
  * JavaScript
    
I backend finns API som byggts med Spring Boot.

# Installation:
 Backend behöver vara igång först. 

   ## Köra backend:
     - Klona ner Repo: https://github.com/affa24ju/receptSpringRestApi
     - Öppna upp den med IDE t.ex. VSC.
     - Köra applikationens ReceptSpringRestApiApplication.
     - Vill man testa själva backenden, kan göra det med Postman. Instruktioner finns i Readme filen.

  ## Köra frontend:
    - Klona ner repo.
    - Öppna den med IDE, t.ex. VSC.
    - Köra programmets index fil med Live Server.
    - Kommer man fram till första sidan där kan söka för recept. Exempel: Pizza, Chicken, Carrot cake, Tandoori, Dal fry eller Big Mac!
    - Här visar alla ingredienser och en image.
    - 'Visa recept' knappen visar hela instruktioner.
    - Klicar man på 'Lägg till som favorit', sparas det i backenden.
    - Obs! Backenden måste vara igång för att kunna lägga till recept som favorit.
    - 'Visa Favoriter' visar tillagda favoriter med namn och image. Här kan man ta bort ett från favorit.

# Vidare utveckling
- I nu läget visar bara namn och bild på recept. Kan lägga till funktion så att man kommer fram till recepet därifrån.
- Det skulle kunna gå att ändra på/ uppdatera som man själv vill när man har en sparade favorit.
- Start sidan kan få ett bättre utseende med lite bilder och mer... 
