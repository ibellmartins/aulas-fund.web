document.write("bom dia!!!! ");  //document é a página  .write é o método usado p escrever no document. o conteudo dentro dos parenteses podem ser strings, tags ou variaveis. 
alert("oieeee"); //caixa de dialogo
confirm("Voce vai viajar no feriado? "); //caixa de dialogo
nome = prompt("Qual é o seu nome? ");
document.write(nome + ", você é "+"<B>demais</B>");


/*
if (confirm == true) {
    prompt("pra onde vc vai??");
} else {
    alert("que pena");
}
*/

var end = prompt("onde você mora?"); //caixa de dialogo mais usada - 3 funcionalidades: exibe um alert, abre entrada de dados via teclado e tem botoes p confirm. Outra forma de receber conteudo do usuário com JS é pelos FORMULÁRIOS
document.write("que lugar legal pra se morar, " + end);

//document.write: insere conteudo na pagina pro usuário ver 
//no document.write posso usar: strings + tags + css + variaveis
//método: é uma tarefa que eu quero realizar no JS