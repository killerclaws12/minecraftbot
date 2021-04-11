const economy = require('../economy.js')

module.exports = {
    commands: ['kaelly', 'Kaelly'],
    minArgs: 0,
    maxArgs: 0,
    cooldown: 600,
    callback: async(message, arguments, text) => {
        const userID = message.author.id
        var Cought1 = ('You went mining in a ');
        var Reply1 = (' and you found kaelly sleeping there, you decided to kidnap her so now you have  ');
        var kaellyrandom = (Math.floor(Math.random() * 1) + 1);
        let responsecrime = kaellyrandom + ' kaelly!'
        var CA = ['cave'];
        var People = CA[Math.floor(Math.random() * CA.length)];
        message.reply(Cought1 + People + Reply1 + responsecrime)
        await economy.addItems( userID, kaellyrandom, 'kaelly')
    }
}
