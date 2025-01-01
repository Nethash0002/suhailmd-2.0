const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_27_01_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgODksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NixcbiAgICAgICAgODAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5NixcbiAgICAgICAgNTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDksXG4gICAgICAgIDMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA0LFxuICAgICAgICA4MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDU4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxLFxuICAgICAgICAxODMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDksXG4gICAgICAgIDExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDg5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgxLFxuICAgICAgICA4NSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA2MixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgsXG4gICAgICAgIDczLFxuICAgICAgICAyMDYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMxLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY1LFxuICAgICAgICA5MixcbiAgICAgICAgOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUxLFxuICAgICAgICA2MixcbiAgICAgICAgMixcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NixcbiAgICAgICAgNzEsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDY4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDUyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDUxLFxuICAgICAgICAyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDksXG4gICAgICAgIDYwLFxuICAgICAgICAxNixcbiAgICAgICAgMjA3LFxuICAgICAgICA0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTExLFxuICBcImFkdlNlY3JldEtleVwiOiBcImgzeFp1cStsRGY4amRaL0h2emh4TXhpcytWQXc5cWEzcUpYV0dPK25aQ3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRLNjVxVW9JVGpXSUhsaXJ0dEpjQ1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTk0ZDEwZjYtMzhjZS00OWQzLTllNjktNzU1ZTgzMGIxZDEzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNSxcbiAgICAgIDE3MixcbiAgICAgIDc4LFxuICAgICAgMjI2LFxuICAgICAgNzMsXG4gICAgICAyNCxcbiAgICAgIDQzLFxuICAgICAgNixcbiAgICAgIDEwOSxcbiAgICAgIDUyLFxuICAgICAgMjE0LFxuICAgICAgMjE5LFxuICAgICAgMzEsXG4gICAgICAyNDksXG4gICAgICAyNyxcbiAgICAgIDYzLFxuICAgICAgMTYzLFxuICAgICAgMTgzLFxuICAgICAgMTQ3LFxuICAgICAgMjQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNyxcbiAgICAgIDExMSxcbiAgICAgIDIwOCxcbiAgICAgIDE1MCxcbiAgICAgIDc5LFxuICAgICAgMTk2LFxuICAgICAgMjQ3LFxuICAgICAgMTg0LFxuICAgICAgMjUxLFxuICAgICAgMjksXG4gICAgICAxMTYsXG4gICAgICA3NSxcbiAgICAgIDIwMyxcbiAgICAgIDI0OSxcbiAgICAgIDE4MyxcbiAgICAgIDEzNixcbiAgICAgIDIyMyxcbiAgICAgIDE0OCxcbiAgICAgIDIwNSxcbiAgICAgIDIwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0t2UzhyMEpFS0N1MXJzR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUFMwbWFlcEZTT0RqRjREUWNlKzh5bzVnR0FJbndFRHdiNHc3aEF4UVV6bz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIveWU0dStwZ2IzdWdXeDJtdzduVTlMck5BRmIrVWZKRjJnMmJ3SnVjOU5GcmFhSlZma3J4ZEh6cFJoZms4eENYTE9IWk9ZVXVOT1pXWGxkTHBGZEVodz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSTms5SHIrRTczTVRYR2IyK3ZXamtUelhDNGpIUVl6SzIxbDNXdHl5KytoZnVpNHpjYUxvUUM5ZDdvRnJTak5wcGhaKzdOUDBmcTVtOWR4MXhYNm9oUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk3MTU2MTg2NDk3Nzo3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODY0NzA5NjI0ODMyMzk6NzJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NzE1NjE4NjQ5Nzc6NzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU3NTk2NTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHTG1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdMWC5qc29uIjogIntcImtleURhdGFcIjpcIktESzJhZmhweTZrRG5OV2t3ajE4WjJZSXd2cHh1NXV1M3ZXb3Z1T2xuNEU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjU0NTcyMzY5MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzMyOTgxMTY4MDk0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0xaLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUGVHNEtPdTdhZ0tvcnBYTEVIbkx3R2w5U1RVb2Iwdm4xVnllT2kzQzhtTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNTQ1NzIzNjkxLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMSwwLDJdfSxcInRpbWVzdGFtcFwiOlwiMTczMzIyNzY5MTA0OVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdMYS5qc29uIjogIntcImtleURhdGFcIjpcInZIbUtpZ2xrY1ZwYUROV0d0bm9wK2JRSXIrVVhBT0pjaWZXdUM4T2t4ZmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjU0NTcyMzY5MSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzIsMF19LFwidGltZXN0YW1wXCI6XCIxNzMzMjI3NjkyODA4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0xjLmpzb24iOiAie1wia2V5RGF0YVwiOlwib2VWUVNRQXJTZnNUemU0UVBlVXU3Z1N4MGt1RWtzcWRwd2xlUTFJeXJkVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNTQ1NzIzNjkxLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMywwLDJdfSxcInRpbWVzdGFtcFwiOlwiMTczMzIzMDA1NTY2NFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdMZC5qc29uIjogIntcImtleURhdGFcIjpcIkQzZXVUTjR0clBpTTVMandXMzRRUDNsQk8vT0krZFdCZnhMNEdTRUN4K0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjU0NTcyMzY5MSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzMsMF19LFwidGltZXN0YW1wXCI6XCIxNzMzMjMwMDU3NTE5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0xmLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSU8yd2NBMWcrVVlBTFNrajVpL0lzL1QyZ1ZHZVNhbXo2cHgxVDNPOFNkbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNTQ1NzIzNjkxLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwzLDRdfSxcInRpbWVzdGFtcFwiOlwiMTczNTc1Mzk1OTM0MVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdMZy5qc29uIjogIntcImtleURhdGFcIjpcImxsdWwvSC9DVW5IUWRZdnlzY24rVXloaFpkeVhjS292NEx3ZlFmNDZ0dDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjU0NTcyMzY5MSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIxNzM1NzUzOTYxMjgwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0xpLmpzb24iOiAie1wia2V5RGF0YVwiOlwiR1JHMHljRm43UXcwMDVUK2U5VnNQL3ZUQWdxTlNRMFZFeGp4NXVvZ3d5Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNTQ1NzIzNjkxLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbNSwzLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczNTc1Nzk2NjQ2N1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdMai5qc29uIjogIntcImtleURhdGFcIjpcInBhYWV6NHBoUmlmM253TURUS2JlMGZSbWRkanF0a25GZm95TTJlMzI4Q0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjU0NTcyMzY5MSxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzMsMF19LFwidGltZXN0YW1wXCI6XCIxNzM1NzU3OTY4NTc0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0xsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOEc3UVo2QTJlRDFmbHRhZ0p4UnBhdTZFU25HTy9lVlpodGVickNUUFBsOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNTQ1NzIzNjkxLFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCw2LDNdfSxcInRpbWVzdGFtcFwiOlwiMTczNTc1OTI1ODk5MlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdMbS5qc29uIjogIntcImtleURhdGFcIjpcIjlaYVd1TTdpU21ON1FYc1BvNzZ3Z3d3SndtbVFaVldRMzJWaGRhL05LcTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjU0NTcyMzY5MSxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIxNzM1NzU5MjYxMTY5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0xvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTWk5a3hxTkl4UnRJMmQ3UG1OTFpqS1FQMHVMS0VscmJOT1Q1VHBSeTJUWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNTQ1NzIzNjkxLFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbMCwzLDddfSxcInRpbWVzdGFtcFwiOlwiMTczNTc1OTY0MTcyMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdMcC5qc29uIjogIntcImtleURhdGFcIjpcImI0c2VXUnlUSk1qYVRBZ1BzR1ZwNG9WeW9GRXFPNTVuTFJ1RWZsSUN3NXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjU0NTcyMzY5MSxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIxNzM1NzU5NjQ0Njk0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
