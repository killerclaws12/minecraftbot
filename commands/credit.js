const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const embed = new MessageEmbed()

module.exports = {
    commands: 'credit',
    minArgs: 0,
    maxArgs: 0,
    cooldown: 1,
    callback: (message, arguments, text) => {
        const credit = new Discord.MessageEmbed()
            .setTitle('Bot Credits')
            .setURL('https://discord.gg/jWj7gncfqa')
            .setAuthor(message.author.username)
            .setFooter(`RickRolled#3526 & Mr.Claws™#1111 - VERSION 1.1.1`)
            .setColor('#ad0707')
            .addFields(
                {
                    name: '`Developer`',
                    value: '`RickRolled`, ``RickRolled#3526 & Mr.Claws™',
                    inline: true,
                },
                {
                    name: '`Discord Management`',
                    value: '`Anomi, Rainbow, Duckiboi, MadmanFRMWS`,',
                },
                {
                    name: '`Testers`',
                    value: '`MadmanFRMWS, Matthew, Rainbow, Duckiboi`'
                }
            )

        message.channel.send(credit)
    }
} 
