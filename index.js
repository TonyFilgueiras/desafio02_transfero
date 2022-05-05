// const fs = require('fs')
// let ibov = fs.readFileSync('ibov.csv', 'utf-8')


// labels: label_ano,
//     datasets: [{
//         label: coin,
//         data: dados_ano_ibov,
//         backgroundColor: [
//             'white',

//         ],
//         borderColor: [
//            '#357DED',

//         ],
//         tension: 0.4,
//     },

        
function graph(data, coin,time, chart = myChart) {
    // chart.data.labels = label;
    chart.data.datasets.forEach((dataset) => {
        if (dataset.label == coin) {
            dataset.data = data;
        }
    });
    chart.options.scales.x.min = dados_ano_ibov.length - time
    chart.options.scales.x.max = dados_ano_ibov.length - 1
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

let dados_ano_ibov = [103922.0,103514.0,101006.0,101561.0,102719.0,101945.0,103779.0,105686.0,105530.0,106928.0,106692.0,106522.0,108013.0,109102.0,108942.0,107752.0,109845.0,111573.0,112315.0,111478.0,112388.0,113147.0,112161.0,111696.0,112245.0,111996.0,112234.0,112461.0,113359.0,113572.0,113807.0,114660.0,115181.0,113528.0,112768.0,111725.0,112892.0,112008.0,111592.0,113142.0,115174.0,115166.0,114474.0,111593.0,111203.0,113900.0,113663.0,111713.0,109928.0,108959.0,111112.0,113076.0,115311.0,116155.0,117272.0,117457.0,119053.0,119081.0,118738.0,120014.0,120260.0,119999.0,121570.0,121280.0,118885.0,118228.0,118862.0,118322.0,116953.0,116147.0,116782.0,116182.0,115687.0,115057.0,114344.0,111078.0,110685.0,108213.0,109349.0,109919.0,107876.0,106639.0]
let label_ano = ['2022-01-03','2022-01-04','2022-01-05','2022-01-06','2022-01-07','2022-01-10','2022-01-11','2022-01-12','2022-01-13','2022-01-14','2022-01-17','2022-01-18','2022-01-19','2022-01-20','2022-01-21','2022-01-24','2022-01-25','2022-01-26','2022-01-27','2022-01-28','2022-01-31','2022-02-01','2022-02-02','2022-02-03','2022-02-04','2022-02-07','2022-02-08','2022-02-09','2022-02-10','2022-02-11','2022-02-14','2022-02-15','2022-02-16','2022-02-17','2022-02-18','2022-02-21','2022-02-22','2022-02-23','2022-02-24','2022-02-25','2022-03-02','2022-03-03','2022-03-04','2022-03-07','2022-03-08','2022-03-09','2022-03-10','2022-03-11','2022-03-14','2022-03-15','2022-03-16','2022-03-17','2022-03-18','2022-03-21','2022-03-22','2022-03-23','2022-03-24','2022-03-25','2022-03-28','2022-03-29','2022-03-30','2022-03-31','2022-04-01','2022-04-04','2022-04-05','2022-04-06','2022-04-07','2022-04-08','2022-04-11','2022-04-12','2022-04-13','2022-04-14','2022-04-18','2022-04-19','2022-04-20','2022-04-22','2022-04-25','2022-04-26','2022-04-27','2022-04-28','2022-04-29','2022-05-02']
// let dados_semana_ibov = []
// let label_semana =[]
// let dados_mes_ibov = []
// let label_mes = []
let coin = "IBOV"
// let dados_mes_ibov_percentage = []
// let dados_semana_ibov_percentage = []
let dados_ano_ibov_percentage = []

// ---------------------------------------Changing visualization-----------------------------------------//

// function adicionar_a_lista(lista1, lista2, quantidade) {
// 	for (var i =quantidade; i>0; i--) {
//         lista2.push(lista1[lista1.length - i])
// 	} return lista2
// }
// dados_semana_ibov = adicionar_a_lista(dados_ano_ibov, dados_semana_ibov, 6)
// label_semana = adicionar_a_lista(label_ano, label_semana, 6)
// dados_mes_ibov = adicionar_a_lista(dados_ano_ibov, dados_mes_ibov, 20)
// label_mes = adicionar_a_lista(label_ano, label_mes, 20)


function scroll_right(chart = myChart) {
    chart.options.scales.x.max += 6
    chart.options.scales.x.min += 6

    chart.update()
}

function scroll_left(chart = myChart) {
    chart.options.scales.x.max -= 6
    chart.options.scales.x.min -= 6

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
        x = dados2
    } else {
        x = dados1
    } return x
}


percentage_calculator(dados_ano_ibov, dados_ano_ibov_percentage)

// -----------------------------------Changing graph----------------------------------------------//

