// // Карты Yandex ========================================================================================================

// Сервис для определения координат
// https://yandex.ru/map-constructor/location-tool
// Копируем Центр

// Вынесем данные в отдельные переменные
let centerMap = [51.72031907227777, 36.16947900000002];

// 1.Стандартная карта
function initMap() {
	// Создадим переменную и вызовем новый экземпляр объекта. Передадим id карты.
	let map = new ymaps.Map('map', {
		// Чтобы запустить стандартную карту, нужно всего два параметра. Center и Zoom.
		center: centerMap, // ваши данные
		zoom: 16
	});

	// Создаем метку
	// Создаем переменную и с помощью new yandex maps и конструктора placemark(), создаем метку.
	// Передаем данные: [] - место где метка должна появится, 
	let placemark = new ymaps.Placemark(centerMap, {}, {

	});

	// Удаляем лишнее с карты
	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил
	map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

	// Добавляем метку на карту 
	// Создаем обьект и в него добавляем переменную нашей метки
	map.geoObjects.add(placemark);
}
// Вызываем функцию карты
// Как только скрипт карты готов, тогда мы вызываем функцию init.
ymaps.ready(initMap);
//========================================================================================================================================================

// 2.Карта со своей меткой
function initMapMarker() {
	// Создадим переменную и вызовем новый экземпляр объекта. Передадим id карты.
	let map = new ymaps.Map('map-marker', {
		// Чтобы запустить стандартную карту, нужно всего два параметра. Center и Zoom.
		center: centerMap, // ваши данные
		zoom: 16
	});

	// Создаем метку
	// Создаем переменную и с помощью new yandex maps и конструктора placemark(), создаем метку.
	// Передаем данные: [] - место где метка должна появится, 
	let placemark = new ymaps.Placemark(centerMap, {}, {
		// Добавляем свою иконку карты
		iconLayout: 'default#image', // Говорим карте, что мы будем использовать свою картинку
		iconImageHref: 'img/icons/map-marker.svg', // Указываем путь до иконки
		iconImageSize: [50, 50], // Размер. Например 20х20px
		iconImageOffset: [58, -55] // Отступ от центра
	});

	// Удаляем лишнее с карты
	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил
	map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

	// Добавляем метку на карту 
	// Создаем обьект и в него добавляем переменную нашей метки
	map.geoObjects.add(placemark);
}
// Вызываем функцию карты
// Как только скрипт карты готов, тогда мы вызываем функцию init.
ymaps.ready(initMapMarker);
//========================================================================================================================================================

// 3. Карта с баллуном
function initMapBalloon() {
	// Создадим переменную и вызовем новый экземпляр объекта. Передадим id карты.
	let map = new ymaps.Map('map-balloon', {
		// Чтобы запустить стандартную карту, нужно всего два параметра. Center и Zoom.
		center: centerMap, // ваши данные
		zoom: 16
	});

	// Создаем метку
	// Создаем переменную и с помощью new yandex maps и конструктора placemark(), создаем метку.
	// Передаем данные: [] - место где метка должна появится, 
	let placemark = new ymaps.Placemark(centerMap, {
		// Для создания баллуна пишем стандартные настройки из api карты
		balloonContentHeader: 'Хедер баллуна',
		balloonContentBody: 'Боди баллуна',
		balloonContentFooter: 'Подвал',
	}, {
		// Добавляем свою иконку карты
		iconLayout: 'default#image', // Говорим карте, что мы будем использовать свою картинку
		iconImageHref: 'img/icons/map-marker.svg', // Указываем путь до иконки
		iconImageSize: [50, 50], // Размер. Например 20х20px
		iconImageOffset: [58, -55] // Отступ от центра
	});

	// Удаляем лишнее с карты
	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил
	map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

	// Добавляем метку на карту 
	// Создаем обьект и в него добавляем переменную нашей метки
	map.geoObjects.add(placemark);
}
// Вызываем функцию карты
// Как только скрипт карты готов, тогда мы вызываем функцию init.
ymaps.ready(initMapBalloon);

//========================================================================================================================================================

