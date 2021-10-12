const axios = require('axios');

const url = 'https://api.hgbrasil.com/finance'

cotacao = axios.request(url).then((resposta) => {
    
    dolar = resposta.data.results.currencies.USD
    euro = resposta.data.results.currencies.EUR
    pesoArgentino = resposta.data.results.currencies.ARS
    libra = resposta.data.results.currencies.GBP
    ieneJapones = resposta.data.results.currencies.JPY
    bitcoin =  resposta.data.results.currencies.BTC
    
    
    return(
`==== Cotação Moedas ====\n
💵Dolar: ${dolar.buy} ${dolar.variation}
💶Euro: ${euro.buy} ${euro.variation}
💷Libra: ${libra.buy} ${libra.variation}
💴Iene Japones: ${ieneJapones.buy} ${ieneJapones.variation}
🪙₿itcoin: ${bitcoin.buy} ${bitcoin.variation}`
    )
    

})

module.exports = cotacao