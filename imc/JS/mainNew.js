
function calcular(){
    peso=parseFloat(document.getElementById("peso").value);
    altura=parseFloat(document.getElementById("altura").value);
    imc = peso / (altura*altura);
    document.getElementById("imc").value=imc;
    console.log(peso);
    console.log(altura);
    console.log(imc);
}
