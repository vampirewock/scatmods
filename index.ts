import DiscordJS, {Client, Intents} from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

const prefix = "!"

client.on('ready', () => console.log('Online'))

client.on('messageCreate', (message) => {
    if(message.content === prefix + "ping") {
        message.reply({
            content: 'pong'
        })
    }
})

client.login(process.env.TOKEN)