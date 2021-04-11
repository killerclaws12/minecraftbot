const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const embed = new MessageEmbed()

module.exports = {
    commands: 'invite',
    minArgs: 0,
    maxArgs: 0,
    cooldown: 3,
    callback: (message, arguments, text) => {
        const embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Invite Me To Your Server')
	.setURL('https://discord.com/oauth2/authorize?client_id=818008902226018314&scope=bot')
	.setTimestamp()
	.setFooter(`RickRolled#3526 & Mr.Claws™#1111 - VERSION 1.1.1`);
        message.channel.send(embed)
    }
}

