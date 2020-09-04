const Discord = require("discord.js"); 
const client = new Discord.Client();

function doit(m, yapilacak) {
    switch(yapilacak) {
        case "sil":
            m.delete();
            break;
        case "ban":
            m.member.ban({days: 7, reason: 'Uygunsuz kelime.'});
            break;
        case "kick":
            m.member.kick({reason: 'Uygunsuz kelime.'});
            break; 
    }
}

client.on("ready", async () => {
    console.log('[BOT]: Aktif.')
});

process.on('unhandledRejection', function(reason, p){
    console.log("Possibly Unhandled Rejection at: Promise ", p, " reason: ", reason);
});

client.on('message', msg => {
  if (msg.guild && config.blocked.some(word => msg.content.includes(word))) { // Eğer mesaj engellenen kelimeyi içeriyorsa,
    doit(msg, config.what2do); // Gerekeni yap.
  }
});

client.login(config.token); // Bota giriş yap.
