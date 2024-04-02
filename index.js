require('dotenv').config();
const {Client, GatewayIntentBits, EnmbedBuilder, PermissionsBitField, Permissions} = require('discord.js');

const bot = new Client ({intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent]
});

bot.on("ready", (bot) => {
    console.log(bot.user.tag + ' is ready!');
    bot.user.setActivity ('Fortnite')
});

bot.login(process.env.TOKEN);