const handleClick = () => {
  const bts = document.querySelectorAll(".c1");
  const btsNum = [1,1,1];


  // for(let i = 0; i<bts.length; i++){
  //     const n = Math.floor(Math.random()*6)+1;
  //     bts[i].setAttribute("src",`./img/${n}.png`);
  // }

  //for in 하위 정보까지 나와서 잘 쓰지 않음
  // for(let i in bts){
  //     const n = Math.floor(Math.random()*6)+1;
  //     bts[i].setAttribute("src",`./img/${n}.png`);

  //     console.log("for")
  // }

  //forEach
  // bts.forEach((bt) => {
  //   const n = Math.floor(Math.random() * 6) + 1;
  //   bt.setAttribute("src", `./img/${n}.png`);

  //   console.log("click", n)
  // });

  //for of => 파이썬의 for in
  // for (let bt of bts) {
  //   const n = Math.floor(Math.random() * 6) + 1;
  //   bt.setAttribute("src", `./img/${n}.png`);

  // }

  //for of
  for(let [idx, bt] of bts.entries()){
    const n = Math.floor(Math.random() * 6) + 1;
    bt.setAttribute("src", `./img/${n}.png`);
    btsNum[idx] = n;
    
    console.log(btsNum);
  }


}

