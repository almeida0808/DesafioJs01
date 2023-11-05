alert("Iremos pedir pra você dois números, e vamos realizar alguns calculos com eles.")

let numberOne = Number(prompt("Digite o Primeiro número:"))
let numberTwo = Number(prompt("Digite o Segundo número:"))

function numIguais(){
    var numUM = numberOne
    var numDOis = numberTwo

    if(numUM == numDOis){
        console.log("Números iguais!")
    }else{
        console.log("Números diferentes!")
    }
}
function ImparOuPar(){
    var numUM = numberOne
    var numDOis = numberTwo
let somaNum = numUM + numDOis
    if(somaNum % 2 == 0){
        console.log("A soma dos valores é par!")}
    else{
         console.log("A soma dos valores é imar!")}
}
numIguais()

 let soma = alert(`O resultado da soma: ${numberOne + numberTwo}`)
 ImparOuPar()
 let subrtração = alert(`O resultado da subtração: ${numberOne - numberTwo}`)
 let divisão = alert(`O resultado da divisão: ${(numberOne / numberTwo).toFixed(2)}`)
 let multiplicação = alert(`O resultado da multiplicação: ${numberOne * numberTwo}`)
 let restoDiv = alert(`O resultado do resto da divisão: ${numberOne % numberTwo}`)

 