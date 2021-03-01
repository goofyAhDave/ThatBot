module.exports= {
    name: 'clear',
    description: 'clear messages',
    async execute(message, args){
        if(message.member.roles.cache.has('744460807253000223')){
            if(!args[0]) return message.reply("You didn't enter a valid amount of messages :grimacing:");
            if(isNaN(args[0])) return message.reply("That isn't a number :grimacing:");
    
            if(args[0] > 100) return message.reply("You can not delete more than 100 messages :grimacing:");
            if(args[0] < 1) return message.reply("You can not delete less than 1 message :grimacing:");


    
            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
                 
            });
        } else {
            return message.channel.send("Oops! You don't have the permissions for that :grimacing:")
        }
    }
}