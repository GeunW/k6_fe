document.addEventListener("DOMContentLoaded", () => {
    //DOM 생성후에 img, input, button 가져오기  
    const bcolor = document.querySelectorAll("span");
    const bt = document.querySelector("button");

    const numInput = document.getElementById("num1");
    
    const msg = document.querySelector("#msg");

    //시작시 포커스
    bcolor.style.background = "none";

    //랜덤수 생성 변수
    let n;
    let flag = false;

    //버튼의 클릭이벤트 달기
    bt.addEventListener("click", (e) => {
        e.preventDefault();
        //text박스 보이기
        bcolor.style.background = "yellow";

        //랜덤수 생성
        // if (flag === false) {
        if (!flag) {
            n = Math.floor(Math.random() * 46) + 1; //1~100까지
            console.log("n=", n);
            flag = true;

            //입력초기화
            numInput.style.display = "inline";
            bt.innerHTML = "확인";
            numInput.value = "";
            numInput.focus();
            upDownImg.setAttribute("src", "./img/what.png");
        }



        //숫자비교
        msg.innerHTML = "";
        if (numInput.value > 100 || numInput.value < 0) {
            msg.innerHTML = "<span>1~100까지 숫자를 입력하세요.<span>"
        }

        if (n === parseInt(numInput.value)) { //타입 비교 or if (n == numInput.value) 
            upDownImg.setAttribute("src", "./img/good.png");
            numInput.style.display = "none";
            bt.innerHTML = "재시작";
            flag = false;

        }
        else if (n > numInput.value) {
            upDownImg.setAttribute("src", "./img/up.png");
        }
        else {
            upDownImg.setAttribute("src", "./img/down.png");
        }

        //input 박스 내용가져오기
        if (numInput.value == '') {
            // alert("숫자를 입력하세요.") ;
            msg.innerHTML = "<span>숫자를 입력하세요.<span>";
            numInput.focus();
            return;
        }


    });


});