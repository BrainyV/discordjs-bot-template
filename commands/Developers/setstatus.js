module.exports = {
    name: "setstatus",
    category: "status",
    description: "Set bot's status.",
    aliases: ["status"],
    execute: async (client, message, args) => {

        if (!args.length) return message.reply('What... What status, bro?')
        client.user.setActivity(args.join(" "), {
            type: "PLAYING",
          });
          
    }
}