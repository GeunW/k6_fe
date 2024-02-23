

const handleClick = () => {
    
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    const randomNumber3 = Math.floor(Math.random() * 6) + 1;
    const randomNumber4 = Math.floor(Math.random() * 6) + 1;
    const randomNumber5 = Math.floor(Math.random() * 6) + 1;
    document.querySelector("#dice1").setAttribute("src",`./img/${randomNumber1}.png`);
    document.querySelector("#dice2").setAttribute("src",`./img/${randomNumber2}.png`);
    document.querySelector("#dice3").setAttribute("src",`./img/${randomNumber3}.png`);
    document.querySelector("#dice4").setAttribute("src",`./img/${randomNumber4}.png`);
    document.querySelector("#dice5").setAttribute("src",`./img/${randomNumber5}.png`);
    
    let msg;
    if(chechTwoEqualNumbers(randomNumber1,randomNumber2,randomNumber3,randomNumber4,randomNumber5)){
            msg = "더블";
    }
    document.querySelector("#result").innerHTML = msg;
    document.querySelector("#result").style.fontWeight = "bold";
    
};

   
function checkTwoEqualNumbers(num1, num2, num3, num4, num5) {
    const numbers = [num1, num2, num3, num4, num5];

    // 숫자들을 정렬하여 비교
    numbers.sort((a, b) => a - b);

    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] === numbers[i + 1]) {
            return true; // 2개의 숫자가 같은 경우
        }
    }

    return false; // 2개의 숫자가 같지 않은 경우
}