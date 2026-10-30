const CACHE_NAME = 'vaishnava-panjika-cache-v1';
const assetsToCache = [
    './',
    './panjika.html',
    './panjika-data.json'
];

// ইনস্টল করার সময় ফাইলগুলো ক্যাশ করে নেওয়া
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(assetsToCache);
        })
    );
});

// অফলাইনে থাকার সময় ক্যাশ থেকে ডেটা পরিবেশন করা
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
