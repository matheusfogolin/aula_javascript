function redirecionar(){
    window.open("https://www.hltv.org"); //outra aba
    //window.location.href="https://www.hltv.org"; //mesma aba
}

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");

}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse.";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada.")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/* 
 function soma(n1, n2){
    return n1 + n2;
} */

/* function validaIdade(idade){
    var validar;
    if (idade >=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;

}
var idade = prompt("Digite a sua idade: ")
console.log(validaIdade(idade));
 */

//alert(soma(5, 10)); */


/* var d = new Date();
alert(d.getMinutes());
alert(d.getDay());
alert(d.getMonth()+1);
alert(d.getHours());

 */
/* var count;
for(count = 0; count <=5; count++){
    alert(count);
} */


/* var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count ++;
} */

/* var idade =prompt("Qual a sua idade?");
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
} */


/* var frutas =[{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome); 

 var fruta ={nome:"maçã", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
 


 var lista = ["maçã", "pêra", "laranja"];
lista.push("uva"); // adiciona uva
//lista.pop(); // retira o ultimo elemento
//console.log(lista.length); // retorna o tamanho
//console.log(lista); // imprime a lista
//console.log(lista.reverse()); // imprime a lista de trás pra frente
console.log(lista); 
console.log(lista.toString()); // transforma o array numa string
console.log(lista.join(" - ")); // coloca um - para separar os itens do array


var nome ="Matheus Fogolin";
var n1 = 5;
var n2 = 3;
var frase ="Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);

console.log(nome);
console.log(n1 * n2);
console.log(frase.toUpperCase());
//alert (frase.replace("Japão", "Brasil")) */ 