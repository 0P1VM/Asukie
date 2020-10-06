const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const request = require("request");
const db = require('quick.db');

client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  if (!message.content.toLowerCase().startsWith(config.prefix)) return;
  if (
    message.content.startsWith(`<@!${client.user.id}>`) ||
    message.content.startsWith(`<@!${client.user.id}>`)
  )
    return;

  const args = message.content
    .trim()
    .slice(config.prefix.length)
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    const commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
    message.delete();
  }
})

client.on("ready", () => {
  console.log(`Iniciado em ${client.user.tag}\n\n`)
var tabela = [
      {
      name: `Saiba como me adicionar pelo ${config.prefix}ajuda`,
      type: "STREAMING",
      url: "https://www.twitch.tv/asukie"
    },
	{
		name: `Encontrou falhas? Reporte para o suporte.`,
		type: "STREAMING",
		url: "https://www.twitch.tv/asukie"
	},
	{
		name: `em ${client.guilds.cache.size} servidores 💙`,
		type: "STREAMING",
		url: "https://www.twitch.tv/asukie"
	},
  ];

  function setStatus() {
    var altstatus = tabela[Math.floor(Math.random() * tabela.length)];
    client.user.setActivity(altstatus);
  }

  setStatus();
  setInterval(() => setStatus(), 1000);
console.log(`Servidores: ${client.guilds.cache.size}\nUsuários: ${client.users.cache.size}`)
})

client.on('guildCreate', guild => {

  let users = client.users.cache.size;
  let servidores = client.guilds.cache.size;
  let canais = client.channels.cache.size;
    setTimeout(() => {
client.channels.cache.get("761449143184916480").setName(`💜・Asukie ${config.v}`)
     client.channels.cache.get("761449154940895232").setName(`⭐・Guilds ${servidores}`)
     client.channels.cache.get("761449152872841227").setName(`⚡・Status Online`)
     client.channels.cache.get("761449156349919262").setName(`🏅・Users ${users}`)
    }, 400)

})

client.on('guildDelete', guild => {

  let users = client.users.cache.size;
  let servidores = client.guilds.cache.size;
  let canais = client.channels.cache.size;
    setTimeout(() => {
client.channels.cache.get("761449143184916480").setName(`💜・Asukie ${config.v}`)
     client.channels.cache.get("761449154940895232").setName(`⭐・Guilds ${servidores}`)
     client.channels.cache.get("761449152872841227").setName(`⚡・Status Online`)
     client.channels.cache.get("761449156349919262").setName(`🏅・Users ${users}`)
    }, 400)

})

client.on('raw', async dados => {
    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if(dados.d.message_id != "760661077381087303") return

    let servidor = client.guilds.cache.get("760333261829832704")
    let membro = servidor.members.cache.get(dados.d.user_id)

    let cargo1 = servidor.roles.cache.get('760607974874939482')

    if(dados.t === "MESSAGE_REACTION_ADD"){
        if(dados.d.emoji.id === "760882736859709440"){
            if(membro.roles.add(cargo1)) return
            membro.addRole(cargo1)
        }
    }
    if(dados.t === "MESSAGE_REACTION_REMOVE"){
        if(dados.d.emoji.id === "760882736859709440"){
            if(membro.roles.remove(cargo1)) return
            membro.removeRole(cargo1)
        }
    }

})

client.on('guildDelete', guild => {

  let users = client.users.cache.size;
  let servidores = client.guilds.cache.size;
  let canais = client.channels.cache.size;
    setTimeout(() => {
     client.channels.cache.get("760666621219700758").setName(`⭐・Guilds: ${servidores}`)
     client.channels.cache.get("760666338447327252").setName(`⚡・Status: Online`)
     client.channels.cache.get("760666718044553268").setName(`🏅・Users: ${users}`)
    }, 400)

})

client.on('guildMemberAdd', membro => {
  
   const numbertowords = require('number-to-words');
   const membrosCount = `${client.guilds.cache.get('760333261829832704').membroCount}`;
   const membrosArray = new Array();
   const membrosSplit = membrosCount.split('');
   const contador = {
   1: 'Um'   
   };

   for(var i = 0; i<membrosCount.lenght;i++)  
(
   membrosArray[i] = numbertowords.towords(membrosSplit[1]),
   contador += ':'+membrosArray+':'
)

const canal  = client.channels.cache.get('760597034138075158')
canal.setTopic(`Atualmente temos ${contador} membros`)



})

client.on('message', message => {
	 if (message.author.bot) return;
  if (message.channel.type == "dm") return;
	let marcou = new Discord.MessageEmbed()
  .setTitle(`**<:duvida:762803797109506059> | Está perdido, ${message.author.username} ?**`)
	.setDescription(
	`**<:seta1:762492762192478216> - Eu me chamo ${client.user.username} e sou um bot com várias funções, criado para ajudar o seu servidor! <a:brilho:761081098368581632>**\n` +
  ``)
	.setThumbnail('https://cdn.discordapp.com/emojis/739200876752797697.png?v=1')
	.addFields(
	{ name: `<:prefixo:753242439698874388> **| Meu prefixo:**`, value: `ㅤ\`${config.prefix}\``, inline: true },
  { name: `<a:aviso:758897403277082654> **| Comando de ajuda:**`, value: `ㅤ\`${config.prefix}help\``, inline: true },
		)
		.setFooter(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true}))
		.setColor(`#8500de`)
		.setTimestamp();
	
   if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`))
    if(message.content.includes(`<@!${client.user.id}>`) || message.content.includes(`<@${client.user.id}>`)) {
        message.channel.send(`${message.author}`, marcou)
      }
    })

client.login(config.token);