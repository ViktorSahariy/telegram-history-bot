const TelegramBot = require('node-telegram-bot-api');

const token = '6269469377:AAG4OjJNtRnyGWmuL27zl372-nEdNP9_dpc';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
	const chatId = msg.chat.id;
	bot.sendMessage(chatId, 'Вітаю в грі "Розслідування"! Ти детектив, який вирішив розкрити вбивство.');
	bot.sendMessage(chatId, 'Перед тобою великий розслідувальний справжній кейс. Почнемо!');
	bot.sendMessage(chatId, 'Ти отримуєш повідомлення про вбивство в місті. Що робиш?', {
			reply_markup: {
					keyboard: [['Розпочати розслідування']]
			}
	});
});


bot.on('message', (msg) => {
	const chatId = msg.chat.id;
	const messageText = msg.text;

	
	if (messageText === 'Розпочати розслідування') {
			bot.sendMessage(chatId, 'Ти прибуваєш на місце злочину. Є тіло жертви та кілька можливих слідів.');
			bot.sendMessage(chatId, 'Вибери, що перевірити: обстеження тіла, шукати свідків, або перевірити речі поряд з тілом?', {
					reply_markup: {
							keyboard: [['Обстеження тіла'], ['Шукати свідків'], ['Перевірити речі поряд з тілом']]
					}
			});
	} else if (messageText === 'Обстеження тіла') {
			bot.sendMessage(chatId, 'Ти знайшов деякі підозрілі сліди. Що робиш далі?');
			bot.sendMessage(chatId, 'Маєш можливість перевірити ці сліди у лабораторії або питати місцевих мешканців.', {
					reply_markup: {
							keyboard: [['Перевірити у лабораторії'], ['Питати місцевих мешканців']]
					}
			});
	} else if (messageText === 'Перевірити у лабораторії') {
			bot.sendMessage(chatId, 'Лабораторія підтверджує твої підозри. Це відкриває нові можливості.');
      bot.sendMessage(chatId, 'Т');		
  } else if (messageText === 'Питати місцевих мешканців') {

	}
		 else {

	}
	// І так далі для інших варіантів вибору та їх наслідків
});












// bbot.onText('/start', (msg) => {
// 	const chatId = msg.chat.id;
// 	bot.sendMessage(chatId, 'Привіт! Як справи?', {
// 			reply_markup: {
// 					keyboard: [
// 							['Добре', 'Погано'],
// 							['Не скажу']
// 					],
// 					resize_keyboard: true,
// 					one_time_keyboard: true
// 			}
// 	});
// });

// bot.on('message', (msg) => {
// 	const chatId = msg.chat.id;
// 	const messageText = msg.text;

// 	if (messageText === 'Добре') {
// 			bot.sendMessage(chatId, 'Це добре!');
// 	} else if (messageText === 'Погано') {
// 			bot.sendMessage(chatId, 'Не хвилюйтесь, усе налагодиться.');
// 	} else if (messageText === 'Не скажу') {
// 			bot.sendMessage(chatId, 'Розумію.');
// 	} else {
// 			bot.sendMessage(chatId, 'Будь ласка, використовуйте кнопки для відповіді.');
// 	}
// });