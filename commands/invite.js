const Discord = require('discord.js')

exports.run = async (client, message) => {

    let embed = new Discord.MessageEmbed()
    .setColor('#0f4bff')
    .setDescription('** Olá eu sou a Asukie, meu convites estão logo abaixo na reação!** <:Asukie_Frioo:767176226694627349>')
    .addField('✨', ' - Aqui é onde fica o link da Asukie para adicionar no seu servidor e o link do sevidor suporte.')
    .addField('◀', ' - Volte pro inicio do painel de convites.')
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
    
    let embed1 = new Discord.MessageEmbed()
    .setColor('#0f4bff')
    .addField(`Meu convite`,`<:SetaZu:765288356913086484> [Clique aqui](https://discord.com/api/oauth2/authorize?client_id=749044223692767302&permissions=8&scope=bot)`)
    .addField(`Meu suporte`,`<:SetaZu:765288356913086484> [Clique aqui](https://discord.gg/n5eNazJ)`)
    .setThumbnail("https://cdn.discordapp.com/attachments/759155689733226517/769335803775156234/AsukieInvite.png")
    .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}));
  
    message.member.send(embed)
        .then(async msg => {
            let arr = ['✨', '◀'];
            for (let i = 0; i < arr.length; ++i) {
                await msg.react(arr[i]).catch(()=>{});
            }
            const collector = msg.createReactionCollector((r, u) => arr.some(e => e === r.emoji.name) && u.id === message.author.id);
            collector.on("collect", r => {
                switch (r.emoji.name) {
                    case '✨':
                        msg.edit(embed1).catch(()=>{});
                        break;
                    case'◀':
                        msg.edit(embed).catch(()=>{});
                }
            });
            message.reply(`Meus links principais estão na sua **DM**. <:Asukie_hmm:767176167571587122>`).catch(()=>{});
        })
        .catch(()=>{});
};