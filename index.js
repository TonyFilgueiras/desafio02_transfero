window.total_viewer = total_viewer;
window.graph = graph;
window.graph_change = graph_change;
window.language_change = language_change;
window.scroll_left = scroll_left;
window.scroll_right = scroll_right;
window.percentage_calculator = percentage_calculator
window.checking_for_percentage = checking_for_percentage
window.visible_value = visible_value



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


const total_carteira = document.getElementById("total_carteira_h1")
const total_carteira_valor = document.getElementById("total_carteira_valor")


const englishradio = document.getElementById("englishradio")
const portuguesradio = document.getElementById("portuguesradio")

const valor_investido = document.getElementsByClassName("valor_investido")
const totalzao = document.getElementsByClassName("totalzao")

const monkey = document.getElementById("monkey")


let invested_value_ibov = 1000
let invested_value_poupanca = 1000
let invested_value_btc = 1000
let invested_value_dollar = 1000
let invested_value_cdi = 1000
let invested_value_selic = 1000
const bolsa_ibov = document.querySelector("#ibovespa label")
const bolsa_ibov_total = document.querySelector("#ibovespa .valor_total")
const bolsa_poupanca = document.querySelector("#poupanca label")
const bolsa_poupanca_total = document.querySelector("#poupanca .valor_total")
const bolsa_btc = document.querySelector("#btc label")
const bolsa_btc_total = document.querySelector("#btc .valor_total")
const bolsa_dollar = document.querySelector("#dollar label")
const bolsa_dollar_total = document.querySelector("#dollar .valor_total")
const bolsa_cdi = document.querySelector("#cdi label")
const bolsa_cdi_total = document.querySelector("#cdi .valor_total")
const bolsa_selic = document.querySelector("#selic label")
const bolsa_selic_total = document.querySelector("#selic .valor_total")

// ----------------------------------Changing Language-----------------------------------------------//

function language_change() {
    if (englishradio.checked == true) {
        total_carteira.innerText="Total Value:"    
        semana.innerText = "Week"
        mes.innerText = "Month"
        ano.innerText = "Year"
        for (let i = 0; i < valor_investido.length; i++) {
            valor_investido[i].innerText = "Invested Value:";
        }
        for (let i = 0; i < valor_investido.length; i++) {
            totalzao[i].innerText = "Asset Value:";
        }
        graph_change()
    }
    else  {
        total_carteira.innerText="Total na Carteira:"
        semana.innerText = "Semana"
        mes.innerText = "Mês"
        ano.innerText = "Ano"
        valor_investido.innerText = "Valor Investido"
        for (let i = 0; i < valor_investido.length; i++) {
            valor_investido[i].innerText = "Valor Investido:";
        }
        for (let i = 0; i < valor_investido.length; i++) {
            totalzao[i].innerText = "Valor Total:";
        }
        graph_change()
    }
}



// ------------------------------------My testing data----------------------------------------------------------------//
let label_ano = ['2022-01-03','2022-01-04','2022-01-05','2022-01-06','2022-01-07','2022-01-10','2022-01-11','2022-01-12','2022-01-13','2022-01-14','2022-01-17','2022-01-18','2022-01-19','2022-01-20','2022-01-21','2022-01-24','2022-01-25','2022-01-26','2022-01-27','2022-01-28','2022-01-31','2022-02-01','2022-02-02','2022-02-03','2022-02-04','2022-02-07','2022-02-08','2022-02-09','2022-02-10','2022-02-11','2022-02-14','2022-02-15','2022-02-16','2022-02-17','2022-02-18','2022-02-21','2022-02-22','2022-02-23','2022-02-24','2022-02-25','2022-03-02','2022-03-03','2022-03-04','2022-03-07','2022-03-08','2022-03-09','2022-03-10','2022-03-11','2022-03-14','2022-03-15','2022-03-16','2022-03-17','2022-03-18','2022-03-21','2022-03-22','2022-03-23','2022-03-24','2022-03-25','2022-03-28','2022-03-29','2022-03-30','2022-03-31','2022-04-01','2022-04-04','2022-04-05','2022-04-06','2022-04-07','2022-04-08','2022-04-11','2022-04-12','2022-04-13','2022-04-14','2022-04-18','2022-04-19','2022-04-20','2022-04-22','2022-04-25','2022-04-26','2022-04-27','2022-04-28','2022-04-29','2022-05-02',"2022-05-03", "2022-05-04", "2022-05-05"]

// --------------------------------------Changing visualization----------------------------------------------------------//

