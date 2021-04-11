const economy = require('../../economy')

module.exports = {
  commands: ['addbalance', 'addbal'],
  minArgs: 0,
  maxArgs: 2,
  expectedArgs: "<The target's @> <coin amount>",
  permissionError: 'You do not have permission to use this command!', 
  cooldown: 1,
  callback: async (message, arguments) => {
    if(message.author.id != 747913247176523856) return
    const mention = message.mentions.users.first()

    if (!mention) {
      message.reply('Please tag a user to add coins to.')
      return
    }

    const coins = arguments[1]
    if (isNaN(coins)) {
      message.reply('Please provide a valid number of coins.')
      return
    }
    const userId = mention.id

    const newCoins = await economy.addCoins(userId, coins)

    message.reply(
      `You have given <@${userId}>, ${coins} cash!`
    )
  },
}
