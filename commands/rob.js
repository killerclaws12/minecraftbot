const economy = require('../economy.js')

module.exports = {
    commands: ['rob', 'r', 'Rob', 'R'],
    minArgs: 0,
    maxArgs: 0,
    cooldown: 10,
    callback: async(message, arguments, text) => {
        const userID = message.author.id
        var Cought1 = ('You got caught by ');
        var Reply1 = (' gave u ');
        var Random1 = (Math.floor(Math.random() * 100) + 50);
        var Receaving1 = [
            Random1 + ` <:Diamond:825393298909954088>`,
            Random1 + ` <:Emerald:825393316412522527>`,
            Random1 + `Money`
        ];
        let items = ['diamonds', 'emeralds', 'money']
        let randomItem = Math.floor(Math.random() * Receaving1.length)
        var Receaving1Random = Receaving1[randomItem];
        let itemAdded = items[randomItem]
        var CA = ['Rick and he ', 'Leprecaun gang and they ', 'Kaelly and she '];
        var People = CA[Math.floor(Math.random() * CA.length)];
        message.reply(Cought1 + People + Reply1 + Receaving1Random)
        if(itemAdded == 'money') {
            await economy.addCoins(userID, Random1)
        } else {
            await economy.addItems(userID, Random1, itemAdded)
        }
    }
};
