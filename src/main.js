const buttons = document.querySelectorAll("[data-tab-button]");
const questions = document.querySelectorAll("[data-faq-question]");

document.addEventListener("DOMContentLoaded", () => {
	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			const tabNumber = button.dataset.tabButton;
			const tab = document.querySelector(`[data-tab-id="${tabNumber}"]`);
			hideTabs();
			tab.classList.add("shows__list--is-active");
			removeActiveButton();
			button.classList.add("shows__tabs__button--is-active");
		});
	});

	questions.forEach((question) => {
		question.addEventListener("click", toggleAnswer)
	})
});

function toggleAnswer(elemento) {
	const classe = 'faq__questions__item--is-open'
	const elementoPai = elemento.target.parentNode

	elementoPai.classList.toggle(classe)
}

function removeActiveButton() {
	buttons.forEach((button) => {
		button.classList.remove("shows__tabs__button--is-active");
	});
}

function hideTabs() {
	const tabsContainer = document.querySelectorAll("[data-tab-id]");

	tabsContainer.forEach((container) => {
		container.classList.remove("shows__list--is-active");
	});
}
