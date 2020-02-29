function calculate() {
    var operationDropDown = document.getElementById("operation")
    var firstNumElement = document.getElementById("firstNumber")
    var secondNumElement = document.getElementById("secondNumber")
    var firstNumber = parseInt(firstNumElement.value)
    var secondNumber = parseInt(secondNumElement.value)



    if (operationDropDown.value === "addition") {
        var sum = firstNumber + secondNumber
        alert("Your answer is " + sum)
        firstNumElement.value = ""
        secondNumElement.value = ""
    }
    else if (operationDropDown.value === "subtraction") {
        var difference = firstNumber - secondNumber
        alert("Your answer is " + difference)
        firstNumElement.value = ""
        secondNumElement.value = ""
    }
    else if (operationDropDown.value === "multiplication") {
        var product = firstNumber * secondNumber
        alert("Your answer is " + product)
        firstNumElement.vaue = ""
        secondNumElement.value = ""
    }
    else if (operationDropDown.value === "division") {
        var quotient = firstNumber / secondNumber
        alert("Your answer is " + quotient)
        firstNumElement.value = ""
        secondNumElement.value = ""
    }
    else {
        alert("Please choose an operation.")
    }
}


