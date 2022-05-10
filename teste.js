// const poupanca = require('./poupanca.json')

// let poupanca_value = []

// function add_value_to_list(json, list){
//     list.push(json.map((data) => data.valor))

//     return list
// }

// poupanca_value = add_value_to_list(poupanca, poupanca_value)

// console.log(`ta aqui ó ................ ${poupanca_value}`)


var valor = 200

lista = [0.02,0.04,0.05,0.02,0.06,0.01]

for (var i = 0; i < lista.length; i++){
    valor = valor + ((valor * (lista[i] * 100)) / 100)
    console.log(valor)
}


console.log(valor)