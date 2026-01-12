const buttons = document.querySelectorAll("[data-tab-button]");
const questions = document.querySelectorAll("[data-faq-question]");

const heroSection = document.querySelectorAll('.hero');
const alturaHero = heroSection.clientHeight;

window.addEventListener('scroll', function(){
	const posicaoAtual = window.scrollY;

	if (posicaoAtual > alturaHero) {
		hideHeaderElement();
	} else {
		showHeaderElement();
	}
})

// Seção de atrações, programação das abas
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

	// Seção FAQ, accordion
	questions.forEach((question) => {
		question.addEventListener("click", toggleAnswer)
	})
});

function hideHeaderElement() {
	const header = document.querySelector("header");
	header.classList.add("header--is-hidden");
}

function showHeaderElement() {
	const header = document.querySelector("header");
	header.classList.remove("header--is-hidden");
}

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
