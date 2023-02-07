// a)

function soma(num1,num2){
    const calc = num1 + num2
    console.log(`Soma entre eles é: ${calc}`)
}

//soma(2,6)

// b)

function pergunta(num1,num2){
    const calc = num1 >= num2
    console.log(`O 1 número é maior ou igual ao segundo: ${calc}`)
}
//pergunta (3,10)

// c)
function ehpar(num1,num2){
    const calc = num1 % num2 === 0
    console.log(`O número é par? ${calc}`)
}
//ehpar(5)

// d)

function salarioLiq(salarioBruto){

    const inss = salarioBruto * 0.1
    const calcLiq = salarioBruto - inss

    const frase = `O salário líquido é: ${calcLiq}`

    return frase
}
console.log(salarioLiq(4200))
