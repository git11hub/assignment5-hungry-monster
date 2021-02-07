// const inputId = document.getElementById('search-input');
const clickOnSearch = inputId => {
    const searchInput = document.getElementById(inputId);    

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`)
        .then(res => res.json())
        .then(data => displayFoods(data.meals))

        const displayFoods = foods =>{
            const displayFoodItemsDiv = document.getElementById("display-food-items");
                      
            foods.forEach(food => {
                const foodItemDiv = document.createElement('div');
                foodItemDiv.className = 'food-item';                             
                // foodItemDiv.onclick = displayFoodDetails('testing Div');                             

                const foodInfo = `
                <div onclick = "displayFoodDetails('${food.strMeal}','${food.strMealThumb}')">
                <img class="width-resize" src="${food.strMealThumb}">
                <h3>${food.strMeal}</h3>
                </div>
                `;
                foodItemDiv.innerHTML = foodInfo;
                displayFoodItemsDiv.appendChild(foodItemDiv);              
            });            
        };   
};

const displayFoodDetails = (name,foodImage) => {
    console.log(name);
    // const foodName = name.innerHTML; ...........remain comment ................
    const displayFoodName = document.getElementById("display-details");     

    const ingredientsSection = `
    <img id="width-resize-id" src="${foodImage}">
    <h1>${name}</h1>
    <p>${name}</p>
    `;
    displayFoodName.innerHTML = ingredientsSection;    

    console.log(ingredientsSection);
};


