document.addEventListener('DOMContentLoaded', () => {
	const wordsArray = [
		{russian: 'дело / случай', english: 'case'},
		{russian: 'точка / смысл', english: 'point'},
		{russian: 'смылс / чувство', english: 'sense'},
		{russian: 'государство', english: 'government'},
		{russian: 'способен', english: 'able'},
		{russian: 'безупречный', english: 'immaculate'},
		{russian: 'держаться подальше / воздержаться', english: 'keep from'},
		{russian: 'развалиться на части', english: 'fall apart'},
		{russian: 'швы', english: 'seams'},
		{russian: 'преступление', english: 'crime / offense'},
		{russian: 'мощь / может', english: 'might'},
		{russian: 'развязаться', english: 'come undone'},
		{russian: 'мурашки', english: 'chills'},
		{russian: 'не', english: 'are not / aint'},
		{russian: 'вера покинула', english: 'faith-departed'},
		{russian: 'толпа', english: 'crowd'},
		{russian: 'кричать', english: 'shout / yell'},
		{russian: 'стоять на своем', english: 'stand your ground'},
		{russian: 'гнуться', english: 'bend'},
		{russian: 'искать', english: 'seek'},
		{russian: 'разделить', english: 'devide / split'},
		{russian: 'вешать', english: 'hang'},
		{russian: 'чайка', english: 'gull / seagull'},
		{russian: 'сам по себе', english: 'on my own'},
		{russian: 'жара', english: 'heat'},
		{russian: 'трахея', english: 'windpipe'},
		{russian: 'выводить из себя / раздражение', english: 'huff'},
		{russian: 'страдать', english: 'suffer'},
		{russian: 'задыхаться', english: 'suffocate'},
		{russian: 'тонуть', english: 'drown'},
		{russian: 'я собираюсь сделать', english: 'im about to'},
		{russian: 'реанимировать', english: 'resuscitate'},
		{russian: 'щелчок', english: 'snap'},
		{russian: 'класть', english: 'lay / put'},
		{russian: 'унижение', english: 'stoop / humiliate'},
		{russian: 'едва ли / еле еле', english: 'barely'},
		{russian: 'никто / также не', english: 'neither'},
		{russian: 'любой / каждый', english: 'either'},
		{russian: 'устал от', english: 'sick of'},
		{russian: 'блевать / изрыгать', english: 'spew'},
		{russian: 'плевать', english: 'spit'},
		{russian: 'тянуть', english: 'pull'},
		{russian: 'отдельный', english: 'separate'},
		{russian: 'сдержанный', english: 'restraint'},
		{russian: 'тротуар', english: 'sidewalk'},
		{russian: 'честный / искренний', english: 'sincere'},
		{russian: 'раздраженный / в бешенстве', english: 'pissed'},
		{russian: 'завязывать / галстук', english: 'tie'},
		{russian: 'срочно', english: 'urgently'},
		{russian: 'разрешение', english: 'clearance'},
		{russian: 'ушел в отставку', english: 'retired'},
		{russian: 'похожий', english: 'similar'},
		{russian: 'упоминать', english: 'mention'},
		{russian: 'подозрения', english: 'suspicions'},
		{russian: 'беспорядок', english: 'mess'},
		{russian: 'крот / моль', english: 'mole'},
		{russian: 'хер / ничтожество', english: 'prick'},
		{russian: 'необходимый', english: 'necessary'},
		{russian: 'источник', english: 'sourсe'},
		{russian: 'братва', english: 'chaps'},
		{russian: 'довольный', english: 'pleased'},
		{russian: 'дырявый', english: 'leaky'},
		{russian: 'притворяться', english: 'pretend'},
		{russian: 'развлекать', english: 'entertain'},
		{russian: 'заразный', english: 'contagious'},
		{russian: 'напрасно', english: 'in vain'},
		{russian: 'пытка', english: 'torture'},
		{russian: 'взор / взгляд', english: 'gaze'},
		{russian: 'выше', english: 'above'},
		{russian: 'страсть', english: 'passion'},
		{russian: 'хватка', english: 'grip'},
		{russian: 'острые ощущения', english: 'thrill'},
		{russian: 'соперник / конкурент', english: 'rival'},
		{russian: 'добыча', english: 'prey'},
		{russian: 'жесткий', english: 'tough'},
		{russian: 'стопка / складывать', english: 'stack'},
		{russian: 'прямой', english: 'straight'},
		{russian: 'кишки', english: 'guts'},
		{russian: 'воля', english: 'will'},
		{russian: 'на плаву', english: 'float'},
		{russian: 'бросить вызов / игнорировать', english: 'defy'},
		{russian: 'пройти / пропускать', english: 'pass'},
		{russian: 'градус / степень', english: 'degree'},
		{russian: 'столкнуться', english: 'collide'},
		{russian: 'спутник', english: 'satellite'},
		{russian: 'я веселюсь от души', english: 'im having a ball'},
		{russian: 'умолять', english: 'beg'},
		{russian: 'дурачиться', english: 'fool around'},
		{russian: 'вместо', english: 'instead'},
		{russian: 'внезапно', english: 'suddenly'},
		{russian: 'подлые вещи', english: 'mean things'},
		{russian: 'мужество', english: 'courage'},
		{russian: 'неловкий', english: 'awkward'},
		{russian: 'расширять', english: 'extend / expand'},
		{russian: 'заметить кого-то', english: 'spot someone'},
		{russian: 'повседневный', english: 'casual'},
		{russian: 'случайно', english: 'casually'},
		{russian: 'решить', english: 'decide / (re)solve'},
		{russian: 'переоцененный', english: 'overrated'},
		{russian: 'в конечном счете', english: 'eventually / in end up'},
		{russian: 'в течении / во время', english: 'during'},
		{russian: 'задолженность', english: 'owe'},
		{russian: 'поскольку', english: 'since'},
		{russian: 'еще бы / не сомневайся', english: 'you betcha'},
		{russian: 'отключение света', english: 'blackout'},
		{russian: 'острый', english: 'sharp'},
		{russian: 'похоронен', english: 'buried'},
		{russian: 'определять', english: 'define'},
		{russian: 'напомнить', english: 'remind'},
		{russian: 'замечание', english: 'remark'},
		{russian: 'замечательно', english: 'remarkably'},
		{russian: 'инвалидность', english: 'disability'},
		{russian: 'чудо', english: 'wonder'},
		{russian: 'предполагать', english: 'assume / presume'},
		{russian: 'наглядно', english: 'vividly'},
		{russian: 'развод', english: 'divorce'},
		{russian: 'заболевание', english: 'disease'},
		{russian: 'рвота', english: 'vomiting'},
		{russian: 'спасение', english: 'rescue'},
		{russian: 'веселый', english: 'jolly'},
		{russian: 'пепел', english: 'ashes'},
		{russian: 'повод', english: 'occasion'},
		{russian: 'бросать', english: 'throw'},
		{russian: 'прибывать', english: 'arrive'},
		{russian: 'отчаяние', english: 'despair'},
		{russian: 'объявить', english: 'announce / declare'},
		{russian: 'оправдания', english: 'excuses'},
		{russian: 'трепет / дрожь', english: 'quiver'},
		{russian: 'существовать', english: 'exist'},
		{russian: 'существо', english: 'creature'},
		{russian: 'ползти', english: 'crawl'},
		{russian: 'презирать', english: 'despise'},
		{russian: 'парень', english: 'lad'},
		{russian: 'скользить', english: 'slip'},
		{russian: 'что касается чего-то', english: 'as far as something'},
		{russian: 'процветать', english: 'prosper'},
		{russian: 'удобный', english: 'convenient'},
		{russian: 'посвятить', english: 'devote / dedicate'},
		{russian: 'оказаться в', english: 'wind up in'},
		{russian: 'подходит', english: 'fits'},
		{russian: 'запрос', english: 'query / request'},
		{russian: 'оставаться на связи', english: 'keep in touch'},
		{russian: 'свободно / бегло', english: 'fluently'},
		{russian: 'знакомый', english: 'familiar'},
		{russian: 'возможность', english: 'opportunity / possibility'},
		{russian: 'раскрывать / обнародовать', english: 'expose'},
		{russian: 'проблема', english: 'issue'},
		{russian: 'окаменеть', english: 'petrify'},
		{russian: 'беспокоить / надоедать', english: 'bother'},
		{russian: 'починить / отремонтировать', english: 'mend / repair'},
		{russian: 'винить', english: 'blame'},
		{russian: 'трость', english: 'cane'},
		{russian: 'невежество', english: 'ignorance'},
		{russian: 'скромный', english: 'modest'},
		{russian: 'поведение', english: 'behavior / demeanor'},
		{russian: 'избегать', english: 'avoid / dodge / evade'},
		{russian: 'поселиться', english: 'settle in'},
		{russian: 'появиться', english: 'to turn up'},
		{russian: 'длится', english: 'lasts'},
		{russian: 'тем временем', english: 'meanwhile'},
		{russian: 'связанный', english: 'bound / related'},
		{russian: 'сравнить', english: 'compare'},
		{russian: 'сожалеть', english: 'regret'},
		{russian: 'злой', english: 'wicked'},
		{russian: 'проснуться', english: 'awake'},
		{russian: 'боль', english: 'ache'},
		{russian: 'позвоночник', english: 'spine'},
		{russian: 'запасное', english: 'spare'},
		{russian: 'подозревать / подозреваемый', english: 'suspect'},
		{russian: 'священный', english: 'sacred'},
		{russian: 'результат', english: 'outcome'},
		{russian: 'форма', english: 'shape'},
		{russian: 'скрыть', english: 'conceal'},
		{russian: 'затухать', english: 'fade'},
		{russian: 'стоимость / цена', english: 'cost'},
		{russian: 'проклятие', english: 'curse'},
		{russian: 'не против', english: 'dont mind'},
		{russian: 'требовать / утверждать', english: 'claim'},
		{russian: 'спрос', english: 'demand'},
		{russian: 'жестокость', english: 'cruelty'},
		{russian: 'капелька', english: 'smidge'},
		{russian: 'расходы', english: 'expenses'},
		{russian: 'погружение', english: 'plunge'},
		{russian: 'голодать', english: 'famish'},
		{russian: 'оболочка', english: 'shell'},
		{russian: 'запретить', english: 'forbid'},
		{russian: 'подчинять / покорять', english: 'subdue'},
		{russian: 'позор', english: 'disgrace'},
		{russian: 'лишать', english: 'deprive'},
		{russian: 'борьба', english: 'struggle'},
		{russian: 'обет / клятва', english: 'vow'},
		{russian: 'горький / озлобленный', english: 'bitter'},
		{russian: 'справиться', english: 'make it throw'},
		{
			russian: 'я бы хотел, чтобы ты что-то',
			english: 'i wish you were something',
		},
		{russian: 'исчезать', english: 'disappear'},
		{russian: 'сидеть сложа руки', english: 'sit behind'},
		{russian: 'благородный', english: 'noble'},
		{russian: 'править', english: 'reign'},
		{russian: 'рассвет', english: 'dawn'},
		{russian: 'град', english: 'hail'},
		{russian: 'блеск', english: 'gleam'},
		{russian: 'широкий', english: 'broad'},
		{russian: 'узнавать', english: 'recognize'},
		{russian: 'подход', english: 'aproach'},
		//{russian: '', english: ''},
	];

	const button = document.querySelector('.main-wrapper__btn');
	const russianWord = document.querySelector('.russian-item');
	const englishWord = document.querySelector('.english-item');
	const counter = document.querySelector('.main-wrapper__count');

	// создаем рандомное число
	const randomFunction = (min, max) => {
		return Math.floor(Math.random() * (max + 1 - min));
	};

	// задаем счетчику число равное длине массива
	counter.innerText = wordsArray.length;

	const clickOnButton = () => {
		// вызываем функцию рандомного числа с аргументами
		let randomElement = randomFunction(0, wordsArray.length - 1);
		let randomWord = wordsArray[randomElement];

		russianWord.innerText = randomWord.russian;
		englishWord.innerText = randomWord.english;

		// удаляем использованные объекты из массива
		wordsArray.splice(randomElement, 1);

		// счетчик меняющегося числа объектов
		counter.innerText = wordsArray.length;

		// при длине массива равному 0, кнопка неактивна
		if (wordsArray.length === 0) {
			button.classList.add('btn--disabled');
		}

		// при клике на ккнопку, item скрывается
		englishWord.classList.add('item--hide');
	};

	// вешает прослушку на кнопку
	button.addEventListener('click', () => {
		//вызываем функцию
		clickOnButton();
	});

	// прии клике на item, раскрывает содержимое
	englishWord.addEventListener('click', () => {
		event.currentTarget.classList.remove('item--hide');
	});
});
