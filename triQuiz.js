const formInput=document.querySelector('.quiz');
const checkScoreBtn=document.querySelector('.checkScore');
const output=document.querySelector('.output');

const rightAnswer=["90°","right angled"]

function calculateScore() {
    score=0;
    index=0
    const resultData=new FormData(formInput)
    console.log(resultData);//
   
    // for(let formvalue of resultData.entries()){
    //     console.log(formvalue)
    // }  testing
     
    for(let formvalue of resultData.values()){
        if(formvalue===rightAnswer[index]){
            score=score + 1
            // console.log(rightAnswer[index])
        }
        index++;
        // console.log("answer is right"+score)
        output.innerText=`Your Score is ${score}`;    
    }

}



checkScoreBtn.addEventListener('click',calculateScore)