const economy = require('../economy.js')

module.exports = {
    commands: ['mine','m','Mine','M'],
    minArgs: 0,
    maxArgs: 0,
    cooldown: 5,
    callback: async(message, arguments, text) => {
        const userID = message.author.id
        var Cought1 = ('You went mining in a cave under your ');
        var Reply1 = (' and you earned ');
        var moneyrandom = (Math.floor(Math.random() * 1000) + 2);
        var diamondsrandom = (Math.floor(Math.random() * 100) + 2);
        var stonerandom = (Math.floor(Math.random() * 1000) + 500);
        var emeraldsrandom = (Math.floor(Math.random() * 25) + 100);
        let responsecrime = moneyrandom + '$, ' + diamondsrandom + ' <:Diamond:825393298909954088>, ' + emeraldsrandom + ' <:Emerald:825393316412522527> and ' + stonerandom + ' <:Stone:825393571246899220>'
        var CA = ['mansion','house','cousins mansion', 'trashcan'];
        var People = CA[Math.floor(Math.random() * CA.length)];
        message.reply(Cought1 + People + Reply1 + responsecrime)
        await economy.addCoins( userID, moneyrandom)
        await economy.addItems( userID, diamondsrandom, 'diamonds')
        await economy.addItems( userID, emeraldsrandom, 'emeralds')
        await economy.addItems( userID, stonerandom, 'stone')
    }
}
