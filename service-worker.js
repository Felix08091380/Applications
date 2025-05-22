self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('notebook-cache').then(cache =>
      cache.addAll(['/', '/notebook.html', '/manifest.json', '/icon-192.png', '/icon-512.png'])
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
