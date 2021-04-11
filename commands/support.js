const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const embed = new MessageEmbed()

module.exports = {
    commands: 'support',
    minArgs: 0,
    maxArgs: 0,
    cooldown: 3,
    callback: (message, arguments, text) => {
       const embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Support Server!')
	.setURL('https://discord.gg/buG4SXcERa')
	.setTimestamp()
	.setFooter(`RickRolled#3526 & Mr.Claws™#1111 - VERSION 1.1.1`);
        message.channel.send(embed)
    }
}
