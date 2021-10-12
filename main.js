const venom = require('venom-bot');
const fs = require('fs');
const mime = require('mime-types');
const venomOptions = require('./venom-options.js')

venom
  .create(venomOptions)
  .then((client) => start(client));

function start(client) {
    client.onMessage( async (message) => {
        if (message.body == '/menu'){
            client.sendText('Ainda sou um Bot_Humilde tenho os seguintes comandos\n/marcar')
        }
        try{
            
            if (message.body.includes('/marcar')){

                msg = message.body
                msg = msg.replace('/marcar', ' ')

                marcados = []
                adms_info = []

                var adms = await client.getGroupAdmins(message.from);
                var membros = await client.getGroupMembers(message.from);

                membros.forEach(element => {
                    marcados.push(element.id.user)
                });

                adms.forEach(element => {
                    adms_info.push(element._serialized)
                });

                console.log(message.sender.id)
                console.log(adms_info)

                

                if (adms_info.includes(message.sender.id)){

                    console.log(membros.pushname)

                    client.sendMentioned(
                        message.from,
                        msg,
                        marcados
                    )
                }
            
            }
        }catch(err){'erro zé'}


        try {

            if (message.body.includes('.enviar')){

                msg = message.body
                msg = msg.replace('.enviar', ' ')

                const chats = await client.getAllChats()
                chats.forEach(date => {
                    if (date.id.server === 'g.us'){
                        console.log(msg)
                        client.sendText(date.id._serialized, msg)
                    }
                })
            }
        }catch (error) {}

        try {

            if (message.body.includes('https://chat.whatsapp.com/')) {
                console.log('tentandf')
                client.joinGroup(message.matchedText).then(d => {console.log('certo')}).catch(d => {console.log('errado')})
            }
        }catch (error) {}
        
        

        /*if (message.body == '/btv' || message.body == '/bentevi'){
            client.sendImageAsSticker(message.from, 'btv.jpg')
            client.sendVoice(message.from, 'btv.mp3')
        }
        

        if (message.body == '/bailão' || message.body == '/bailao'){
            client.sendImageAsStickerGif(message.from, 'yoshi.gif')
            client.sendVoice(message.from, 'yoshi.mp3')
        }

        if (message.body == '/peep' || message.body == '/sad'){
            client.sendImageAsStickerGif(message.from, 'sad.gif')
            client.sendVoice(message.from, 'sad.mp3')
        }*/

        if (message.isMedia === true || message.isMMS === true) {
            
            const buffer = await client.decryptFile(message)
            const fileName = `file.${mime.extension(message.mimetype)}`;
            await fs.writeFile(fileName, buffer, (err) => {

            if (fileName === 'file.jpeg'){

                console.log(message.sender.verifiedName + ' Enviou uma Foto, Criando Sticker...')
                client.sendImageAsSticker(message.from, './file.jpeg')
            
            } 
            });
        }
        
    })
}