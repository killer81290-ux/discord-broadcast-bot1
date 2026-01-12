const { Client, GatewayIntentBits } = require("discord.js");
const express = require("express");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content === "!ping") {
    message.reply("🏓 Pong!");
  }
});

// Web server for Render
const app = express();
app.get("/", (req, res) => {
  res.send("Bot is running 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌐 Web server running on port ${PORT}`);
});

client.login(process.env.TOKEN);
