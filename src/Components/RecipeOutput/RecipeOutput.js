import React from "react";

export default function RecipeOutput({ recipe, toFixedIfNecessary }) {
  return (
    <div className="recipe">
      <div className="recipe__row">
        <span className="recipe__row-title">Flour:</span>{" "}
        <span className="recipe__row-value">
          {toFixedIfNecessary(recipe.flour, 2)}g
        </span>
      </div>
      <div className="recipe__row">
        <span className="recipe__row-title">Milk:</span>{" "}
        <span className="recipe__row-value">
          {toFixedIfNecessary(recipe.milk, 2)}ml
        </span>
      </div>
      <div className="recipe__row">
        <span className="recipe__row-title">Sugar:</span>{" "}
        <span className="recipe__row-value">
          {toFixedIfNecessary(recipe.sugar, 2)}g
        </span>
      </div>
      <div className="recipe__row">
        <span className="recipe__row-title">Baking Soda:</span>{" "}
        <span className="recipe__row-value">
          {toFixedIfNecessary(recipe.bakingSoda, 2)}g
        </span>
      </div>
      <div className="recipe__row">
        <span className="recipe__row-title">Salt:</span>{" "}
        <span className="recipe__row-value">
          {toFixedIfNecessary(recipe.salt, 2)}g
        </span>
      </div>
      <div className="recipe__row">
        <span className="recipe__row-title">Melted Butter:</span>{" "}
        <span className="recipe__row-value">
          {toFixedIfNecessary(recipe.butter, 2)}g
        </span>
      </div>
    </div>
  );
}
