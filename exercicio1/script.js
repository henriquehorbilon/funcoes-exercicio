// a)

function imprimir(nome){
    console.log(`Olá, ${nome}!`)
}

//imprimir('henrique')

// b)

// const tabuadaAnonima = function(num){ }   - Função não-nomeada
// const tabuadaArrow = (num) => { } - Função Arrow
function tabuada(num){
    const calc1 = num * 1
    const calc2 = num * 2
    const calc3 = num * 3
    const calc4 = num * 4
    const calc5 = num * 5
    const calc6 = num * 6
    const calc7 = num * 7
    const calc8 = num * 8
    const calc9 = num * 9
    const calc10 = num * 10

    const frase = `Tabuada de 1--10 respectivamente é: ${num}*1=${calc1}, ${num}*2=${calc2}, ${num}*3=${calc3}, ${num}*4=${calc4}, ${num}*5=${calc5}, ${num}*6=${calc6}, ${num}*7=${calc7}, ${num}*8=${calc8}, ${num}*9=${calc9}, ${num}*10=${calc10}
    `
    console.log(frase)
}
//tabuada(2)
//tabuada(6)

// c)
// const tabuadaAnonima = function(num){ }   - Função não-nomeada
// const tabuadaArrow = (num) => { } - Função Arrow
