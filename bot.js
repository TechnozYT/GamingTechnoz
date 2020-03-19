const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njc4MTk0MTQxNzEyMDg5MDkw.XnMPGA.8qhYsXSnobYEXv8IYha39rtCIpk';

const PREFIX = "@Technoz City Bot#8772";

bot.on('ready', () => {
    console.log('This bot is Online!')
})

bot.on('message', message =>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'test':
            message.channel.sendMessage("This is a Test message!")
        break;
    }
})

bot.login(token)
