const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const embed = new MessageEmbed()

module.exports = {
    commands:['partnerdm', 'Partnerdm'],
    minArgs: 0,
    maxArgs: 0,
    cooldown: 1,
    callback: (message, arguments, text) => {
        const help = new Discord.MessageEmbed()
            .setTitle('Partners')
            .setURL('https://discord.gg/invite/qANbrymWy3')
            .setAuthor(message.author.username)
            .setFooter(`RickRolled#3526 & Mr.Claws™#1111 - VERSION 1.1.1`)
            .setColor('#ad0707')
            .addFields(
                {
                    name: '`Magicordia`',
                    value: '**Magicordia** |*Magicordia is a bot made by Squid, a discord version of the harry potter series.',
                    inline: true,
                }
            )

        message.author.send(help)
    }
} 
