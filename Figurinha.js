const venom = require('venom-bot');
const fs = require('fs');
const mime = require('mime-types');

venom
  .create()
  .then((client) => start(client));

function start(client) {
client.onMessage( async (message) => {


    if (message.isMedia === true || message.body === '/sticker') {
            
        const buffer = await client.decryptFile(message)
        const fileName = `file.${mime.extension(message.mimetype)}`;
        await fs.writeFile(fileName, buffer, (err) => {
            if (fileName === 'file.jpeg'){

                console.log(message.sender.verifiedName + ' Enviou uma Foto, Criando Sticker...')
                client.sendImageAsSticker(message.from, './file.jpeg')
            } 
        })
    }
})
}