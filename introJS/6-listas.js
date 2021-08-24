console.log('Trabalhando com listas');
// const salvador = 'Salvador';
// const saoPaulo = 'São Paulo';
// const rioDeJaneiro = 'Rio de Janeiro';

const listaDeDestinos = new Array (
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
);
listaDeDestinos.push('Curitiba') //adicionando um item na lista

console.log("Destinos possiveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
 console.log(listaDeDestinos);

 listaDeDestinos.splice(1,1) //remover itens da lista, 1=lugar,1=quantidade
 console.log(listaDeDestinos);

 //acessar um unico elemento da minha lista, dentro dos [] é o lugar onde esta o itens na lista
 console.log(listaDeDestinos[1]);