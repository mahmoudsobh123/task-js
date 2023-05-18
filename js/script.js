var allproduct = document.querySelectorAll(".card .card-title")
var content = document.querySelector("#content")
var btn1 = document.querySelector("#btn1")
var div_pri = document.querySelector("#Prices")
var totalprice = 0
allproduct.forEach(function (item){
 item.onclick = function (){
    totalprice += +(item.getAttribute("price"))
    content.innerHTML += item.textContent + " , "
    
    if(content.innerHTML != ""){
        btn1.style.display = "block"
        content.style.color = "black" 
        btn1.style.width = "160px"
        btn1.style.height = "50px"
    }
 }
})

btn1.onclick = function (){
    Prices.innerHTML = (totalprice +" " + "$")
}
window.onload = function(){
    prompt("Enter Your Username")
}