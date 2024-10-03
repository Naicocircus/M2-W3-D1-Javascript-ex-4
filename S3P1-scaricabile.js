/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    }
    else {
        return num1 + num2;
    }
};                            

function crazySum(num1,num2){
    return (num1 === num2) ? (num1+num2) *3 : (num1+num2);
}



console.log(crazySum(30, 30));
console.log(crazySum(20, 50));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se 
 tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(num) {
    if (num.isInteger() && (num >= 20 && num <= 100) || num === 400) {
        return true;
    } else {
        return false;
    }
};

console.log(boundary(410));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(str) {
    return str.split().reverse().join(''); 
  };

console.log(reverseString('EPICODE'));
  


/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera
  iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)) .join(' '); 
  };

  console.log(upperFirst("ho fatto un array bellissimo"));    
  


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente 
 n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    let randomNumbers = [];
    
    for (let i = 0; i < n; i++) {
      let randomNum = Math.floor(Math.random() * 11); 
      randomNumbers.push(randomNum); 
    }
    return randomNumbers;
  };                             
  console.log(giveMeRandom(12));
  
  

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1,l2){
    return l1 * l2;
}
console.log(area(10,20));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(n) {

    let differenza = Math.abs(n - 19);

    if (differenza > 19) {
      return differenza * 3;
    } else {
      return differenza;
    }
  };
  console.log(crazyDiff(100));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita 
 comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function codify(str) {
    if (str.startsWith("code")) {
      return str; 
    } else {
      return "code " + str;
    }
  }
  
console.log(codify('controlla se funziona'));
console.log(codify('code funziona'));
/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(n) {
    if (n % 3 === 0 || n % 7 === 0) {
      return true;
    } else {
      return false; 
    }
  }
  console.log(check3and7(21));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(str) {
    if (str.length <= 2) {
      return ''; 
    }
    return str.slice(1, -1);
  }
  
  // Esempi di utilizzo:
console.log(cutString('cavallo'));
