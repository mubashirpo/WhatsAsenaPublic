/* Copyright (C) 2020 Toxic Devil.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsenaPublic - TOXIC DEVIL
*/

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');

Asena.addCommand({pattern: 'setweltts', fromMe: false}, (async (message, match) => {

    await message.sendMessage("To Set Welcome Voice Please Type :  .welcome .weltts Type Your Welcome Voice\n\nExample :  .welcome .weltts Hey There I Am Using WhatsAsenaPublic");

}));

Asena.addCommand({pattern: 'weltts (.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {
    if(match[1] === undefined || match[1] == "")
        return;
    
    let 
        LANG = config.LANG.toLowerCase(),
        ttsMessage = match[1],
        SPEED = 1.0

    if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
        LANG = langMatch[1]
        ttsMessage = ttsMessage.replace(langMatch[0], "")
    } 
    if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
        SPEED = parseFloat(speedMatch[1])
        ttsMessage = ttsMessage.replace(speedMatch[0], "")
    }
    
    var buffer = await googleTTS.synthesize({
        text: ttsMessage,
        voice: LANG
    });
    await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
}));
