window.total_viewer = total_viewer;
window.graph = graph;
window.graph_change = graph_change;
window.language_change = language_change;
window.scroll_left = scroll_left;
window.scroll_right = scroll_right;
window.checking_for_percentage = checking_for_percentage
window.calculation = calculation
window.currency_change = currency_change


function graph(data, coin,time, chart = myChart) {
    chart.data.datasets.forEach((dataset) => {
        if (dataset.label == coin) {
            dataset.data = data;
        }
    });
    chart.options.scales.x.min = date.length - time
    chart.options.scales.x.max = date.length - 1
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


const valor_label = document.querySelector("#total_carteira label")
const data_label = document.querySelector("#total_carteira label[for='data_simulação']")

const realradio = document.getElementById("realradio")
const real = document.querySelector("#real label")
const dolarradio = document.getElementById("dolarradio")
const dolar = document.querySelector("#dollar label")
var currency = 'brl'

const englishradio = document.getElementById("englishradio")
const portuguesradio = document.getElementById("portuguesradio")

var invested_value = Number(document.getElementById("valor_simulação").value)
var date_input = (document.getElementById("data_simulação").value)

async function calculation(){
    date_input = (document.getElementById("data_simulação").value).split(/\s*-\s*/)
    invested_value = Number(document.getElementById("valor_simulação").value)
    await fetch(`https://prime-portfolio-api.herokuapp.com/simulation?value=${invested_value}&start_date=${date_input[2]}-${date_input[1]}-${date_input[0]}`)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        advanced_value = data[`valor_advf_${currency}`].map(x => x.valor)
        conservative_value = data[`valor_arbf_${currency}`].map(x => x.valor)
        btc_value = data[`valor_bitcoin_${currency}`].map(x => x.valor)
        ibov_value = data[`valor_bovespa_${currency}`].map(x => x.valor)
        cdi_value = data[`valor_cdi_${currency}`].map(x => x.valor)
        gsaf_value = data[`valor_gsaf_${currency}`].map(x => x.valor)
        libra_value = data[`valor_libf_${currency}`].map(x => x.valor)
        poupanca_value = data[`valor_poupanca_${currency}`].map(x => x.valor)
        selic_value = data[`valor_selic_${currency}`].map(x => x.valor)
        tccfusd_value = data[`valor_tccfusd_${currency}`].map(x => x.valor)
        dollar_value = data[`valor_usd_brl`].map(x => x.valor)
        advanced_value_percentage = data[`valor_advf_${currency}`].map(x => x.variacao_diaria * 100) 
        conservative_value_percentage = data[`valor_arbf_${currency}`].map(x => x.variacao_diaria * 100)
        btc_value_percentage = data[`valor_bitcoin_${currency}`].map(x => x.variacao_diaria * 100)
        ibov_value_percentage = data[`valor_bovespa_${currency}`].map(x => x.variacao_diaria * 100)
        cdi_value_percentage = data[`valor_cdi_${currency}`].map(x => x.variacao_diaria * 100)
        gsaf_value_percentage = data[`valor_gsaf_${currency}`].map(x => x.variacao_diaria * 100)
        libra_value_percentage = data[`valor_libf_${currency}`].map(x => x.variacao_diaria * 100)
        poupanca_value_percentage = data[`valor_poupanca_${currency}`].map(x => x.variacao_diaria * 100)
        selic_value_percentage = data[`valor_selic_${currency}`].map(x => x.variacao_diaria * 100)
        tccfusd_value_percentage = data[`valor_tccfusd_${currency}`].map(x => x.variacao_diaria * 100)
        dollar_value_percentage = data[`valor_usd_brl`].map(x => x.variacao_diaria * 100)
        if (currency == 'usd'){
            dollar_value = []
        }
        date = data[`valor_advf_${currency}`].map(x => x.data)
        graph_change()               
    })
    myChart.data.labels = date
    myChart.update()
}

// ----------------------------------Changing Language-----------------------------------------------//

function language_change() {
    if (englishradio.checked == true) {
        valor_label.innerText="Value in BRL:" 
        data_label.innerText="Start date:" 
        semana.innerText = "Week"
        mes.innerText = "Month"
        ano.innerText = "Year"
        graph_change()
    }
    else  {
        valor_label.innerText="Valor em BRL:"
        data_label.innerText="Data de ínicio:" 
        semana.innerText = "Semana"
        mes.innerText = "Mês"
        ano.innerText = "Ano"
        graph_change()
    }
}

// --------------------------------------Changing currency----------------------------------------------------------//

function currency_change(){
    if (realradio.checked == true){
        currency = 'brl'
        real.style.background = "#22175C"
        dolar.style.background = 'transparent'
        calculation()
    } else {
        currency = 'usd'
        real.style.background = "transparent"
        dolar.style.background = '#22175C'
        calculation()
    }
}
        
