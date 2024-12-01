
let documentActions = (e) => {
	const targetElement = e.target

	if (targetElement.closest(`.icon-burger`)) {
		document.documentElement.classList.toggle(`open-menu`)
	}
}

document.addEventListener(`click`, documentActions)