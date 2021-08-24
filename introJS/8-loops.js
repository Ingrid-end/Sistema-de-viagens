console.log('\n Trabalhando com condicionais');
const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
);

const idadeComprador = 17;
const estaAcompanhada = false; 
let temPassagemComprada = false;
const destino = "São Paulo";

console.log("\n Destinos possiveis:");
console.log(listaDeDestinos);

 const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
 
let contador = 0;
let destinoExiste =false;
 //LOOP while
//while(contador <3){ //Enquato essa condição for verdadeira, vou executar esse codigo

    //if (listaDeDestinos[contador]== destino){
      //  destinoExiste = true;
      //  break;
    //}
    //para não ficar em loop, ficar voltando para o item 0 da lista.
    //falamos para o contador contar, ele vai verificar
    ///contador +=1;
//}

 // falar se o destino existe ou não, se tem na lista
console.log("Destino existe ", destinoExiste);

if(podeComprar && destinoExiste) { //Se as duas condições forem verdadeiras
    console.log("Boa viagen!");
}else{
    console.log("Desculpe, tivemos um erro!");
}
 //LOOP FOR
     //Ininicar o contador // o contador ser menor que 3 // Para não ficar em loop, somando mais um nesse computador (mesmo coisa que +=) =
    //So Usou cont pq contadr usou la em cima, (exemplo)// Seja menor que a minha lista// Muitas vezes usamos i inves de qualquer nome para o contador (Lembra no jogo?!)
for(let cont = 0 ; cont <3 ; cont ++){ //Para isso acontecer. (;= usado como no for divisor)

    if (listaDeDestinos[contador]== destino){
        destinoExiste = true;
    }
}