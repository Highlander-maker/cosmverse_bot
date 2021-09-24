
const Telegraf = require('telegraf');
require('dotenv').config(); 

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
    ctx.reply("Welcome to Cosmverse_Bot"); 
})

bot.help((ctx) => {
    ctx.reply("Upload your jpeg image to Cosmverse Market Place");
})


// get file id in console.log
bot.on('message', ctx => {
    console.log(ctx.message.photo);
})


bot.command('test', ctx => {

// file id
bot.telegram.sendPhoto(ctx.chat.id, "")

})

bot.launch();

