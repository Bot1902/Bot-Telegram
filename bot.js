require('dotenv').config()

const { Telegraf } = require('telegraf')

const bot = new Telegraf('6221986214:AAHiRiEIWSmVZQ05nCQwDRnmEMhFUAkD7a8')

bot.start((ctx) => {
    
    ctx.reply('Hola text ' + ctx.from.first_name + ' que tal, como estas?');
})

bot.help((ctx) => {
    
    ctx.reply('Hola cuentame, ¿en que puedo ayudarte?');
})

bot.hears(/cachon/i, ctx => {
    const respuestas = [
        'Eso es del diablo',
        'No deberías hablar así',
        'Cuidado con lo que dices',
        'Es mejor que evitemos ese tema',
        'No me gusta cuando hablas así',
        'Hablemos de otra cosa, por favor'
    ];
    const respuestaAleatoria = respuestas[Math.floor(Math.random() * respuestas.length)];
    ctx.reply(respuestaAleatoria);
});

const http = require('http');

const server = http.createServer(function (req, res) {
  // Configurar manejo de solicitudes y respuestas
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, function () {
  console.log("Aplicacion corriendo en puerto " + PORT);
});

bot.launch()