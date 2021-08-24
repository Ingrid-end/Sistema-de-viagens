console.log('Trabalhando com condicionais');
const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
);

const idadeComprador = 19;
//const estaAcompanhada = false; // não esta acompanhado
const estaAcompanhada = false; // esta acompanhado
const temPassagemComprada = true;

console.log("Destinos possiveis:");
console.log(listaDeDestinos);

// if(idadeComprador >= 18){
//      //A pessoa é igual ou maior de idade
//    console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1) //remover itens da lista, 1=lugar,1=quantidade
// }else{
//     //Se não = A pessoa é menor de idade
//     if(estaAcompanhada) {
//         //se a pessoa esta acompanhada for verdadeiro, ele vai comprar
//         console.log("Comprador esta acompanhado");
//         listaDeDestinos.splice(1,1) //remover itens da lista, 1=lugar,1=quantidade
//     } 
//     else{
//  // se ele for menor de idade e não tiver acompanhado, não ira comprar
//     console.log("Comprador não é maior de idade e não posso vender");
// }


if (
     //ou um ou outro tem que ser verdadeiro, juntando as operações
    idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!");
    listaDeDestinos.splice(2, 1) //remover itens da lista, 1=lugar,1=quantidade
}
else {
    console.log("Comprador não é maior de idade e não posso vender");
}

console.log("Embarque:\n \n")
if(idadeComprador >=18 && temPassagemComprada){
    console.log("Boa Viagem!!")
}else{
    console.log("Voce não pode embarcar!")
}

console.log(listaDeDestinos);

 //Operadores:
//  console.log(idadeComprador > 18); //maior
//  console.log(idadeComprador < 18); //menor
//  console.log(idadeComprador >= 18); // maior ou igual
//  console.log(idadeComprador <= 18); // menor ou igual
//  console.log(idadeComprador == 18); // igual