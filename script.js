
document.querySelector("button").addEventListener("click",()=>{
    var num1 =Math.round((Math.random()*5)+1)
    var img1Name = "images/dice" + num1 + ".jpeg"
    document.querySelectorAll("img")[0].setAttribute("src",img1Name)

    var num2 =Math.round((Math.random()*5)+1)
    var img2Name = "images/dice" + num2 + ".jpeg"
    document.querySelectorAll("img")[1].setAttribute("src",img2Name)

    var winner = document.querySelector("p");
    if (num1>num2){
        winner.innerText = "Winner is Player1"
    }else if(num1<num2){
        winner.innerText = "Winner is Player2"
    }else{
        winner.innerText = "Draw!!"
    }

})