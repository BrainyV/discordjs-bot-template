module.exports = {
    name: "8ball",
    description: "An 8ball command, don't know this?",
    category: "fun",
    execute: async (client, message, args) => {
        const answers = [
            "I don't know?",
            "Technically yes.",
            "Hmm, I said no.",
            "Everybody knows it's yes.",
            "Ofcourse no LOL",
            "I'll answer it later.",
            "Ask it to someone",
            "Very doubtful",
             "Most likely",
             'It is certain.',
             'It is decidedly so.',
             'Without a doubt.',
             'Yes - definitely.',
             'You may rely on it.',
             'As I see it, yes.',
             'Most likely.',
             'Outlook good.',
             'Yes.',
             'Signs point to yes.',
             'Reply hazy, try again.',
             'Ask again later.',
             'Better not tell you now.',
             'Cannot predict now.',
             'Concentrate and ask again.',
             'Don\'t count on it.',
             'My reply is no.',
             'My sources say no.',
             'Outlook not so good.',
        ]

        if (!args.length) return message.channel.send("Ask me a question!");
        let response = answers[Math.floor(Math.random() * answers.length)]
        message.reply(response)
    }

}