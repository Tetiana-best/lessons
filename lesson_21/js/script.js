
let documentActions = (e) => {
	const targetElement = e.target

	if (targetElement.closest(`.icon-menu`)) {
		document.documentElement.classList.toggle(`open-menu`)
	}
}

document.addEventListener(`click`, documentActions)

// пошук кнопки
const playPauseButton = document.querySelector("#play");
// перевірка на наявність кнопки
if (playPauseButton) {
	// відстежування кліку по кнопці
	playPauseButton.addEventListener("click", () => {
		// пошук елемента з id #video
		const video = document.querySelector("#video");
		const icon = document.querySelector("#icon");
		const text = document.querySelector("#text");

		// керування відтворенням відео
		if (video.paused) {
			video.play();
			text.textContent = `Pause`
			icon.src = "img/hero/hero-pause-icon.png"
		} else {
			video.pause();
			text.textContent = `Play Now`
			icon.src = "img/hero/hero-play-icon.svg"
		}
	});
}
// якщо кнопки нема вивід в консоль повідомлення
else {
	console.error("Елемент #play не знайдено на сторінці.");
}

