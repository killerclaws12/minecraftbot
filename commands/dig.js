const economy = require('../economy.js')

module.exports = {
    commands: ['dig','d','Dig','D'],
    minArgs: 0,
    maxArgs: 0,
    cooldown: 120,
    callback: async(message, arguments, text) => {
        const userID = message.author.id
        var Cought1 = ('You went diging in a  ');
        var Reply1 = (' and you earned ');
        var moneyrandom = (Math.floor(Math.random() * 1000) + 2);
        var gravelrandom = (Math.floor(Math.random() * 100) + 2);
        var dirtrandom = (Math.floor(Math.random() * 1000) + 500);
        var grassrandom = (Math.floor(Math.random() * 25) + 100);
        let responsecrime = moneyrandom + '$, ' + gravelrandom + ' <:Gravel:825397608675672064> , ' + dirtrandom + ' <:Dirt:825397955120988220> and ' + grassrandom + ' <:Grass:825399212115755029>'
        var CA = ['garbage station', 'your backyard', 'Ricks House'];
        var People = CA[Math.floor(Math.random() * CA.length)];
        message.reply(Cought1 + People + Reply1 + responsecrime)
        await economy.addCoins( userID, moneyrandom)
        await economy.addItems( userID, gravelrandom, 'gravel')
        await economy.addItems( userID, dirtrandom, 'dirt')
        await economy.addItems( userID, grassrandom, 'grass')
    }
}
