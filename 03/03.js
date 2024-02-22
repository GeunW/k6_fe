// alert("안녕하세요");

//메세지 영역 가져오기1
// function handleClick(){
//     document.getElementById("msgArea").innerHTML = "안녕하세요";
// }

//메세지 영역 가져오기2
function handleClick(n) {
    //방법1
    // document.querySelector("#msgArea").innerHTML = "<h2>버튼 "+n+"이 눌러졌습니다.</h2>";
    //방법2(백틱 사용 `${}` )
    document.querySelector("#msgArea").innerHTML = `<h2>버튼${n}이 눌러졌습니다.</h2>`;
}