const Discord = require("discord.js");
const cpuStat = require("cpu-stat");
 const os = require('os')
 
exports.run = async (client, message, args) => {
  
              cpuStat.usagePercent(function(err, percent, seconds) {
              if (err) {
                return console.log(err);
              }
                

  let embed = new Discord.MessageEmbed()
  
  .setThumbnail('https://image.flaticon.com/icons/png/512/1892/1892518.png')
  .addField("<:ets:761068291941990400> **|** Modelo", `\`${os.cpus().map(i => `${i.model}`)[0]}\``)
  .addField("<:Config:762500381560799252> **|** Uso", `\`${percent.toFixed(2)}%\``)
  .addField("<:Memoria:762489519940960287> **|** Memória Utilizada", `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}\` / \`${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\``)
  .setColor('#8500de')
  .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
  
  message.channel.send(embed)
      })
  }
exports.help = {
    name: 'cpu',
    aliases: ['maquina']
}