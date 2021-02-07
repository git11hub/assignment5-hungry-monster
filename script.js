const clickOnSearch = id => {
    const searchInput = document.getElementById(id);    

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`)
        .then(res => res.json())
        .then(data => displayFoods(data.meals))

        const displayFoods = foods =>{
            const displayFoodItemsDiv = document.getElementById("display-food-items");
                      
            foods.forEach(food => {
                const foodItemDiv = document.createElement('div');
                foodItemDiv.className = 'food-item';               

                const foodInfo = `
                <img class="width-resize" src="${food.strMealThumb}">
                <h3>${food.strMeal}</h3>
                `;
                foodItemDiv.innerHTML = foodInfo;
                displayFoodItemsDiv.appendChild(foodItemDiv);
            });            
        }    
};


