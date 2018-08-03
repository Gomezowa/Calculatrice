var chiffre1 = document.getElementById ('chiffre1');
var chiffre2 = document.getElementById ('chiffre2');

function additioner(){
document.getElementById('result').innerHTML= parseInt(chiffre1.value) + parseInt(chiffre2.value);
}
function diviser(){
    document.getElementById('result').innerHTML= chiffre1.value / chiffre2.value;   
}
function sustraire(){
    document.getElementById('result').innerHTML= chiffre1.value - chiffre2.value;   
}
function multiplier(){
    document.getElementById('result').innerHTML= chiffre1.value * chiffre2.value;   
}