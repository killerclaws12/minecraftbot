const Discord = require("discord.js")
const economy = require('../../economy.js')

module.exports = {
    commands: ['inventory', 'inv', 'i', 'I'],
    minArgs: 0, //change to 1 once you will have to choose what to sell
    maxArgs: null,
    cooldown: 1,
    callback: async(message, arguments, text) => {
        let member = message.mentions.members.first() || message.member
        const userId = message.author.id
        const coins = await economy.getCoins(userId)
        const userID = member.user.id
        let stuff = arguments[0]
        stuff = 'all' //delete the line once you make it so you can sell just some stuff
        let diamondsAmount = await economy.getItemsAmount(userID, 'diamonds')
        let emeraldsAmount = await economy.getItemsAmount(userID, 'emeralds')
        let stoneAmount = await economy.getItemsAmount(userID, 'stone')
        
        
        
        let oakAmount = await economy.getItemsAmount(userID, 'oakwood')
        let birchAmount = await economy.getItemsAmount(userID, 'birchwood')
        let spruceAmount = await economy.getItemsAmount(userID, 'sprucewood')
        let jungleAmount = await economy.getItemsAmount(userID, 'junglewood')
        let acaciaAmount = await economy.getItemsAmount(userID, 'acaciawood')
        
        
        
        let gravelAmount = await economy.getItemsAmount(userID, 'gravel')
        let dirtAmount = await economy.getItemsAmount(userID, 'dirt')
        let grassAmount = await economy.getItemsAmount(userID, 'grass')
        
        
        
        let wheatAmount = await economy.getItemsAmount(userID, 'wheat')
        let carrotAmount = await economy.getItemsAmount(userID, 'carrot')
        let potatoAmount = await economy.getItemsAmount(userID, 'potato')
        
        // mystery people event
        let kaellyAmount = await economy.getItemsAmount(userID, 'kaelly')
        
        console.log(diamondsAmount)
        let trashcanPrice = 1
        let ticketPrice = 1
        let bananaPrice = 1
        let diamondsPrice = 22
        let stonePrice = 2
        let emeraldsPrice = 32
        let oakPrice = 10
        let birchPrice = 15
        let acaciaPrice = 25
        let sprucePrice = 15
        let junglePrice = 25
        let gravelPrice = 21
        let dirtPrice = 5
        let grassPrice = 13
        let wheatPrice = 16
        let carrotPrice = 30
        let potatoPrice = 34
        //mystery event items
        let kaellyPrice = 25000
        let totPrice = diamondsAmount*diamondsPrice+emeraldsAmount*emeraldsPrice+stoneAmount*stonePrice+oakPrice*oakAmount+birchPrice*birchAmount+sprucePrice*spruceAmount+junglePrice*jungleAmount+acaciaPrice*acaciaAmount+gravelAmount*gravelPrice+dirtAmount*dirtPrice+grassAmount*grassPrice+wheatAmount*wheatPrice+carrotAmount*carrotPrice+potatoAmount*potatoPrice+kaellyAmount*kaellyPrice
        let desc = `**Birch${birchAmount!= 1 ? 's' : ''}** \n__Amount__: ${birchAmount}\n__Total value__: ${birchAmount*birchPrice}$\n\n**Spruce${spruceAmount!= 1 ? 's' : ''}** \n__Amount__: ${spruceAmount}\n__Total value__: ${spruceAmount*sprucePrice}$\n\n**Jungle${jungleAmount != 1 ? 's' : ''}** \n__Amount__: ${jungleAmount}\n__Total value__: ${jungleAmount*junglePrice}$\n\n**Oak${oakAmount!= 1 ? 's' : ''}** \n__Amount__: ${oakAmount}\n__Total value__: ${oakAmount*oakPrice}$\n\n**Acacia${acaciaAmount != 1 ? 's' : ''}** \n__Amount__: ${acaciaAmount}\n__Total value__: ${acaciaAmount*acaciaPrice}$\n\n**$\n\n**Wheat${wheatAmount!= 1 ? 's' : ''}** \n__Amount__: ${wheatAmount}\n__Total value__: ${wheatAmount*wheatPrice}$\n\n**Carrot${carrotAmount!= 1 ? 's' : ''}** \n__Amount__: ${carrotAmount}\n__Total value__: ${carrotAmount*carrotPrice}$\n\n**Potato${potatoAmount!= 1 ? 's' : ''}** \n__Amount__: ${potatoAmount}\n__Total value__: ${potatoAmount*potatoPrice}$\n\n**Gravel${gravelAmount!= 1 ? 's' : ''}** \n__Amount__: ${gravelAmount}\n__Total value__: ${gravelAmount*gravelPrice}$\n\n**Dirt${dirtAmount!= 1 ? 's' : ''}** \n__Amount__: ${dirtAmount}\n__Total value__: ${dirtAmount*dirtPrice}$\n\n**Grass${grassAmount!= 1 ? 's' : ''}** \n__Amount__: ${grassAmount}\n__Total value__: ${grassAmount*grassPrice}$\n\n**Kaelly${kaellyAmount!= 1 ? 's' : ''}** \n__Amount__: ${kaellyAmount}\n__Total value__: ${kaellyAmount*kaellyPrice}$\n\n Balance \n${coins}$`
        const embed = new Discord.MessageEmbed()
        embed.setAuthor(member.user.tag, member.user.displayAvatarURL({dynamic: true}))
        embed.setColor('ff4d00')
        embed.setTitle(`__${member.user.username}'s Inventory__:`)
        embed.setDescription(desc)
        embed.addField(`Total inventory value:`, `${(diamondsAmount*diamondsPrice+emeraldsAmount*emeraldsPrice+stoneAmount*stonePrice+oakPrice*oakAmount+birchPrice*birchAmount+sprucePrice*spruceAmount+junglePrice*jungleAmount+acaciaPrice*acaciaAmount+gravelAmount*gravelPrice+dirtAmount*dirtPrice+grassAmount*grassPrice+wheatAmount*wheatPrice+carrotAmount*carrotPrice+potatoAmount*potatoPrice+kaellyAmount*kaellyPrice)}$`)
        embed.addField(`Balance: `, `${coins}$`)
        embed.setTimestamp()
        message.channel.send(embed)
    }
};
