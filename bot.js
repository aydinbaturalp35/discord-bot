const Discord = require('discord.js');

const token = "MzQ3OTg5OTcwMzMxMzY5NDcy.DOfPrg.qQiwwF-Jzyv6CPZSbk7SxZ_sGhs";

const client = new Discord.Client();

client.on("ready", () => {
    console.log("Ready");
});

client.on('message', (message) => {

    if(message.content == 'sa') {
        message.reply('aleyküm selam');
    }

    if(message.content == 'merhaba') {
        message.reply('merhaba');
    }

    if(message.content == 'selam') {
        message.reply('selam');
    }

    if(message.content == 'bu doru mu?') {
        message.reply('mlsf doru');
    }

});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find('name', 'tanisma-alani');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Aramıza hoşgeldin, ${member}`);
  });

client.login(process.env.token);
