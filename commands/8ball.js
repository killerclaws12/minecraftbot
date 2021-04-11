const economy = require('../economy.js')

module.exports = {
    commands: ['8ball', 'rickball'],
    minArgs: 0,
    maxArgs: 100,
    cooldown: 3,
    callback: async(message, arguments, text) => {
        const userID = message.author.id
        var Cought1 = ('My mighty answer is ');
        var CA = ['yes', 'no', '...', 'Bro thats just...', 'Obviously...', 'Youre dumb', 'Ofcourse', 'Ask again idiot'];
        var People = CA[Math.floor(Math.random() * CA.length)];
        message.reply(Cought1 + People)
    }
}