// 4.Карта с кастомным баллуном
function initMapBalloonCustom() {
	// Создадим переменную и вызовем новый экземпляр объекта. Передадим id карты.
	let map = new ymaps.Map('map-balloon-custom', {
		// Чтобы запустить стандартную карту, нужно всего два параметра. Center и Zoom.
		center: centerMap, // ваши данные
		zoom: 16
	});

	// Создаем метку
	// Создаем переменную и с помощью new yandex maps и конструктора placemark(), создаем метку.
	// Передаем данные: [] - место где метка должна появится, 
	let placemark = new ymaps.Placemark(centerMap, {
		// Для создания баллуна пишем стандартные настройки из api карты
		balloonContentHeader: 'Хедер баллуна',
		balloonContentBody: 'Боди баллуна',
		balloonContentFooter: 'Подвал',
	}, {
		// Добавляем свою иконку карты
		iconLayout: 'default#image', // Говорим карте, что мы будем использовать свою картинку
		iconImageHref: 'img/icons/map-marker.svg', // Указываем путь до иконки
		iconImageSize: [50, 50], // Размер. Например 20х20px
		iconImageOffset: [58, -55] // Отступ от центра
	});

	// Создаем кастомный баллун
	let placemark1 = new ymaps.Placemark(centerMap, {
		// Для создания баллуна пишем стандартные настройки из api карты
		// Создаем шаблонные строки. Позволяет вносить любой html-код
		balloonContent: `
			<div class="balloon">
				<div class="balloon__address">г.Курск</div>
				<div class="balloon__contacts">
					<a href="tel:+79991550000">+7 999 155 00 00</a>
				</div>
			</div>
		`,
	}, {
		// Добавляем свою иконку карты
		iconLayout: 'default#image', // Говорим карте, что мы будем использовать свою картинку
		iconImageHref: 'img/icons/map-marker.svg', // Указываем путь до иконки
		iconImageSize: [50, 50], // Размер. Например 20х20px
		iconImageOffset: [58, -55] // Отступ от центра
	});

	// Удаляем лишнее с карты
	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил
	map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

	// Добавляем метку на карту 
	// Создаем обьект и в него добавляем переменную нашей метки
	// map.geoObjects.add(placemark);
	// Добавляем второй, кастомный объект на карту
	map.geoObjects.add(placemark1);

	//Делаем всегда открытый баллун при загрузке карты
	// Расскомментировать
	// placemark1.balloon.open();
}
// Вызываем функцию карты
// Как только скрипт карты готов, тогда мы вызываем функцию init.
ymaps.ready(initMapBalloonCustom);

//========================================================================================================================================================

// 5.Карта с маршрутом от точки до точки
function initMapRoute() {
	// Создадим переменную и вызовем новый экземпляр объекта. Передадим id карты.
	let mapMy = new ymaps.Map('map-route', {
		// Чтобы запустить стандартную карту, нужно всего два параметра. Center и Zoom.
		center: centerMap, // ваши данные
		zoom: 16,
		// Подключаем control
		controls: ['routePanelControl']
	});

	// Определяем свои точки маршрута
	let control = mapMy.controls.get('routePanelControl');
	// Пишем переменную От, адресс откуда
	let city = 'Курск';

	// Пишем управление состоянием через state. Пишем от такой то точки до такой то 
	control.routePanel.state.set({
		// Указываем тип
		type: 'masstransit', // Отображает варианты, авто, вело, пешеход
		// Отключаем поле Откуда
		fromEnabled: false,
		// Поле От
		from: `${city}, Ул.Дзержинского`,
		toEnabled: true,
		to: `${city}, Ул.Ленина 70`,
	});

	// Опции
	// Будет 3 варианта из 4х. Мы их сами задали
	control.routePanel.options.set({
		types: {
			masstransit: true,
			pedestrian: true,
			taxi: true,
		}
	});

}
// Вызываем функцию карты
// Как только скрипт карты готов, тогда мы вызываем функцию init.
ymaps.ready(initMapRoute);
//========================================================================================================================================================

// 6.Карта с маршрутом от текущего положения до точки
function initMapCurrentRoute() {
	// Создадим переменную и вызовем новый экземпляр объекта. Передадим id карты.
	let mapMy = new ymaps.Map('map-current-route', {
		// Чтобы запустить стандартную карту, нужно всего два параметра. Center и Zoom.
		center: centerMap, // ваши данные
		zoom: 16,
		// Подключаем control
		controls: ['routePanelControl']
	});

	// Определяем свои точки маршрута
	let control = mapMy.controls.get('routePanelControl');
	// Пишем переменную От, адресс откуда
	let city = 'Курск';

	// Получаем локацию через метод geolocation и функцию get(). Получили promis
	let location = ymaps.geolocation.get();

	// Обрабатываем локацию/ promis. Promis можно обработать с помощью then. Выводим функцию, в которую полуаем результат
	// Этот результат мы и будем использовать
	location.then(function (res) {
		let locationText = res.geoObjects.get(0).properties.get('text');
		console.log(locationText);

		// Пишем управление состоянием через state. Пишем от такой то точки до такой то 
		control.routePanel.state.set({
			// Указываем тип
			type: 'masstransit', // Отображает варианты, авто, вело, пешеход
			// Отключаем поле Откуда
			fromEnabled: false,
			// Поле От
			from: locationText,
			toEnabled: true,
			to: `${city}, Ул.Ленина 70`,
		});

		// Опции
		// Будет 3 варианта из 4х. Мы их сами задали
		control.routePanel.options.set({
			types: {
				masstransit: true,
				pedestrian: true,
				taxi: true,
			}
		});

	});

}
// Вызываем функцию карты
// Как только скрипт карты готов, тогда мы вызываем функцию init.
ymaps.ready(initMapCurrentRoute);
//========================================================================================================================================================

