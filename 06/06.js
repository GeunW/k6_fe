

const handleClick = (n) => {
    
    
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    document.querySelector("#dice1").setAttribute("src",`./img/${n}.png`);
    document.querySelector("#dice2").setAttribute("src",`./img/${randomNumber2}.png`);
    
    let msg;
    if(n == randomNumber2) msg = "Success!";
    else msg = "Fail!";
    document.querySelector("#result").innerHTML = msg;
    document.querySelector("#result").style.fontWeight = "bold";
}