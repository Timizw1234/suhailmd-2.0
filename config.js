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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_13_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDg2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMixcbiAgICAgICAgOTYsXG4gICAgICAgIDIxLFxuICAgICAgICA1OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NSxcbiAgICAgICAgNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNSxcbiAgICAgICAgMSxcbiAgICAgICAgMjM1LFxuICAgICAgICA3MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIzLFxuICAgICAgICAwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjksXG4gICAgICAgIDYzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDY0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgNjksXG4gICAgICAgIDExNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY3LFxuICAgICAgICA1OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTExLFxuICAgICAgICA0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDU0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MyxcbiAgICAgICAgOSxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDY0LFxuICAgICAgICA2NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDk4LFxuICAgICAgICA5OSxcbiAgICAgICAgODgsXG4gICAgICAgIDc0LFxuICAgICAgICA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMyxcbiAgICAgICAgODcsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgODMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMixcbiAgICAgICAgMTQxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRjNhcXI4c3EzUWh6eWRsZmZFcUs5ZzA0U0ZVU3QzQ0ZkVGxuRWNFOUZ0QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaXAySVlHWFVTZHkwM2dYNF9BTmpuUVwiLFxuICBcInBob25lSWRcIjogXCIxN2VlYzFkMS1mNzEyLTQyM2EtYTEwZi1kNTZiYzViZmZiZThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE4LFxuICAgICAgNzIsXG4gICAgICAzNSxcbiAgICAgIDIwMixcbiAgICAgIDE4MixcbiAgICAgIDEyNSxcbiAgICAgIDE5NixcbiAgICAgIDU5LFxuICAgICAgMjMzLFxuICAgICAgMTIxLFxuICAgICAgMjMxLFxuICAgICAgMjQ1LFxuICAgICAgNTksXG4gICAgICAxMzAsXG4gICAgICA0NSxcbiAgICAgIDE5LFxuICAgICAgNzksXG4gICAgICA4NyxcbiAgICAgIDE2NixcbiAgICAgIDI0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI2LFxuICAgICAgMTQwLFxuICAgICAgMjQsXG4gICAgICAxODQsXG4gICAgICA5LFxuICAgICAgMTM2LFxuICAgICAgMjQyLFxuICAgICAgMTk4LFxuICAgICAgMjMxLFxuICAgICAgNjYsXG4gICAgICAyMzMsXG4gICAgICAxMjMsXG4gICAgICA5OSxcbiAgICAgIDY4LFxuICAgICAgOSxcbiAgICAgIDE5NixcbiAgICAgIDIsXG4gICAgICAxODcsXG4gICAgICAxMjIsXG4gICAgICAyMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNV1BtWDBRMGI2VnV3WVlBeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVwMktDcTFHZlRhN1dZUU8yVjJadWYzcHdrNDJHNmdudStGck1Fcml4VjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYXdDamNyVlphWlB5WGZXNWdPOHNtaWNybncxdmtYd0c5QmJ1bytUL3lpTHBUeTkyaWJrY2VzNkZIWGFXYm8rckJVelhJRStsM3JwUHArTEhhd3VtRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTk1LOXIyS2ZqNTVqMkZTb1A1RlpOL3NIRW9GZzh0cUd1enVQM3cxOWtMSkdZSkd2NFZXTTUyRTgvbVkvbThTSFNsV2VQTHNjNWFTUDkyczJRak0zakE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTg0MDgzODA6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUaW1pIFp3XCIsXG4gICAgXCJsaWRcIjogXCIyMzcwOTk5NjE4NTYxMDI6MzRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTg0MDgzODA6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDY5Njc4OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUMxdFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQzFzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOFdCb3B0ZFpFaWI4RExJY3NJaExSY2lxQXJkYVJjaFVuUUhPeU96Y3U5VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNjI1NTU1ODgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUMxdC5qc29uIjogIntcImtleURhdGFcIjpcImN3SXN1YTBYYW1HZ1lKMXJHVWR6Vm1JQTJtYUM3bDJRRkZVRUIxb016QmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjYyNTU1NTg4LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDMXUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsTm9NWitTRnJnTGpjb3h2WGtZb0xadTJnQmlOUEM1aTJmU3Y5VGJDc2FrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI2MjU1NTU4OCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNDY3NjI1NDA3M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUMxdi5qc29uIjogIntcImtleURhdGFcIjpcIjVtQ09wdk9nZ0FUZUVCY1JqVkRmUDh4M2xNeVpVaVpEa1F4YmZlSG5yQjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjYyNTU1NTg5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ2OTE5NTExMzNcIn0iCn0="  // PUT your SESSION_ID 


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
