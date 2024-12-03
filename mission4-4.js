function kekka(){
var omikuzi = ["大吉", "中吉", "小吉",];
var i = Math.random(); 
i = Math.floor(i*3); //iは0-2, 3倍して切り捨て
var result = omikuzi[i]
var object = document.getElementById("omikuzi");
object.innerText = result;}