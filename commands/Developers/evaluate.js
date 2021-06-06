module.exports = {
    name: "evaluate",
    category: "developers",
    description: "Run some javascript code.",
    aliases: ["eval"],
    execute: async (client, message, args) => {

        if (!args.length) return message.reply('Give some code, dude!')
        
        const code = args.join(" ");
        
        try {
          
          const evaled = eval(code);
          const clean = await client.clean(client, evaled);
          let result = await client.codeBlock("js", clean)
          message.channel.send(result);
          
          } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${await client.clean(client, err)}\n\`\`\``);
      };
    }
}