# Discordbot | Collaborative Work Discord Group

This is a chatbot intended to be used by members of the *Collaborative Work* Discord group as a shared project for exploring mob programming and learning together.

## Local setup

### Set the stage - install Node

Primary download link at [nodejs.org](https://nodejs.org/en/download/).

Consider installing Node via a package manager for your environment ([Homebrew](https://brew.sh/) for MacOS, maybe [Chocolatey](https://chocolatey.org/install) for Windows).

TODO: pin a version in package.json->`engines`)

### Clone this repository

`git clone https://github.com/kellyprankin/discordbot.git`

### Install node packages

From your terminal, open your newly-created `discordbot` folder.

```console
~/projects/discordbot > npm install

# ... omitting some wordy npm output for clarity

added 40 packages, and audited 41 packages in 1s

found 0 vulnerabilities
```

### Start the bot!

```console
~/projects/discordbot > npm run start

> learnbot@1.0.0 start
> ts-node src/Bot.ts

Bot is starting...

# (exit the bot here by pressing Ctrl-C)
```

## References

- *Discord group*: Primary communications for the group. Contact Kelly Rankin ([github](https://github.com/kellyprankin), [twitter](https://twitter.com/KellyRankin19)) for details and invites.
- *Trello board*: Used for project planning. Contact Kelly for access.
- *[discord.js](https://discord.js.org/#/)*: This NodeJS framework provides the base layer for automating chatbot interactions with our Discord group
  - [discord.js documentation](https://discord.js.org/#/docs/discord.js/stable/general/welcome)
- [How to build a Discord bot using TypeScript](https://sabe.io/tutorials/how-to-build-discord-bot-typescript): Tutorial we're following for creating this bot.