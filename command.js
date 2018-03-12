'use strict';
module.exports = {

	// Returns a string with the command, ex: 'ping'
	getCommand(prefix, message) {
		let parts = message.content.slice(prefix.length).trim().split(/ +/g);
		return parts.shift().toLowerCase();
	},

	// Returns an array of arguments that go with the command, ex: ['I', 'have', 'arguments']
	getArguments(prefix, message) {
		let parts = message.content.slice(prefix.length).trim().split(/ +/g);
		parts.shift().toLowerCase();
		return parts;
	}
};