// ----------------------------------------Scroll no grafico-----------------------------------------------------//

function scroll_right(chart = myChart) {
    if (semanaradio.checked) {
        chart.options.scales.x.max += 1
        chart.options.scales.x.min += 1
        var time = 7
    } else if (mesradio.checked) {
        chart.options.scales.x.max += 6
        chart.options.scales.x.min += 6
        var time = 22
    }
    
    
    if(chart.options.scales.x.max >= date.length -1) {
        chart.options.scales.x.max = date.length -1
        chart.options.scales.x.min = date.length - time
        
    };
    
    chart.update()
}

function scroll_left(chart = myChart) {
    if (semanaradio.checked) {
        chart.options.scales.x.max -= 1
        chart.options.scales.x.min -= 1
        var time = 7
    } else if (mesradio.checked) {
        chart.options.scales.x.max -= 6
        chart.options.scales.x.min -= 6    
        var time = 22
    }
    
    
    if(chart.options.scales.x.min <= 0) {
        chart.options.scales.x.max = time
        chart.options.scales.x.min = 0
        
    };
    
    chart.update()
}


// ------------------------------------Calculating percentage-----------------------------------//  
function checking_for_percentage(dados1, dados2) {
    if (percentageradio.checked == true){
        var x = dados2
    } else {
        var x = dados1
    } return x
}


// -----------------------------------Changing graph----------------------------------------------//

function graph_change() {
    var adv = checking_for_percentage(advanced_value,advanced_value_percentage)
    var cons = checking_for_percentage(conservative_value,conservative_value_percentage)
    var btc = checking_for_percentage(btc_value,btc_value_percentage)
    var ibov = checking_for_percentage(ibov_value,ibov_value_percentage)
    var cdi = checking_for_percentage(cdi_value,cdi_value_percentage)
    var gsaf = checking_for_percentage(gsaf_value,gsaf_value_percentage)
    var lib = checking_for_percentage(libra_value,libra_value_percentage)
    var poupanca = checking_for_percentage(poupanca_value,poupanca_value_percentage)
    var selic = checking_for_percentage(selic_value,selic_value_percentage)
    var tccfusd = checking_for_percentage(tccfusd_value,tccfusd_value_percentage)
    var dollar = checking_for_percentage(dollar_value,dollar_value_percentage)
    if (semanaradio.checked) {
        semanabox.style.background = "#56EEF4"
        mesbox.style.background = "none"
        anobox.style.background = "none"
        document.querySelector("#semana>span").style.color = "black"
        mesbox.style.color = "white"
        ano.style.color = "white"
        graph(adv,"Advanced", 7)
        graph(cons,"Conservative", 7)
        graph(btc,"Bitcoin", 7)
        graph(ibov,"Ibovespa", 7)
        graph(cdi,"CDI", 7)
        graph(gsaf,"GSAF", 7)
        graph(lib,"Libra", 7)
        graph(poupanca,"Poupança", 7)
        graph(selic,"Selic", 7)
        graph(tccfusd,"TCCFUSD", 7)
        graph(dollar,"Dollar", 7)
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
        graph(adv,'Advanced', 22)
        graph(cons,"Conservative", 22)
        graph(btc,"Bitcoin", 22)
        graph(ibov,"Ibovespa", 22)
        graph(cdi,"CDI", 22)
        graph(gsaf,"GSAF", 22)
        graph(lib,"Libra", 22)
        graph(poupanca,"Poupança", 22)
        graph(selic,"Selic", 22)
        graph(tccfusd,"TCCFUSD", 22)
        graph(dollar,"Dollar", 22)
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
        graph(adv, "Advanced", advanced_value.length)
        graph(cons,"Conservative", advanced_value.length)
        graph(btc,"Bitcoin", advanced_value.length)
        graph(ibov,"Ibovespa", advanced_value.length)
        graph(cdi,"CDI", advanced_value.length)
        graph(gsaf,"GSAF", advanced_value.length)
        graph(lib,"Libra", advanced_value.length)
        graph(poupanca,"Poupança", advanced_value.length)
        graph(selic,"Selic", advanced_value.length)
        graph(tccfusd,"TCCFUSD", advanced_value.length)
        graph(dollar,"Dollar", advanced_value.length)
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
// -----------------------------------------------Reading API------------------------------------------------------------//
let advanced_value = []
let advanced_value_percentage = []
let conservative_value = []
let conservative_value_percentage = []
let btc_value = []
let btc_value_percentage = []
let ibov_value = []
let ibov_value_percentage = []
let cdi_value = []
let cdi_value_percentage = []
let gsaf_value = []
let gsaf_value_percentage = []
let libra_value = []
let libra_value_percentage = []
let poupanca_value = []
let poupanca_value_percentage = []
let selic_value = []
let selic_value_percentage = []
let tccfusd_value = []
let tccfusd_value_percentage = []
let dollar_value = []
let dollar_value_percentage = []
var date = []

await fetch(`https://prime-portfolio-api.herokuapp.com/simulation?value=${invested_value}&start_date=01-01-2021`)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        advanced_value = data['valor_advf_brl'].map(x => x.valor)
        conservative_value = data['valor_arbf_brl'].map(x => x.valor)
        btc_value = data['valor_bitcoin_brl'].map(x => x.valor)
        ibov_value = data['valor_bovespa_brl'].map(x => x.valor)
        cdi_value = data['valor_cdi_brl'].map(x => x.valor)
        gsaf_value = data['valor_gsaf_brl'].map(x => x.valor)
        libra_value = data['valor_libf_brl'].map(x => x.valor)
        poupanca_value = data['valor_poupanca_brl'].map(x => x.valor)
        selic_value = data['valor_selic_brl'].map(x => x.valor)
        tccfusd_value = data['valor_tccfusd_brl'].map(x => x.valor)
        dollar_value = data['valor_usd_brl'].map(x => x.valor)
        advanced_value_percentage = data['valor_advf_brl'].map(x => x.variacao_diaria * 100) 
        conservative_value_percentage = data['valor_arbf_brl'].map(x => x.variacao_diaria * 100)
        btc_value_percentage = data['valor_bitcoin_brl'].map(x => x.variacao_diaria * 100)
        ibov_value_percentage = data['valor_bovespa_brl'].map(x => x.variacao_diaria * 100)
        cdi_value_percentage = data['valor_cdi_brl'].map(x => x.variacao_diaria * 100)
        gsaf_value_percentage = data['valor_gsaf_brl'].map(x => x.variacao_diaria * 100)
        libra_value_percentage = data['valor_libf_brl'].map(x => x.variacao_diaria * 100)
        poupanca_value_percentage = data['valor_poupanca_brl'].map(x => x.variacao_diaria * 100)
        selic_value_percentage = data['valor_selic_brl'].map(x => x.variacao_diaria * 100)
        tccfusd_value_percentage = data['valor_tccfusd_brl'].map(x => x.variacao_diaria * 100)
        dollar_value_percentage = data['valor_usd_brl'].map(x => x.variacao_diaria * 100)              
        date = data['valor_advf_brl'].map(x => x.data)
    })

