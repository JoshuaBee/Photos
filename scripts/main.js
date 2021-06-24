const version = "1.20";
const cacheName = `jb-${ version }`;

const orientations = {
	PORTRAIT: 1,
	LANDSCAPE: 2,
	SQUARE: 3
};
Object.freeze(orientations);

const photos = [
	{
		'date': 'June 20, 2021',
		'description': 'Annabelle at East Park visiting the wallabies',
		'file': '2021/06/20/500.webp',
		'orientation': orientations.LANDSCAPE,
	},
	{
		'date': 'June 10, 2021',
		'description': 'Annabelle and Daddy selfie',
		'file': '2021/06/10/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'June 3, 2021',
		'description': 'Yoghurt hair selfie',
		'file': '2021/06/03/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 31, 2021',
		'description': 'Annabelle phone home!',
		'file': '2021/05/31/250.webp',
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
		'description': 'Getting stuck under the cot',
		'file': '2021/05/24/250.webp',
		'orientation': orientations.PORTRAIT,
	},
	{
		'date': 'May 17, 2021',
		'description': 'Annabelle and Daddy selfie',
		'file': '2021/05/17/250.webp',
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
const $snackbar = document.querySelector('#snackbar');
const $snackbarAction = $snackbar.querySelector('#snackbar-action');
const $snackbarClose = $snackbar.querySelector('#snackbar-close');

// Variable Elements
let $gridItems = [];

// Constants
const msnry = new Masonry($grid, {
	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
	percentPosition: true
});
const photosPerPage = 10;

// Variables
let appInstalled = true
let appStandalone = false;
let currentPage = 1;
let deferredPrompt;
let firstLoad = true;
let snackbarOpen = true;

document.addEventListener('DOMContentLoaded', () => {

	loadPhotos();

	$snackbarClose.addEventListener('click', (event) => {
		snackbarOpen = false;
		$snackbar.ariaHidden = true;
	});
	
	if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
		console.log('display-mode is standalone');
		appStandalone = true;
	}

	window.addEventListener('scroll', () => {
		// Open snackbar upon scroll
		if (!appInstalled && !appStandalone && snackbarOpen) {
			$snackbar.ariaHidden = false;
		}

		if ('Notification' in window && navigator.serviceWorker) {
			if (Notification.permission === "granted") {
				navigator.serviceWorker.getRegistration().then(function(registration) {
					var options = {
						body: 'Here is a notification body!',
						icon: 'images/example.png',
						vibrate: [100, 50, 100],
						data: {
							dateOfArrival: Date.now(),
							primaryKey: 1
						},
						actions: [
							{
								action: 'explore',
								title: 'Explore this new world',
								icon: 'images/checkmark.png'
							},
							{
								action: 'close',
								title: 'Close notification',
								icon: 'images/xmark.png'
							},
						]
					};
					registration.showNotification('Hello world!', options);
				});
			} else if (Notification.permission === "blocked") {
				/* the user has previously denied push. Can't reprompt. */
			} else {
				subscribeUser();
			}
		}
	})
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
	let $photos = $grid.querySelectorAll('.grid-item[aria-hidden="true"]');
	$photos.forEach($photo => {
		$photo.ariaHidden = false;
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

	//$grid.appendChild($gridItem);
	$observer.insertAdjacentElement('beforebegin', $gridItem);
	$gridItems.push($grid);
}

function subscribeUser() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.ready.then(function(registration) {

			registration.pushManager.subscribe({
				userVisibleOnly: true,
				applicationServerKey: urlBase64ToUint8Array('AAAAUh1Kzwg:APA91bGgOfyPajR2g47Ai96jxyiGU9YcILvWiUx7txKGQA1Hl-zc-kcQYPsthDtHL4KrkfA2LJIm4rEDptPyoqYhZOfho9rqha6VLBY6KaSAdvL8ymNOGQ7R_DtvwxNQw1iKwSoVmbLQ')
			}).then(function(subscription) {
				console.log('Endpoint URL: ', subscription.endpoint);
			}).catch(function(e) {
				if (Notification.permission === 'denied') {
					console.warn('Permission for notifications was denied');
				} else {
					console.error('Unable to subscribe to push', e);
				}
			});
		})
	}
}

// Web-Push
// Public base64 to Uint
// https://gist.github.com/Klerith/80abd742d726dd587f4bd5d6a0ab26b6
function urlBase64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
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
	$snackbarAction.addEventListener('click', (event) => {

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
	$snackbar.ariaHidden = true;
});