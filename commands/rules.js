module.exports= {
    name: 'rules',
    description: 'sends embed',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#005497')
        .setTitle('Server Rules')
        .addFields(
            {name: 'Rule 1', value: "Be cool, kind, and civil." },
            {name: 'Rule 2', value: "Use English only." },
            {name: 'Rule 3', value: "Use an appropriate name and avatar." },
            {name: 'Rule 4', value: "Do not spam." },
            {name: 'Rule 5', value: "Do not @mention or direct message Server Staff." },
            {name: 'Rule 6', value: "No self-promotion or advertisements." },
            {name: 'Rule 7', value: "No racist, sexist, anti-LGBTQ+, or otherwise offensive content." },
            {name: 'Rule 8', value: "No piracy, sexual, NSFW, or otherwise suspicious content." },
            {name: 'Rule 9', value: "Rules are subject to common sense." },
            {name: 'Rule 10', value: "Discord Terms of Service and Community Guidelines apply" }
        )
        .setFooter('Check #rules for any more information');

        message.channel.send(newEmbed);
    }     

}