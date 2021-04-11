const Discord = require("discord.js")

module.exports = {
    commands:['yes'],
    minArgs: 0,
    maxArgs: 0,
    cooldown: 1,
    callback: (message, arguments, text) => {
        message.channel.send('yes')
        message.author.send('Show an uncropped image to RickRolled#3526, for a reward PANIK PANIK PANIK  \n\n jk congrats tho on finding this')
    }
} 
