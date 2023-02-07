// a) b) c) d)

const num1 = Number(prompt(`Digite o primeiro número:`))
const num2 = Number(prompt(`Digite o segundo número:`))

console.log(`Os números digitados são: ${num1} e ${num2}`)

function somaNumeros(num1,num2){
    const calc1 = num1 + num2
    const frase = `A soma dos números é: ${calc1}`
    
    return frase
}

function multi(num1,num2){
    const calc1 = num1 * num2
    const frase = `A multiplicação dos números é: ${calc1}`
    
    return frase
}

function divisao(num1,num2){
    const calc1 = num1 / num2
    const frase = `A divisão dos números é: ${calc1}`
    
    return frase
}

function subtracao(num1,num2){
    const calc1 = num1 - num2
    const frase = `A subtração dos números é: ${calc1}`
    
    return frase
}

const operacao1 = somaNumeros(num1,num2)
const operacao2 = multi(num1,num2)
const operacao3 = divisao(num1,num2)
const operacao4 = subtracao(num1,num2)

console.log(operacao1)
console.log(operacao2)
console.log(operacao3)
console.log(operacao4)