var alternate = 0
function visible_value(){
    if (alternate == 0) {
        monkey.innerHTML = "&#128053"
        bolsa_ibov.innerText = `R$ ${1000}`
        bolsa_poupanca.innerText = `R$ ${1000}`
        bolsa_btc.innerText = `R$ ${1000}`
        bolsa_dollar.innerText = `R$ ${1000}`
        bolsa_cdi.innerText = `R$ ${1000}`
        bolsa_selic.innerText = `R$ ${1000}`
        bolsa_ibov_total.innerText = `R$ ${Math.round(invested_value_ibov * 100) / 100}`
        bolsa_btc_total.innerText = `R$ ${Math.round(invested_value_btc * 100) / 100}`
        bolsa_dollar_total.innerText = `R$ ${Math.round(invested_value_dollar * 100) / 100}`
        bolsa_poupanca_total.innerText = `R$ ${Math.round(invested_value_poupanca * 100) / 100}`
        bolsa_cdi_total.innerText = `R$ ${Math.round(invested_value_cdi * 100) / 100}`
        bolsa_selic_total.innerText = `R$ ${Math.round(invested_value_selic * 100) / 100}`
        total_carteira_valor.innerText = `R$ ${Math.round((invested_value_ibov + invested_value_btc + invested_value_dollar + invested_value_poupanca + invested_value_cdi + invested_value_selic )* 100) / 100}`
        alternate = 1
    } else { 
        monkey.innerHTML = "&#128584"
        bolsa_ibov.innerText = "******"
        bolsa_poupanca.innerText = "******"
        bolsa_btc.innerText = "******"
        bolsa_dollar.innerText = "******"
        bolsa_cdi.innerText = "******"
        bolsa_selic.innerText = "******"
        bolsa_ibov_total.innerText = `******`
        bolsa_btc_total.innerText = `******`
        bolsa_dollar_total.innerText = `******`
        bolsa_poupanca_total.innerText = `******`
        bolsa_cdi_total.innerText = `******`
        bolsa_selic_total.innerText = `******`
        total_carteira_valor.innerText = `******`
        alternate = 0 
    }
}

        
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


// -----------------------------------Changing graph----------------------------------------------//

function graph_change() {
    var ibov = checking_for_percentage(ibovespa_simulation,ibovespa_value_percentage)
    var btc = checking_for_percentage(btc_simulation,btc_value_percentage)
    var dollar = checking_for_percentage(dollar_simulation,dollar_value_percentage)
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
        graph(ibov, "IBOV", ibovespa_simulation.length)
        graph(btc, "BTC", btc_simulation.length)
        graph(dollar, "Dollar",dollar_simulation.length)
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

// async function read_json (file_name, list){
//     fetch(file_name)
//     .then(function(resp){
//         return resp.json();
//     })
//     .then(function(data){
//         list = data.map(x => x.valor)
//     }); return list
// }

// poupanca_value = read_json('./json_files/poupanca.json', poupanca_value)

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

var ibovespa_simulation = []
var btc_simulation = []
var dollar_simulation = []

function investment_simulation(final_list, invested,base_graph){
    for (var i = 0; i < base_graph.length; i++){
        invested = invested + ((invested * (base_graph[i] * 100)) / 100)
        final_list.push(invested)
    } return final_list, invested
}

ibovespa_simulation, invested_value_ibov= investment_simulation(ibovespa_simulation, invested_value_ibov, ibovespa_value_percentage)
btc_simulation, invested_value_btc= investment_simulation(btc_simulation, invested_value_btc, btc_value_percentage)
dollar_simulation, invested_value_dollar= investment_simulation(dollar_simulation, invested_value_dollar, dollar_value_percentage)

// ------------------------------------------Plotting graph-------------------------------------------------------//

const data = {
    labels: label_ano,
    datasets: [{
        label: "IBOV",
        data: ibovespa_simulation,
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
        tension: 0.4,
        borderWidth: 0.8,
    },
    {
        label: 'BTC',
        data: btc_simulation,
        backgroundColor: [
                    'orange'
                ],
        borderColor: [
                    'orange'
                ],
        tension: 0.4,
        borderWidth: 0.8,
    },
    {
        label: 'Dollar',
        data: dollar_simulation,
        backgroundColor: [
            'red',
        ],
        borderColor: [
            'red',
                    ],
        tension: 0.4,
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
        tension: 0.4,
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
        tension: 0.4,
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
                },
                ticks: {
                    color: "white"
                }
            },
            x: {
                min: 0,
                max: label_ano.length -1, 
                grid: {
                    color: "#56EEF4"
                },
                ticks: {
                    color: "white"
                }
            }
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
    
            


// // function add_value_to_list(json, list){
// //     list.push(json.map((data) => data.valor))

// //     return list
// // }

// // poupanca_value = add_value_to_list(poupanca, poupanca_value)

// // poupanca_value.push(poupanca.map((data) => data.valor))