// Multi Map ======================================================
// ymaps.ready(init);

// function init() {

// 	var myMap = new ymaps.Map("map", {
// 		center: [51.703154, 36.140598],
// 		zoom: 12,
// 		// Выключаем все управление картой
// 		controls: []

// 	});

// 	var myGeoObjects = [];

// 	myGeoObjects[0] = new ymaps.Placemark([51.703154, 36.140598], {
// 		// Свойства.
// 		// hintContent: '<div class="map-hint">Авто профи, Курск, ул.Комарова, 16</div>',
// 		balloonContent: '<div class="map-hint">Авто профи, Курск, ул.Комарова, 16</div>',
// 	}, {
// 		// Необходимо указать данный тип макета.
// 		iconLayout: 'default#image',
// 		iconImageHref: 'img/icons/map-marker.svg',
// 		// Размеры метки.
// 		iconImageSize: [36, 55],
// 		// Смещение левого верхнего угла иконки относительно
// 		// её «ножки» (точки привязки).
// 		iconImageOffset: [-18, -26]
// 	});

// 	myGeoObjects[1] = new ymaps.Placemark([51.720771, 36.195773], {
// 		// Свойства.
// 		// hintContent: '<div class="map-hint">Авто профи , Курск, ул.Гунатовская, 32</div>',
// 		balloonContent: '<div class="map-hint">Авто профи, Курск, ул.Гунатовская, 32</div>',
// 	}, {
// 		// Необходимо указать данный тип макета.
// 		iconLayout: 'default#image',
// 		iconImageHref: 'img/icons/map-marker.svg',
// 		// Размеры метки.
// 		iconImageSize: [151, 41],
// 		// Смещение левого верхнего угла иконки относительно
// 		// её «ножки» (точки привязки).
// 		iconImageOffset: [-18, -26]
// 	});

// 	myGeoObjects[2] = new ymaps.Placemark([51.715085, 36.133600], {
// 		// Свойства.
// 		hintContent: '<div class="map-hint">Авто профи, Курск, пр-кт В. Клыкова, 111</div>',
// 		balloonContent: '<div class="map-hint">Авто профи, Курск, пр-кт В. Клыкова, 111</div>',
// 	}, {
// 		// Необходимо указать данный тип макета.
// 		iconLayout: 'default#image',
// 		iconImageHref: 'img/icons/map-marker.svg',
// 		// Размеры метки.
// 		iconImageSize: [151, 41],
// 		// Смещение левого верхнего угла иконки относительно
// 		// её «ножки» (точки привязки).
// 		iconImageOffset: [-18, -26]
// 	});

// 	myGeoObjects[3] = new ymaps.Placemark([51.675220, 36.158690], {
// 		// Свойства.
// 		// hintContent: '<div class="map-hint">Авто профи,  Курск, Краснополянский пер. 6А</div>',
// 		balloonContent: '<div class="map-hint">Авто профи,  Курск, Краснополянский пер. 6А</div>',
// 	}, {
// 		// Необходимо указать данный тип макета.
// 		iconLayout: 'default#image',
// 		iconImageHref: 'img/icons/map-marker.svg',
// 		// Размеры метки.
// 		iconImageSize: [165, 40],
// 		// Смещение левого верхнего угла иконки относительно
// 		// её «ножки» (точки привязки).
// 		iconImageOffset: [-18, -26]
// 	});

// 	myGeoObjects[4] = new ymaps.Placemark([51.650963, 36.140104], {
// 		// Свойства.
// 		// hintContent: '<div class="map-hint">Авто профи,  Курск, Магистральный проезд 18</div>',
// 		balloonContent: '<div class="map-hint">Авто профи,  Курск, Магистральный проезд 18</div>',
// 	}, {
// 		// Необходимо указать данный тип макета.
// 		iconLayout: 'default#image',
// 		iconImageHref: 'img/icons/map-marker.svg',
// 		// Размеры метки.
// 		iconImageSize: [165, 40],
// 		// Смещение левого верхнего угла иконки относительно
// 		// её «ножки» (точки привязки).
// 		iconImageOffset: [-18, -26]
// 	});

