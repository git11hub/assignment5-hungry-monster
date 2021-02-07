// const searchInput = document.getElementById("search-input");

const clickOnSearch = id => {
    const searchInput = document.getElementById(id);
    // console.log(searchInput.value);

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`)
        .then(res => res.json())
        .then(data => displayFoods(data.meals))

        const displayFoods = foods =>{
            const displayFoodItemsDiv = document.getElementById("display-food-items");
            // console.log(displayFoodItemsDiv);          
            for (let i = 0; i < foods.length; i++) {
                const food = foods[i];
                const foodItemDiv = document.createElement('div');
                foodItemDiv.className = 'food-item';
               

                const foodInfo = `
                <img class="width-resize" src="${food.strMealThumb}">
                <h3>${food.strMeal}</h3>
                `;
                foodItemDiv.innerHTML = foodInfo;
                displayFoodItemsDiv.appendChild(foodItemDiv);
                          
            }
        }
    
};


