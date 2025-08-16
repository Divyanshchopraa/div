const e = document.getElementById("e");
const f = document.getElementById("f");
const v = document.getElementById("v");
const result = document.getElementById("result");
let temp;
function convert(){
if(f.checked){
    temp = Number(e.value);
    temp = temp*9/5+32;
    result.textContent = temp;
    

}
else if(v.checked){
    temp = Number(e.value);
    temp=5/9*(temp-32);
    result.textContent = temp;
}
else{
    result.textContent = "plz select a unit"
}

}