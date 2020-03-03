function calculate() {
    var operationDropDown = document.getElementById("operation")
    var firstNumElement = document.getElementById("firstNumber")
    var secondNumElement = document.getElementById("secondNumber")
    var firstNumber = parseInt(firstNumElement.value)
    var secondNumber = parseInt(secondNumElement.value)
    var answer = null



    if (operationDropDown.value === "addition") {
        answer = firstNumber + secondNumber
        alert("Your answer is " + answer)

    }
    else if (operationDropDown.value === "subtraction") {
        answer = firstNumber - secondNumber
        alert("Your answer is " + answer)

    }
    else if (operationDropDown.value === "multiplication") {
        answer = firstNumber * secondNumber
        alert("Your answer is " + answer)

    }
    else if (operationDropDown.value === "division") {
        answer = firstNumber / secondNumber
        alert("Your answer is " + answer)

    }
    else {
        alert("Please choose an operation.")

    }
    firstNumElement.value = ""
    secondNumElement.value = ""
}


