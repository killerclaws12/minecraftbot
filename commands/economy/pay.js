const economy = require('../../economy')

module.exports = {
  commands: 'pay',
  minArgs: 0,
  maxArgs: 2,
  cooldown: 5,
  expectedArgs: "<Target user's @> <Amount of coins>",
  callback: async (message, arguments, text) => {
    const { member } = message
    const coins = await economy.getCoins(member.id)
    const target = message.mentions.users.first();
    if (!target) {
      message.reply('Please specify someone to give coins to.')
      return
    }

    const coinsToGive = parseInt(arguments[1]);
    if (isNaN(coinsToGive)) {
      message.reply('Please provide a valid number of coins to give.')
      return
    }

    const coinsOwned = await economy.getCoins(member.id)
    if (coinsOwned < coinsToGive) {
      message.reply(`You do not have ${coinsToGive} coins!`)
      return
    }

    const remainingCoins = await economy.addCoins(
      member.id,
      coinsToGive * -1
    )
    const newBalance = await economy.addCoins(target.id, coinsToGive)

    message.reply(
      `You have given <@${target.id}>, ${coinsToGive} cash <:money:784551905211711488>`
    )
  },
}
