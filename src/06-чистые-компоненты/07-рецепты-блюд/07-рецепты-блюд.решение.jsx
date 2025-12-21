import React from 'react';
 
import './style.css';

function Recipe({ name, ingredients, cookTime }) {
    const ingredientsWithLove = [...ingredients, "Любовь"];
    const totalIngredients = ingredientsWithLove.length;
    
    return (
        <div className="recipe">
            <h3 className="recipe-name">{name}</h3>
            
            <div className="recipe-info">
                <span>⏱️ {cookTime} мин</span>
                <span>🥘 {totalIngredients} ингредиентов</span>
            </div>
            
            <div className="ingredients">
                <h4>Ингредиенты:</h4>
                <ul>
                    {ingredientsWithLove.map((ingredient, index) => (
                        <li key={index} className={ingredient === "Любовь" ? "special" : ""}>
                            {ingredient}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function App() {
    const recipes = [
        {
            id: 1,
            name: "Паста Карбонара",
            ingredients: ["Спагетти", "Бекон", "Яйца", "Сыр Пармезан"],
            cookTime: 20
        },
        {
            id: 2,
            name: "Греческий салат",
            ingredients: ["Помидоры", "Огурцы", "Сыр Фета", "Оливки", "Лук"],
            cookTime: 10
        }
    ];
    
    return (
        <div className="container">
            <h1 className="title">Книга рецептов</h1>
            <p className="description">
                Комплексный пример: чистые функции, неизменяемость, локальные вычисления
            </p>
            
            <div className="recipes">
                {recipes.map(recipe => (
                    <Recipe 
                        key={recipe.id}
                        name={recipe.name}
                        ingredients={recipe.ingredients}
                        cookTime={recipe.cookTime}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;




