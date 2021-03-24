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



