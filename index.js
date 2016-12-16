const Discord = require('discord.js');
const fortunes = require('fortunes');
const client = new Discord.Client();

client.on('ready', function() {
	console.log('I am ready!');
});

client.on('message', message => {
	if (message.content === 'fortune') {
		fortunes.random(function(fortune) {
			message.reply(fortune);
		});
	}
});

client.login('YOURTOKENHERE');
