const CACHE_NAME = "starbucks-calculator-v1"
const urlsToCache = [
  "/",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/apple-touch-icon.png",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
]

// 安装事件
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)))
})

// 获取事件
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // 如果缓存中有响应，返回缓存的版本
      if (response) {
        return response
      }
      return fetch(event.request)
    }),
  )
})

// 激活事件 - 清理旧缓存
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})
