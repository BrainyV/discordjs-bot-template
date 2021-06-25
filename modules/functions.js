module.exports = (client) => {

  client.clean = async (client, text) => {
    if (text && text.constructor.name == "Promise")
    text = await text;
    
    if (typeof text !== "string")
    text = require("util").inspect(text, {depth: 1});
    
    text = text
    .replace(/`/g, "`" + String.fromCharCode(8203))
    .replace(/@/g, "@" + String.fromCharCode(8203))
    .replace(client.token, "Why are you so noob at coding bro!");

  return text;
  }
  client.codeBlock = (code, toCode) => {
    let codes = `\`\`\`${code}\n${toCode}\n\`\`\` `
      return codes;
  }
  
  client.isBotOwner= (id) => {
    if (client.config.bot.owner === id) {
      return true
    } else if (client.config.bot.developers.includes(id)) {
      return true
    } else {
      return false
    }
  }

  client.getUser = async (userID) => {
    let user = client.currency.get(userID)

    if (!user) {
      user = await client.currency.set(userID, {
        commands: 1,
        lastCmd: Date.now(),
        spam: 0,
        wallet: 500,
        bank: 0,
        bankspace: 500,
      }
      )
    } 
    return user;
  }    
}