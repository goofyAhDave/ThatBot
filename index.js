//basic shit
const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.'

//filter to only check js files
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
//console log online
client.once('ready', () => {
    console.log('ThatBot is online');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

//welcome role
client.on('guildMemberAdd', async guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('744460554458103818').send(`Welcome <@${guildMember.user.id}> to the server!`)
});

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'socials'){
        client.commands.get('socials').execute(message, args);
    } else if (command == 'invite'){
        client.commands.get('invite').execute(message, args);
    } else if (command == 'rules'){
        client.commands.get('rules').execute(message, args, Discord);
    } else if (command == 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if (command == 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if (command == 'ban'){
        client.commands.get('ban').execute(message, args);
    }
})

// keep as last line please idiot
client.login('process.env.token')