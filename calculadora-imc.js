const peso = 70;
const altura = 1.80;

const imc = peso / (altura * altura);

if (imc <= 18.5){
    console.log("Abaixo do peso! imc: " + imc);
}
else if (imc >= 18.5 && imc <= 24.9){
    console.log("Peso ideal! imc: " + imc);
}

else if (imc >= 25 && imc <= 29.9){
    console.log("Sobrepeso! imc: " + imc);
}

else{
    console.log("Obesidade! imc: " + imc);
}
