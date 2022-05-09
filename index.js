window.total_viewer = total_viewer;
window.graph = graph;
window.graph_change = graph_change;
window.language_change = language_change;
window.scroll_left = scroll_left;
window.scroll_right = scroll_right;
window.percentage_calculator = percentage_calculator
window.checking_for_percentage = checking_for_percentage



function graph(data, coin,time, chart = myChart) {
    chart.data.datasets.forEach((dataset) => {
        if (dataset.label == coin) {
            dataset.data = data;
        }
    });
    chart.options.scales.x.min = label_ano.length - time
    chart.options.scales.x.max = label_ano.length - 1
    chart.update();
}


// ------------------------------------Declaring Variables-------------------------------------------//
const semanabox = document.getElementById("semana")
const semanaradio = document.getElementById("semanaradio")
const semana = document.querySelector("#semana>span")
const mesbox = document.getElementById("mes")
const mesradio = document.getElementById("mesradio")
const mes = document.querySelector("#mes>span")
const anobox = document.getElementById("ano")
const anoradio = document.getElementById("anoradio")
const ano = document.querySelector("#ano>span")


const totalbox = document.querySelector("#total")
const total = document.querySelector("#total>span")
const totalradio = document.getElementById("totalradio")
const percentagebox = document.querySelector("#percentage")
const percentage = document.querySelector("#percentage>span")
const percentageradio = document.getElementById("percentageradio")


const arrow_left = document.querySelector("#setaesquerda")
const arrow_right = document.querySelector("#setadireita")



// let language_factor = 1 //important to change graph label according to language selection
const teste = document.getElementById("teste")


const englishradio = document.getElementById("englishradio")
const portuguesradio = document.getElementById("portuguesradio")

// ----------------------------------Changing Language-----------------------------------------------//

function language_change() {
    if (englishradio.checked == true) {
        teste.innerHTML="English man..."    
        semana.innerText = "Week"
        mes.innerText = "Month"
        ano.innerText = "Year"
        language_factor = 0
        graph_change()
    }
    else  {
        teste.innerHTML="Português mano..."
        semana.innerText = "Semana"
        mes.innerText = "Mês"
        ano.innerText = "Ano"
        language_factor = 1
        graph_change()
    }
}



// ------------------------------------My testing data----------------------------------------------------------------//
let label_ano = ['2022-01-03','2022-01-04','2022-01-05','2022-01-06','2022-01-07','2022-01-10','2022-01-11','2022-01-12','2022-01-13','2022-01-14','2022-01-17','2022-01-18','2022-01-19','2022-01-20','2022-01-21','2022-01-24','2022-01-25','2022-01-26','2022-01-27','2022-01-28','2022-01-31','2022-02-01','2022-02-02','2022-02-03','2022-02-04','2022-02-07','2022-02-08','2022-02-09','2022-02-10','2022-02-11','2022-02-14','2022-02-15','2022-02-16','2022-02-17','2022-02-18','2022-02-21','2022-02-22','2022-02-23','2022-02-24','2022-02-25','2022-03-02','2022-03-03','2022-03-04','2022-03-07','2022-03-08','2022-03-09','2022-03-10','2022-03-11','2022-03-14','2022-03-15','2022-03-16','2022-03-17','2022-03-18','2022-03-21','2022-03-22','2022-03-23','2022-03-24','2022-03-25','2022-03-28','2022-03-29','2022-03-30','2022-03-31','2022-04-01','2022-04-04','2022-04-05','2022-04-06','2022-04-07','2022-04-08','2022-04-11','2022-04-12','2022-04-13','2022-04-14','2022-04-18','2022-04-19','2022-04-20','2022-04-22','2022-04-25','2022-04-26','2022-04-27','2022-04-28','2022-04-29','2022-05-02']

        
// ----------------------------------------Scroll no grafico-----------------------------------------------------//

function scroll_right(chart = myChart) {
    chart.options.scales.x.max += 6
    chart.options.scales.x.min += 6

    if (semanaradio.checked) {
        var time = 6
    } else if (mesradio.checked) {
        var time = 22
    }
    
    
    if(chart.options.scales.x.max >= label_ano.length -1) {
        chart.options.scales.x.max = label_ano.length -1
        chart.options.scales.x.min = label_ano.length - time
        
    };
    
    chart.update()
}

function scroll_left(chart = myChart) {
    chart.options.scales.x.max -= 6
    chart.options.scales.x.min -= 6
    
    if (semanaradio.checked) {
        var time = 6
    } else if (mesradio.checked) {
        var time = 22
    }
    
    
    if(chart.options.scales.x.min <= 0) {
        chart.options.scales.x.max = time
        chart.options.scales.x.min = 0
        
    };
    
    chart.update()
}


// ------------------------------------Calculating percentage-----------------------------------//  

function percentage_calculator (data, data_percentage) {
    var j = 0
    for (var i in data) {
        if (j > 0){
            i = ((data[j] * 100) / data[0]) - 100
        } else {
            i = 0
        }
        j += 1
        data_percentage.push(i)
    }
}

function checking_for_percentage(dados1, dados2) {
    if (percentageradio.checked == true){
        var x = dados2
    } else {
        var x = dados1
    } return x
}

percentage_calculator(btc_value, btc_value_percentage)

// -----------------------------------Changing graph----------------------------------------------//

