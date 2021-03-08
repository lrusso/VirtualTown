const filesToCache = [
	"VirtualTown.htm",
	"VirtualTown.js",
	"VirtualTown.json",
	"VirtualTown.png",
	"VirtualTownFavIcon_16x16.png",
	"VirtualTownFavIcon_192x192.png",
	"VirtualTownFavIcon_512x512.png",
	"VirtualTownShare.png"
];

const staticCacheName = "virtualtown-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});