//fatorial RECURSIVIDADE

/*fatorial duma maneira recursiva
isto quando a chama ela mesma
   5! = 5 x 4 x 3 x 2 x 1 = 120
         é mesma coisa com
   5! = 5 x 4!

o fatorial dum numero pode ser calculado baseado no fatorial do outro.

n! = n x (n-1)
1! = 1
*/

function fatorial(n) {
   if (n == 1) {
      return 1
   } else {
      return n * fatorial(n-1)
   }
}

console.log(fatorial(5))