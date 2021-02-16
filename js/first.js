
let allRecipes = [];
let recipeDetailes = {};
let searchInput = document.getElementById('searchInput');
let searchBtn = document.getElementById('searchBtn');


async function getRecipes(term)
{

let apiResponse = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${term}`);
 allRecipes = await apiResponse.json();
allRecipes = allRecipes.recipes;

displayRecipes();

}


getRecipes('beef'); 
function displayRecipes(all)
{

let cartoona = ``;

for(let i=0 ; i < allRecipes.length; i++)
{
 
let myId = "'"+allRecipes[i].recipe_id+"'";

cartoona +=` <div class="col-md-4">

<div class="recipe" onclick="getRecipesDetails(${myId})">
  <img class="w-100" src="${allRecipes[i].image_url}" alt="">
  <h3 class="color-mine py-1">${allRecipes[i].title}</h3>
  <p>${allRecipes[i].publisher}</p>

</div>

</div>


`;

}

document.getElementById('recipesRow').innerHTML = cartoona;
}


searchBtn.addEventListener('click', function(){

  getRecipes(searchInput.value);
})





async function getRecipesDetails(id){
  let apiResponsre = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
  recipeDetailes = await apiResponsre.json();
  recipeDetailes = recipeDetailes.recipe;
  displayRecipeDeailes();
  
  
}


function displayRecipeDeailes()
{

let cartoona = `<div class="recipeDetails py-3">
<h2 class="color-min py-1 ">${recipeDetailes.title}</h2>
<img   src="${recipeDetailes.image_url}" class="w-100"  alt="">
<ul class="fa-ul py-3">`;

for (let x  of recipeDetailes.ingredients) {
  cartoona+=`<li class="d-flex align-items-center font-weight-bolder"><span class="fa-li"><i class="fas fa-utensil-spoon"></i></span>${x}</li>`
}

 
  cartoona+= `</ul>
</div>`;


document.getElementById('recipeDetails').innerHTML = cartoona;
}

















