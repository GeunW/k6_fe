const handleClick = () => {
    
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector("#dice1").setAttribute("src",`./img/${randomNumber}.png`);
    document.querySelector("#dice2").setAttribute("src",`./img/${randomNumber2}.png`);
    
    let msg;
    if(randomNumber>randomNumber2) msg = "Player WIN!";
    else msg = "Computer WIN!";
    document.querySelector("#result").innerHTML = msg;
    document.querySelector("#result").style.fontWeight = "bold";
}