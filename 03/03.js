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
const handleClick = (n) =>{
    let msg
    if(n==1) msg = "안녕하세요";
    else msg = "안녕히가세요";
    document.querySelector("#msgArea").innerHTML = msg;

}

