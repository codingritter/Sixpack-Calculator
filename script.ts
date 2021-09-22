namespace sixpackCalculator {
    console.log("hey");
    window.addEventListener("load", handleLoad);
    let weightInput: number = 75;
    let bodyFatInput: number = 15;
    let caloricDeficit: number = 500;
    let desiredBodyFatPercentage: number = 0.10;

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
                desiredBodyFatPercentage = parseInt(target.value) / 100;
                break;

            case "caloricDeficit":
                caloricDeficit = parseInt(target.value);
                break;
        }
    }
    function showResults(): void {
        console.log(desiredBodyFatPercentage);
        let fat: number = (bodyFatInput / 100) * weightInput;
        let leanBodyMass: number = weightInput - fat;
        let desiredWeight: number = leanBodyMass / ( 1 - desiredBodyFatPercentage);
        
        let resultText: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result");
        resultText.textContent = "Goal Weight would be " + Math.round(desiredWeight * 100) / 100 +  " kg";

        let goalWeight: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("goalWeight");
        goalWeight.textContent = "You would need to loose " +  Math.round((weightInput - desiredWeight) * 100) / 100  + " kg";

    }
}