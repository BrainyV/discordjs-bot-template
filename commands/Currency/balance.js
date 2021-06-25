const Discord = require("discord.js");
module.exports = {
    name: "balance",
    category: "currency",
    description: "Check your or others balance",
    aliases: ["bal", "coins", "wallet"],
    execute: async (client, message, args) => {

        let user = message.mentions.members.first() || message.guild.members.resolve(args[0])

        if (user) {

            let {wallet, bank} = await client.getUser(`${user.id}`);
            const userWallet = new Discord.MessageEmbed()
            .setTitle(`${user.user.username || user.username}'s balance`)
            .setDescription(`**Wallet:** ${wallet.toLocaleString()}\n**Bank:** ${bank.toLocaleString() || 0}`)
            .setColor("RANDOM")
            .setFooter('wow rich')
            .setTimestamp()
            return message.inlineReply(userWallet)

        } else {

            let {wallet, bank, bankspace} = await client.getUser(`${message.author.id}`);
            const userWallet = new Discord.MessageEmbed()
            .setTitle(`${message.author.username}'s balance`)
            .setDescription(`**Wallet:** ${wallet.toLocaleString()}\n**Bank:** ${bank.toLocaleString() || 0}/${bankspace.toLocaleString()}`)
            .setColor("RANDOM")
            .setFooter('beg more, bro')
            .setTimestamp()
            return message.inlineReply(userWallet)
        }
    } 
}