function graph_change() {
    var z = checking_for_percentage(dados_ano_ibov,dados_ano_ibov_percentage)
    if (semanaradio.checked) {
        semanabox.style.background = "#56EEF4"
        mesbox.style.background = "none"
        anobox.style.background = "none"
        document.querySelector("#semana>span").style.color = "black"
        mesbox.style.color = "white"
        ano.style.color = "white"
        graph(z,coin, 6)
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
        graph(z,coin, 22)
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
        graph(z, coin, dados_ano_ibov.length)
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

// ------------------------------------------Plotting graph-------------------------------------------------------//

const data = {
    labels: label_ano,
    datasets: [{
        label: coin,
        data: dados_ano_ibov,
        backgroundColor: [
            'white',

        ],
        borderColor: [
           '#357DED',

        ],
        tension: 0.4,
        borderWidth: 1
    },
    // {
    //     label: 'USDT',
    //     data: [5.0848,4.9725,4.939,4.9651,4.9989,4.8766,4.7937,4.622,4.6219,4.6675,4.6527,4.6965,4.7013,4.6899,4.6747,4.6944,4.697,4.7524,4.7161,4.6506,4.5928,4.6575,4.739,4.7685,4.7561,4.7675,4.742,4.8253,4.8258,4.9094,4.9365,5.0236,5.0404,5.0765,5.1641,5.1205,5.075,5.0115,5.0128,5.0603,5.112,5.0625,5.0324,5.1,5.1605,5.1601,5.1628,5.1236,5.0102,5.0587,5.1038,5.139,5.1723,5.137,5.1595,5.2153,5.2532,5.2501,5.2359,5.2598,5.2641,5.3284,5.2844,5.2625,5.266,5.3046,5.3676,5.407,5.4329,5.4442,5.4882,5.4587,5.4196,5.4388,5.5671,5.517,5.5349,5.5291,5.5343,5.5691,5.6638,5.636,5.6839,5.7092,5.6773,5.6823],
    //     backgroundColor: [
    //         'white',

    //         ],
    //     borderColor: [
    //         'white',

    //     ],
    //     borderWidth: 0.8,
    // },
    // {
    //     label: 'Global Stable',
    //     data: [100374.19, 100374.19, 100374.19, 100374.19, 100374.19, 100374.19, 100374.19,100374.19, 100374.19, 100374.19, 100374.19, 100374.19, 100374.19, 100374.19,100374.19, 100374.19, 100374.19, 100374.19, 100374.19, 100374.19, 100374.19,100374.19, 100374.19, 100374.19, 100374.19, 100374.19, 100374.19, 100374.19,100374.19, 100374.19, 100374.19, 100374.19, 100374.19, 100374.19, 100374.19,100374.19, 100374.19, 100374.19, 100374.19, 100374.19, 100374.19, 100374.19,100374.19, 100374.19, 100374.19, 100374.19, 100374.19, 100374.19, 100374.19,100374.19, 100374.19, 100374.19, 100374.19, 100374.19, 100374.19, 100374.19,100374.19, 100374.19, 100374.19, 100374.19, 100374.19, 100374.19, 100374.19,100374.19, 100374.19, 100374.19, 100374.19, 100374.19, 100374.19, 100374.19,100374.19, 100374.19, 100374.19, 100374.19, 100374.19, 100374.19, 100374.19,100374.19, 100374.19, 100374.19, 100374.19, 100374.19, 100374.19, 100374.19],
    //     backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //         'rgba(255, 206, 86, 0.2)',
    //         'rgba(75, 192, 192, 0.2)',
    //         'rgba(153, 102, 255, 0.2)',
    //         'rgba(255, 159, 64, 0.2)'
    //         ],
    //     borderColor: [
    //         'rgba(255, 99, 132, 1)',
    //         'rgba(54, 162, 235, 1)',
    //         'rgba(255, 206, 86, 1)',
    //         'rgba(75, 192, 192, 1)',
    //         'rgba(153, 102, 255, 1)',
    //         'rgba(255, 159, 64, 1)'
    //     ],
    //     borderWidth: 0.8,
    // },
    // {
    //     label: 'Libra',
    //     data: [100603.54, 100574.80, 100564.69, 100483.51, 100558.3, 100504.48, 105015.96],
    //     backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //         'rgba(255, 206, 86, 0.2)',
    //         'rgba(75, 192, 192, 0.2)',
    //         'rgba(153, 102, 255, 0.2)',
    //         'rgba(255, 159, 64, 0.2)'
    //         ],
    //     borderColor: [
    //         'rgba(255, 99, 132, 1)',
    //         'rgba(54, 162, 235, 1)',
    //         'rgba(255, 206, 86, 1)',
    //         'rgba(75, 192, 192, 1)',
    //         'rgba(153, 102, 255, 1)',
    //         'rgba(255, 159, 64, 1)'
    //     ],
    //     borderWidth: 0.8,
    // },     
]
}
;

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
    // labels: {
        //     fontColor: "white"
        // }
    }};
    
// render init block
const myChart = new Chart(
    document.getElementById('graph'),
    config
    );


// var t33 = document.getElementById("fodendo_teste")
// t33.innerHTML = dados_ano_ibov_percentage[2]




// ----------------------------------------Scroll no grafico-----------------------------------------------------//

// function testing_rola(chart = myChart) {
//     chart.options.scales.x.max = 6;
//     chart.update();
// }

// testing_rola()