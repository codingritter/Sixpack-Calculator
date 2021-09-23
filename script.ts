namespace sixpackCalculator {
    window.addEventListener("load", handleLoad);
    let weightInput: number = 75;
    let bodyFatInput: number = 15;
    let desiredBodyFatPercentageInput: number = 0.10;
    let caloricDeficitInput: number = 500;

    function handleLoad(_event: Event): void {
        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
        form.addEventListener("input", handleInput);
        let submitButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit");
        submitButton.addEventListener("click", showResults);

    }
    function handleInput(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
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
    function showResults(): void {
        let fat: number = (bodyFatInput / 100) * weightInput;
        let leanBodyMass: number = weightInput - fat;
        let desiredWeight: number = leanBodyMass / (1 - desiredBodyFatPercentageInput);
        let caloriesToLoose: number = (Math.round((weightInput - desiredWeight) * 100) / 100) * 7700;
        let weeklyCalorieLoss: number = caloricDeficitInput * 7;

        let resultText: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result");
        resultText.textContent = "Goal weight would be " + Math.round(desiredWeight * 10) / 10 + " kg";

        let goalWeight: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("goalWeight");
        goalWeight.textContent = "You would need to loose " + Math.round((weightInput - desiredWeight) * 10) / 10 + " kg";

        let goalInWeeks: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("goalInWeeks");
        goalInWeeks.textContent = "You would probably need about " + Math.round(caloriesToLoose / weeklyCalorieLoss) + " weeks";

    }
}