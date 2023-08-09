//Agora criaremos a função que valida abaixo
function valida() {
    var nome = document.getElementById('nome');
    //Daremos um atributo de valor para "nome" com ".value" se não ele imprimirar somente o objeto
    if (nome.value =="") {
        alert("Campo nome não pode estar em branco");
    } else {
        alert("Nenhum problema foi detectado. Seu formulário pode ser enviado com sucesso.");
    }   
}

//Usamos o DOM para tarzer essa função  
//Utilizaremos também o "If" que lemtrando é uma condição que executa se for verdadeira

/*Exemplo de "If":

int idade = 18;

if (idade >= 18) {
    System.out.println("Você é maior de idade.");
}*/
