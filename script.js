//Variables som tar imot html element
let searchBtn = document.getElementById("searchBtn");
let result = document.getElementById("result");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

let userInput = document.getElementById("userInput").value;

fetch(url + "pizza")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        
    });
