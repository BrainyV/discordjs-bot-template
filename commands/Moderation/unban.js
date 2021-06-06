module.exports = {
    name: "unban",
    description: "Unban users.",
    category: "moderation",
    execute: async (client, message, args) => {
        if (message.member.hasPermission["BAN_MEMBERS"]) return message.reply("you have no permission")
        .then(m => {m.delete({timeout:5000})});
        if (message.guild.me.hasPermission["BAN_MEMBERS"]) return message.reply("how can i unban someone if I have no permission")

        if (!args.length) return message.reply('Who are we going to unban?')
        let mod = message.author
        let user = args[0]
        if (isNaN(user)) return message.reply("please give me a valid user id.")
        let reason = args.slice(1).join(" ") + ` - Unbanned by ${mod.tag}(${message.author.id})`

        if (!reason) reason = `Unspecified - Unbanned by ${message.author.tag}(${message.author.id})`

        if (user === mod.id) return message.reply("how are you banned if you are here?");
        if (user === message.guild.owner.id) return message.reply("server owner is not banned LOL");
        if (user === client.user.id) return message.reply("am i banned here?");

        message.guild.fetchBans().then(bans => {
            let member = bans.get(user);
    
            if (member == null) {
              message.reply('that user is not banned');
              return;
            }
            
            message.delete({timeout: 10000})
            message.channel.send(`**${member.user.tag} has been unbanned from the server**`).then(m => {m.delete({timeout: 10000})})
            message.guild.members.unban(member.user.id, reason)
        })
    }

}