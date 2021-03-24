var cacheName = "after-school-v1";
var cacheFiles = [
    'lab-task.html',
    'lesson.webmanifest',
    'lab-task.css',
    'Images/lesson-icon.png',
    'Images/science.png'
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install' );
    e.waitUntil(
        caches.open(cacheName).then((cache) => { 
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        })
   );
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        //check if the cache has the file
        caches.match(e.request).then(function (r) {
            console.log('[Service Worker] Fetching resources:' + e.request.url );
            //'r' is the matching file if it exists in the cache
            return r
        })
    );
});



