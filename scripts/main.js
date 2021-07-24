const version = "1.49";
const cacheName = `jb-${ version }`;

const orientations = {
	PORTRAIT: 1,
	LANDSCAPE: 2,
	SQUARE: 3
};
Object.freeze(orientations);

const photos = [
	{
		'date': 'July 24, 2021',
		'description': 'Practising for Annabelle\'s driving test',
		'file': '2021/07/24/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 23, 2021',
		'description': 'Lovely lunch in Colchester',
		'file': '2021/07/23/500.gif',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'July 22, 2021',
		'description': 'Getting a well earned lunch',
		'file': '2021/07/22/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 19, 2021',
		'description': 'Playing in the digger',
		'file': '2021/07/19/4-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'July 19, 2021',
		'description': 'Interesting ironing technique!',
		'file': '2021/07/19/3-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'July 19, 2021',
		'description': 'Firefighter Annabelle',
		'file': '2021/07/19/2-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'July 19, 2021',
		'description': 'Lovely afternoon tea',
		'file': '2021/07/19/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 18, 2021',
		'description': 'Practising for Ninja Warrior',
		'file': '2021/07/18/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 17, 2021',
		'description': 'Running with a controller, why not!',
		'file': '2021/07/17/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 16, 2021',
		'description': 'Row row row your pirate ship...',
		'file': '2021/07/16/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 14, 2021',
		'description': 'A refreshing cuppa after a long day',
		'file': '2021/07/14/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 9, 2021',
		'description': 'Taking Philbert to A&E',
		'file': '2021/07/09/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 4, 2021',
		'description': 'A very cautious cook',
		'file': '2021/07/04/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'July 2, 2021',
		'description': 'Tired after a long day of travelling',
		'file': '2021/07/02/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'July 1, 2021',
		'description': 'Such a comfy seat',
		'file': '2021/07/01/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'June 30, 2021',
		'description': 'First time playing minigolf',
		'file': '2021/06/30/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'June 28, 2021',
		'description': 'Visiting the meerkats',
		'file': '2021/06/28/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 28, 2021',
		'description': 'Swimming in the pool',
		'file': '2021/06/28/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 26, 2021',
		'description': 'If Jesus can walk on water, can he swim on land? Annabelle can!',
		'file': '2021/06/26/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'June 25, 2021',
		'description': 'Enjoying the Isle of Wight ferry trip',
		'file': '2021/06/25/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 24, 2021',
		'description': 'Harry Potter cosplay',
		'file': '2021/06/24/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 22, 2021',
		'description': 'Playing in a suitcase, why not?',
		'file': '2021/06/22/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'June 21, 2021',
		'description': 'Excited by her pushchair',
		'file': '2021/06/21/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 20, 2021',
		'description': 'Annabelle at East Park visiting the wallabies',
		'file': '2021/06/20/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'June 16, 2021',
		'description': 'Fun in the sun',
		'file': '2021/06/16/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 14, 2021',
		'description': 'Wet hair selfie!',
		'file': '2021/06/14/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 10, 2021',
		'description': 'Annabelle and Daddy selfie',
		'file': '2021/06/10/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 9, 2021',
		'description': 'Enjoying a little bike ride',
		'file': '2021/06/09/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 8, 2021',
		'description': 'Sorry, tootz. We gotta go see a Tramp named Oline',
		'file': '2021/06/08/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 7, 2021',
		'description': 'The wheels on the bus go round and round...',
		'file': '2021/06/07/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 5, 2021',
		'description': 'Hornsea-lfie!',
		'file': '2021/06/05/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'June 3, 2021',
		'description': 'Overjoyed to see a Filbert truck',
		'file': '2021/06/03/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 3, 2021',
		'description': 'Yoghurt hair selfie',
		'file': '2021/06/03/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 31, 2021',
		'description': 'Annabelle phone home!',
		'file': '2021/05/31/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 31, 2021',
		'description': 'I came in like a wrecking ball!',
		'file': '2021/05/31/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 26, 2021',
		'description': 'Learning about yoga with Llamaste',
		'file': '2021/05/26/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 24, 2021',
		'description': 'This is flying, it\'s falling with style',
		'file': '2021/05/24/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 24, 2021',
		'description': 'Getting stuck under the cot',
		'file': '2021/05/24/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 22, 2021',
		'description': 'Visiting Pink Pig Farm 🐷',
		'file': '2021/05/22/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 21, 2021',
		'description': 'Cleaning up the house',
		'file': '2021/05/21/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 17, 2021',
		'description': 'Fun with Little Sebastian',
		'file': '2021/05/17/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 17, 2021',
		'description': 'Annabelle and Daddy selfie',
		'file': '2021/05/17/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 12, 2021',
		'description': 'Ready for some baking',
		'file': '2021/05/12/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 12, 2021',
		'description': 'Making some buzy bees',
		'file': '2021/05/12/2-500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'May 9, 2021',
		'description': 'Who me?',
		'file': '2021/05/09/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 9, 2021',
		'description': 'Drying as Princess Elsa',
		'file': '2021/05/09/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 8, 2021',
		'description': 'Colouring on our new desk',
		'file': '2021/05/08/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'April 23, 2021',
		'description': 'Fun at the park with Grandad',
		'file': '2021/04/23/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 22, 2021',
		'description': 'Going down the big slide',
		'file': '2021/04/22/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 21, 2021',
		'description': 'Colouring in our big girl pants',
		'file': '2021/04/21/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 20, 2021',
		'description': 'Laying down to draw, Michelangelo would be proud',
		'file': '2021/04/20/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 18, 2021',
		'description': 'Relaxing at the park',
		'file': '2021/04/18/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 17, 2021',
		'description': 'Seaside selfie',
		'file': '2021/04/17/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 16, 2021',
		'description': 'Looking regal after swimming',
		'file': '2021/04/16/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 15, 2021',
		'description': 'Trying on our swim jacket',
		'file': '2021/04/15/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 13, 2021',
		'description': 'Anything can be a swing if you are determined enough',
		'file': '2021/04/13/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'April 10, 2021',
		'description': 'Family nap',
		'file': '2021/04/10/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 8, 2021',
		'description': 'Playing with 2 Filberts',
		'file': '2021/04/08/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 7, 2021',
		'description': 'Preparing our rice for dinner',
		'file': '2021/04/07/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'April 3, 2021',
		'description': 'Reading and blanket time',
		'file': '2021/04/03/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 29, 2021',
		'description': '"Playing" in the garden',
		'file': '2021/03/29/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'March 24, 2021',
		'description': 'Fun at the park',
		'file': '2021/03/24/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 19, 2021',
		'description': 'Dressing up as Boo',
		'file': '2021/03/19/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 18, 2021',
		'description': 'Isn\t it bad luck to open an umbrella indoors?',
		'file': '2021/03/18/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 17, 2021',
		'description': 'Brushing up on Transport Phenomena',
		'file': '2021/03/17/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'March 16, 2021',
		'description': 'Interesting use of chopsticks',
		'file': '2021/03/16/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 12, 2021',
		'description': 'Laying down colouring',
		'file': '2021/03/12/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'March 11, 2021',
		'description': 'Enjoying our new reading chair',
		'file': '2021/03/11/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 10, 2021',
		'description': 'Annabelle with a big bump on her head',
		'file': '2021/03/10/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'March 10, 2021',
		'description': 'Annabelle playing perfectly well with a big bump on her head',
		'file': '2021/03/10/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'February 27, 2021',
		'description': 'Seaside expedition',
		'file': '2021/02/27/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'February 25, 2021',
		'description': 'Reading a wedding invitation by herself',
		'file': '2021/02/25/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'February 17, 2021',
		'description': 'Playing on Daddy\'s shoulders',
		'file': '2021/02/17/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'February 14, 2021',
		'description': 'Colouring on an envelope',
		'file': '2021/02/14/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'February 9, 2021',
		'description': 'Snow day selfie',
		'file': '2021/02/09/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'February 6, 2021',
		'description': 'Getting trollied',
		'file': '2021/02/06/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'February 2, 2021',
		'description': 'Hanging out with Bertie Bloomer in the kitchen',
		'file': '2021/02/02/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'January 28, 2021',
		'description': 'Excited to play with a passport',
		'file': '2021/01/28/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'January 24, 2021',
		'description': 'Fun in Daddy\s wardrobe',
		'file': '2021/01/24/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'January 16, 2021',
		'description': 'Playing in a puddle',
		'file': '2021/01/16/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'January 1, 2021',
		'description': 'Practising downward facing dog',
		'file': '2021/01/01/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'December 27, 2020',
		'description': 'Family walk selfie',
		'file': '2020/12/27/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'December 25, 2020',
		'description': 'Christmas morning',
		'file': '2020/12/25/1-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'December 25, 2020',
		'description': 'Meeting Philip the Fox',
		'file': '2020/12/25/2-250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'December 16, 2020',
		'description': 'Annabelle sleeping with Daddy',
		'file': '2020/12/16/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'December 14, 2020',
		'description': 'Annabelle and Mummy making dinner',
		'file': '2020/12/14/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'December 11, 2020',
		'description': 'Going for a walk down the road',
		'file': '2020/12/11/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'December 9, 2020',
		'description': 'Showing off our new shoes',
		'file': '2020/12/09/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'December 3, 2020',
		'description': 'Rock and roll glockenspiel',
		'file': '2020/12/03/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'December 1, 2020',
		'description': 'Clinically depressed at the supermarket',
		'file': '2020/12/01/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
];
photos.sort((a, b) => {
	return new Date(b.date) - new Date(a.date);
});

caches.open(cacheName).then(cache => {
	return cache.addAll(photos.map(photo => `images/photos/${ photo.file }`));
})

// Constant Elements
const $grid = document.querySelector('.grid');
const $observer = document.querySelector('#observer');
const $updateSnackbar = document.querySelector('#update-snackbar');
const $updateSnackbarAction = $updateSnackbar.querySelector('.snackbar__action');
const $updateSnackbarClose = $updateSnackbar.querySelector('.snackbar__close');
const $installSnackbar = document.querySelector('#install-snackbar');
const $installSnackbarAction = $installSnackbar.querySelector('.snackbar__action');
const $installSnackbarClose = $installSnackbar.querySelector('.snackbar__close');

// Variable Elements
let $gridItems = [];

// Constants
const msnry = new Masonry($grid, {
	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
	percentPosition: true
});
const photosPerPage = 6;

// Variables
let appInstalled = true
let appStandalone = false;
let currentPage = 1;
let deferredPrompt;
let firstLoad = true;
let userScrolled = false;

document.addEventListener('DOMContentLoaded', () => {

	loadPhotos();
	
	if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
		console.log('display-mode is standalone');
		appStandalone = true;
	}

	// Add events

	$updateSnackbarClose.addEventListener('click', (event) => {
		$updateSnackbar.ariaHidden = true;
	});

	$installSnackbarClose.addEventListener('click', (event) => {
		$installSnackbar.ariaHidden = true;
	});

	window.addEventListener('scroll', () => {
		// Open snackbar upon first scroll
		if (!appInstalled && !appStandalone && !userScrolled) {
			userScrolled = true;
			$installSnackbar.ariaHidden = false;
		}
	});
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

		if (firstLoad) {
			firstLoad = false;
			let observer = new IntersectionObserver(loadMorePhotos, {});
			observer.observe($observer);
		}
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
	const $gridItems = document.querySelectorAll('div.grid-item[aria-hidden="true"]');
	$gridItems.forEach($gridItem => {
		$gridItem.ariaHidden = false;
	});
}

function createPhotoElement(photo) {
	const $gridItem = document.createElement('div');
	$gridItem.ariaHidden = true;
	$gridItem.classList.add('grid-item');
	if (photo.orientation === orientations.LANDSCAPE || photo.orientation === orientations.SQUARE) {
		$gridItem.dataset.width = '2';
	}

	const $gridItemContent = document.createElement('div');
	$gridItemContent.classList.add('grid-item-content');
	$gridItem.appendChild($gridItemContent);

	const $gridItemPhoto = document.createElement('img');
	$gridItemPhoto.src = `images/photos/${ photo.file }`;
	$gridItemPhoto.alt = photo.description;
	$gridItemPhoto.classList.add('grid-item-photo');
	if (photo.orientation === orientations.PORTRAIT) {
		$gridItemPhoto.height = '333';
		$gridItemPhoto.width = '250';
	}
	else if (photo.orientation === orientations.LANDSCAPE) {
		$gridItemPhoto.height = '375';
		$gridItemPhoto.width = '500';
	}
	else if (photo.orientation === orientations.SQUARE) {
		$gridItemPhoto.height = '500';
		$gridItemPhoto.width = '500';
	}
	$gridItemContent.appendChild($gridItemPhoto);

	const $photoOverlay = document.createElement('div');
	$photoOverlay.classList.add('photo-overlay');
	$gridItemContent.appendChild($photoOverlay);

	const $photoOverlayText = document.createElement('div');
	$photoOverlayText.classList.add('photo-overlay-text');
	$photoOverlayText.innerHTML = new Date(photo.date).toDateString();
	$photoOverlay.appendChild($photoOverlayText);

	$observer.insertAdjacentElement('beforebegin', $gridItem);
	$gridItems.push($grid);
}

// https://developers.google.com/web/ilt/pwa/lab-offline-quickstart#52_activating_the_install_prompt
window.addEventListener('beforeinstallprompt', (event) => {

	// The application is not installed
	appInstalled = false;

	// Prevent Chrome 67 and earlier from automatically showing the prompt
	event.preventDefault();

	// Stash the event so it can be triggered later.
	deferredPrompt = event;

	// Attach the install prompt to a user gesture
	$installSnackbarAction.addEventListener('click', (event) => {

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
});

// When the app is installed it should remove the install snackbar
window.addEventListener('appinstalled', (event) => {
	console.log('a2hs installed');
	appInstalled = true;
	appStandalone = true;
	$installSnackbar.ariaHidden = true;
});