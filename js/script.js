//  // --------------------------- WEBP ---------------------------

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('webp');
	} else {
		document.querySelector('html').classList.add('no-webp');
	}
});

// ---------------------------MOBILE MENU---------------------------


const iconMenu = document.querySelector(".menu__icon");
const menuList = document.querySelector(".menu__list");
const menuLink = document.querySelectorAll(".menu__link");

if (iconMenu != null) {
	iconMenu.addEventListener('click', function () {
		iconMenu.classList.toggle("active");
		menuList.classList.toggle("active");
		lockBody("lock");
	});
};

for (link of menuLink) {
	link.addEventListener('click', () => {
		iconMenu.classList.remove("active");
		menuList.classList.remove("active");
		lockBody("unlock");
	})
}

function lockBody(action) {

	// function need for 1)mobile menu 2) popup

	const body = document.querySelector('body')

	if (action == "lock") {
		body.classList.toggle('lock')
	}
	else if (action == "unlock") {
		body.classList.remove('lock')
	}
}


// маска телефона и pdf

const pdfInput = document.querySelector('.rout__input-tel')
const pdfButton = document.querySelector('.rout__button')

$(document).ready(function () {
	$(".input-tel").mask("+38 (999)999 99 99");
});

pdfInput.addEventListener('blur', () => {
	value = pdfInput.value
	lastSymbol = value.slice(-1)
	if (isNaN(lastSymbol) == false) {
		pdfButton.disabled = false;
	}
})

// Выбор тура - ТАБЫ

let programName = document.querySelectorAll('.table__item-head')
let programNameWraper = document.querySelectorAll('.table__item')

for (let item of programName) {
	item.addEventListener('click', (el) => {

		let parent = el.target.closest('.table__item')
		for (let itemWraper of programNameWraper) {
			itemWraper.classList.remove('open')
		}
		parent.classList.add('open')



	})
}

// ---------------------------POPUPS---------------------------

const popupLinks = document.querySelectorAll('.popup-link');
const popupCloseIcon = document.querySelectorAll('.close-popup');


// Если модалок много, скрипт открывает только одну по id
if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];

		popupLink.addEventListener('click', function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const currentPopup = document.getElementById(popupName);
			popupOpen(currentPopup);
			e.preventDefault();
		});

	}
}


function popupOpen(currentPopup) {

	lockBody("lock");
	currentPopup.classList.add('open');

	currentPopup.addEventListener("click", function (e) {
		if (e.target.closest('.popup__overlay')) {
			popupClose(e.target.closest('.popup'));
			console.log(e.target);
		}
	});
	console.log(document.querySelectorAll('.popup__overlay'));
}

function popupClose(activePopup) {
	lockBody("unlock");
	activePopup.classList.remove('open');
}


if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const activePopup = document.querySelector('.popup.open');
		popupClose(activePopup);
	}
});



// Выбор дат 

const dateClose = document.querySelector('.main__date-list-close')
const dateMore = document.querySelector('.main__date-add')
const dateList = document.querySelector('.main__date-list-wrap')

dateMore.addEventListener('click', () => {
	dateList.classList.add('open')
	dateClose.style.display = "block"

})
dateClose.addEventListener('click', () => {
	dateList.classList.remove('open')
	dateClose.style.display = "none"
})