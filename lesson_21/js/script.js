
let documentActions = (e) => {
	const targetElement = e.target

	if (targetElement.closest(`.icon-menu`)) {
		document.documentElement.classList.toggle(`open-menu`)
	}
}

document.addEventListener(`click`, documentActions)

// пошук кнопки
const playButton = document.querySelector("#play");
// перевірка на наявність кнопки
if (playButton) {
	// відстежування кліку по кнопці
	playButton.addEventListener("click", () => {
		// пошук елемента з id #video
		const video = document.querySelector("#video");
		// керування відтворенням відео
		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}
	});
}
// якщо кнопки нема вивід в консоль повідомлення
else {
	console.error("Елемент #play не знайдено на сторінці.");
}
