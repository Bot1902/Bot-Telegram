const { Telegraf } = require('telegraf')

const bot = new Telegraf('6221986214:AAHiRiEIWSmVZQ05nCQwDRnmEMhFUAkD7a8')

bot.start((ctx) => {
    
    ctx.reply('Hola ' + ctx.from.first_name + ' que tal, como estas?');
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

bot.hears(/hola/i, ctx => {
    const respuestas = [
        '¡Hola! ¿Cómo estás?',
        '¡Qué tal! ¿En qué puedo ayudarte?',
        '¡Hola! Me alegra verte',
        '¡Hola! ¿Qué hay de nuevo?',
        '¡Hola! ¿Qué tal todo?',
        '¡Hola! ¿Cómo te va?',
        '¡Hola! ¿Qué planes tienes para hoy?',
        '¡Hola! ¿Qué tal tu día?',
        '¡Hola! ¿En qué puedo ayudarte?'
    ];
    const respuestaAleatoria = respuestas[Math.floor(Math.random() * respuestas.length)];
    ctx.reply(respuestaAleatoria);
});

bot.hears(/como estas/i, ctx => {
    const respuestas = [
        'Estoy bien, gracias por preguntar',
        'Más o menos, ¿y tú?',
        'Estoy genial, gracias por preguntar',
        'No tan bien, pero gracias por preocuparte',
        'Me siento excelente, gracias',
        'Estoy un poco cansado, pero bien en general',
        'Estoy muy bien, ¡gracias por preguntar!',
        'Muy bien, gracias. ¿Y tú cómo estás?',
        'Excelente, gracias. ¿Qué tal tú?',
        'Podría estar mejor, pero gracias por preguntar'
    ];
    const respuestaAleatoria = respuestas[Math.floor(Math.random() * respuestas.length)];
    ctx.reply(respuestaAleatoria);
});

bot.hears(/buenos\s*d[ií]as/i, ctx => {
    const respuestas = [
        '¡Buenos días! ¿Cómo estás?',
        '¡Buenos días! Espero que tengas un día excelente',
        '¡Buenos días! ¿Qué planes tienes para hoy?',
        '¡Buenos días madrugador!',
        '¡Buenos días! Me alegra verte',
        '¡Buenos días! ¿En qué puedo ayudarte?',
        '¡Buenos días! ¿Qué tal tu noche?',
        '¡Buenos días! ¿Cómo te sientes hoy?',
        '¡Buenos días! Espero que tengas un día productivo',
        '¡Buenos días! ¿Ya tienes planes para el fin de semana?'
    ];
    const respuestaAleatoria = respuestas[Math.floor(Math.random() * respuestas.length)];
    ctx.reply(respuestaAleatoria);
});

bot.hears(/buenas\s*tardes/i, ctx => {
    const respuestas = [
        '¡Buenas tardes! ¿Cómo estás?',
        '¡Buenas tardes! ¿Qué planes tienes para hoy?',
        '¡Buenas tardes! ¿Cómo ha sido tu día?',
        '¡Buenas tardes! ¿Qué tal tu semana?',
        '¡Buenas tardes! ¿En qué puedo ayudarte?',
        '¡Buenas tardes! ¿Cómo te sientes el día de hoy?',
        '¡Buenas tardes! Espero que tengas un buen día',
        '¡Buenas tardes! ¿Ya cumpliste con tu deber el día de hoy?',
        '¡Buenas tardes! ¿Qué tal tu trabajo?',
        '¡Buenas tardes! ¿Ya has tomado un descanso hoy?'
    ];
    const respuestaAleatoria = respuestas[Math.floor(Math.random() * respuestas.length)];
    ctx.reply(respuestaAleatoria);
});

bot.hears(/buenas\s*noches/i, ctx => {
    const respuestas = [
        '¡Buenas noches! ¿Cómo estás?',
        '¡Buenas noches! ¿Te gustó tu día?',
        '¡Buenas noches! ¿Estás listo para dormir?',
        '¡Buenas noches! ¿Qué planes tienes para mañana?',
        '¡Buenas noches! ¿En qué puedo ayudarte?',
        '¡Buenas noches! Espero que hayas tenido un buen día',
        '¡Buenas noches! ¿Ya te preparaste para dormir?',
        '¡Buenas noches! ¿Has comido bien hoy?',
        '¡Buenas noches! ¿Qué tal tu día?',
        '¡Buenas noches! ¿Estás listo para recargar energías?'
    ];
    const respuestaAleatoria = respuestas[Math.floor(Math.random() * respuestas.length)];
    ctx.reply(respuestaAleatoria);
});

bot.hears(/(que|qué)\s*tal\s*(estás|estas)?/i, ctx => {
    const respuestas = [
        'Estoy muy bien, gracias por preguntar. ¿Y tú cómo estás?',
        'Hoy estoy un poco cansado, pero gracias por preguntar. ¿Y tú qué tal estás?',
        'Estoy genial, ¡gracias por preguntar! ¿Y tú cómo has estado?',
        'Estoy bastante bien, ¿y tú cómo estás?',
        'La verdad es que no he tenido un buen día, pero gracias por preguntar. ¿Y tú qué tal estás?',
        'Hoy estoy enérgico, gracias por preguntar. ¿Y tú cómo estás?',
        'Estoy muy feliz, gracias por preguntar. ¿Y tú cómo estás?',
        'Hoy ha sido un día difícil, pero gracias por preguntar. ¿Y tú qué tal estás?',
        'Estoy un poco cansado, pero gracias por preguntar. ¿Y tú cómo estás?',
        'Hoy ha sido un día genial, gracias por preguntar. ¿Y tú cómo estás?'
    ];
    const respuestaAleatoria = respuestas[Math.floor(Math.random() * respuestas.length)];
    ctx.reply(respuestaAleatoria);
});

bot.hears(/anuncios/i, ctx => {
    const respuestas = [
      'Si los anuncios no te cargan intenta esto: \n\nIntenta ver el primer anuncio con wifi luego lo ves directamente con la aplicación conectada 🕸️ \n\nSi no te funciona elimina los datos de la aplicación y vuelve a ingresar a ella, por medio de wifi actualizas servidores y ves el anuncio one ⚡️ \n\nEstamos atento a cualquier inquietud gracias por escribirnos 🕸️ \n\nPROPIETARIO: @JM_VPN19',
      '¿No estás viendo los anuncios? Asegúrate de tener una buena conexión a internet y de tener actualizada la aplicación. Si el problema persiste, no dudes en contactarnos. 😊',
      '¡Buenas noticias! Los anuncios están funcionando perfectamente. Si aún no los estás viendo, intenta desinstalar y reinstalar la aplicación. 🔄'
    ];
    const respuestaAleatoria = respuestas[Math.floor(Math.random() * respuestas.length)];
    ctx.reply(respuestaAleatoria);
  });  

  bot.hears(/jaj(a|aja)/i, ctx => {
    const respuestas = [
      'De qué te ríes cv',
      'Cuenta el chiste para reírnos todos',
      'Eche que? El chiste viene por servi-entrega',
      'Eres la risueña del grupo'
    ];
    const respuesta = respuestas[Math.floor(Math.random() * respuestas.length)];
    ctx.reply(respuesta);
  });

  bot.hears('sexo', async (ctx) => {
    try {
      await ctx.replyWithPhoto({
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiZ7o-XDizFtGAmU0_Ox-7WupmCj_53mZ_q_fLIRS_qBBlcuT1jIqv40p2mfgNjefLsFM&usqp=CAU',
        caption: 'Esta es una foto sacada de internet'
      });
    } catch (error) {
      console.log(error);
      ctx.reply('Eso no se dice!!');
    }
  });

bot.launch()