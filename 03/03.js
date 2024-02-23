// alert("안녕하세요");

//메세지 영역 가져오기1
// function handleClick(){
//     document.getElementById("msgArea").innerHTML = "안녕하세요";
// }

//메세지 영역 가져오기2
//함수 작성1 function
// function handleClick(n) {
//방법1
// document.querySelector("#msgArea").innerHTML = "<h2>버튼 "+n+"이 눌러졌습니다.</h2>";
//방법2(백틱 사용 `${}` )
//     document.querySelector("#msgArea").innerHTML = `<h2>버튼${n}이 눌러졌습니다.</h2>`;
// }

// ** 상수 let, 변수 const

//함수 작성2 ->
const handleClick = (n) => {
    let msg;
    if (n == 1) msg = "안녕하세요";
    else if( n == 2) msg = "안녕히가세요";
    else msg = `<h2>버튼 ${n} 클릭</h2>`;
    
    document.querySelector("#msgArea").innerHTML = msg;

}

// DOM tree가 완성된 후 실행
//(무=>유)콜백함수 실행
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded ok");


    //버튼 생성
    const bt3 = document.createElement("button");
    const bt3Txt = document.createTextNode("버튼3");
    const bt4 = document.createElement("button");
    const bt4Txt = document.createTextNode("버튼4");

    bt3.setAttribute("id","bt3");
    bt4.setAttribute("id","bt4");
    bt3.appendChild(bt3Txt); //버튼3이 txt를 가짐(appendChild)
    bt4.appendChild(bt4Txt);

    //버튼 추가
    document.querySelector("#btArea2").append(bt3);
    document.querySelector("#btArea2").append(bt4);

    //버튼 이벤트
    bt3.addEventListener("click",()=>{
        handleClick(3);
    });

    bt4.addEventListener("click",()=>{
        handleClick(4);
    });


});