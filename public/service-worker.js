if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const r=e=>i(e,n),d={module:{uri:n},exports:o,require:r};s[n]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(c(...e),o)))}}define(["./workbox-22294e6b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/PlOxwWB_Mw0d1ZU4396IY/_buildManifest.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/PlOxwWB_Mw0d1ZU4396IY/_ssgManifest.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/1247.24a3e0a72bb2cf8aafc8.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/1439.2f1e0906e9fab5ba094d.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/2526.0fd89a513c6c763d30dc.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/2543.80b70500f3a31012b611.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/2635.af36483cb146858b1f85.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/2646.be4ebc65e6ef090a45c1.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/29107295-8859b764797d131a0f8a.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/3077.5611e0736d614dbd1587.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/3124.8922a65129d52f04b65a.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/3263.ce1f1ff1dca70c7a67cb.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/3466.59be5330d655f9c17a40.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/3556.db93c7565daf4e423b7f.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/3799.1df3201e1f1b7bbc5d70.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/4103.c57fa79307fc8846da8b.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/4145.f6cdc0a4c1d1ba9e73ee.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/4147.d14eac367c9883847af9.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/4193.3c1a4310ee9f31d7adee.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/4322.850aad5a7e91c2f08e16.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/4345-ad4c2fc945e6ced2fbf2.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/4546.c5fdfc7893c84b86e6aa.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/4638.79a744fe87e63643e707.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/4815.17991eb7fef98a75f5c1.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/4836-9c56ec4ba05231badf0d.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/5040.26b9c0829cb3e8815062.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/5675-0994c4e6cfd9f0a66aac.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/6027.db9070e7bfdc58c74c67.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/6310.c22b8b2a01a0798cf961.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/6326.1717b727dc79715a1cc7.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/6632-53662be92d86a63a7c1e.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/6674.b1c6bda33bfae8d1e629.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/682.de90d418b9ca859e406d.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/7072.032edd44a6e7a2ed4c0b.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/7082.aede8e0709bdb57db16e.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/738.200722eb61974cbfe32f.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/7438.3615f1f3230380604055.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/7750.0fdd077700e949fc0593.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/7771.2c37789444f1808899f3.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/784.26c2755fff647b5d7b4f.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/7862.ae3cb727575a6eb2d3d2.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/8289.9e9b0c407694a03322e2.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/8413.2dd9e5a2f8584c98071d.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/8718.4f89b12663619163d1b2.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/framework-bdc1b4e5e48979e16d36.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/main-ebf0dad737c5714e54e8.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/pages/%5Bslug%5D-35a11b806724604bf0df.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/pages/_app-b8f46981e141a5d1d141.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/pages/_error-03b271b409748e0f7dc7.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/pages/about-db7501fa9b3386926f42.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/pages/antilibrary-9fdb650484aaa02bd565.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/pages/changelog-2c89387cf80e7765decf.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/pages/colophon-f2be3e9a5735add4c5ff.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/pages/essays-6c9f9e745169b1a4027e.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/pages/garden-43dd36f4b3e2be9eea7e.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/pages/illustration-f52a5a3131ceafb5b194.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/pages/index-598b4eca4117befd2db9.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/pages/library-bd3bf1d9f71d3aee18b6.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/pages/notes-fd1f925119ed2b66e1dd.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/pages/now-619768eae8c595613ad8.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/pages/patterns-ad76f7003e7e48604ac7.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/pages/projects-8b981bf721e3e5dea14b.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/pages/resources-2403dd7b0be6dc4a548a.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/pages/start-b302619af733cef69fb9.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/pages/topics-378923bea73025a6ba75.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/pages/topics/%5Btopic%5D-090bf7f425b59da48b28.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/pages/uses-b5b609576ae08fa7ce72.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/chunks/webpack-e9f04e7badeaf7a94cfc.js",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/css/9387d2cd4870606a7406.css",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/_next/static/css/d85556e114378ecdc717.css",revision:"PlOxwWB_Mw0d1ZU4396IY"},{url:"/fonts/CanelaDeck-Bold.woff",revision:"839a362004865698a1c1ff1b19647fca"},{url:"/fonts/CanelaDeck-Bold.woff2",revision:"2833378f529d1e4793c1c196afa93927"},{url:"/fonts/CanelaDeck-Light.woff",revision:"d79b2c66fd4035ee33496b580997d4b9"},{url:"/fonts/CanelaDeck-Light.woff2",revision:"f46f7b3fc55b4b7e75ee32fb115ee290"},{url:"/fonts/CanelaDeck-Regular.woff",revision:"e37e25cf7d576ca4a90755a82e3f1ece"},{url:"/fonts/CanelaDeck-Regular.woff2",revision:"6de029c48b46c91b3df05db3f84b245e"},{url:"/fonts/CanelaText-Light.woff",revision:"9e30bb2fbae86e3c897f71a9b37b8c6b"},{url:"/fonts/CanelaText-Light.woff2",revision:"c1ad594f8433d3b1f7bf90c24e41e4c4"},{url:"/fonts/CanelaText-LightItalic.woff",revision:"e470557cc765ab66057241e7621c91b2"},{url:"/fonts/CanelaText-LightItalic.woff2",revision:"e72e911c243c4e7435e82a73aa4e5b70"},{url:"/fonts/CanelaText-Medium.woff",revision:"b67cf38bad3e1046562b2f623a02cc16"},{url:"/fonts/CanelaText-Medium.woff2",revision:"9bdfb33c751f23eae7f9d3d54e434ac2"},{url:"/images/books/addiction.jpg",revision:"dde22beb930a872d95205a4bacfd7c67"},{url:"/images/books/amusing.jpg",revision:"4d73fca4ba2986ec69f5ce419e2a4948"},{url:"/images/books/animator.jpeg",revision:"e8a2064d64868c284c0d83a1a5ac8f70"},{url:"/images/books/anthro.jpg",revision:"4ebf3cee08737c78a910ccccc0ab7310"},{url:"/images/books/bach.jpeg",revision:"aacdaf0d974e1dc2bd2f68a2b3b9ce05"},{url:"/images/books/bazaar.jpeg",revision:"f8cd8547199c748462f7ecf2da107066"},{url:"/images/books/codingfreedom.jpg",revision:"eea0158f4d031ca2c86d58167a157370"},{url:"/images/books/comics.jpeg",revision:"a439c92af7709dc90ace2f7612a4b71f"},{url:"/images/books/comingofage.jpg",revision:"9a3d987989750947deb3323ce2341b53"},{url:"/images/books/creativeillo.jpeg",revision:"84badb31863889b6e044000e752b8e52"},{url:"/images/books/cyborg.jpg",revision:"0224fbc10420f499dbef26c80c02c2ae"},{url:"/images/books/dawn.jpeg",revision:"bc06583348d949e2e3f2bafe29b6645e"},{url:"/images/books/dealers.jpeg",revision:"3452297868b3316197fa4bb4e1b0922b"},{url:"/images/books/debt.jpg",revision:"992b18912c971ad9f9c1caeace116cfb"},{url:"/images/books/descarteserror.jpg",revision:"4789130e29ec22554a3601a64894be28"},{url:"/images/books/diviningdigital.jpg",revision:"5dcf4df70a39a32551cfe517945883e4"},{url:"/images/books/drawnlife.jpeg",revision:"cfd0bc99db42804827edbbb43bcdcc9c"},{url:"/images/books/dynamic.jpeg",revision:"1edff87b5686729c4d016ed35b12ae95"},{url:"/images/books/economiescultures.jpg",revision:"59abf5b21c4d76d313246b8b2acd3f02"},{url:"/images/books/encoding.jpg",revision:"3b114e6d8f133db03ab62612426d286d"},{url:"/images/books/finitegames.jpg",revision:"acc763102eeefbbe3550c7f08e8fe24b"},{url:"/images/books/flesh.jpeg",revision:"4a750d2381c2037a57f096a0ccf8271c"},{url:"/images/books/force.jpeg",revision:"979cc0732b85c8dede8498aea6f84662"},{url:"/images/books/framedink.jpeg",revision:"8c93209aab605e2e290fbabdaecf2620"},{url:"/images/books/funpencil.jpeg",revision:"39b3d57cf76913f6430393cf5f0f4353"},{url:"/images/books/gift.jpg",revision:"ba42c510a14f43c7d828946465820c23"},{url:"/images/books/godsupperair.jpg",revision:"60f80d1a3c1a63b47ccc1ce10b4d407b"},{url:"/images/books/governing.png",revision:"7618883e1b7bf6d49a3ac645dd56014d"},{url:"/images/books/graphicstory.jpeg",revision:"d7eda5077f6f81a08249d0e1003a8735"},{url:"/images/books/historywork.jpg",revision:"11f60862e73ddb958fc6173b587d4aa9"},{url:"/images/books/howtodraw.jpeg",revision:"765b85332a849073d7001feeff80fe72"},{url:"/images/books/hyperobjects.jpeg",revision:"2696a47d86529017a0caeba75013693d"},{url:"/images/books/ifthen.jpg",revision:"5342f6170a17ce1ba41142c5932d8d35"},{url:"/images/books/imagined.jpg",revision:"5e51aedf61b15645c9ef9752dfd7e8c3"},{url:"/images/books/innovators.jpg",revision:"f6fc93592462c663a0eaa203c08607ed"},{url:"/images/books/interpretcultures.jpg",revision:"81d61c756d75de9195af6a0821a13535"},{url:"/images/books/iother.jpeg",revision:"e48cbf831b1c455b853ceb4b05b143e9"},{url:"/images/books/latthinking.jpeg",revision:"e86747cae5aa2d368145ea3aae52c4ff"},{url:"/images/books/making.jpg",revision:"9cfb6799ad9fdd189a6752a4063d142d"},{url:"/images/books/meat.jpg",revision:"487a7b271485d41e16aeeef9a3d703ed"},{url:"/images/books/metahistory.jpeg",revision:"0c587b87452f03dcede0cc7d1c2df939"},{url:"/images/books/metaphorpractical.jpg",revision:"ab37535b19bc37f60b4cf9c57197ddc4"},{url:"/images/books/mindmotion.jpg",revision:"a553dad2ed76b2848622dda5883f0768"},{url:"/images/books/modern.jpg",revision:"fe58a324b8a1068d3b53e0d137597bea"},{url:"/images/books/mushroom.jpg",revision:"92198bf271ecba8b364ec699104753de"},{url:"/images/books/mwlb.jpg",revision:"e3294c2b97977655b8381643e2330cc5"},{url:"/images/books/naturalcyborgs.jpg",revision:"895b6a2634a4ab74f2d863995c4613c7"},{url:"/images/books/newdarkage.jpeg",revision:"1cef254b5162de85b081fa4d39e29ef6"},{url:"/images/books/onkings.jpeg",revision:"a308e6fc5104790810e731a05dd3648a"},{url:"/images/books/participantobs.jpg",revision:"8f1c9a2fb6488ab86f363825bfa35744"},{url:"/images/books/patterns.jpeg",revision:"5f5796188c7644a830ffd1aa9ad379d3"},{url:"/images/books/peoplehistory.jpeg",revision:"9d2aca1de409b3f7716b9cbccc6fbe8d"},{url:"/images/books/progbrain.png",revision:"13b9f5768a5bd7dc028f02b0faa8ed55"},{url:"/images/books/pumps.jpg",revision:"6a6b8fd8cece0d94fa906b4f5d4108d4"},{url:"/images/books/purity.jpg",revision:"4c63216ccfecba4770293ec1198fcade"},{url:"/images/books/radicalmarkets.jpg",revision:"6aaffffb931b886e695e4b875e847ef6"},{url:"/images/books/rapidviz.jpeg",revision:"8739b007b7d91d8e93527c9c495538d9"},{url:"/images/books/ritualprocess.jpg",revision:"7f6f9d08e792c01d88d680432114fb62"},{url:"/images/books/robertson.jpeg",revision:"a82f4ceed35422fb48f32883a27a5368"},{url:"/images/books/sandtalk.jpg",revision:"c1f6451a3ab5ce21df1d78bd4a4728f8"},{url:"/images/books/seeingstate.jpeg",revision:"934e2c9062fd94c7b5b6adb3710bf9d9"},{url:"/images/books/sketching.jpeg",revision:"99443a1306c714188b5c02bf44d817c8"},{url:"/images/books/smallprog.jpeg",revision:"4ac451cb44968bee85e6a31059f36849"},{url:"/images/books/speculative.png",revision:"35f1db4c98940591ac78fa42d3fc5f87"},{url:"/images/books/staying.jpeg",revision:"715d4cbe52ef701e1c4133de25b8501d"},{url:"/images/books/stoneage.jpeg",revision:"dd57ae0492970ff136b70c98e6b64d34"},{url:"/images/books/supersize.jpg",revision:"eaa639df4c0a1d7bcce5de9a2e859a0f"},{url:"/images/books/surfaces.jpeg",revision:"d530e92a2b017d130f058c620755f9eb"},{url:"/images/books/sweetnesspower.jpg",revision:"f12c111bbf9f301e8dede7f46643b928"},{url:"/images/books/theoryvalue.jpg",revision:"ec55d7def1cb8d8d7b773387b170d587"},{url:"/images/books/thinkertoy.jpeg",revision:"6f238fe49a4bbd3e6ed9f19bf531be91"},{url:"/images/books/timeless.jpg",revision:"777eba8b3cdae5d2c48004a8c3de76be"},{url:"/images/books/toolsthought.jpg",revision:"b61909a9ea2250ebd5b89aad8f879b8e"},{url:"/images/books/turing.jpeg",revision:"90853c267e0e293a6e9319c5fe9539bd"},{url:"/images/books/twobits.jpg",revision:"bc0d1f9d59e555cbbeb9a57ded33a698"},{url:"/images/books/visualexp.jpg",revision:"d5aa30156fdca10c1161ac5eeab8fd29"},{url:"/images/books/waywethink.jpeg",revision:"6322d59e3c25e2bf551f67f68e655d7d"},{url:"/images/books/whattechwants.jpg",revision:"f017f94fefef8332ecd48bd6c59e43d9"},{url:"/images/books/wheretheactionis.jpg",revision:"c8337689e50cf1f98eea44fb79ee2ae2"},{url:"/images/books/womenfire.jpeg",revision:"ce5079d84329500b1420658943ff7249"},{url:"/images/books/workinginpublic.jpg",revision:"749ce38f866417b2789978c1681fa418"},{url:"/images/covers/NH_ProjectThumb.png",revision:"cae73d9915f8479c3acb5ac254927e7e"},{url:"/images/covers/UXL2019_Titles-1.png",revision:"5882ebd3d177a9d78a5363627484b9bc"},{url:"/images/covers/api-cover@2x.png",revision:"c61e7d5ec72afd03fee7d9c74ef0bcdb"},{url:"/images/covers/artisan-cover@2x.png",revision:"3cb30179053fb49f90b1d71424349fb8"},{url:"/images/covers/basb-cover@2x.png",revision:"5d50974e6d58f7e46efc71361ec94dfb"},{url:"/images/covers/bidilinks-cover@2x.png",revision:"a8edebe9dc0972e59fa5b0a399c1eaeb"},{url:"/images/covers/databases-cover@2x.png",revision:"93b3c029cb59ce3a46019ffaf1c706b5"},{url:"/images/covers/di-cover@2x.png",revision:"bb2a2aebe6b6bc976fab0051f266474a"},{url:"/images/covers/digianthro@2x.png",revision:"80cd3985795dcbb81c2835deb408add0"},{url:"/images/covers/dirt-cover@2x.png",revision:"76f9124e47993c698600766c8a1faa5a"},{url:"/images/covers/egh-thumb.png",revision:"eb859a3687b2adf01d6916141c4ac8e0"},{url:"/images/covers/fbshirt-thumb.png",revision:"9a8707b2c92e040c954ff398d132bfff"},{url:"/images/covers/garden-cover@2x.png",revision:"f9e917d6e0270f7ad485904c22a17b63"},{url:"/images/covers/gatsbythemethumb.png",revision:"547c8707ad2c71f854482fc2b6e8efb2"},{url:"/images/covers/googlethumb.png",revision:"e28451c2fa011536c93705562f239938"},{url:"/images/covers/ipad_cover@2x.png",revision:"962b0a714b8d7bdb7b2c33d3cd1cc7bd"},{url:"/images/covers/jjs-cover@2x.png",revision:"59504ff0ee3c4bb0d9d78ced12833c7a"},{url:"/images/covers/keyboard@2x.png",revision:"843ef30223761f210e736a85e9a36f30"},{url:"/images/covers/meatplanet-cover@2x.png",revision:"9b5655592c2e3268090a3b8adb070f36"},{url:"/images/covers/nontech-garden@2x.png",revision:"2e040ace3dd90a2f0174cf4e7a8408a1"},{url:"/images/covers/paleo@2x.png",revision:"84804db956417f736015a6681194ed63"},{url:"/images/covers/problemproteins-cover@2x.png",revision:"5c74ab7d789f538744060dccee979775"},{url:"/images/covers/purereactthumb.png",revision:"309ef3846a02ed529435a73bc0655849"},{url:"/images/covers/puyl-cover@2x.png",revision:"9890e7e2bd2f338e9be69b6eac4b7418"},{url:"/images/covers/testjsthumb.png",revision:"fe04e9caeb93ced5f897993b08d55393"},{url:"/images/covers/transclusion-cover@2x.png",revision:"4aabe0a58fc4884bc1d0a70bf949b584"},{url:"/images/covers/xanadu@2x.png",revision:"2b04b25a089785b0fed66131c119ebdb"},{url:"/images/favicon/android-chrome-192x192.png",revision:"550b4fa9355444b4939b20d925ba9726"},{url:"/images/favicon/android-chrome-512x512.png",revision:"8f35bb4bbbb0454f0a8bf674fac66835"},{url:"/images/favicon/apple-touch-icon.png",revision:"3ca66caf47214dc87856adaa57e1eae1"},{url:"/images/favicon/favicon-16x16.png",revision:"b6d0b2a915f45ed1927346399c57faa0"},{url:"/images/favicon/favicon-32x32.png",revision:"c527b8ce4cfebffca418b7c59d5226f3"},{url:"/images/favicon/favicon.ico",revision:"d8012087ee37dbae38045f6416736906"},{url:"/images/leaf-icon.svg",revision:"c57b975b87ead7fff3aaf580d784c0b5"},{url:"/images/m-logo.svg",revision:"5c881ffc61a385fb25cdefff05f39fa4"},{url:"/images/profile_bw_800.png",revision:"7efe89eec8f47ecad11961258006d3b3"},{url:"/images/talks_1.jpg",revision:"6b217c46f7db546ed2ad5c3c3124217e"},{url:"/images/talks_2.jpg",revision:"bc21c711ae4458ca59197427f395ea50"},{url:"/manifest.json",revision:"e7800fec6d7dbe40d16035278eb2dd85"},{url:"/rss.xml",revision:"f907ddf6b60efbb7607ad066cc21d156"},{url:"/sw.js",revision:"6a3676e6c4f665412936064c2d33fdbe"},{url:"/sw.js.map",revision:"3a5a5bf6ce8db98a53cbf944580442ab"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
