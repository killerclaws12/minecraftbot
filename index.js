const Discord = require('discord.js')
const client = new Discord.Client()
const path = require('path')
const fs = require('fs')
const config = require('./config.json')
const command = require('./command')
const privateMessage = require('./private-message')
const mongo = require('./mongo')
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

client.on('ready', async () => {
  console.log('The client is ready!')

  client.user.setPresence({
    status: "online",  // You can show online, idle... Do not disturb is dnd
    activity: {
      name: `${client.guilds.cache.size} servers | d!help`,  // The message shown
      type: "WATCHING" // PLAYING, WATCHING, LISTENING, STREAMING,
    }
  });

  command(client, 'db', (message) => {
    message.reply(`${require("quick.db").version}`)
  }),

    privateMessage(client, 'ping', 'Pong!')

  await mongo().then((mongoose) => {
    try {
      console.log('Connected to mongo!')
    } finally {
      mongoose.connection.close()
    }
  })

  command(client, ['ping', 'Ping'], (message) => {
    var yourping = new Date().getTime() - message.createdTimestamp

    message.channel.send(`Your ping: ${yourping}ms`)
  })

  command(client, 'servers', (message) => {
    client.guilds.cache.forEach((guild) => {
      message.channel.send(
        `${guild.name} has a total of ${guild.memberCount} members`
      )
    })
  })

  command(client, 'status', (message) => {
    const content = message.content.replace('d!status ', '')
    // "!status hello world" -> "hello world"
    // const Discord = require("discord.js")

    client.user.setPresence({
      activity: {
        name: content,
        type: 0,
      },
    })
  })

  const baseFile = 'command-base.js'
  const commandBase = require(`./commands/${baseFile}`)

  const readCommands = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file))
      } else if (file !== baseFile) {
        const option = require(path.join(__dirname, dir, file))
        commandBase(client, option)
      }
    }
  }

  readCommands('commands')
})

client.login(config.token);