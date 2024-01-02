let btn = document.querySelector(".logo");
let state = "ckk";
console.dir(btn);
btn.onclick = function(){
 if(state==="ckk"){
    btn.innerText = "Vansiss",
    btn.style.backgroundColor = "transparent";
    btn.style.fontSize = "20px";
    btn.style.transition = "2.5s";
    state = "nkk";
 }
 else{
    state = "ckk",
    btn.innerText = "Sandesh";
    btn.style.transition = "2.5s";
 }

}
let tgl = "ckk"
const tgle = document.querySelector(".toggle_btn");
tgle.onclick = function(){
    if(tgl==="ckk"){
        console.log(tgl),
        document.querySelector(".dropdown").style.display = "flex",
       tgl ="nkk";
    }
    else{
        console.log(tgl),
        document.querySelector(".dropdown").style.display = "none",
       tgl = "ckk";
   }
}
