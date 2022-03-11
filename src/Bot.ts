import { Client, ClientOptions } from "discord.js";
import ready from "./listeners/ready";

const token = "OTUxNjc2NTQ2MTg2MzUwNTky.Yiq72Q.ZpY5cfgKscrO4ti1xtcn5LvMjyA"; // add your token here

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

ready(client);

client.login(token);