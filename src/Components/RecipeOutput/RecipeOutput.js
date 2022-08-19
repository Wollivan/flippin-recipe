import React from "react";

export default function RecipeOutput({ recipe }) {
  return (
    <div className="recipe">
      <div className="recipe__row">
        <span className="recipe__row-title">Flour:</span>{" "}
        <span className="recipe__row-value">
          {parseFloat(recipe.flour).toFixed(2)}g
        </span>
      </div>
      <div className="recipe__row">
        <span className="recipe__row-title">Milk:</span>{" "}
        <span className="recipe__row-value">
          {parseFloat(recipe.milk).toFixed(2)}ml
        </span>
      </div>
      <div className="recipe__row">
        <span className="recipe__row-title">Sugar:</span>{" "}
        <span className="recipe__row-value">
          {parseFloat(recipe.sugar).toFixed(2)}g
        </span>
      </div>
      <div className="recipe__row">
        <span className="recipe__row-title">BakingSoda:</span>{" "}
        <span className="recipe__row-value">
          {parseFloat(recipe.bakingSoda).toFixed(2)}g
        </span>
      </div>
      <div className="recipe__row">
        <span className="recipe__row-title">Salt:</span>{" "}
        <span className="recipe__row-value">
          {parseFloat(recipe.salt).toFixed(2)}g
        </span>
      </div>
      <div className="recipe__row">
        <span className="recipe__row-title">Butter:</span>{" "}
        <span className="recipe__row-value">
          {parseFloat(recipe.butter).toFixed(2)}g
        </span>
      </div>
    </div>
  );
}
