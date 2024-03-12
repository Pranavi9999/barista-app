import React, { useState } from "react";
import drinksJson from "./drinks.json";
import RecipeChoices from "./RecipeChoices";

const BaristaForm = () => {
  const [currentDrink, setCurrentDrink] = useState('');
  const [trueRecipe, setTrueRecipe] = useState({});
  const [correct_temp, setCheckedTemperature] = useState('');
  const [correct_syrup, setCheckedSyrup] = useState('');
  const [correct_milk, setCheckedMilk] = useState('');
  const [correct_blended, setCheckedBlended] = useState('');
  const [inputs, setInputs] = useState({
    'temperature': '',
    'milk': '',
    'syrup': '',
    'blended': ''
  });
  const ingredients = {
    'temperature': ['hot', 'lukewarm', 'cold'],
    'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
    'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
    'blended': ['yes', 'turbo', 'no']
  };

  const getNextDrink = () => {
    let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
    setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
    setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
    setInputs({
      'temperature': '',
      'milk': '',
      'syrup': '',
      'blended': ''
    });
    setCheckedTemperature('');
    setCheckedSyrup('');
    setCheckedMilk('');
    setCheckedBlended('');
  };

  const onNewDrink = () => {
    getNextDrink();
  };

  const onCheckAnswer = () => {
    const onCheckAnswer = () => {
        let isTempCorrect = trueRecipe.temperature === inputs.temperature;
        let isSyrupCorrect = trueRecipe.syrup === inputs.syrup;
        let isMilkCorrect = trueRecipe.milk === inputs.milk;
        let isBlendedCorrect = trueRecipe.blended === inputs.blended;
      
        setCheckedTemperature(isTempCorrect ? 'correct' : 'wrong');
        setCheckedSyrup(isSyrupCorrect ? 'correct' : 'wrong');
        setCheckedMilk(isMilkCorrect ? 'correct' : 'wrong');
        setCheckedBlended(isBlendedCorrect ? 'correct' : 'wrong');
      };
      
  };

  return (
    <div>
      <h2>Hi, I'd like to order a:</h2>
      <div className="drink-container">
        <h2 className="mini-header">{currentDrink}</h2>
        <button
          type="button"
          className="button newdrink"
          onClick={onNewDrink}
        >
          🔄
            </button>
        </div>
    <div className="mini-container">
    <h3>Temperature</h3>
    <div className="answer-space" id={correct_temp}>
        {inputs["temperature"]}
    </div>
    <RecipeChoices
        handleChange={(e) =>
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
        }
        label="temperature"
        choices={ingredients["temperature"]}
        currentVal={inputs["temperature"]}
        />
        </div>
        
        <h3>Milk</h3>
        <div className="answer-space" id={correct_milk}>
            {inputs["milk"]} 
        </div>
        <RecipeChoices
            handleChange={(e) => setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
            }))}
            label="milk"
            choices={ingredients["milk"]}
            checked={inputs["milk"]}
        />

        <h3>Syrup</h3>
        <div className="answer-space" id={correct_syrup}>
            {inputs["syrup"]} 
        </div>
        <RecipeChoices
            handleChange={(e) => setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
            }))}
            label="syrup"
            choices={ingredients["syrup"]}
            checked={inputs["syrup"]}
        />

        <h3>Blended</h3>
        <div className="answer-space" id={correct_blended}>
            {inputs["blended"]} 
        </div>
        <RecipeChoices
            handleChange={(e) => setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }))}
            label="blended"
            choices={ingredients["blended"]}
            checked={inputs["blended"]}
        />

        
        <form className="container">

        </form>
        <button type="submit" className="button submit" onClick={onCheckAnswer}>
            Check Answer
        </button>

        <button type = "new-drink-button" className="button submit" onClick={onNewDrink}>
            New Drink
        </button>
    </div>
  );
  
};

export default BaristaForm;