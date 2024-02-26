document.addEventListener("DOMContentLoaded", () => {
    const imgs = document.querySelectorAll("section img");
    const bts = document.querySelectorAll("section button");

    for (let bt of bts) {
        bt.addEventListener("click", () => {
            console.log(bt.innerHTM);

            const nc = Math.floor(Math.random()*6)+1;
            const n = bt.innerHTML;

            imgs[0].setAttribute("src", `../img/${nc}.png`);
            imgs[1].setAttribute("src", `../img/${n}.png`);
            
            if(nc == n){
                document.querySelector("#msg").innerHTML = "Success";
            }else{
                document.querySelector("#msg").innerHTML = "Fail";
            }

        });
    }

});