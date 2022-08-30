const base=document.querySelector('.input-base')
const height=document.querySelector('.input-height')
const result=document.querySelector('.calculate')
const output=document.querySelector('.output');
output.style.display="none";

function calculate(){
// console.log("hello");
output.style.display="inline-block";

const baseValue=Number(base.value);
const heightValue=Number(height.value)
if (baseValue <= 0) {
    output.innerText="Base should not be empty and less then 0";
}
else if (heightValue <= 0) {
    output.innerText="Height should not be empty and less then 0";
}
    
else{
    const areaOfTriangle=((Number(base.value)) * (Number(height.value)))/2;
    // console.log(typeof areaOfTriangle);
    console.log(areaOfTriangle);
    output.innerText=`Area of triangle is ${areaOfTriangle}`;      

}
 
}
result.addEventListener('click',calculate)