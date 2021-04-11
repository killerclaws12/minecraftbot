const { prefix } = require('../config.json')

const validatePermissions = (permissions) => {
    const validPermissions = [
        'CREATE_INSTANT_INVITE',
        'KICK_MEMBERS',
        'BAN_MEMBERS',
        'ADMINISTRATOR',
        'MANAGE_CHANNELS',
        'MANAGE_GUILD',
        'ADD_REACTIONS',
        'VIEW_AUDIT_LOG',
        'PRIORITY_SPEAKER',
        'STREAM',
        'VIEW_CHANNEL',
        'SEND_MESSAGES',
        'SEND_TTS_MESSAGES',
        'MANAGE_MESSAGES',
        'EMBED_LINKS',
        'ATTACH_FILES',
        'READ_MESSAGE_HISTORY',
        'MENTION_EVERYONE',
        'USE_EXTERNAL_EMOJIS',
        'VIEW_GUILD_INSIGHTS',
        'CONNECT',
        'SPEAK',
        'MUTE_MEMBERS',
        'DEAFEN_MEMBERS',
        'MOVE_MEMBERS',
        'USE_VAD',
        'CHANGE_NICKNAME',
        'MANAGE_NICKNAMES',
        'MANAGE_ROLES',
        'MANAGE_WEBHOOKS',
        'MANAGE_EMOJIS',
    ]

    for (const permission of permissions) {
        if (!validPermissions.includes(permission)) {
            throw new Error(`Unknown permission node "${permission}"`)
        }
    }
}

let recentlyRan = [] // guildId-userId-command

module.exports = (client, commandOptions) => {
    let {
        commands,
        expectedArgs = '',
        permissionError = 'You do not have permission to run this command.',
        minArgs = 0,
        maxArgs = null,
        cooldown = -1,
        permissions = [],
        requiredRoles = [],
        callback,
    } = commandOptions

    if (!commands) {
        return
    }

    // Ensure the command and aliases are in an array
    if (typeof commands === 'string') {
        commands = [commands]
    }

    console.log(`Registering command "${commands[0]}"`)


    if (permissions.length) {
        if (typeof permissions === 'string') {
            permissions = [permissions]
        }

        validatePermissions(permissions)
    }

    // Listen for messages
    client.on('message', (message) => {
        const { member, content, guild } = message

        for (const alias of commands) {
            const command = `${prefix}${alias.toLowerCase()}`

            if (
                content.toLowerCase().startsWith(`${command} `) ||
                content.toLowerCase() === command
            ) {
                // A command has been ran

                // Ensure the user has the required permissions
                for (const permission of permissions) {
                    if (!member.hasPermission(permission)) {
                        message.reply(permissionError)
                        return
                    }
                }

                // Ensure the user has the required roles
                for (const requiredRole of requiredRoles) {
                    const role = guild.roles.cache.find(
                        (role) => role.name === requiredRole
                    )

                    if (!role || !member.roles.cache.has(role.id)) {
                        message.reply(
                            `You must have the "${requiredRole}" role to use this command.`
                        )
                        return
                    }
                }

                // Ensure the user has not ran this command too frequently
                //guildId-userId-command
                let cooldownString = `${guild.id}-${member.id}-${commands[0]}`
                console.log('cooldownString:', cooldownString)

                if (cooldown > 0 && recentlyRan[cooldownString]) {
                    const timeNow = Math.round((new Date()).getTime() / 1000);
                    const lastUsed = recentlyRan[cooldownString]
                    const wait = (cooldown - (timeNow - lastUsed)).toFixed(1)
                    message.reply('Please wait `' + wait + '` more seconds!')
                    return
                }

                // Split on any number of spaces
                const arguments = content.split(/[ ]+[ ]+[ ]/)

                // Remove the command which is the first index
                arguments.shift()

                // Ensure we have the correct number of arguments
                if (
                    arguments.length < minArgs ||
                    (maxArgs !== null && arguments.length > maxArgs)
                ) {
                    message.reply(
                        `Incorrect syntax! Use ${prefix}${alias} ${expectedArgs}`
                    )
                    return
                }

                if (cooldown > 0) {
                    const timeNow = Math.round((new Date()).getTime() / 1000);
                    recentlyRan[cooldownString] = timeNow

                    setTimeout(() => {
                        console.log('Before:', recentlyRan)

                        recentlyRan[cooldownString] = null

                        console.log('After:', recentlyRan)
                    }, 1000 * cooldown)
                }

                // Handle the custom command code
                callback(message, arguments, arguments.join(' '), client)

                return
            }
        }
    })
}