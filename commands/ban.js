module.exports= {
    name: 'ban',
    description: 'bans members',
    execute(message, args){
        if(message.member.roles.cache.has('744460807253000223')){
            const member = message.mentions.users.first();
            if(member){
             const memberTarget = message.guild.members.cache.get(member.id);
             memberTarget.ban();
             message.channel.send('User has been banned :rage:')
            } else{
             message.channel.send("Oops! You didn't mention a valid user :grimacing:");
            }
        } else {
            return message.channel.send("Oops! You don't have the permissions for that :grimacing:")
    }
}}
