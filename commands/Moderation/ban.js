module.exports = {
    name: "ban",
    description: "Ban naughty users.",
    category: "moderation",
    execute: async (client, message, args) => {
        if (message.member.hasPermission["BAN_MEMBERS"]) return message.reply("you have no permission")
        .then(m => {m.delete({timeout:5000})});
        if (message.guild.me.hasPermission["BAN_MEMBERS"]) return message.reply("how can i ban someone if I have no permission")

        if (!args.length) return message.reply('Who are we going to ban?')
        let mod = message.member
        let user = message.mentions.members.first() || message.guild.members.resolve(args[0])
        let reason = args.slice(1).join(" ") + `Used by ${message.author.tag}(${message.author.id})`

        if (!user) return message.reply("I couldn't find that member.")
        if (!reason) reason = `Unspecified - Banned by ${message.author.tag}(${message.author.id})`

        if (user.id === mod.id) return message.reply("Self harm is bad☺️");
        if (user.id === message.guild.owner.id) return message.reply("do you think I could ban the server owner?");
        if (user.id === client.user.id) return message.reply("why would you ban me, huh?");
        if (user.roles.highest.rawPosition >= mod.roles.highest.rawPosition) return message.reply("you cannot ban user with higher or equal roles to you.")
        if (!user.bannable) return message.reply("i could not ban this user, probably this user has higher roles than me.")

        message.delete({timeout: 10000})
        message.channel.send(`**${user.user.tag} has been banned from the server**`).then(m => {m.delete({timeout: 10000})})
        user.ban({reason: reason})
    }

}