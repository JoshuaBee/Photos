const photos = [
	{
		"date": "20th June 2021",
		"file": "images/photos/2021/06/20/1.jpg",
		"orientation": "landscape",
	},
	{
		"date": "10th June 2021",
		"file": "images/photos/2021/06/10/1.jpg",
		"orientation": "portrait",
	},
	{
		"date": "3rd June 2021",
		"file": "images/photos/2021/06/03/1.jpg",
		"orientation": "portrait",
	},
	{
		"date": "31st May 2021",
		"file": "images/photos/2021/05/31/1.jpg",
		"orientation": "portrait",
	},
	{
		"date": "26th May 2021",
		"file": "images/photos/2021/05/26/1.jpg",
		"orientation": "portrait",
	},
	{
		"date": "24th May 2021",
		"file": "images/photos/2021/05/24/1.jpg",
		"orientation": "portrait",
	},
	{
		"date": "17th May 2021",
		"file": "images/photos/2021/05/17/1.jpg",
		"orientation": "portrait",
	},
	{
		"date": "8th May 2021",
		"file": "images/photos/2021/05/08/1.jpg",
		"orientation": "landscape",
	},
];

// Constant Elements
const $grid = document.querySelector('main.grid');
const $observer = document.querySelector('#observer');

// Variable Elements
var $gridItems = [];

// Constants
const msnry = new Masonry($grid, {
	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
	percentPosition: true
});
const photosPerPage = 10;

// Variables
var currentPage = 1;
var deferredPrompt;

document.addEventListener('DOMContentLoaded', function(event) {

	let observer = new IntersectionObserver(loadMorePhotos, {});
	observer.observe($observer);

	loadPhotos();
});

function loadPhotos() {
	photos.slice(Math.max((currentPage - 1) * photosPerPage, 0), currentPage * photosPerPage).forEach(photo => {
		createPhotoElement(photo);
	});

	imagesLoaded($grid, () => {
		new Masonry($grid, {
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer',
			percentPosition: true
		});

		showPhotos();
	});
}

function loadMorePhotos(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			currentPage++;
			loadPhotos();
		}
    });
}

function showPhotos() {
	var $photos = $grid.querySelectorAll('.grid-item[aria-hidden="true"]');
	$photos.forEach($photo => {
		$photo.ariaHidden = false;
	});
}

function createPhotoElement(photo) {
	const $gridItem = document.createElement('div');
	$gridItem.ariaHidden = true;
	$gridItem.classList.add('grid-item');
	if (photo.orientation === "landscape") {
		$gridItem.dataset.width = "2";
	}

	const $gridItemPhoto = document.createElement('img');
	$gridItemPhoto.src = photo.file;
	$gridItemPhoto.classList.add('grid-item-photo');
	$gridItem.appendChild($gridItemPhoto);

	const $photoOverlay = document.createElement('div');
	$photoOverlay.classList.add('photo-overlay');
	$gridItem.appendChild($photoOverlay);

	const $photoOverlayText = document.createElement('div');
	$photoOverlayText.classList.add('photo-overlay-text');
	$photoOverlayText.innerHTML = photo.date;
	$photoOverlay.appendChild($photoOverlayText);

	//$grid.appendChild($gridItem);
	$observer.insertAdjacentElement('beforebegin', $gridItem);
	$gridItems.push($grid);
}

// https://developers.google.com/web/ilt/pwa/lab-offline-quickstart#52_activating_the_install_prompt
window.addEventListener('beforeinstallprompt', (event) => {

	// Prevent Chrome 67 and earlier from automatically showing the prompt
	event.preventDefault();

	// Stash the event so it can be triggered later.
	deferredPrompt = event;

	// Attach the install prompt to a user gesture
	document.getElementById('install').addEventListener('click', (event) => {

		// Show the prompt
		deferredPrompt.prompt();

		// Wait for the user to respond to the prompt
		deferredPrompt.userChoice.then((choiceResult) => {
			if (choiceResult.outcome === 'accepted') {
				console.log('User accepted the A2HS prompt');
			}
			else {
				console.log('User dismissed the A2HS prompt');
			}
			deferredPrompt = null;
		});
	});

	document.getElementById('install').setAttribute('aria-hidden', false);
});

// When the app is installed it should remove the install snackbar
window.addEventListener('appinstalled', (event) => {
	console.log('a2hs installed');
	document.getElementById('install').setAttribute('aria-hidden', true);
});