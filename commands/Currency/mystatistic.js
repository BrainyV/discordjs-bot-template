const Discord = require("discord.js");
module.exports = {
    name: "mystatistics",
    category: "currency",
    description: "Check your own statistics such as cmd usage and etc.",
    aliases: ["stats", "mystats"],
    execute: async (client, message, args) => {

        let user = message.author
        let {wallet, bank, bankspace, commands, spam} = await client.getUser(user.id)
        const statsEmbed = new Discord.MessageEmbed()
        .setAuthor(`${user.username}'s Statistics`, user.avatarURL(), 'https://discord.gg/DmWkfA4qb3')
        .setDescription(`Statistics for ${message.author.tag} about the bot.`)
        .setColor('RANDOM')
        .addFields(
            {
                name:'Coins',
                value:`**Wallet:** ${wallet.toLocaleString()}\n**Bank:** ${bank.toLocaleString()}\n**Bankspace:** ${bankspace.toLocaleString()}`,
                inline: true,
            },
            {
                name: "\u200b",
                value: "\u200b",
                inline: true,
            },
            {
                name: "Commands",
                value: `**Run:** ${commands} commands ran\n**Spam:** ${spam}`,
                inline: true
            }
        )

        message.channel.send(statsEmbed)    
    }
} 