module.exports= {
    name: 'kick',
    description: 'kicks members',
    execute(message, args){
        if(message.member.roles.cache.has('744460773182668890')){
            const member = message.mentions.users.first();
            if(member){
             const memberTarget = message.guild.members.cache.get(member.id);
             memberTarget.kick();
             message.channel.send('User has been kicked :smiley:')
            } else{
             message.channel.send("Oops! You didn't mention a valid user :grimacing:");
            }
        } else {
            return message.channel.send("Oops! You don't have the permissions for that :grimacing:")
    }
}}
