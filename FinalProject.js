    // here comes first box
    // first question

    var select=document.getElementById("select1")
    var firstText=document.getElementById("label1")
  

    select.addEventListener("change", firstAnswer)

    function firstAnswer(){
        if (select.value === firstCorrectAnswer){
            firstText.innerHTML = "Correct!", score++;
        } else {
            firstText.innerHTML ="Wrong answer!"
        }
    }

    var firstCorrectAnswer = ("parentheses")

    // second question

    var select2=document.getElementById("select2")
    var secondText=document.getElementById("label2")

    select2.addEventListener("change", secondAnswer)

    function secondAnswer(){
        if (select2.value === secondCorrectAnswer){
            secondText.innerHTML="Correct!", score++
        } else {
            secondText.innerHTML="Wrong answer!"
        }
    }

    var secondCorrectAnswer=("six")

    // third question

    var select3=document.getElementById("select3")
    var thirdText=document.getElementById("label3")

    select3.addEventListener("change", thirdAnswer)

    function thirdAnswer(){
        if (select3.value === thirdCorrectAnswer){
            thirdText.innerHTML="Correct!", score++; 
        } else {
            thirdText.innerHTML="Wrong answer!";
        }
    }

    var thirdCorrectAnswer=("forthSign")

    // here comes second box
    // first question 

    var select4=document.getElementById("select4")
    var forthText=document.getElementById("label4")

    select4.addEventListener("change", forthdAnswer)

    function forthdAnswer(){
        if (select4.value === forthCorrectAnswer){
            forthText.innerHTML="Correct!", score++
        } else {
            forthText.innerHTML="Wrong answer!"
        }
    }

    var forthCorrectAnswer=("and")

    //second question

    var select5=document.getElementById("select5")
    var fifthText=document.getElementById("label5")

    select5.addEventListener("change", fifthdAnswer)

    function fifthdAnswer(){
        if (select5.value === fifthCorrectAnswer){
            fifthText.innerHTML="Correct!", score++
        } else {
            fifthText.innerHTML="Wrong answer!"
        }
    }

    var fifthCorrectAnswer=("variable")

    //third question

    var select6=document.getElementById("select6")
    var sixthText=document.getElementById("label6")

    select6.addEventListener("change", sixthdAnswer)

    function sixthdAnswer(){
        if (select6.value === sixthCorrectAnswer){
            sixthText.innerHTML="Correct!", score++;
        } else {
            sixthText.innerHTML="Wrong answer!"
        }
    }

    var sixthCorrectAnswer=("unshift")


    // section of third box
    //first question

    var myInput=document.querySelector("input")
    var checkButton=document.querySelector("button")
    checkButton.addEventListener("click", buttonFunction)
    var result=document.getElementById("result")

    function buttonFunction(){
    console.log(correctAnswers)

    if (myInput.value === correctAnswers) {
        result.innerHTML="Correct!", score++;
    } else{
        result.innerHTML="Wrong answer!"
    }
    }
    var correctAnswers=("!")  

    //second question

    var secondInput=document.getElementById("myInput2")
    var checkButton2=document.getElementById("rightChoice2")
    checkButton2.addEventListener("click", buttonFunction2)
    var result2=document.getElementById("result2")

    function buttonFunction2(){
    console.log(correctAnswers2)

    if (secondInput.value === correctAnswers2) {
        result2.innerHTML="Correct!", score++;
    } else{
        result2.innerHTML="Wrong answer!"
    }
    }
    var correctAnswers2=("//") 


    //third question

    var thirdInput=document.getElementById("myInput3")
    var checkButton3=document.getElementById("rightChoice3")
    checkButton3.addEventListener("click", buttonFunction3)
    var result3=document.getElementById("result3")

    function buttonFunction3(){
    console.log(correctAnswers3)

    if (thirdInput.value === correctAnswers3) {
        result3.innerHTML="Correct!", score++;
    } else{
        result3.innerHTML="Wrong answer!"
    }
    }
    var correctAnswers3=("strings") 


    //forth question

    var forthInput=document.getElementById("myInput4")
    var checkButton4=document.getElementById("rightChoice4")
    checkButton4.addEventListener("click", buttonFunction4)
    var result4=document.getElementById("result4")

    function buttonFunction4(){
    console.log(correctAnswers4)

    if (forthInput.value === correctAnswers4) {
        result4.innerHTML="Correct!", score++;
    } else{
        result4.innerHTML="Wrong answer!"
    }
    }
    var correctAnswers4=("script") 

    // fifth answer

    var fifthInput=document.getElementById("myInput5")
    var checkButton5=document.getElementById("rightChoice5")
    checkButton5.addEventListener("click", buttonFunction5)
    var result5=document.getElementById("result5")

    function buttonFunction5(){
    console.log(correctAnswers5)

    if (fifthInput.value === correctAnswers5) {
        result5.innerHTML="Correct!", score++;
    } else{
        result5.innerHTML="Wrong answer!"
    }
    }
    var correctAnswers5=("iLoveCoding") 

    //sixth answer

    var sixthInput=document.getElementById("myInput6")
    var checkButton6=document.getElementById("rightChoice6")
    checkButton6.addEventListener("click", buttonFunction6)
    var result6=document.getElementById("result6")

    function buttonFunction6(){
    console.log(correctAnswers6)

    if (sixthInput.value === correctAnswers6[0] || sixthInput.value === correctAnswers6[1]) {
        result6.innerHTML="Correct!", score++;
    } else{
        result6.innerHTML="Wrong answer!"
    }
    }
    var correctAnswers6=["==", "==="]


    //seventh answer

    var seventhInput=document.getElementById("myInput7")
    var checkButton7=document.getElementById("rightChoice7")
    checkButton7.addEventListener("click", buttonFunction7)
    var result7=document.getElementById("result7")

    function buttonFunction7(){
    console.log(correctAnswers7)

    if (seventhInput.value === correctAnswers7[0] || seventhInput.value === correctAnswers7[1]) {
        result7.innerHTML="Correct!", score++;
    } else{
        result7.innerHTML="Wrong answer!"
    }
    }
    var correctAnswers7=["{}", "{ }"]

    //eight answer

    var eightInput=document.getElementById("myInput8")
    var checkButton8=document.getElementById("rightChoice8")
    checkButton8.addEventListener("click", buttonFunction8)
    var result8=document.getElementById("result8")

    function buttonFunction8(){
    console.log(correctAnswers8)

    if (eightInput.value === correctAnswers8) {
        result8.innerHTML="Correct!", score++;
    } else{
        result8.innerHTML="Wrong answer!"
    }
    }
    var correctAnswers8=("Cascading Style Sheets")



    //new section calculating score 

    var score=0;
var ninthInput=document.getElementById("score-box");
var checkButton9=document.getElementById("rightChoice9");


function scoreUp(){
    score.push
    ninthInput.innerHTML=score
}
checkButton9.addEventListener("click", scoreUp)
