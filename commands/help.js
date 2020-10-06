const Discord = require("discord.js")
const c = require('../config.json')

module.exports.run = async (client, message, args) => {
message.delete();

    let painel = new Discord.MessageEmbed()
    .setColor("#8500de") 
    .setAuthor(`Asukie™ - ${c.v}`, client.user.displayAvatarURL({ dynamic:true }))
	.setDescription(`\n**Links Importantes:\n` +
  `<:seta1:762492762192478216> [Me adicione em seu servidor](https://discord.com/api/oauth2/authorize?client_id=749044223692767302&permissions=8&scope=bot)\n` +
  `<:seta1:762492762192478216> [Vote em mim no top.gg](https://AlgoAqui.com)\n` +
  `<:seta1:762492762192478216> [Meu servidor de suporte](https://discord.gg/qnDBa53)**`)
	  .addField(`Opções:`, `**<a:um_:753380031031672873> | Administração\n` +
    `<a:dois_:753380069971591178> | Moderação\n` +
    `<a:tres_:753380098966814811> | Configuração\n` +
		`<a:quatro_:753380130503655562> | Interação\n` +
    `<a:cinco_:753380150590046309> | Utilidades**`)
    .setFooter(`Página 0 de 5 | Solicitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic:true }))
	.setThumbnail(client.user.displayAvatarURL({ dynamic:true }))
.setImage('https://cdn.discordapp.com/attachments/760597034138075158/761697500515270706/windows_banner.png')

     message.channel.send(painel).then(msg => {
       msg.react('762496132092788767').then(() => msg.react('753380031031672873')).then(() => msg.react('753380069971591178')).then(() => msg.react('753380098966814811')).then(() => msg.react('753380130503655562')).then(() => msg.react('753380150590046309'))
       
      let adm = (reaction, usuario) => reaction.emoji.id === "753380031031672873" && usuario.id === message.author.id;
      let coletor = msg.createReactionCollector(adm);

      let administracao = new Discord.MessageEmbed()
	 .setColor("#8500de") 
     .setAuthor('Administração', client.user.displayAvatarURL({ dynamic:true }))
     .setDescription(`<:prefixo:753242439698874388>**・Prefixo:** \`${c.prefix}\`\n` +
	 `\n<:seta1:762492762192478216> **Addemoji** - Adicione algum emoji dentro do servidor\n` +
	 `<:seta1:762492762192478216> **Addcargo** - Adicione um cargo, em algum usuário.\n` +
	 `<:seta1:762492762192478216> **Removecargo** - Retire um cargo de algum usuário.\n` +
	 `<:seta1:762492762192478216> **Cargoall** - Adicione algum cargo, para todos dentro do servidor.\n` +
	 `<:seta1:762492762192478216> **Votacao** - Faz uma votação no seu servidor(obs: use o comando no chat onde você irá fazer a votação.)`)
	 .setFooter(`Página 1 de 5 | Solicitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic:true }))
	 .setThumbnail(client.user.displayAvatarURL({ dynamic:true }))
   .setImage('https://cdn.discordapp.com/attachments/760597034138075158/761697500515270706/windows_banner.png')
      coletor.on("collect", cp => {

      msg.edit(administracao)
      cp.users.remove(message.author.id)
     
     })

      let mod = (reaction, usuario) => reaction.emoji.id=== "753380069971591178" && usuario.id === message.author.id;
      let coletor2 = msg.createReactionCollector(mod);

      let moderacao = new Discord.MessageEmbed()
	 .setColor("#8500de") 
     .setAuthor('Moderação', client.user.displayAvatarURL({ dynamic:true }))
     .setDescription(`<:prefixo:753242439698874388>**・Prefixo:** \`${c.prefix}\`\n` +
	 `\n<:seta1:762492762192478216> **Clear** - Limpe um chat de 2 a 100 mensagem.\n` +
`<:seta1:762492762192478216> **Lock** - Tranque algum chat, para os membros não falar.\n` +
`<:seta1:762492762192478216> **Unlock** - Destranque o chat que esteja trancado.\n` +
`<:seta1:762492762192478216> **Mute** - Mute algum usuário por um determinado tempo.\n` +
`<:seta1:762492762192478216> **Unmute** - Desmute o usuário que esteja mutado.\n` +
`<:seta1:762492762192478216> **Slowmode** - Coloque uma quantidade de segundos, em um chat pra os membros falarem com uma menor frequência\n` +
`<:seta1:762492762192478216> **Ban** - Bani um determinado usúario.\n` +
`<:seta1:762492762192478216> **Unban** - Desbani algum usuário pelo id dele.\n` +
`<:seta1:762492762192478216> **Kick** - Expulse algum membro do seu servidor.\n` +
`<:seta1:762492762192478216> **Warn** - De um aviso pra algum usuário.\n` +
`<:seta1:762492762192478216> **Allunban** - Desbani todos os usuários banidos do seu servidor.`)
 .setFooter(`Página 2 de 5 | Solicitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic:true }))
 .setThumbnail(client.user.displayAvatarURL({ dynamic:true }))
  .setImage('https://cdn.discordapp.com/attachments/760597034138075158/761697500515270706/windows_banner.png')
     coletor2.on("collect", cp => {

      msg.edit(moderacao)
     cp.users.remove(message.author.id)
     })

      let config = (reaction, usuario) => reaction.emoji.id === "753380098966814811" && usuario.id === message.author.id;
      let coletor3 = msg.createReactionCollector(config);

      let configuracao = new Discord.MessageEmbed()
     	 .setColor("#8500de") 
     .setAuthor('Configuração', client.user.displayAvatarURL({ dynamic:true }))
     .setDescription(`<:prefixo:753242439698874388>**・Prefixo:** \`${c.prefix}\`\n` +
 `\n<:seta1:762492762192478216> **Defesa** - Deixe seu servidor muito mas seguro.\n` +
 `<:seta1:762492762192478216> **Autorole** - Ative autorole dos bots e membros.\n` +
 `<:seta1:762492762192478216> **Painel** - Veja o painel do servidor.\n` +
 `<:seta1:762492762192478216> **Welcome** - Configure o sistema de entrada/saída.\n` +
 `<:seta1:762492762192478216> **Logs** - Selecione um chat para aparecer mensagens deletadas/editada etc.\n` +
 `<:seta1:762492762192478216> **Imunidade** - Selecione chat/cargo, que ser alguma defesa estiver ativada, o bot não irá excluir.\n` +
 `<:seta1:762492762192478216> **Sugestão** - Configure algum chat para sugestões dos membros.\n` +
 `<:seta1:762492762192478216> **Contador** - Coloque no mínimo 10 chats, onde o bot irá contar os membros do servidor todo.`)
  .setFooter(`Página 3 de 5 | Solicitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic:true }))
  .setThumbnail(client.user.displayAvatarURL({ dynamic:true }))
  .setImage('https://cdn.discordapp.com/attachments/760597034138075158/761697500515270706/windows_banner.png')
      coletor3.on("collect", cp => {

      msg.edit(configuracao)
     cp.users.remove(message.author.id)
      })

      let int = (reaction, usuario) => reaction.emoji.id === "753380130503655562" && usuario.id === message.author.id;
      let coletor4 = msg.createReactionCollector(int);

      let interacao = new Discord.MessageEmbed()
     	 .setColor("#8500de") 
     .setAuthor('Interação', client.user.displayAvatarURL({ dynamic:true }))
     .setDescription(`<:prefixo:753242439698874388>**・Prefixo:** \`${c.prefix}\`\n` +
 `<:seta1:762492762192478216> **Cocegas** - Faça cócegas em algum amiguinho.\n` +
 `<:seta1:762492762192478216> **Primeiraspalavras** - Primeiras palavras de um bebê.\n` +
 `<:seta1:762492762192478216> **Say** - Escreva algo como se fosse a própria Asukie escrevendo.\n` +
 `<:seta1:762492762192478216> **Kiss** - Beije seu crush.\n` +
 `<:seta1:762492762192478216> **Neko** - Veja melhores gifs de neko.\n` +
 `<:seta1:762492762192478216> **Ship** - Faça um ship de algum casal.\n` +
 `<:seta1:762492762192478216> **Cafune** - Faça um cafuné de algum amigo(a).\n` +
 `<:seta1:762492762192478216> **Covid** - Veja os casos de Covid no mundo inteiro.\n` +
 `<:seta1:762492762192478216> **Tapa** - De um tapa em alguém.\n` +
 `<:seta1:762492762192478216> **Mcskin** - É um comando pra você conseguir a skin de alguma conta do Minecraft.\n` +
 `<:seta1:762492762192478216> **Mchead** - É um comando pra você conseguir a Cabeça de alguma conta do Minecraft.\n` +                   
 `<:seta1:762492762192478216> **Conquista** - Use o comando, e conquiste oque mais deseja.\n` +
 `<:seta1:762492762192478216> **Hackear** - "Hackei" algum membro. [**Comando focado na zoeira**]\n` +
 `<:seta1:762492762192478216> **Ascii** - Escreva em modo Ascii.\n` +
 `<:seta1:762492762192478216> **Hug** - De um abraço em algum amigo.\n` +                   
 `<:seta1:762492762192478216> **Cronometro** - Irei cronometrar um tempo pra você.\n` +                    
 `<:seta1:762492762192478216> **Bigtext** - Escreva com letras grandes.\n` +
 `<:seta1:762492762192478216> **Clima** - Veja o clima de alguma cidade.\n` +                   
 `<:seta1:762492762192478216> **Dado** - Jogue dado comigo.\n` +
 `<:seta1:762492762192478216> **Roletarussa** - Jogue roletarussa comigo.\n` +                   
 `<:seta1:762492762192478216> **Baka** - Chame alguém de baka.`)
  .setFooter(`Página 4 de 5 | Solicitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic:true }))
  .setThumbnail(client.user.displayAvatarURL({ dynamic:true }))
  .setImage('https://cdn.discordapp.com/attachments/760597034138075158/761697500515270706/windows_banner.png')
      coletor4.on("collect", cp => {

      msg.edit(interacao)
     cp.users.remove(message.author.id)
     })

      let uti = (reaction, usuario) => reaction.emoji.id === "753380150590046309" && usuario.id === message.author.id;
      let coletor5 = msg.createReactionCollector(uti);

      let utilidade = new Discord.MessageEmbed()
     	 .setColor("#8500de") 
     .setAuthor('Utilidade', client.user.displayAvatarURL({ dynamic:true }))
     .setDescription(`<:prefixo:753242439698874388>**・Prefixo:** \`${c.prefix}\`\n` +
     `<:seta1:762492762192478216> **Div** - Ver quantas pessoas você recruto pra dentro do servidor.\n`+
     `<:seta1:762492762192478216> **Cpu** - Veja minhas configurações de cpu.\n`+
     `<:seta1:762492762192478216> **Avatar** - Veja seu avatar em um tamanho maior ou de outro membro.\n` +
     `<:seta1:762492762192478216> **Rankinvite** - Veja o rank de invite.\n` +
     `<:seta1:762492762192478216> **Uptime** - Veja o tempo do bot online.\n` +
     `<:seta1:762492762192478216> **Botinfo** - Veja informações do bot toda.\n` +
     `<:seta1:762492762192478216> **Ping** - Veja a velocidade da mensagem do bot.\n` + 
     `<:seta1:762492762192478216> **Servericon** - Veja a foto do servidor em tamanho maior.\n` +
     `<:seta1:762492762192478216> **Serverinfo** - Veja as informações do servidor.\n` +
     `<:seta1:762492762192478216> **Userinfo** - Veja informações de algum usuário.\n` +
     `<:seta1:762492762192478216> **Emojiinfo** - Veja informações de algum emoji do seu servidor.\n` +
     `<:seta1:762492762192478216> **Emoji** - Veja algum emoji em um tamanho maior, pode ser de outros servidores também.`)
  .setFooter(`Página 5 de 5 | Solicitado por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic:true }))
  .setThumbnail(client.user.displayAvatarURL({ dynamic:true }))
  .setImage('https://cdn.discordapp.com/attachments/760597034138075158/761697500515270706/windows_banner.png')
      coletor5.on("collect", cp => {

      msg.edit(utilidade)
     cp.users.remove(message.author.id)
     })

     let ini = (reaction, usuario) => reaction.emoji.id === "762496132092788767" && usuario.id === message.author.id;
     let coletor6 = msg.createReactionCollector(ini);
      coletor6.on("collect", cp => {

      msg.edit(painel)
      cp.users.remove(message.author.id)
     })
  })
}

exports.help = {
    name: 'ajuda',
    aliases: ['ajuda']
}