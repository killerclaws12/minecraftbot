const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const embed = new MessageEmbed()

module.exports = {
    commands: [`info diamonds`, `Info diamonds`, `info Diamonds`, `Info Diamonds`],
    minArgs: 0,
    maxArgs: 0,
    cooldown: 3,
    callback: (message, arguments, text) => {
       const embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Diamonds')
	.addField(`Diamonds, Sells For : 22$ \n**Obtained By** \nWooden Tools, Stone Tools, Iron Tools, Gold Tools, Emerald Tools, Diamond tools`)
	.setTimestamp()
	.setFooter(`RickRolled#3526 & Mr.Claws™#1111 - VERSION 1.1.1`);
        message.channel.send(embed)
    }
}
