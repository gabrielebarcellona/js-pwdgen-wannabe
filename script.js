const name = (prompt ("Inserisci il tuo nome"))
console.log(name)

const surname = (prompt ("Inserisci il tuo cognome"))
console.log(surname)

const color = (prompt("Inserisci il tuo colore preferito"))
console.log(color)

const outputStr = `
Hello ${name + ' ' + surname} <br>
Your favorite color is ${color}`

console.log(outputStr)

document.getElementById("output").innerHTML = outputStr;