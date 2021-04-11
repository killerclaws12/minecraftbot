const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const embed = new MessageEmbed()

module.exports = {
    commands:['shop', 'Shop'],
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
                    name: '`OverWorld Tools`',
                    value: ' Wooden Tools - Free \n\n Stone Tools - 100,000$\n\n Iron Tools - 500,000$ \n\n Gold Tools - 5,000,000$\n\n Diamond Tools - 10,000,000$ \n\n Emerald Tools - 50,000,000$ \n\n Obsidian Tools - 125,000,000$ \n\n  Bedrock Tools - 500,000,000$ \n\n Void Tools - 1,000,000,000$ ',
                    inline: true,
                },
                {
                    name: '`\nNether Tools`',
                    value: 'Coming Soon ',
                    inline: true,
                },
                {
                    name: '`\nEnd Tools`',
                    value: 'Coming Soon',
                    inline: true,
                }
            )

        message.channel.send(help)
    }
} 
