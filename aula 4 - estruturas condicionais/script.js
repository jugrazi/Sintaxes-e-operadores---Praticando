var participante1 = 0;
var participante2 = 1
var placar;

participante1 != -1 && participante2 != -1 ? console.log('os participantes são válidos') :
 console.log('os participantes não são válidos')

 if (participante1 > 0 && participante2 == 0) {
    console.log('Participante 1 ganhou bolo!');
    placar = participante1 > participante2;
}
else if (participante2 > 0 && participante1 == 0) {
    console.log('Participante 2 ganhou bolo!');
    placar = participante2 > participante1;
}

else {
    console.log('Ninguém ganhou bolo!')
}

switch (placar) {
    case placar = participante1 > participante2:
        console.log('Participante 1 ganhou');
        break;
        case placar = participante2 > participante1:
        console.log('Participante 2 ganhou');
        break;
} 

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',];

let object = { PrimeiroValor: 'valor1', SegundoValor: 'valor2', TerceiroValor: 'valor3', }

for (let i = 0; i < array.length; i++) {
    console.log(i);
} 


/* // for/in - executa repetição a partir de uma propriedade
// com array
for (i in array) {
    console.log(i);
}
// com object
for (i in object) {
    console.log(i);
} */

/* // for/of - executa repetição a partir de um valor
// com array
for (i of array) {
    console.log(i);
}
// com object não funciona pois não é iterável
for (i of object.propriedade1) {
    console.log(i);
} */


// while - executa enquanto for verdadeira
// var a = 0;
/* while (a < 10) {
    a++;
    console.log(a)
} */

 do {
    a++;
    console.log(a);
} while (a < 10); 