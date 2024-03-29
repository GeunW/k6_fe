

// const handleChange = (s1, s2, lb1, lb2) => {
//     if (s1.value === "℃") {
//         s2.value = "℉";
//         lb1.innerHTML = "℃";
//         lb2.innerHTML = "℉";
//     }
//     else {

//         s2.value = "℃";
//         lb1.innerHTML = "℉";
//         lb2.innerHTML = "℃";
//     }

// };

// document.addEventListener("DOMContentLoaded", () => {
//     const sel1 = document.querySelector("#sel1");
//     const sel2 = document.querySelector("#sel2");

//     const txt1 = document.querySelector("#txt1");
//     const txt2 = document.querySelector("#txt2");

//     const labels = document.querySelectorAll("label");
    
//     txt1.addEventListener("change", ()=>{
//         console.log(txt1.value);
//         if(sel1.value === "℃"){
//            txt2.value = (txt1.value * (9/5)) + 32;
           

//         }
//         else{
//             txt1.value = (txt2.value - 32) * (5/9);

//         }
//     });

//     sel1.addEventListener("change", () => {
//         handleChange(sel1, sel2, labels[0], labels[1]);
//     });

//     sel2.addEventListener("change", () => {
//         handleChange(sel2, sel1, labels[1], labels[0]);
//     });

// });




const handleChange = (s1, s2, lb1, lb2, txt1, txt2) => {
    if (s1.value === "℃") {
        
        s2.value = "℉";
        lb1.innerHTML = "℃";
        lb2.innerHTML = "℉";

    }
    else {

        s2.value = "℃";
        lb1.innerHTML = "℉";
        lb2.innerHTML = "℃";
    }

    txt1.value = "";
    txt1.focus();
    txt2.value = "";

};




document.addEventListener("DOMContentLoaded", () => {
    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");

    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");

    const labels = document.querySelectorAll("label");
    
    txt1.addEventListener("input", ()=>{
        console.log(txt1.value);
        if(sel1.value === "℃"){
            
           txt2.value = (parseFloat)((txt1.value * (9/5)) + 32);
           

        }
        else{
            txt2.value = (parseFloat)((txt1.value - 32) * (5/9));

        }
    });

    sel1.addEventListener("change", () => {
        handleChange(sel1, sel2, labels[0], labels[1], txt1, txt2);
    });

    sel2.addEventListener("change", () => {
        handleChange(sel2, sel1, labels[1], labels[0], txt1, txt2);
    });

});

