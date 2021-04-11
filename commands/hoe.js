const economy = require('../economy.js')

module.exports = {
    commands: ['hoe','h','Hoe','H'],
    minArgs: 0,
    maxArgs: 0,
    cooldown: 120,
    callback: async(message, arguments, text) => {
        const userID = message.author.id
        var Cought1 = ('You went farming in a  ');
        var Reply1 = (' and you earned ');
        var moneyrandom = (Math.floor(Math.random() * 1000) + 2);
        var wheatrandom = (Math.floor(Math.random() * 100) + 2);
        var carrotrandom = (Math.floor(Math.random() * 1000) + 500);
        var potatorandom = (Math.floor(Math.random() * 25) + 100);
        let responsecrime = moneyrandom + '$, ' + wheatrandom + ' <:Wheat:825402045950328843>, ' + carrotrandom + ' <:Carrot:825396882917556234> and ' + potatorandom + ' <:Potato:825396866052390953>'
        var CA = ['farm', 'Rick'];
        var People = CA[Math.floor(Math.random() * CA.length)];
        message.reply(Cought1 + People + Reply1 + responsecrime)
        await economy.addCoins( userID, moneyrandom)
        await economy.addItems( userID, wheatrandom, 'wheat')
        await economy.addItems( userID, carrotrandom, 'carrot')
        await economy.addItems( userID, potatorandom, 'potato')
    }
}
