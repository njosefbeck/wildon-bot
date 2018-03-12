'use strict';
const moment = require('moment-timezone');

module.exports = {
	respond(message) {
		const serverTime = moment().tz('America/Los_Angeles').format('MMMM Do, h:mm a z');
		message.channel.send(`iRO Restart Odin Server Time: **${serverTime}**`);
	}
};