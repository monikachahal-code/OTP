let a=document.querySelector("#main")
let b=document.querySelector(".div1")
let c=document.querySelector("button")


c.addEventListener("click",function(){
    let otp=Math.floor(100000+Math.random()*900000)
    b.innerHTML=otp
})