const economy = require('../economy.js')

module.exports = {
    commands: ['build','b','Build','B'],
    minArgs: 0,
    maxArgs: 0,
    cooldown: 600,
    callback: async(message, arguments, text) => {
        const userID = message.author.id
        var Cought1 = ('You were hired by ');
        var Reply1 = (' and you earned ');
        var moneyrandom = (Math.floor(Math.random() * 10000) + 2500);
        let responsecrime = moneyrandom + `$` 
        var CA = ['Rick  Corps', 'Rainbow LTD', 'MadMan Builds'];
        var People = CA[Math.floor(Math.random() * CA.length)];
        message.reply(Cought1 + People + Reply1 + responsecrime)
        await economy.addCoins( userID, moneyrandom)
    }
}
