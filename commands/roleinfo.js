const Discord = require("discord.js");
const db = require('quick.db')

exports.run = (client, message, args) => {
  if (!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"]))
    return message.channel.send(
      "You dont have permission to perform this command!"
    );
  let role =
    message.guild.roles.cache.find(r => r.name == args[0]) ||
    message.guild.roles.cache.find(r => r.id == args[0]) ||
    message.mentions.roles.first() ||
    args.join(" ");
  if (!role) return message.reply("Please specify a role.");
  let embed = new Discord.MessageEmbed()
    .setColor(`${role.hexColor}`)
    .addField("ID", `${role.id}`, true)
    .addField("Nome", "`" + `${role.name}` + "`", true)
    .addField("Menção", `\`<@&${role.id}>\``, true)
    .addField("Hex", `\`${role.hexColor}\``, true)
    .addField("Criado", `${role.createdAt}`, true)
    .addField(`Membros`, `${role.members.size}`, true)
    .addField(`Posição`, `${role.position}`, true)
    .addField(`Permissões elevadas`, `${role.hoist}`, true)
    .addField(`Mencionavel`, `${role.mentionable}`, true)
    .addField(`Gerenciada`, `${role.managed}`, true)
    .addField(`Permissões`, `${role.permissions.size}`,true)
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
  message.channel.send(embed);
};