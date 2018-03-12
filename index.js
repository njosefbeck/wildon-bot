'use strict';
require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require('./command');

const servertime = require('./servertime');

client.on('ready', () => console.log('I am ready!'));

const prefix = process.env.COMMAND_PREFIX;
client.on('message', (message) => {

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const command = cmd.getCommand(prefix, message);
	const args = cmd.getArguments(prefix, message);
	
	switch (command) {
		case 'servertime':
			servertime.respond(message);
			break;
		case 'blah':
			// Route to blah command controller eventually
			// For now, just send a message
			message.channel.send(`Don't be so down in the dumps ${message.author.username}!`);
			break;
		default:
			message.channel.send('Sorry, that\'s not a valid command.');
	}

});

client.login(process.env.BOT_USER_TOKEN);