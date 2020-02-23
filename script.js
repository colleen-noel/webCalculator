function sum() {
    let a = document.getElementById("firstNumber");
    let b = document.getElementById("secondNumber");
    let aNum = parseInt(a.value);
    let bNum = parseInt(b.value);

    let sum = aNum + bNum;
    alert("Your answer is " + sum);
    a.value = "";
    b.value = "";

}