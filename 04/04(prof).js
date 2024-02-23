//버튼 가져오기
document.addEventListener("DOMContentLoaded", () => {
    const bt1 = document.querySelector("#bt1"); // 전역 변수로 선언

    // 버튼 이벤트 달기
    bt1.addEventListener("click", () => {
        //Math.floor(소수점 버림), 1~6 랜덤수 생성
        const n = Math.floor(Math.random() * 6) + 1;
        document.querySelector("#dice1").setAttribute("src",`./img/${n}.png`);
                
    });
});





// 다른 부분에서도 bt1에 접근 가능