function graph_change() {
    var ibov = checking_for_percentage(ibovespa_value,ibovespa_value_percentage)
    var btc = checking_for_percentage(btc_value,btc_value_percentage)
    var dollar = checking_for_percentage(dollar_value,dollar_value_percentage)
    if (semanaradio.checked) {
        semanabox.style.background = "#56EEF4"
        mesbox.style.background = "none"
        anobox.style.background = "none"
        document.querySelector("#semana>span").style.color = "black"
        mesbox.style.color = "white"
        ano.style.color = "white"
        graph(ibov,"IBOV", 6)
        graph(btc, "BTC",6)
        graph(dollar, "Dollar",6)
        arrow_left.style.visibility = "visible"
        arrow_right.style.visibility = "visible"
    }
    if (mesradio.checked) {
        semanabox.style.background = "none"
        mesbox.style.background = "#56EEF4"
        anobox.style.background = "none"
        semana.style.color = "white"
        mesbox.style.color = "black"
        ano.style.color = "white"
        graph(ibov,'IBOV', 22)
        graph(btc, "BTC",22)
        graph(dollar, "Dollar",22)
        arrow_left.style.visibility = "visible"
        arrow_right.style.visibility = "visible"
    }
    if (anoradio.checked) {
        semanabox.style.background = "none"
        mesbox.style.background = "none"
        anobox.style.background = "#56EEF4"
        document.querySelector("#semana>span").style.color = "white"
        mesbox.style.color = "white"
        ano.style.color = "black"
        graph(ibov, "IBOV", ibovespa_value.length)
        graph(btc, "BTC", btc_value.length)
        graph(dollar, "Dollar",dollar_value.length)
        arrow_left.style.visibility = "hidden"
        arrow_right.style.visibility = "hidden"
    }    
}

// -----------------------------------Changing percentage viewer----------------------------------------------//

function total_viewer() {
    if (totalradio.checked == true) {
        totalbox.style.background = "#56EEF4"
        total.style.color = "black"
        percentagebox.style.background = "none"
        percentage.style.color = "white"
        graph_change()
    } else {
        totalbox.style.background = "none"
        total.style.color = "white"
        percentagebox.style.background = "#56EEF4"
        percentage.style.color = "black"
        graph_change()
    }
}

// -----------------------------------------------Reading JSON------------------------------------------------------------//

var poupanca_value = []
var btc_value = []
var btc_value_percentage = []
var dollar_value = []
var dollar_value_percentage = []
var cdi_value = []
var ibovespa_value = []
var ibovespa_value_percentage = []
var selic_value = []

// function read_json (file_name, list){
//     fetch(file_name)
//     .then(function(resp){
//         return resp.json();
//     })
//     .then(function(data){
//         list = data.map(x => x.valor)
//     }); return list
// }

// poupanca_value = await read_json('./poupanca.json', poupanca_value)
// console.log(poupanca_value)

await fetch('./json_files/poupanca.json')
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        poupanca_value = data.map(x => x.valor)
    })

await fetch('./json_files/btc.json')
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        btc_value = data.map(x => x.valor)
    })
await fetch('./json_files/btc.json')
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        btc_value_percentage = data.map(x => x.variacao)
    })
await fetch('./json_files/dollar.json')
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        dollar_value = data.map(x => x.valor)
    })
await fetch('./json_files/dollar.json')
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        dollar_value_percentage = data.map(x => x.variacao)
    })
await fetch('./json_files/cdi.json')
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        cdi_value = data.map(x => x.valor)
    })
await fetch('./json_files/ibovespa.json')
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        ibovespa_value = data.map(x => x.valor)
    })
await fetch('./json_files/ibovespa.json')
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        ibovespa_value_percentage = data.map(x => x.variacao)
    })
await fetch('./json_files/selic.json')
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        selic_value = data.map(x => x.valor)
    })


// ------------------------------------------Plotting graph-------------------------------------------------------//

const data = {
    labels: label_ano,
    datasets: [{
        label: "IBOV",
        data: ibovespa_value,
        backgroundColor: [
            '#357DED',   
        ],
        borderColor: [
            '#357DED',            
        ],
        tension: 0.4,
        borderWidth: 1
    },
    {
        label: 'Poupança',
        data: poupanca_value,
        backgroundColor: [
            'white',
        ],
        borderColor: [
            'white',
                    ],
        borderWidth: 0.8,
    },
    {
        label: 'BTC',
        data: btc_value,
        backgroundColor: [
                    'orange'
                ],
        borderColor: [
                    'orange'
                ],
        borderWidth: 0.8,
    },
    {
        label: 'Dollar',
        data: dollar_value,
        backgroundColor: [
            'red',
        ],
        borderColor: [
            'red',
                    ],
        borderWidth: 0.8,
    },
    {
        label: 'CDI',
        data: cdi_value,
        backgroundColor: [
            'yellow',
        ],
        borderColor: [
            'yellow',
                    ],
        borderWidth: 0.8,
    },
    {
        label: 'Selic',
        data: selic_value,
        backgroundColor: [
            'green',
        ],
        borderColor: [
            'green',
                    ],
        borderWidth: 0.8,
    },]
};
                                
// config 
const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                grid: {
                    color: "#56EEF4"
                }
            },
            x: {
                min: 0,
                max: label_ano.length -1, 
                grid: {
                    color: "#56EEF4"
                }}
            },
            plugins:{      // Configuração de legendas
                legend:{
                    display:true,
                    position: 'bottom',
                    align: 'center',
                    labels:{
                        font:{
                            size: 14
                        },
                        color: "white"
                    }
                },
            },
            labels: {
                fontColor: "white"
            }
        }};
        
// render init block
const myChart = new Chart(
    document.getElementById('graph'),
    config
    );
    
            
var t33 = document.getElementById("fodendo_teste")
t33.innerHTML = btc_value_percentage

            


// // function add_value_to_list(json, list){
// //     list.push(json.map((data) => data.valor))

// //     return list
// // }

// // poupanca_value = add_value_to_list(poupanca, poupanca_value)

// // poupanca_value.push(poupanca.map((data) => data.valor))
