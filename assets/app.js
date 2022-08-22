let nome = document.getElementById('nome')
let altura = document.getElementById('altura')
let peso = document.getElementById('peso')
let imc
let resultLista = document.getElementById('resultado')
let resultado = document.getElementById('resultado')
const btnCalcular = document.getElementById('calcular')
const listaReferencia = {
    '<17':'Muito abaixo do peso!',
    '17 & 18,49':	'Você está abaixo do peso',
    '18,5 & 24,99':	'Você está com o peso normal',
    '25 & 29,99':	'Você está acima do peso',
    '30 & 34,99':	'Você está com um grau de Obesidade I',
    '35 & 39,99':	'Você está com um grau de Obesidade II (severa)',
    '>40':	'Obesidade III (mórbida)}',
}
function calculoIMC(){
    if (nome.value == '' || altura.value == '' || peso.value == ''){
        alert ('Verifique se todos os campos foram')
    }
    else{
        imc = parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value)) 
        if (imc<= 17 ){
            resultLista =listaReferencia["<17"]
            console.log(listaReferencia["<17"])
            
        }   else if(imc<= 18.49){
                resultLista = listaReferencia["17 & 18,49"]
                console.log(listaReferencia["17 & 18,49"])
                
        }   else if(imc <=24.99){
                resultLista = listaReferencia["18,5 & 24,99"]
                console.log(listaReferencia["18,5 & 24,99"])
                
        }   else if (imc <= 29.99){
                resultLista = listaReferencia["25 & 29,99"]
                console.log(listaReferencia["25 & 29,99"])

        }   else if (imc <=34.99){
                resultLista = listaReferencia["30 & 34,99"]    
                console.log(listaReferencia["30 & 34,99"])

        }   else if(imc <= 39.99){
            resultLista = listaReferencia["35 & 39,99"]
            console.log(listaReferencia["35 & 39,99"])
        }   else{
            resultLista = listaReferencia[">40"]
            console.log(listaReferencia[">40"])
        }
        
    }
    resultado.innerText = `Olá ${nome.value}, seu peso é ${peso.value}kg, com ${altura.value} de altura! Seu imc é ${imc.toFixed(2)}. ${resultLista}`
    console.log(resultado)
    return resultado
}
btnCalcular.addEventListener('click', calculoIMC)

let poost = Object.entries(listaReferencia)
console.log(poost[2])



// let altura = document.getElementById('altura')
// let peso = document.getElementById('peso')
// let imc
// let resultado = document.getElementById('resultado')
// const btnCalcular = document.getElementById('calcular')
// let situacao

// function calculoIMC(){
//     imc = parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value))
//     if(imc <= 10){
//         situacao = 'magrelo'
//     }
//     else{
//         situacao = 'obeso'
//     }
//     resultado.innerText = `Com o imc de ${imc.toFixed(2)}, você está : ${situacao}`
//     console.log(resultado)
//     return resultado
// }
// btnCalcular.addEventListener('click', calculoIMC)