//As funções foram pensadas e colocadas no arquivo "index.html" basta agora criarmos essas funções
//Vamos navegar no DOM para poder colocar esses elementos
function mudaCor(cor) {
    var elemento = document.getElementById("mensagem");
    //Vamos então chamar o elemento usando style e ai alteramos a propriedade "color"
    elemento.style.backgroundColor = cor;
}
//Esse "document." basicamente é o DOM e no caso vamos dar para ele o id que está pedindo

//Extra use outras com "fontSize 50px", "color" e etc