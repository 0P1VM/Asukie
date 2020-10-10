const Discord = require('discord.js');
const superagent = require('superagent')
const c = require('../config.json')
exports.run = async (client, message, args) => {
  
message.delete();
 const {
        body
    } = await superagent
        .get(`https://nekos.life/api/v2/img/tickle`);

let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.channel.send('<a:Bnao:746212123901820929> **|** Você está utilizando este comando de forma incorreta!\n' +
`> **Exemplo:** ${c.prefix}tapa <@!749044223692767302>`);
}

let avatar = message.author.displayAvatarURL({dynamic: true});
  const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setColor('#8500de')
        .setDescription(`<a:tapa:762706444226396168> ${message.author} **Deu um tapa em** ${user}`)
        .setImage(body.url)
        .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
  await message.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor2 = msg.createReactionCollector(loop);

           coletor2.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor3 = msg.createReactionCollector(loop);

           coletor3.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor4 = msg.createReactionCollector(loop);

           coletor4.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor5 = msg.createReactionCollector(loop);

           coletor5.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor6 = msg.createReactionCollector(loop);

           coletor6.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor7 = msg.createReactionCollector(loop);

           coletor7.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor8 = msg.createReactionCollector(loop);

           coletor8.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor9 = msg.createReactionCollector(loop);

           coletor9.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor10 = msg.createReactionCollector(loop);

           coletor10.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor11 = msg.createReactionCollector(loop);

           coletor11.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor12 = msg.createReactionCollector(loop);

           coletor12.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor13 = msg.createReactionCollector(loop);

           coletor13.on("collect", cp => {
msg.channel.send(embed).then(msg => {
       msg.react('🔁')

      let loop = (reaction, usuario) => reaction.emoji.name === "🔁" && usuario.id === message.author.id;
      let coletor14 = msg.createReactionCollector(loop);

           coletor14.on("collect", cp => {
msg.channel.send(`${message.author} **| Esse é o meu limite!**`)
           })
           })
           })
           })
           })
           })           
           })
           })
           })
           })
           })           
           })
           })           
           })
           })
           })
           })
           })           
           })
           })
           })
           })
           })
           })
           })
           })
}