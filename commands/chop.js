const economy = require('../economy.js')

module.exports = {
    commands: ['c','chop','C','Chop'],
    minArgs: 0,
    maxArgs: 0,
    cooldown: 30,
    callback: async(message, arguments, text) => {
        const userID = message.author.id
        var Cought1 = ('You went chopping in the ');
        var Reply1 = (' and you earned ');
        var moneyrandom = (Math.floor(Math.random() * 1000) + 2);
        var oakrandom = (Math.floor(Math.random() * 25) + 100);
        var birchrandom = (Math.floor(Math.random() * 25) + 100);
        var sprucerandom = (Math.floor(Math.random() * 25) + 100);
        var junglerandom = (Math.floor(Math.random() * 25) + 100);
        var acaciarandom = (Math.floor(Math.random() * 25) + 100);
        let responsecrime = moneyrandom + `$,  ` + oakrandom + ` <:Oak:825397173473771530>, ` + birchrandom + `<:Birch:825396932238245908>, ` + sprucerandom + ` <:Spruce:825396914937790504>, ` + junglerandom + ` <:Jungle:825396900038836234>, ` + acaciarandom + ` <:Acacia:825395940247470150>`
        var CA = ['Jungle','Woods','Forest', 'someones garden :))'];
        var People = CA[Math.floor(Math.random() * CA.length)];
        message.reply(Cought1 + People + Reply1 + responsecrime)
        await economy.addCoins( userID, moneyrandom)
        await economy.addItems( userID, oakrandom, 'oakwood')
        await economy.addItems( userID, birchrandom, 'birchwood')
        await economy.addItems( userID, sprucerandom, 'sprucewood')
        await economy.addItems( userID, junglerandom, 'junglewood')
        await economy.addItems(userID, acaciarandom, 'acaciawood')
    }
}
