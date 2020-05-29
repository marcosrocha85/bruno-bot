require('dotenv').config();

const { Client, Attachment } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!boanoite') {
    msg.reply('Boa Noite Bruno!');
  } else if (msg.content === '!bomdia') {
    msg.reply('Bom dia Família!');
  } else if (msg.content === '!bruh') {
    msg.reply('Bruh!');
  } else if (msg.content === '!celeron') {
        const attachment = new Attachment('./assets/celeron.png');
        msg.channel.send(`${msg.author}`, attachment);
  } else if (msg.content === '!jesusbasquete') {
        const attachment = new Attachment('./assets/jesusbasquete.jpg');
        msg.channel.send(`${msg.author}`, attachment);
  } else if (msg.content === '!bls') {
        const attachment = new Attachment('./assets/abaixaki.jpg');
        msg.channel.send(`${msg.author}`, attachment);
  } else if (msg.content === '!raquiado') {
        const attachment = new Attachment('./assets/raquiado.jpg');
        msg.channel.send(`${msg.author}`, attachment);
  } else if (msg.content === '!susto') {
        const attachment = new Attachment('./assets/susto.jpg');
        msg.channel.send(`${msg.author}`, attachment);
  } else if (msg.content === '!bruh') {
        const attachment = new Attachment('./assets/bruh.mp4');
        msg.channel.send(`${msg.author}`, attachment);
  } else if (msg.content === '!banido') {
        const attachment = new Attachment('./assets/banido.mp4');
        msg.channel.send(`${msg.author}`, attachment);
  } else if (msg.content === '!piadas') {
        const attachment = new Attachment('./assets/piadas.mp4');
        msg.channel.send(`${msg.author}`, attachment);
  } else if (msg.content === '!nemfudendo') {
        const attachment = new Attachment('./assets/nem_fudendo.mp4');
        msg.channel.send(`${msg.author}`, attachment);
  }
});

client.login(process.env.DISCORD_TOKEN);