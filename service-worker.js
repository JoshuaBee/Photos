const version = "1.69";
const cacheName = `jb-${ version }`;

self.addEventListener("install", e => {
	console.log('Service worker installing...');
	e.waitUntil(
		caches.open(cacheName).then(cache => {
			return cache.addAll([
				"/",
				"/index.html",
				"/manifest.webmanifest",
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
	let fnd = true;

	if (event.request.url.includes('/images/photos/')) {
		if (event.request.url.includes('/2022/07/')) {
			fnd = true;
		} else {
			fnd = false;
		}
	}

	if (fnd) {
		// console.log('Service worker fetching:', event.request.url);
		event.respondWith(
			caches.open(cacheName)
			.then(cache => cache.match(event.request, {ignoreSearch: true}))
			.then(response => {
				return response || fetch(event.request);
			})
		)
	}
});
