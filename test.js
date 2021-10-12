const venom = require('venom-bot');
const venomOptions = require('./venom-options.js')
const axios = require('axios');
const cotacao = require('./cotacao');

venom
  .create(venomOptions)
  .then((client) => start(client));

const buttons = [
{
    "buttonText": {
    "displayText": "Sim"
    }
    },
{
    "buttonText": {
    "displayText": "Não"
    }
    }
]

function start(client) {

    client.onMessage( async (message) => {
        
      if (message.body === '/cotacao'){
        
        console.log('Enviando Cotação')
        dados = await cotacao
        client.sendText(message.from, String(dados))

      }

    })
}