module.exports = {
  // Your bot name. Typically, this is your bot's username without the discriminator.
  // i.e: if your bot's username is MemeBot#0420, then this option would be MemeBot.
  name: 'Vibe.js',

  // The bot's command prefix. The bot will recognize as command any message that begins with it.
  // i.e: "!foo" will trigger the command "foo",
  //      whereas "DiscordMusicBot foo" will do nothing at all.
  prefix: '!',

  // Your bot's user token. If you don't know what that is, go here:
  // https://discordapp.com/developers/applications/me
  // Then create a new application and grab your token.
  token: 'NjA4Mjk0NDA5MDg3NDgzOTE0.XYrQ8A.qI4nCmdzF-yPWgVqiAASKDXypa0',
  // YouTube Api Key required for searching by keywords. Not needed if only using a link.
  youtubeApiKey: 'AIzaSyDFNoGoG5WcqxcKt6DtC8cDz-8gCQy7eLE',

  // The ID of the Discord server.
  serverId: '608260073776742403',
  // The ID of the text channel where I should listen for commands. If empty, will listen in all channels.
  textChannelId: '608260073776742409',
  // The ID of the voice channel where I will live.
  voiceChannelId: '608260074254762035',
  // The ID of the role required to interact with the bot. If empty, all roles will be allowed.
  requiredRoleId: '620777556576305155',
  // Set a custom playing message
  customPlayingMessage: 'Vibe.js | The joy of music.',

  // If this option is enabled, the bot will delete the message that triggered it, and its own
  // response, after the specified amount of time has passed.
  // Enable this if you don't want your channel to be flooded with bot messages.
  // ATTENTION! In order for this to work, you need to give your bot the following permission:
  // MANAGE_MESSAGES - 0x00002000
  // More info: https://discordapp.com/developers/docs/topics/permissions
  deleteAfterReply: {
    enabled: true,
    time: 10000 // In milliseconds
  }
}
