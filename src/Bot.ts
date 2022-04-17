import {Client, ClientOptions} from "discord.js"
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready"

const token = "OTUxNjc2NTQ2MTg2MzUwNTky.Yiq72Q.LghHdYeopICO8IIdEOromquLs4E"; // add your token here

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

ready(client);
interactionCreate(client);
client.login(token);

console.log(client); 