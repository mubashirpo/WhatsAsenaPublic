/* Copyright (C) 2020 Toxic Devil.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsenaPublic - TOXIC DEVIL
*/

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');

Asena.addCommand({pattern: 'setweltts', fromMe: true}, (async (message, match) => {

    await message.sendMessage("To Set Welcome Message To Voice, Please Type :   *.welcome .weltts Type Your Welcome Voice*\n\nExample :   *.welcome .weltts Hey There I Am Using WhatsAsenaPublic*\n\nYou Can Also Use Different Languages For Welcome Voice. You Can Use:\n\nAzerice => az, English => en, Türkçe => tr, Malayalam => ml, Hindi => hi, Indonesia => id, Español => es, Portuguese => pt\n\n.welcome .weltts Type Your Welcome Message {your language}\n\nExample By Using Different Languages:\n.welcome .weltts Hey Bro!! I am WhatsAsenaPublic {az}\nwelcome .weltts Hey Bro!! I am WhatsAsenaPublic {en}\nwelcome .weltts Hey Bro!! I am WhatsAsenaPublic {en}\nwelcome .weltts Hey Bro!! I am WhatsAsenaPublic {hi}\nwelcome .weltts Hey Bro!! I am WhatsAsenaPublic {ml}\nwelcome .weltts Hey Bro!! I am WhatsAsenaPublic {es}\nwelcome .weltts Hey Bro!! I am WhatsAsenaPublic {id}\n\n*NOTE: If You Didn't Add Any Language To The Welcome Voice, It Will Be the Default language of the bot & use this command in group*\n\nThank You For Choosing WhatsAsenaPublic 💌");

}));
