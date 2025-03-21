let searchBox = document.querySelector(".search-box");
let searchBtn = document.querySelector(".search-button");
let mainDiv = document.querySelector(".main");
let recipeContent = document.querySelector(".recipe-details-content");
let recipeDetails = document.querySelector(".recipe-details");
let closeBtn = document.querySelector(".recipe-details button");
let imageBox = document.querySelector(".main .image-box");
let quoteBox = document.querySelector(".main .quote-box");

const fetchRecipes = async (input) => {
    mainDiv.innerHTML = `<h2>searching for ${input}...</h2>`;
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
    let convertedData = await data.json();
    console.log(convertedData);

    mainDiv.innerHTML = '';
    if(convertedData.meals){
        convertedData.meals.forEach(meal => {
            let recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');
            recipeDiv.innerHTML = `
                <img src="${meal.strMealThumb}">
                <h3>${meal.strMeal}</h3>
                <p>Category: ${meal.strCategory}</p>
            `
    
            let btn = document.createElement('button');
            btn.textContent = "View Recipe";
            recipeDiv.appendChild(btn);
    
            btn.addEventListener("click", () => {
                openRecipeDetails(meal);
            });
            mainDiv.appendChild(recipeDiv);
        });
    }
    else{
        mainDiv.innerHTML = `<h2>No results found for ${input}</h2>`;
        mainDiv.style.opacity = '0.2';
    }
    
};

searchBtn.addEventListener("click", () => {
    let searchValue = searchBox.value;
    if(searchValue){
        fetchRecipes(searchValue);
    }
    else{
        mainDiv.innerHTML = '<h2>Enter item to search</h2>' ;
        mainDiv.style.opacity = '0.2';
    }
   
});

function openRecipeDetails(meal){
    recipeContent.innerHTML = `
    <h2>Name: ${meal.strMeal}</h2>
    <br>
    <p><b>Category:</b> ${meal.strCategory}</p>
    <br>
    <p><b>Ingredients:</b></p>
    ${getIngredients(meal)}
    <br><br>
    <p><b>Instructions:</b></p>
    ${meal.strInstructions}
    `;

    recipeDetails.style.display = "initial";
}

closeBtn.addEventListener("click", () => {
    recipeDetails.style.display = "none";
});

function getIngredients(meal){
    let ingredientList = [];
    for(let i=1; i<=20; i++){
        let ingredient = meal[`strIngredient${i}`];
        if(ingredient){
            ingredientList.push(ingredient);
        }
    }
    return ingredientList.join(" , ");
}