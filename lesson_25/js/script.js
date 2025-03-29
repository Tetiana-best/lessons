// Строгий режим
"use strict"

// ---------Задача №1
// Дано в html: три елементи з класом item. При кліку на кожен з елментів
// додати клас active,при повторному кліку прибрати клас

/*
const button = document.querySelector('.item')
document.addEventListener("click", documentAction)

function documentAction(e) {
	const elementTarget = e.target

	if (elementTarget.closest('.item')) {
		const currentElement = elementTarget.closest('.item')
		changeClass(currentElement)
	}
}

function changeClass(element) {
	element.classList.toggle('active')
}
*/


// ---------Задача №2
// Дано в css / scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.

/*
const body = document.querySelector('body')

window.addEventListener("load", pageLoaded)
function pageLoaded(e) {
	changeBodyOpacity(body)
	document.documentElement.classList.add('loaded')
}

function changeBodyOpacity(element) {
	element.classList.toggle('opacity')
}
*/

// ---------Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.
/*
const header = document.querySelector('header')
const footer = document.querySelector('footer')

if (header && footer) {
	header.addEventListener("mouseenter", footerActionOn)
	header.addEventListener("mouseleave", footerActionOn)
}

function footerActionOn() {
	footer.classList.toggle('footer__color_on')
}
*/

// ---------Задача №4
// Дано в html: текст, елемент з класом item, текст.Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка
// збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах
// елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item(його видно), і не запускатись повторно.


const options = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	threshold: 0.3,
}
const callback = (entries, observer) => {
	entries.forEach(entry => {
		const currentElement = entry.target
		if (entry.isIntersecting) {
			let start = parseInt(currentElement.dataset.start)
			let end = parseInt(currentElement.dataset.end)
			let delay = parseInt(currentElement.dataset.delay)

			if (isNaN(start) || start < 0 || isNaN(end) || end < 1 ||
				isNaN(delay) || delay < 1) {
				console.log('Erorr');
				return
			}
			showTimer(currentElement, start, end, delay)
			observer.unobserve(currentElement)
		}
	})
}
const observer = new IntersectionObserver(callback, options)

const display = document.querySelector(".item-scroll")
observer.observe(display)

function showTimer(element, i, number, delay) {
	let timer = setInterval(() => {
		element.textContent = i
		i >= number ? clearInterval(timer) : i++
	}, delay)
}

