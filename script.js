"use strict";
var sixpackCalculator;
(function (sixpackCalculator) {
    window.addEventListener("load", handleLoad);
    let weightInput = 75;
    let bodyFatInput = 15;
    let desiredBodyFatPercentageInput = 0.10;
    let caloricDeficitInput = 500;
    function handleLoad(_event) {
        let form = document.querySelector("form");
        form.addEventListener("input", handleInput);
        let submitButton = document.getElementById("submit");
        submitButton.addEventListener("click", showResults);
    }
    function handleInput(_event) {
        let target = _event.target;
        switch (target.name) {
            case "weightInput":
                weightInput = parseInt(target.value);
                break;
            case "bodyFatInput":
                bodyFatInput = parseInt(target.value);
                break;
            case "desiredBodyFatInput":
                desiredBodyFatPercentageInput = parseInt(target.value) / 100;
                break;
            case "caloricDeficitInput":
                caloricDeficitInput = parseInt(target.value);
                break;
        }
    }
    function showResults() {
        let fat = (bodyFatInput / 100) * weightInput;
        let leanBodyMass = weightInput - fat;
        let desiredWeight = leanBodyMass / (1 - desiredBodyFatPercentageInput);
        let caloriesToLoose = (Math.round((weightInput - desiredWeight) * 100) / 100) * 7700;
        let weeklyCalorieLoss = caloricDeficitInput * 7;
        let resultText = document.getElementById("result");
        resultText.textContent = "Goal weight would be " + Math.round(desiredWeight * 10) / 10 + " kg";
        let goalWeight = document.getElementById("goalWeight");
        goalWeight.textContent = "You would need to loose " + Math.round((weightInput - desiredWeight) * 10) / 10 + " kg";
        let goalInWeeks = document.getElementById("goalInWeeks");
        goalInWeeks.textContent = "You would probably need about " + Math.round(caloriesToLoose / weeklyCalorieLoss) + " weeks";
    }
})(sixpackCalculator || (sixpackCalculator = {}));
//# sourceMappingURL=script.js.map