import React from 'react';
 
import './style.css';

function Recipe({ name, ingredients, cookTime }) {
    // Создайте чистый компонент рецепта
    // 1. Вычислите количество ингредиентов: ingredients.length
    // 2. Создайте копию массива ингредиентов с добавлением "Любовь" в конец
    //    Используйте spread: [...ingredients, "Любовь"]
    // 3. Отобразите все ингредиенты через map
    // 
    // Помните:
    // - Не изменяйте пропсы!
    // - Не изменяйте исходный массив ingredients!
    // - Все вычисления внутри компонента
    
    return (
        <div className="recipe">
            <h3 className="recipe-name">{name}</h3>
            
            <div className="recipe-info">
                <span>⏱️ {cookTime} мин</span>
                <span>🥘 {/* Выведите количество ингредиентов с "Любовь" */} ингредиентов</span>
            </div>
            
            <div className="ingredients">
                <h4>Ингредиенты:</h4>
                <ul>
                    {/* Отобразите все ингредиенты включая "Любовь" */}
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




