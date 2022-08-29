const inputValue = document.querySelectorAll('.angle1');
const checkTriangle = document.querySelector("#is-triangle");
const output = document.querySelector(".output");

function calculateTriangle(input1, input2, input3) {
    const addedValue = input1 + input2 + input3;
    console.log(addedValue);// testting

    return addedValue
}

function isTriangle() {
    var input1 = Number(inputValue[0].value)
    var input2 = Number(inputValue[1].value)
    var input3 = Number(inputValue[2].value)
    //testting
    //  console.log(typeof input1 + typeof input2 + typeof input3);
    if (input1 <= 0) {
        // console.log("value should be positive1") test
        output.innerText = "Angle one value should be positive and greater then zero"
    } else if (input2 <= 0) {
        output.innerText = "Angle two value should be positive and greater then zero"

    } else if (input3 <= 0) {
        output.innerText = "Angle three value should be positive and greater then zero"

    }
    else {
        const sumOfNumber = calculateTriangle(Number(inputValue[0].value), Number(inputValue[1].value), Number(inputValue[2].value))
        if (sumOfNumber === 180) {
            output.innerText = "This is a triangle " + sumOfNumber
            console.log("this is a triangle")
        }
        else {
            output.innerText = "this is not a triangle " + sumOfNumber

        }
    }
}
checkTriangle.addEventListener("click", isTriangle);