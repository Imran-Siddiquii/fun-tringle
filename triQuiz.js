const formInput=document.querySelector('.quiz');
const checkScoreBtn=document.querySelector('.checkScore');
const output=document.querySelector('.output');
output.style.display="none"
const rightAnswer=["90°","right angled"]

function calculateScore() {
    
    score=0;
    index=0
    const resultData=new FormData(formInput)
    console.log(resultData);//
    
    // if(resultData.entries()=== null){
    //     console.log("hello");
    // }

    // for(let formvalue of resultData.entries()){
        //     console.log(formvalue)
        // }  testing
        
        for(let formvalue of resultData.values()){
            if (formvalue===rightAnswer[index]){
                score=score + 1
            }
                output.style.display="inline-block"
                index++;
            }
            output.innerText=`Your Score is ${score}`;    

}



checkScoreBtn.addEventListener('click',calculateScore)