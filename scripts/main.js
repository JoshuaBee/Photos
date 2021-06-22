const orientations = {
	PORTRAIT: 1,
	LANDSCAPE: 2
};
Object.freeze(orientations);

const photos = [
	{
		'date': 'June 20, 2021',
		'description': 'Annabelle at East Park visiting the wallabies',
		'file': '2021/06/20/1000.jpg',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'June 10, 2021',
		'description': 'Annabelle and Daddy selfie',
		'file': '2021/06/10/1000.jpg',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 3, 2021',
		'description': 'Yoghurt hair selfie',
		'file': '2021/06/03/1000.jpg',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 31, 2021',
		'description': 'Annabelle phone home!',
		'file': '2021/05/31/1000.jpg',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 26, 2021',
		'description': 'Learning about yoga with Llamaste',
		'file': '2021/05/26/1000.jpg',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 24, 2021',
		'description': 'Getting stuck under the cot',
		'file': '2021/05/24/1000.jpg',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 17, 2021',
		'description': 'Annabelle and Daddy selfie',
		'file': '2021/05/17/1000.jpg',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 8, 2021',
		'description': 'Colouring on our new desk',
		'file': '2021/05/08/1000.jpg',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'April 18, 2021',
		'description': 'Relaxing at the park',
		'file': '2021/04/18/1000.jpg',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 17, 2021',
		'description': 'Seaside selfie',
		'file': '2021/04/17/1000.jpg',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 3, 2021',
		'description': 'Reading and blanket time',
		'file': '2021/04/03/1000.jpg',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 10, 2021',
		'description': 'Annabelle with a big bump on her head',
		'file': '2021/03/10/1-1000.jpg',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 10, 2021',
		'description': 'Annabelle playing perfectly well with a big bump on her head',
		'file': '2021/03/10/2-1000.jpg',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'February 27, 2021',
		'description': 'Seaside expedition',
		'file': '2021/02/27/1000.jpg',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'February 25, 2021',
		'description': 'Reading a wedding invitation by herself',
		'file': '2021/02/25/1000.jpg',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'February 17, 2021',
		'description': 'Playing on daddy\'s shoulders',
		'file': '2021/02/17/1000.jpg',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'February 14, 2021',
		'description': 'Colouring on an envelope',
		'file': '2021/02/14/1000.jpg',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'February 9, 2021',
		'description': 'Snow day selfie',
		'file': '2021/02/09/1000.jpg',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'February 6, 2021',
		'description': 'Getting trollied',
		'file': '2021/02/06/1000.jpg',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'February 2, 2021',
		'description': 'Hanging out with Bertie Bloomer in the kitchen',
		'file': '2021/02/02/1000.jpg',
		'orientation': orientations.PORTRAIT,
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
	if (photo.orientation === orientations.LANDSCAPE) {
		$gridItem.dataset.width = '2';
	}

	const $gridItemPhoto = document.createElement('img');
	$gridItemPhoto.src = `images/photos/${ photo.file }`;
	$gridItemPhoto.alt = photo.description;
	$gridItemPhoto.classList.add('grid-item-photo');
	$gridItem.appendChild($gridItemPhoto);

	const $photoOverlay = document.createElement('div');
	$photoOverlay.classList.add('photo-overlay');
	$gridItem.appendChild($photoOverlay);

	const $photoOverlayText = document.createElement('div');
	$photoOverlayText.classList.add('photo-overlay-text');
	$photoOverlayText.innerHTML = new Date(photo.date).toDateString();
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