// ------------------------------------------Plotting graph-------------------------------------------------------//

const data = {
    labels: date,
    datasets: [{
        label: "Advanced",
        data: advanced_value,
        backgroundColor: '#357DED99',   
        borderColor: '#357DED',            
        tension: 0.4,
        borderWidth: 1
    },
    {
        label: "Conservative",
        data: conservative_value,
        backgroundColor: '#56EEF499',   
        borderColor: '#56EEF4',            
        tension: 0.4,
        borderWidth: 1
    },
    {
        label: "Bitcoin",
        data: btc_value,
        backgroundColor: 'orange',   
        borderColor: 'orange',            
        tension: 0.4,
        borderWidth: 1
    },
    {
        label: "Ibovespa",
        data: ibov_value,
        backgroundColor: 'red',   
        borderColor: 'red',            
        tension: 0.4,
        borderWidth: 1
    },
    {
        label: "CDI",
        data: cdi_value,
        backgroundColor: 'white',   
        borderColor: 'white',            
        tension: 0.4,
        borderWidth: 1
    },
    {
        label: "GSAF",
        data: gsaf_value,
        backgroundColor: 'green',   
        borderColor: 'green',            
        tension: 0.4,
        borderWidth: 1
    },
    {
        label: "Libra",
        data: libra_value,
        backgroundColor: 'pink',   
        borderColor: 'pink',            
        tension: 0.4,
        borderWidth: 1
    },
    {
        label: "Poupança",
        data: poupanca_value,
        backgroundColor: 'gray',   
        borderColor: 'gray',            
        tension: 0.4,
        borderWidth: 1
    },
    {
        label: "Selic",
        data: selic_value, 
        backgroundColor: 'purple',   
        borderColor: 'purple',            
        tension: 0.4,
        borderWidth: 1
    },
    {
        label: "TCCFUSD",
        data: tccfusd_value,
        backgroundColor: 'lime',   
        borderColor: 'lime',            
        tension: 0.4,
        borderWidth: 1
    },
    {
        label: "Dollar",
        data: dollar_value,
        backgroundColor: 'violet',   
        borderColor: 'violet',            
        tension: 0.4,
        borderWidth: 1
    },
]
};
                                
// config 
const config = {
    type: 'line',
    data: data,
    options: {
        // fill: false,
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

if (window.screen.width <= 650) {
    window.alert("Baixe o app!!! :)")
}