const economy = require('../../economy')

module.exports = {
  commands: ['balance', 'bal'],
  maxArgs: 1,
  cooldown: 3,
  expectedArgs: "[Target user's @]",
  callback: async (message) => {
    const target = message.mentions.users.first() || message.author
    const targetId = target.id

    const userId = target.id

    const coins = await economy.getCoins(userId)

    message.reply(`That user has ${coins} cash! <:money:784551905211711488>`)
  },
}
