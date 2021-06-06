module.exports = {
    name: "ready",
    execute: async (client) => {
        console.log(`Logged in as ${client.user.tag}`)
    }
}