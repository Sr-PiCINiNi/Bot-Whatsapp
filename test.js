const venom = require('venom-bot');
const venomOptions = require('./venom-options.js')
const cotacao = require('./cotacao');

venom
  .create(venomOptions)
  .then((client) => start(client));

function start(client) {

    client.onMessage( async (message) => {
        
      if (message.body === '/cotacao'){
        
        console.log('Enviando Cotação')
        dados = await cotacao
        client.sendText(message.from, String(dados))

      }

    }).listen(process.env.PORT || 5000)
}