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



bot.launch()