const response = require("../../modules/response/beg.json")
module.exports = {
    name: "beg",
    category: "currency",
    description: "Beg for some money",
    aliases: ["gimme"],
    execute: async (client, message, args) => {

        let user = message.author
        let odds = await client.random(1, 10)

        if (odds <= 3) {
            message.inlineReply(response.poor[Math.floor(Math.random() * response.poor.length)])
        
        } else if ( 3 < odds && odds < 9) {
            let begs3 = await client.random(1, 10)
            let response3 = response.lucky[Math.floor(Math.random() * response.lucky.length)]

            client.addWallet(user.id, begs3)
            message.inlineReply(response3.replace(`{coins}`, begs3))

        } else if (odds >= 9) {
            let begs9 = await client.random(10, 20)
            let response9 = response.pro[Math.floor(Math.random() * response.lucky.length)]

            client.addWallet(user.id, begs9)
            message.inlineReply(response9.replace('{coins}', begs9))  
        }
    } 
}