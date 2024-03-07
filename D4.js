/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
  const result = l1 * l2
  return result
}

console.log(area(2, 4))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (n1, n2) {
  let result = n1 + n2
  if (n1 % 1 === 0 && n2 % 1 === 0) {
    if (n1 === n2) {
      result = result * 3
    } else {
      result = result
    }
  } else {
    console.log('I numeri inseriti non sono interi')
  }

  return result
}

console.log(crazySum(3, 2))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (n1) {
  let result = Math.abs(n1 - 19)
  if (result > 19) {
    result = result * 3
  }
  return result
}

console.log(crazyDiff(-1))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n1) {
  if (n1 > 20 && n1 <= 100) {
    return true
  } else if (n1 === 400) {
    return true
  } else {
    return false
  }
}
console.log(boundary(60))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (sentence) {
  let word = 'EPICODE '
  const wordPosition = sentence.indexOf('EPICODE')
  if (wordPosition < 0) {
    return word + sentence
  } else {
    return sentence
  }
}

console.log(epify('EPICODE you are awesome!'))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (num) {
  let checkedNumber
  if (num > 0) {
    if (num % 3 === 0 && num % 7 === 0) {
      return num + ' è sia multiplo di 3 che di 7'
    } else {
      if (num % 3 === 0) {
        return num + ' è multiplo di 3'
      } else if (num % 7 === 0) {
        return num + ' è multiplo di 7'
      } else {
        return num + ' non è ne multiplo di 3 ne di 7'
      }
    }
  } else {
    console.log('Numero inserito non valido. Immettere un numero positivo')
  }
}

console.log(check3and7(30))
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (str) {
  if (str === '') return ''
  else return reverseString(str.substr(1)) + str.charAt(0)
}
console.log(reverseString('EPICODE'))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function (sentence) {
  let words = sentence.split(' ')

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)
  }

  return words.join(' ')
}

console.log(upperFirst('Ciao come stai?'))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (str) {
  return str.slice(1, -1)
}
console.log(cutString('ciao come stai'))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (n) {
  let randomNumber = Math.random() * 10
  let randomNum = []
  for (i = 0; i <= n; i++) {
    randomNum.push(randomNumber)
  }
  return
}

console.log(giveMeRandom(5))
