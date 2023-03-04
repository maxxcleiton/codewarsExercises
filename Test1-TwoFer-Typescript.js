// TESTE 1:
// Two Fer
// Link do teste:
// https://exercism.org/tracks/typescript/exercises/two-fer/

// Vamos lá, dado um name, ele precisa retornar uma string com a mensagem:
// One for "name", one for me.
// "name" é o valor que o exercício vai dar, que pode ser nenhum nome (undefined) ou algum nome, ex:

// Nome: Alice
// One for Alice, one for me.

// Inicialmente, me deram a função assim:
// export function twoFer(): string {

//   }

// Então, comecei a pensar:
// preciso colocar um parâmetro, que chamarei de name
// e como o problema pede, ele quer um resultado... ou outro, então o if encaixa perfeitamente nisso:

// export function twoFer(name): string {
//     if () {
//     } else {
//     }
//   }

// Agora então é adicionar os returns necessários:
// export function twoFer(): string {
//     if () {
//       return "One for you, one for me.";
//     } else {
//       return `One for ${name}, one for me.`;
//     }
//   }

// A parte da condicional do if, me pegou um tempo, fiquei tentando coisas como: name == "", 
// ou name === "", name == void, mas nada funcionou, então eu checando os outputs, lá falava que o resultado estava dando undefined,
// foi quando clareou a cabeça, pois undefined é valor indefinido, ele "não existe", o que seria que nosso contexto pede:

// export function twoFer(name:string) {
//     if (name == undefined) {
//       return "One for you, one for me.";
//     } else {
//       return `One for ${name}, one for me.`;
//     }
//   }

// Arrumei a posição da tipagem e então foi sucesso! obg
// ALL TESTS PASSED