// 	myGeoObjects[5] = new ymaps.Placemark([51.718193, 36.083160], {
// 		// Свойства.
// 		// hintContent: '<div class="map-hint">Авто профи,  Курский район, деревня Моква 1-я, Рябиновая улица, 10</div>',
// 		balloonContent: '<div class="map-hint">Авто профи,  Курский район, деревня Моква 1-я, Рябиновая улица, 10</div>',
// 	}, {
// 		// Необходимо указать данный тип макета.
// 		iconLayout: 'default#image',
// 		iconImageHref: 'img/icons/map-marker.svg',
// 		// Размеры метки.
// 		iconImageSize: [165, 40],
// 		// Смещение левого верхнего угла иконки относительно
// 		// её «ножки» (точки привязки).
// 		iconImageOffset: [-16, -42]
// 	});

// 	// var clusterIcons=[{
// 	//         href:'img/map-marker.svg',
// 	//         size:[31,40],
// 	//         offset:[0,0]
// 	// }];

// 	var clusterer = new ymaps.Clusterer({
// 		clusterDisableClickZoom: false,
// 		clusterOpenBalloonOnClick: false,
// 		// Устанавливаем стандартный макет балуна кластера "Карусель".
// 		clusterBalloonContentLayout: 'cluster#balloonCarousel',
// 		// Устанавливаем собственный макет.
// 		// clusterBalloonItemContentLayout: customItemContentLayout,
// 		// Устанавливаем режим открытия балуна.
// 		// В данном примере балун никогда не будет открываться в режиме панели.
// 		clusterBalloonPanelMaxMapArea: 0,
// 		// Устанавливаем размеры макета контента балуна (в пикселях).
// 		clusterBalloonContentLayoutWidth: 300,
// 		clusterBalloonContentLayoutHeight: 200,
// 		// Устанавливаем максимальное количество элементов в нижней панели на одной странице
// 		clusterBalloonPagerSize: 5
// 		// Настройка внешего вида нижней панели.
// 		// Режим marker рекомендуется использовать с небольшим количеством элементов.
// 		// clusterBalloonPagerType: 'marker',
// 		// Можно отключить зацикливание списка при навигации при помощи боковых стрелок.
// 		// clusterBalloonCycling: false,
// 		// Можно отключить отображение меню навигации.
// 		// clusterBalloonPagerVisible: false
// 	});

// 	clusterer.add(myGeoObjects);
// 	myMap.geoObjects.add(clusterer);
// 	myMap.behaviors.disable('scrollZoom');
// }
// ===============================================================================================================


// Карта Yandex старая ================================================================================================
// function map(n) {
// 	ymaps.ready(init);
// 	function init() {
// 		// Создание карты.
// 		var myMap = new ymaps.Map("map", {
// 			// Координаты центра карты.
// 			// Порядок по умолчанию: «широта, долгота».
// 			// Чтобы не определять координаты центра карты вручную,
// 			// воспользуйтесь инструментом Определение координат.
// 			controls: [],
// 			center: [43.585525, 39.723062],
// 			// Уровень масштабирования. Допустимые значения:
// 			// от 0 (весь мир) до 19.
// 			zoom: 10
// 		});

// 		let myPlacemark = new ymaps.Placemark([43.585525, 39.723062], {
// 		}, {
// 			// Опции.
// 			//balloonContentHeader: 'Mistoun',
// 			//balloonContentBody: 'Москва, Николоямская 40с1',
// 			//balloonContentFooter: '+ 7(495) 507-54 - 90',
// 			//hasBalloon: true,
// 			//hideIconOnBalloonOpen: true,

// 			hasBalloon: false,
// 			hideIconOnBalloonOpen: false,
// 			// Необходимо указать данный тип макета.
// 			iconLayout: 'default#imageWithContent',
// 			// Своё изображение иконки метки.
// 			iconImageHref: 'img/icons/map.svg',
// 			// Размеры метки.
// 			iconImageSize: [40, 40],
// 			// Смещение левого верхнего угла иконки относительно
// 			// её "ножки" (точки привязки).
// 			iconImageOffset: [-20, -20],
// 			// Смещение слоя с содержимым относительно слоя с картинкой.
// 			iconContentOffset: [0, 0],
// 		});
// 		myMap.geoObjects.add(myPlacemark);

// 		myMap.behaviors.disable('scrollZoom');
// 		myMap.behaviors.disable('drag');
// 	}
// }
// ============================================================================================================

