
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('techelevate-cache').then(cache =>
      cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/techelevate_logo.png'
      ])
    )
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
