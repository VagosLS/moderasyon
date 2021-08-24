const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {

//-------------------------------------------------------------------------------\

if(!["879037650525380693"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.react("<a:onay:879437292920512542>")

//-------------------------------------------------------------------------------\



  let reyn31 = "Ses Kanallarında  Olmayan Yetkililer:\n";
  message.guild.roles.cache.get("879037650546356274").members.map(r => {
    reyn31 += !r.voice.channel ? "  <@" + r.user.id + ">" : "";
  });

  const reyn31embed = 

    ("" + reyn31 + "")
  message.channel.send(reyn31embed).then(s => s.s);
};
module.exports.conf = {
  aliases: ["y-ses","yses"]
};

module.exports.help = {
  name: "yses"
};
