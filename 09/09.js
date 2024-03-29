//JS 데이터 타입 기본 let, const
let n1 = 10;
let n2 = 10.5;
let s1 = "안녕하세요?";

console.log("정수 : ",n1);
console.log("실수 : ",n2);
console.log("문자열 : ",s1);
//in key값
for(let i in s1){
    console.log("문자열 : ",s1[i]);
}

for(let c of s1){
    console.log("문자열 : ",c);
}


//배열
let arr = ['🥩',1,'🍗',2,'🍖',3];
console.log("배열 : ",arr);
console.log("배열의 요소 접근 : ",arr[1]);

//배열 순회
for(let i in arr){
    console.log("for ~in : ",arr[i]);
}

for(let c of arr){
    console.log("for ~of : ",c);
}
//배열, map
console.log("배열/MAP");
let arr2 = arr.map((v,i)=>{
    return v+"🍕";
});
console.log("arr2 : ",arr2);

console.log("배열/MAP: 콜백");
arr2 = arr.map(v => v+"🍔");
console.log("arr2 : ",arr2);


//오브젝트
//tailing 쉼표 사용 가능,
let = obj = {'🥩': 1, '🍗': 2, '🍖': 3};
console.log("오브젝트 : ",obj);
console.log("오브젝트 요소 접근 : ",obj['🥩']);

for(let c of Object.entries(obj)){
    console.log("for ~of : ",c);
}

for(let i in obj){
    console.log("for ~in : ",obj[i]);
}
//k,v
for(let [k,v] of Object.entries(obj)){
    console.log("for ~of : ",k);
    console.log("for ~of : ",v);
}

let arr3 = [ ];
//반복문
for(let item of arr){
    arr3.push(item);
}
console.log("반복문으로 arr3 =",arr3);
arr3 = arr.map((v)=>{
    let s = v +'😪';
    console.log(v,',',s);
    return arr3;
});

arr3 = arr.map(v => v+'🙄');
console.log("map arr3 =", arr3);

//filter
let arr4 =[];
for(let item of arr){
    if(!isNaN(item)) arr4.push(item);
}
console.log(arr4);
//map과 필터
arr4 = arr.map((v)=>{
    return isNaN(v);
});
console.log("filter arr4 = ",arr4)

arr4 = arr.filter((v)=>{
    return isNaN(v);
});
console.log("filter arr4 = ",arr4)

//전개 연산자
let arr5 =[...arr];
console.log("전개 : ",arr5)
