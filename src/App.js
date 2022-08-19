import React, { useEffect, useState } from "react";
import "./App.scss";
import InputAndButtons from "./Components/InputAndButtons/InputAndButtons";
import RecipeOutput from "./Components/RecipeOutput/RecipeOutput";
import Logo from "./images/logo.png";

// 135 flour
// 4g baking
// Soda
// 5g salt
// 29g sugar
// 130ml milk
// 14g butter
// 1 egg

function App() {
  const [eggWeight, setEggWeight] = useState(30);
  const [recipe, setRecipe] = useState({
    flour: 0,
    milk: 0,
    sugar: 0,
    bakingSoda: 0,
    salt: 0,
    butter: 0,
  });
  const [flourMod, setFlourMod] = useState(4.5);
  const [milkMod, setMilkMod] = useState(4.3334);
  const [sugarMod, setSugarMod] = useState(1);
  const [bakingSodaMod, setBakingSodaMod] = useState(0.13334);
  const [saltMod, setSaltMod] = useState(0.16667);
  const [butterMod, setButterMod] = useState(0.46667);

  useEffect(() => {
    calculateFormula(eggWeight);

    // if (localStorage.getItem("formulaDetails")) {
    //   console.log("We have local storage");
    //   const formulaDetails = JSON.parse(localStorage.getItem("formulaDetails"));
    //   setFlourMod(formulaDetails.flourMod);
    //   setMilkMod(formulaDetails.milkMod);
    //   setSugarMod(formulaDetails.sugarMod);
    //   setBakingSodaMod(formulaDetails.bakingSodaMod);
    //   setSaltMod(formulaDetails.saltMod);
    //   setButterMod(formulaDetails.butterMod);
    // }
  }, [eggWeight, flourMod]);

  const calculateFormula = () => {
    const newFlour = eggWeight * flourMod;
    const newMilk = eggWeight * milkMod;
    const newSugar = eggWeight * sugarMod;
    const newBakingSoda = eggWeight * bakingSodaMod;
    const newSalt = eggWeight * saltMod;
    const newButter = eggWeight * butterMod;

    setRecipe({
      flour: newFlour,
      milk: newMilk,
      sugar: newSugar,
      bakingSoda: newBakingSoda,
      salt: newSalt,
      butter: newButter,
    });

    const newLocalStorage = {
      eggWeight,
      flourMod,
      milkMod,
      sugarMod,
      bakingSodaMod,
      saltMod,
      butterMod,
    };
    localStorage.setItem("formulaDetails", JSON.stringify(newLocalStorage));
  };

  const changeValue = (modifier, stateVal, setStateFunc) => {
    setStateFunc(toFixedIfNecessary(stateVal + modifier, 2));
    calculateFormula();
  };

  const toFixedIfNecessary = (value, dp) => {
    return +parseFloat(value).toFixed(dp);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt="logo" className="logo" />
        <h1>Flippin' Recipe Man!</h1>
        <p>
          Don't you just <i>love</i> it when a pancake recipe online tells you
          to use <strong>an egg</strong>?
        </p>
        <p>I am also a huge fan of vague incomplete instructions.</p>
        <p>
          On the small chance you like to make food properly, use this app to
          correctly measure out your ingrediants for pancakes based entirely on
          the weight of the eggs.
        </p>
      </header>
      <main>
        <h2>Set egg weight in grams</h2>
        <h6>30g is what Tim likes</h6>
        <InputAndButtons
          changeValue={changeValue}
          setStateFunc={setEggWeight}
          stateVal={eggWeight}
          placeholder="Egg weight in grams"
          modifiers={[-5, -1, 1, 5]}
          toFixedIfNecessary={toFixedIfNecessary}
        />
        <h2>Your new recipe</h2>
        <RecipeOutput recipe={recipe} toFixedIfNecessary={toFixedIfNecessary} />

        <h2>But how to cook pancake?</h2>
        <p>Easy peas.</p>
        <ol className="left">
          <li>Mix dry ingredients.</li>
          <li>Mix wet ingredients.</li>
          <li>Mix dry &amp; wet ingredients.</li>
          <li>Dollop mix into hot greasy pan.</li>
          <li>
            Wait for little Michael Bublés to start appearing on top of your dollop then
            flip.
          </li>
        </ol>
        <p>Thats pretty much it. Like I said. Easy peas.</p>
        <h2>Manipulate formula</h2>
        <p>
          If the desire takes you, you can also change the formula with which
          your recipe is calculated.
        </p>
        <p>Your egg weight will be multiplied by these numbers</p>
        <h3>Flour</h3>
        <InputAndButtons
          changeValue={changeValue}
          setStateFunc={setFlourMod}
          stateVal={flourMod}
          placeholder="Flour modifier"
          modifiers={[-0.5, -0.1, 0.1, 0.5]}
          toFixedIfNecessary={toFixedIfNecessary}
        />

        <h3>Milk</h3>
        <InputAndButtons
          changeValue={changeValue}
          setStateFunc={setMilkMod}
          stateVal={milkMod}
          placeholder="Milk modifier"
          modifiers={[-0.5, -0.1, 0.1, 0.5]}
          toFixedIfNecessary={toFixedIfNecessary}
        />

        <h3>Sugar</h3>
        <InputAndButtons
          changeValue={changeValue}
          setStateFunc={setSugarMod}
          stateVal={sugarMod}
          placeholder="Sugar modifier"
          modifiers={[-0.5, -0.1, 0.1, 0.5]}
          toFixedIfNecessary={toFixedIfNecessary}
        />
        <h3>BakingSoda</h3>
        <InputAndButtons
          changeValue={changeValue}
          setStateFunc={setBakingSodaMod}
          stateVal={bakingSodaMod}
          placeholder="Baking Soda modifier"
          modifiers={[-0.5, -0.1, 0.1, 0.5]}
          toFixedIfNecessary={toFixedIfNecessary}
        />
        <h3>Salt</h3>
        <InputAndButtons
          changeValue={changeValue}
          setStateFunc={setSaltMod}
          stateVal={saltMod}
          placeholder="Salt modifier"
          modifiers={[-0.5, -0.1, 0.1, 0.5]}
          toFixedIfNecessary={toFixedIfNecessary}
        />
        <h3>Butter</h3>
        <InputAndButtons
          changeValue={changeValue}
          setStateFunc={setButterMod}
          stateVal={butterMod}
          placeholder="Butter modifier"
          modifiers={[-0.5, -0.1, 0.1, 0.5]}
          toFixedIfNecessary={toFixedIfNecessary}
        />
      </main>
    </div>
  );
}

export default App;
