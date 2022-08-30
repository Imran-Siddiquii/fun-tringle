const inputSide=document.querySelectorAll(".input-value");
const resultBtn=document.querySelector('.result');
const output=document.querySelector('.output');
output.style.display="none"
function calculateValue(a,b) {
    const resultOfSquare= a**2 + b**2;
    // console.log(resultOfSquare);
    return resultOfSquare;
    
}

function calculateHypo() {
    output.style.display="inline-block"
    if(inputSide[0].value <= 0){
        console.log(typeof inputSide[0].value); //testing
    output.innerText=`Angle one should not be empty and greater then zero`

    }else if(inputSide[1].value <=0){
    output.innerText=`Angle two should not be empty and greater then zero`

    }else{
        const hypo=calculateValue((Number(inputSide[0].value)),(Number(inputSide[1].value)))
       console.log(hypo);
        // const areaof=hypo/2;
        // console.log(areaof);
        const squareRoot=Math.sqrt(hypo).toFixed(2) // squra root  to fixed only two decimal digit 
        console.log(squareRoot);
        output.innerText=`The hypotenuse is ${squareRoot}cm square`
        // const answerIn2decimal=Math.toFixed(squareRoot)
    }
}
resultBtn.addEventListener('click',calculateHypo)


