//"function" são blocos de codigos que só seraão executados se forem chamados
function soma(a, b) {
    console.log(a+b);
}
//"console.log" executa essa informação e só é executada se for chamada como no exemplo abaixo:
//soma (2, 2);

function subtracao(a, b) {
    return a-b;
}
//"return" literalmente retorna o valor da subtracao

var s = subtracao(5, 3);
    console.log(s);
//"console.log" executou a "var" "s"
