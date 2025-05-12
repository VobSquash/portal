'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0dd56e2c341106d9a52da2b93d0c049a",
"version.json": "cc5a942613abf28c05a7a6a01becda03",
"index.html": "73447a469ae626c90f1c4d6ea3eee52a",
"/": "73447a469ae626c90f1c4d6ea3eee52a",
"main.dart.js": "7cc87d51687cd12b9c859031cdf8df5e",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b47365b7cb3145977f0e8557144928bd",
"assets/shorebird.yaml": "cba204128c4a037d3084df22bdd75328",
"assets/AssetManifest.json": "aad715c8b67dcbbf341d24e53f511ca1",
"assets/NOTICES": "308781bcdc808abd07137eaf7bb29346",
"assets/FontManifest.json": "53e60880d7fdd1080cd0ec0837ab6577",
"assets/AssetManifest.bin.json": "af604965ed5276ced54cf75420e26255",
"assets/packages/map_launcher/assets/icons/mappls.svg": "1a75722e15a1700115955325fe34502b",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/sygicTruck.svg": "242728853b652fa765de8fba7ecd250f",
"assets/packages/map_launcher/assets/icons/naver.svg": "ef3ef5881d4a2beb187dfc87e23b6133",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/copilot.svg": "b412a5f02e8cef01cdb684b03834cc03",
"assets/packages/map_launcher/assets/icons/truckmeister.svg": "416d2d7d2be53cd772bc59b910082a5b",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/tmap.svg": "50c98b143eb16f802a756294ed04b200",
"assets/packages/map_launcher/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/tomtomgofleet.svg": "5b12dcb09ec0a67934e6586da67a0149",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/mapyCz.svg": "f5a198b01f222b1201e826495661008c",
"assets/packages/map_launcher/assets/icons/kakao.svg": "1c7c75914d64033825ffc0ff2bdbbb58",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/tomtomgo.svg": "493b0844a3218a19b1c80c92c060bba7",
"assets/packages/map_launcher/assets/icons/flitsmeister.svg": "44ba265e6077dd5bf98668dc2b8baec1",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9f2f232d65cc5d32ea2ee712b0fc27ac",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b278e24507c5334029c8a7937a0ae5f5",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "86051593e09dad6e1fd55d277aa4276a",
"assets/fonts/MaterialIcons-Regular.otf": "c3380e6643b38ff4bef23106abcab62f",
"assets/assets/images/home_light_mode.png": "0b0ae3ed21acd4e7d7ba67b18025b030",
"assets/assets/images/image_placeholder.png": "2b185e44a2ebf95e039e88d5994327e1",
"assets/assets/images/splash_light_mode.png": "e8e2bc067fd39481780a63d18901c785",
"assets/assets/images/home_dark_mode.png": "00b7e74614ad0d917ae0f76387a5ce27",
"assets/assets/images/locations/eversdal.jpg": "6663f1b687b2a77b62c29d6cee1c0fe3",
"assets/assets/images/locations/univwestcape.jpg": "74736be803d45dc362edaa4e0c21b4d2",
"assets/assets/images/locations/fishhoek.jpg": "e30ffd02b1a52c1f723f2a22a3e37d70",
"assets/assets/images/locations/radloff.jpg": "673df4b5b3928bf78137aa7f0cacb404",
"assets/assets/images/locations/llandudno.jpg": "3d9bd211604a3d172ff9917b94534f3a",
"assets/assets/images/locations/kuilsriver.jpg": "accb3138ec47282b65eb702ef50c3007",
"assets/assets/images/locations/mixim.jpg": "363e031336a0e38b9a89b460bb5f98fb",
"assets/assets/images/locations/strand.jpg": "1bae79bc926e0cfd86eb1476c01e4209",
"assets/assets/images/locations/durbanville.jpg": "b3ab363d94354e511509d358db1d14d0",
"assets/assets/images/locations/wpcc.jpg": "5eaea2294b38faf9833c38de0969537b",
"assets/assets/images/locations/oldmutual.jpg": "2d676cd848c0811577cd9e766de99d94",
"assets/assets/images/locations/vanderstel.jpg": "1ac7e402944ddb5e9f66ec2c3979677e",
"assets/assets/images/locations/kelvingrove.jpg": "6b5395a4d0d7785d00d67cedb905d3b0",
"assets/assets/images/locations/welgemoed.jpg": "c38ad880acb82de9574454bee9844888",
"assets/assets/images/locations/wellington.jpg": "9789fd5d0f6d5867b67f1cf89c0946e1",
"assets/assets/images/locations/campsbay.jpg": "32cf3b23daaf13a311be892afe81fdbf",
"assets/assets/images/locations/avalon.jpg": "b52668f553b9332d408f5269185a0f5f",
"assets/assets/images/locations/evertsdal.jpg": "6663f1b687b2a77b62c29d6cee1c0fe3",
"assets/assets/images/locations/paarl.jpg": "7a937c2f7a3ed7c67a26a435e0f1ec20",
"assets/assets/images/locations/malmesbury.jpg": "5ab69cdb6d2f6b8a7dee29863ac5411c",
"assets/assets/images/locations/milnerton.jpg": "44f03445b403a0a86b28f5fdfa73313f",
"assets/assets/images/locations/wynbergob.jpg": "ef7a9a42dfad3ce232364b6122d9af63",
"assets/assets/images/locations/univstell.jpg": "b4712e4b874c8da752c36e9aab8b668e",
"assets/assets/images/locations/bergvliet.jpg": "859f83ecb77b669ea83acae6985ff692",
"assets/assets/images/locations/uct.jpg": "c0fc03e8a4847f31560278c2b919cfb4",
"assets/assets/images/locations/villager.jpg": "7861f9c4c5dd912fb4de19e3772abf40",
"assets/assets/images/home_fixture.png": "0244ac32941c5537363f41bea5ccf898",
"assets/assets/images/splash_dark_mode.png": "3913ec09b4018c184ca32bc40801adf8",
"assets/assets/images/vob_header.jpg": "e0815d397e4d94be82e39f491e1e06fb",
"assets/assets/images/login_blank.png": "95f870b936f46652212b080c43e42780",
"assets/assets/images/away_fixture.png": "1f415ab4d93b037851fcfaef2fe3d23a",
"assets/assets/html/password_mail.html": "6aa985eb577b83dba4d2f4f81888c55d",
"assets/assets/html/membership_invoice_attachment.html": "ac2c38498314dbff434f3b2efe61b2cd",
"assets/assets/html/membership_enquiry_attachment.html": "a5e5d1b8c27b4537fc3bc54831f541f2",
"assets/assets/html/membership_fees.html": "7b969e02b438701df9a6bb13f32762b4",
"assets/assets/html/general_mail.html": "89174cab692490c0c5900fef61d7201c",
"assets/assets/html/booking_mail.html": "7c24c2fea5a94382a2e2a4f244690841",
"assets/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/assets/icons/tomtomgo.svg": "493b0844a3218a19b1c80c92c060bba7",
"assets/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
