
// --------------------------------------------
/*Задача №3
Додати до елементу < body > класс loaded.
Потім перевірити чи є клас loaded у елемента < body >
і, якщо є, додати стиль кольору тесту зелений.
*/
//Відповідь:
//1 варіант(віразу додаємо до body клас loaded, потім перевіряємо наявність класу loaded у body  і додаємо колір):
/*
const bodyElement = document.querySelector('body')
bodyElement.classList.add(`loaded`)
bodyElement.classList.contains('loaded') ? bodyElement.style.color = `green` : console.log(`Нема класу loaded в тега body`)
*/

// 2 варіант(спочатку перевіряємо може клас loaded вже існує, а потім його додаємо і надаємо колір):

/*const bodyElement = document.querySelector('body')
if (bodyElement.classList.contains('loaded')) {
	bodyElement.style.color = `green`
}
else {
	bodyElement.classList.add(`loaded`)
	bodyElement.style.color = `green`
}
*/
// --------------------------------------------
/*
Задача №6
Дано в html: посилання з класом link
Треба додати до посилання дата атрибут зі значенням 100
Потім отримати значення атрибуту, та, якщо значення менше 200
пофарбувати колір тексту посилання в червоний
*/
//Відповідь:
/*
const link = document.querySelector('.link')
link.setAttribute(`data-money`, `100`)
const cash = parseFloat(link.getAttribute('data-money'))
cash < 200 ? link.style.color = `red` : console.log(`Дата-атрибут більше або дорівнює 200`)
*/

/*
Задача №4
Дано в html: три елементи з класом item.
Треба отримати ці елементи в константу, кожному додати клас active,
та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".
*/
/*
const items = document.querySelectorAll('.item')
items.forEach((item, index) => {
	item.classList.add(`active`)
	item.innerHTML = `<span> Елемент №${index + 1}</span>`
	console.log(item.textContent)
	}
)
	*/

/*
Задача №5
Дано в html: текст, далі кнопка з класом button.
Треба прокрутити скрол сторінки до кнопки
*/
//Відповідь:
/*
const button = document.querySelector('.button')
function scrollToButton(element) {
	element.scrollIntoView({
		inline: "nearest",
		behavior: "smooth"
	});
}
scrollToButton(button)
*/
/*
Задача №2
Написати функцію, яка додає в < body > список UL
з певною кількістю LI(кількість має передаватись як параметр функції, також мати значення за замовченням)
*/
//Відповідь:
//1 варіант
/*
const body = document.querySelector('body')
const countList = 10
function addList(a = 1) {
	let newElement = document.createElement(`ul`)
	for (let i = 1; i <= countList; i++) {
		if (body) {
			newElement.innerHTML += `<li>Пункт</li>`
		}
	}
	body.prepend(newElement)
}
addList()
*/
//2 варіант
/*
const body = document.querySelector('body')
const counter = 8;

function addList(a = 1) {
	let template = `<ul class="new-list">`
	for (let i = 1; i <= counter; i++) {
		if (body) {
			template += `<li>Пункт</li>`
		}
	}
	template += `</ul>`
	body.insertAdjacentHTML("afterbegin", template)
}
addList()
*/



