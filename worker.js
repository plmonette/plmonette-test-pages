var event = {};

Object.defineProperty(event, "handleEvent", {
    get: () => {},
    configurable: true,
    enumerable: true,
});

self.addEventListener('install', event => {
    console.log('Install event received');
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
    console.log('Activate event received');
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    console.log('Fetch event received for URL: ', event.request.url);
    event.respondWith(fetch(event.request));
});
