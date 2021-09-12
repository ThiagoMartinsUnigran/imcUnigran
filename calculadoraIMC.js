var nome = "Thiago"
var peso = 100;
var altura = 1.89;
if (this.altura != 0) {
    var imc = peso / (altura * altura);
    console.log (imc);
} else {
    console.log ("Não posso dividir por zero!");
}