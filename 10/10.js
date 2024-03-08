document.addEventListener("DOMContentLoaded", () => {
    //DOM 생성후에 img, input, button 가져오기  
    const bt = document.querySelector("button");
    const numD = document.querySelector("#numD");

    let nums = [];

    bt.addEventListener("click", () => {
        nums.length=0;

        //랜덤 수 만들기 : 1~45 , 7개, 중복 x
        while (nums.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1;
            if(!nums.includes(n))nums.push(n);
        }

        // let tags = '';
        // nums.map((v,i) => {
        //     tags = tags+`<span class="sp${parseInt(v/10)}">${v}</span> `;
        //     if(i===5){
        //         tags=tags+`<span>+</span>`
        //     }
        // });
        // numD.innerHTML = tags

        
        nums = nums.map((v, i) =>
            `<span class="sp${parseInt(v / 10)}">${v}</span> `
        );
        nums.splice(6, 0, '<span>+</span>');
      
        numD.innerHTML = nums.toString().replaceAll(',','');
        console.log(nums)
    });
});