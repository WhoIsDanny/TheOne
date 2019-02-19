const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone : true});
bot.on("message", async message => {
  if(message.author.bot) return;
  let messageArray = message.content.split(" ");
  let prefix = botconfig.prefix;
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'Prefix: !',
            type: "STREAMING",
            url: "https://www.twitch.tv/discordapp"
        }
    })
});

if(cmd === `${prefix}hi`){
  message.channel.send({embed: {
         color: 3447003,
         author: {
           name: bot.user.username,
           icon_url: bot.user.avatarURL
         },
         title: "TheOne Bot",
         description: `Hello I am TheOne\nTheOne that's here to bring effortless moderation to Discord and its members!`,
         fields: [{
             name: "Come and support",
             value: `https://discord.gg/AfM2awg`,
         }],
         timestamp: new Date(),
         footer: {
           icon_url: bot.user.avatarURL,
           text: "© NoOne"
         }
       }
     })}

});
bot.login(botconfig.token)
console.log(`bot online!`);
