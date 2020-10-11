const Discord = require("discord.js");
const db = require('quick.db')

exports.run = async(client, message, args) => { // Aqui definimos nosso client, message e args
message.delete();

var manutenção = await db.get(`manutenção`)
  
    if(!manutenção === true){

    let mnt = new Discord.MessageEmbed()

.setDescription(`**Olá, ${message.author}**\n` +
                `\nNo momento fui enviada para outra galáxia\n` + 
				`Em breve voltarei a responder por seus comandos.`)
.setThumbnail('https://i.pinimg.com/originals/91/de/b5/91deb532d34761aaf73e43c758dc5446.png')
.setColor(`#8500de`)
      
     return message.channel.send(mnt)
      
    } 

    let embed = new Discord.MessageEmbed() // Aqui vai ser a primeira embed que o bot irá mostrar
    .setColor('#8500de')
    .setThumbnail('https://cdn.discordapp.com/attachments/759155689733226517/764875696710615130/asukieLatencia.png')
    .setDescription(`<a:loading:753391174202425364>  Calculando... \`1/2\`\n`)
    .addField("Aguarde","Aguarde alguns segundos. <:Asukie_Blindao:764726364775251968>")
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))

    let embed2 = new Discord.MessageEmbed() // Aqui vai ser a segunda embed que o bot irá mostrar
    .setColor('#8500de')
    .setThumbnail('https://cdn.discordapp.com/attachments/759155689733226517/764875696710615130/asukieLatencia.png')
    .setDescription(`<a:loading:753391174202425364>  Calculando... \`2/2\``)
    .addField("Aguarde","Aguarde alguns segundos. <:Asukie_Blindao:764726364775251968>")
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))

    let embed_ping = new Discord.MessageEmbed() // Aqui vai ser a terceira embed que o bot irá mostrar
    .setColor('#8500de')
    .setThumbnail('https://cdn.discordapp.com/attachments/759155689733226517/764875696710615130/asukieLatencia.png')
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    .addField(` Latência`,[
        `\`${parseInt(client.ws.ping)}\` ms`])

    const msg = await message.channel.send(embed) // Aqui o bot irá mostrar a primeira embed
    setTimeout(() => { // Aqui criamos um timeout para mostrar a primeira embed com a duração de 3 segundos, para depois editar ela e mostrar a segunda embed
      msg.edit(embed2)
    }, 3000) // 1000 ms = 1s
    setTimeout(() => { // Aqui criamos um timeout para mostrar a embed final com a duração de 5 segundos
      msg.edit(embed_ping)
    }, 5000)

}

exports.help = {
    name: 'latencia',
    aliases: ["ping, latência"]
}