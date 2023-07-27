import { commandModule, CommandType } from '@sern/handler';

export default commandModule({
	type: CommandType.Both,
	description: 'A ping command',
	execute: async (ctx, args) => {
	    await ctx.reply('Pong 🏓');
	},
});
