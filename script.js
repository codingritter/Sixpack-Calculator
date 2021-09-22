"use strict";
var sixpackCalculator;
(function (sixpackCalculator) {
    console.log("hey");
    window.addEventListener("load", handleLoad);
    let weightInput = 75;
    let bodyFatInput = 15;
    let caloricDeficit = 500;
    let desiredBodyFatPercentage = 0.10;
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
                desiredBodyFatPercentage = parseInt(target.value) / 100;
                break;
            case "caloricDeficit":
                caloricDeficit = parseInt(target.value);
                break;
        }
    }
    function showResults() {
        console.log(desiredBodyFatPercentage);
        let fat = (bodyFatInput / 100) * weightInput;
        let leanBodyMass = weightInput - fat;
        let desiredWeight = leanBodyMass / (1 - desiredBodyFatPercentage);
        let resultText = document.getElementById("result");
        resultText.textContent = "Goal Weight would be " + Math.round(desiredWeight * 100) / 100 + " kg";
        let goalWeight = document.getElementById("goalWeight");
        goalWeight.textContent = "You would need to loose " + Math.round((weightInput - desiredWeight) * 100) / 100 + " kg";
    }
})(sixpackCalculator || (sixpackCalculator = {}));
//# sourceMappingURL=script.js.map