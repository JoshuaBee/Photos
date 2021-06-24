const version = "1.21";
const cacheName = `jb-${ version }`;

self.addEventListener("install", e => {
	console.log('Service worker installing...');
	e.waitUntil(
		caches.open(cacheName).then(cache => {
			return cache.addAll([
				"/",
				"/index.html",
				"/manifest.json",
				"/sitemap.xml",
				"/images/logos/company-logo-192.png",
				"/images/logos/company-logo-192.svg",
				"/images/logos/company-logo-512.png",
				"/images/logos/company-logo-512.svg",
				"/images/logos/logo-192.png",
				"/images/logos/logo-192.svg",
				"/images/logos/logo-512.png",
				"/images/logos/logo-512.svg",
				"/scripts/main.js",
				"/styles/1-settings/color.css",
				"/styles/2-tools/font.css",
				"/styles/3-generic/reset.css",
				"/styles/4-elements/body.css",
				"/styles/4-elements/main.css",
				"/styles/6-components/button.css",
				"/styles/6-components/footer.css",
				"/styles/6-components/grid.css",
				"/styles/6-components/observer.css",
				"/styles/6-components/snackbar.css",
				"/styles/7-utilities/visually-hide.css"
			])
			.then(() => self.skipWaiting());
		})
	);
});

self.addEventListener("activate", event => {
	console.log('Service worker activating...');
	event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
	console.log('Service worker fetching:', event.request.url);
	event.respondWith(
		caches.open(cacheName)
		.then(cache => cache.match(event.request, {ignoreSearch: true}))
		.then(response => {
			return response || fetch(event.request);
		})
	);
});

self.addEventListener('push', function(e) {
	var body;
  
	if (e.data) {
		body = e.data.text();
	} else {
		body = 'Push message no payload';
	}
  
	var options = {
		body: body,
		icon: 'images/logos/logo-192.png',
		vibrate: [100, 50, 100],
		data: {
			dateOfArrival: Date.now(),
			primaryKey: 1
		},
		actions: [
			{
				action: 'view',
				title: 'View new photos',
				icon: 'images/icons/check_black_24dp.png'
			},
			{
				action: 'close',
				title: 'Don\'t view new photos',
				icon: 'images/icons/close_black_24dp.png'
			},
		]
	};
	e.waitUntil(
		self.registration.showNotification('Push Notification', options)
	);
});
