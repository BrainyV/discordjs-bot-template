require('../modules/functions')
module.exports = {
    name: "message",
    execute: async (message, client) => {
        if (!message.content.startsWith(client.config.bot.prefix) || message.author.bot ) return;
        if (message.channel.type === "dm") return;
      
        const args = message.content.slice(client.config.bot.prefix.length).trim().split(/ +/g);
        const commandName = args.shift().toLowerCase();

        const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) return;

        let user = await client.getUser(message.author.id)
        if (Date.now() - user.lastCmd < 1000) {
          client.addSpam(message.author.id)
        }
        client.addcmdusage(message.author.id); 
        client.setlastCmd(message.author.id, Date.now())

        let check = await client.isBotOwner(message.author.id)
        if (command.category === "developers" && !check) return;


        try {

            command.execute(client, message, args);
      
          } catch (error) {
      
            console.error(error);
      
            message.reply('There was an error trying to execute that command!');
      
          }

    }
}