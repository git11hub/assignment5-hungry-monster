const clickOnSearch = inputId => {
    const searchInput = document.getElementById(inputId);

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`)
        .then(res => res.json())
        .then(data => displayFoods(data.meals))


    const displayFoods = foods => {
        const displayFoodItemsDiv = document.getElementById("display-food-items");

        foods.forEach(food => {
            const foodItemDiv = document.createElement('div');
            foodItemDiv.className = 'food-item';

            const foodInfo = `
                <div onclick = "displayFoodDetails('${food.strMeal}','${food.strMealThumb}','${food.strIngredient1}','${food.strIngredient2}','${food.strIngredient3}','${food.strIngredient4}','${food.strIngredient5}','${food.strIngredient6}','${food.strIngredient7}','${food.strIngredient8}','${food.strIngredient9}','${food.strIngredient10}','${food.strIngredient11}','${food.strIngredient12}','${food.strIngredient13}','${food.strIngredient14}','${food.strIngredient15}','${food.strIngredient16}','${food.strIngredient17}','${food.strIngredient18}','${food.strIngredient19}','${food.strIngredient20}')">
                <img class="width-resize" src="${food.strMealThumb}">
                <h3>${food.strMeal}</h3>
                </div>
                `;
            foodItemDiv.innerHTML = foodInfo;
            displayFoodItemsDiv.appendChild(foodItemDiv);
        });
    };
};

const displayFoodDetails = (foodName, foodImage, ingredients1, ingredients2, ingredients3, ingredients4, ingredients5, ingredients6, ingredients7, ingredients8, ingredients9, ingredients10, ingredients11, ingredients12, ingredients13, ingredients14, ingredients15, ingredients16, ingredients17, ingredients18, ingredients19, ingredients20) => {
    const displayFoodName = document.getElementById("display-details");

    const ingredientsSection = `
    <img id="width-resize-id" src="${foodImage}">
    <h1>${foodName}</h1>
    <h3>Ingredients:</h3>
    <p>${ingredients1}</p>
    <p>${ingredients2}</p>
    <p>${ingredients3}</p>
    <p>${ingredients4}</p>
    <p>${ingredients5}</p>
    <p>${ingredients6}</p>
    <p>${ingredients7}</p>
    <p>${ingredients8}</p>
    <p>${ingredients9}</p>
    <p>${ingredients10}</p>
    <p>${ingredients11}</p>
    <p>${ingredients12}</p>
    <p>${ingredients13}</p>
    <p>${ingredients14}</p>
    <p>${ingredients15}</p>
    <p>${ingredients16}</p>
    <p>${ingredients17}</p>
    <p>${ingredients18}</p>
    <p>${ingredients19}</p>
    <p>${ingredients20}</p>
    
    `;
    displayFoodName.innerHTML = ingredientsSection;

};

