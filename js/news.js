var News = {};

const API_KEY = "64ddb2a50e4a4a8f993bb110839bed71";

var MockNews = [
  {
    "source": { "id": null, "name": "Kpbs.org" },
    "author": "City News Service",
    "title": "California Leaders Opposed To Sanctuary Law Meet With Trump",
    "description":
      "City and county officials from across the state who oppose California's sanctuary-state law sat down with President Donald Trump Wednesday to voice their objections to the law, and they got a pep talk from the president who slammed the state for failing to cr…",
    "url":
      "http://www.kpbs.org/news/2018/may/16/california-leaders-opposed-to-sanctuary-law-will/",
    "urlToImage":
      "https://kpbs.media.clients.ellingtoncms.com/img/photos/2018/05/16/AP_18136749403111.jpg",
    "publishedAt": "2018-05-17T01:41:15Z",
    "category": "sports",
    "tone": "Confident"
  },
  {
    "source": { "id": null, "name": "Nydailynews.com" },
    "author": "Jessica Schladebeck",
    "title":
      "Illinois police officer shoots former student who opened fire in Dixon High School",
    "description":
      "A suspect was injured during a gunfire exchange with a police officer after he opened fire at an Illinois school Wednesday morning.",
    "url":
      "http://www.nydailynews.com/news/national/illinois-police-officer-shoots-suspect-opened-fire-school-article-1.3992930",
    "urlToImage":
      "http://www.nydailynews.com/resizer/8SBKOIWUmMMOBtQkzlnNOAUQK9c=/1200x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/K7QOB6YUFHHTDM6V7BZHVM2NBE.jpg",
    "publishedAt": "2018-05-16T21:40:18Z",
    "category": "sports",
    "tone": "Tentative"
  },
  {
    "source": { "id": "the-washington-post", "name": "The Washington Post" },
    "author": null,
    "title": "Exploding vape pen caused Florida man's death, autopsy says",
    "description":
      "A Florida man was killed when his vape pen sent projectiles into his head.",
    "url":
      "https://www.washingtonpost.com/news/to-your-health/wp/2018/05/16/man-died-after-a-vape-pen-exploded-and-embedded-pieces-into-this-head-autopsy-says/",
    "urlToImage":
      "https://www.washingtonpost.com/resizer/akfW7R_BZj7H2xPeyR1s-nofI1Y=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/JR7D2WJNEY4GZPT5YMCR3JJP2M.jpg",
    "publishedAt": "2018-05-16T19:57:03Z",
    "category": "sports",
    "tone": "Anger"
  },
  {
    "source": { "id": null, "name": "Chron.com" },
    "author": "Keri Blakinger",
    "title":
      "'See y'all on the other side': San Antonio lovers' lane killer executed amid claims of innocence",
    "description":
      "After three canceled death dates in one year, lovers' lane killer Juan Castillo was executed Wednesday night after years of protesting his innocence. He was the sixth man this year to meet his end in the Huntsville death chamber.",
    "url":
      "https://www.chron.com/news/houston-texas/article/San-Antonio-lovers-lane-killer-scheduled-for-12918627.php",
    "urlToImage": "https://s.hdnux.com/photos/73/27/33/15562441/3/rawImage.jpg",
    "publishedAt": "2018-05-16T19:45:00Z",
    "category": "sports",
    "tone": "Sadness"
  },
  {
    "source": { "id": null, "name": "Latimes.com" },
    "author": "Richard Winton, Anh Do, Javier Panzar, Joseph Serna",
    "title":
      "'We do not believe this was an accident': Deadly explosion in Aliso Viejo linked to suspicious device",
    "description":
      "An explosion that killed a woman and injured several others at an Aliso Viejo day spa Tuesday afternoon likely came from a package and appears suspicious, law enforcement sources told The Times.",
    "url":
      "http://www.latimes.com/local/lanow/la-me-aliso-viejo-blast-20180516-story.html",
    "urlToImage":
      "http://www.latimes.com/resizer/5hXm7sYSUF89FVKSuOsMj45WDx4=/1200x0/www.trbimg.com/img-5afcb5e8/turbine/la-me-aliso-viejo-blast-20180516",
    "publishedAt": "2018-05-16T19:29:34Z",
    "category": "sports",
    "tone": "Tentative"
  },
  {
    "source": { "id": null, "name": "Mcall.com" },
    "author": "Laurie Mason Schroeder",
    "title":
      "Prosecutor says Cosmo DiNardo killed and liked it, became 'man-eater'",
    "description":
      "Cosmo DiNardo and his cousin Sean Kratz to face a judge in Bucks County homicide case. They are accused in the slayings of four men who were found buried on the DiNardo family's farm in Solebury last summer.",
    "url":
      "http://www.mcall.com/news/breaking/mc-nws-cosmo-dinardo-missing-bucks-county-men-hearing-20180510-story.html",
    "urlToImage":
      "http://www.trbimg.com/img-5afccdb3/turbine/mc-nws-cosmo-dinardo-missing-bucks-county-men-hearing-20180510",
    "publishedAt": "2018-05-16T19:23:49Z",
    "category": "sports",
    "tone": "Joy"
  },
  {
    "source": { "id": null, "name": "Endpts.com" },
    "author": null,
    "title":
      "Novartis sacrifices its top attorney in an attempt to quell clamor over $1.2M in Cohen payments — while ex-CEO ...",
    "description":
      "BioRegnum — The view from John Carroll Faced with a growing crisis over its $1.2 million in payments to President Donald Trump's personal attorney Michael Cohen, Novartis announced early Wednesday that the company's top lawyer has abruptly resigned in hopes o…",
    "url":
      "https://endpts.com/novartis-ceo-vas-narasimhan-faces-a-heap-of-burning-questions-but-so-far-offers-no-public-answers/",
    "urlToImage":
      "https://endpts.com/wp-content/uploads/2017/06/GettyImages-632647636.jpg",
    "publishedAt": "2018-05-16T16:06:23Z",
    "category": "sports",
    "tone": "Joy"
  },
  {
    "source": { "id": "cbs-news", "name": "CBS News" },
    "author": "Caitlin O'Kane",
    "title":
      "College grad wears gun holster with AR-10 in her graduation photos",
    "description":
      "A Kent State graduate wore a gun holster around her body and a picture of a gun on her graduation cap in viral photos",
    "url":
      "https://www.cbsnews.com/news/college-graduate-wears-gun-holster-with-ar-10-in-her-graduation-photos/",
    "urlToImage":
      "https://cbsnews1.cbsistatic.com/hub/i/r/2018/05/16/51c555cf-9303-4dcf-9ab6-153dfe87f72b/thumbnail/1200x630/1999491f6adef9720c1bf9f22edca7e7/screen-shot-2018-05-16-at-11-00-57-am.png",
    "publishedAt": "2018-05-16T15:42:00Z",
    "category": "sports",
    "tone": "Fear"
  },
  {
    "source": { "id": "cnn", "name": "CNN" },
    "author": "Eliott C. McLaughlin and Tina Burnside, CNN",
    "title":
      "Parkland school resource officer decried as coward gets princely pension of $8702 a month",
    "description":
      "The former school resource officer criticized for his response to the Parkland school massacre is receiving more than $8,700 a month in state pension, Florida Department of Management Services spokeswoman Nina Ashley said Wednesday.",
    "url":
      "https://www.cnn.com/2018/05/16/us/parkland-resource-officer-parkland-shooting-pension-scot-peterson/index.html",
    "urlToImage":
      "https://cdn.cnn.com/cnnnext/dam/assets/180315200613-florida-school-shooting-correct-surveillance-vid-super-tease.jpg",
    "publishedAt": "2018-05-16T15:10:13Z",
    "category": "sports",
    "tone": "Analytical"
  },
  {
    "source": {
      "id": null,
      "name": "Venturebeat.com"
    },
    "author": "Dean Takahashi",
    "title": "Why Microsoft wants to make games more accessible for all of us",
    "description":
      "Inside Microsoft’s Inclusive Technologies Lab in Redmond, Washington, a sign says, “When you do not intentionally, deliberately include … you will unintentionally exclude.” This r…",
    "url":
      "https://venturebeat.com/2018/05/17/why-microsoft-wants-to-make-games-more-accessible-for-each-of-us/",
    "urlToImage":
      "https://venturebeat.com/wp-content/uploads/2018/05/bryce.jpg?fit=1200%2C884&strip=all",
    "publishedAt": "2018-05-17T12:35:00Z",
    "category": "technology",
    "tone": "Confident"
  },
  {
    "source": {
      "id": null,
      "name": "Tomsguide.com"
    },
    "author": "Don Reisinger",
    "title": "Got $4500? This Solar-Powered Case Includes an iPhone X",
    "description":
      "There&#039;s nothing wrong with spending a little extra on a solar-powered case, right?",
    "url":
      "https://www.tomsguide.com/us/caviar-apple-iphone-x-solar,news-27225.html",
    "urlToImage":
      "https://img.purch.com/o/aHR0cHM6Ly9pbWcucHVyY2guY29tL3cvNTAwL2FIUjBjRG92TDIxbFpHbGhMbUpsYzNSdlptMXBZM0p2TG1OdmJTOVhMMWN2TnpjeU16QTBMMjl5YVdkcGJtRnNMM1JsYzJ4aFh6SXdNVGd3TlRFMVh6RXdNREJ3ZUY4eU1pNXFjR2M9",
    "publishedAt": "2018-05-17T12:05:24Z",
    "category": "technology",
    "tone": "Analytical"
  },
  {
    "source": {
      "id": null,
      "name": "Bgr.com"
    },
    "author": "Chris Smith",
    "title": "Here\"s the OnePlus 6 that you can\"t really buy",
    "description":
      "After a few months of leaks, teasers, and partial revelations, the OnePlus 6 is finally official and available for preorder in various markets. The company on Wednesday unveiled the handset during…",
    "url": "http://bgr.com/2018/05/17/oneplus-6-avengers-edition-price/",
    "urlToImage":
      "https://boygeniusreport.files.wordpress.com/2018/05/oneplus-6-1.jpg?quality=98&strip=all",
    "publishedAt": "2018-05-17T11:45:00Z",
    "category": "technology",
    "tone": "Joy"
  },
  {
    "source": {
      "id": null,
      "name": "Forbes.com"
    },
    "author": "Ollie Barder",
    "title": "\"Okami HD\" Is Released On The Switch This August",
    "description":
      "Following the announcement back in March, Capcom has since confirmed that the Switch version of \"Okami HD\" will be released this August.",
    "url":
      "https://www.forbes.com/sites/olliebarder/2018/05/17/okami-hd-is-released-on-the-switch-this-august/",
    "urlToImage":
      "https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fblogs-images.forbes.com%2Folliebarder%2Ffiles%2F2018%2F05%2Fokami_hd_switch-1200x675.jpg",
    "publishedAt": "2018-05-17T11:29:00Z",
    "category": "technology",
    "tone": "Analytical"
  },
  {
    "source": {
      "id": null,
      "name": "Computerworld.com"
    },
    "author": "Matthew Finnegan",
    "title":
      "Microsoft revamps Surface Hub 2 to put Teams collaboration at its core",
    "description":
      "The first iteration of Microsofts digital whiteboard is now in use at 5000 businesses, but questions remain about customer demand long term.",
    "url":
      "https://www.computerworld.com/article/3273432/collaboration/microsoft-revamps-surface-hub-2-to-put-teams-collaboration-at-its-core.html",
    "urlToImage":
      "https://images.idgesg.net/images/article/2018/05/msft_surface_hub_2-100758123-large.3x2.jpg",
    "publishedAt": "2018-05-17T11:27:43Z",
    "category": "technology",
    "tone": "Analytical"
  },
  {
    "source": {
      "id": null,
      "name": "9to5mac.com"
    },
    "author": null,
    "title":
      "Apple campus in Research Triangle Park \"a done deal\" if tax incentives agreed",
    "description":
      "There were conflicting reports yesterday about the likely location of the new Apple campus the company promised back in January. With a large number of well-paid jobs at stake, there is stiff compe…",
    "url":
      "https://9to5mac.com/2018/05/17/apple-campus-research-triangle-park/",
    "urlToImage":
      "https://9to5mac.files.wordpress.com/2018/05/rtp.jpg?quality=82&strip=all&w=1500",
    "publishedAt": "2018-05-17T10:53:00Z",
    "category": "technology",
    "tone": "Tentative"
  },
  {
    "source": {
      "id": null,
      "name": "Fastcompany.com"
    },
    "author": "Jared Newman",
    "title": "Alexa\"s secret superpower: Making you more productive at work",
    "description":
      "Put an Echo on your desk, and you can stay focused, remember what matters, make calls, and more.",
    "url":
      "https://www.fastcompany.com/40573134/alexas-secret-superpower-making-you-more-productive-at-work",
    "urlToImage":
      "https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2018/05/p-1-alexas-secret-superpower-making-you-more-productive-at-work.jpg",
    "publishedAt": "2018-05-17T10:05:13Z",
    "category": "technology",
    "tone": "Joy"
  },
  {
    "source": {
      "id": "the-verge",
      "name": "The Verge"
    },
    "author": "Vlad Savov",
    "title": "Google announces YouTube Music and YouTube Premium",
    "description":
      "Google’s new music subscription service and app, YouTube Music, and its premium YouTube membership have been announced and priced.",
    "url":
      "https://www.theverge.com/2018/5/17/17364056/youtube-music-premium-google-launch",
    "urlToImage":
      "https://cdn.vox-cdn.com/thumbor/y_fnrgfiDhbQyb5eOJPLhdUfT0s=/0x114:1600x952/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/10855311/ytmprem.jpg",
    "publishedAt": "2018-05-17T09:09:00Z",
    "category": "technology",
    "tone": "Joy"
  },
  {
    "source": {
      "id": null,
      "name": "Androidheadlines.com"
    },
    "author": "Daniel Fuller",
    "title": "OnePlus 6 Flagship Does Well In A Durability Test: Video",
    "description":
      "The new OnePlus 6 has officially dropped, and the one that made it into the hands of famous YouTuber JerryRigEverything actually made it through his usual battery of scratch, burn, and bend testing relatively unscathed. These videos show phones torture tested…",
    "url":
      "https://www.androidheadlines.com/2018/05/oneplus-6-flagship-does-well-in-a-durability-test-video.html",
    "urlToImage":
      "https://www.androidheadlines.com/wp-content/uploads/2018/05/OnePlus_6_JerryRigEverything.jpg",
    "publishedAt": "2018-05-17T08:34:28Z",
    "category": "technology",
    "tone": ""
  },
  {
    "source": {
      "id": null,
      "name": "Gamespot.com"
    },
    "author": "Eddie Makuch",

    "title": "Call Of Duty: Black Ops 4 Box Art Leaks Ahead Of Reveal",
    "description":
      "What appears to be the box art for the PS4, Xbox One, and PC game has emerged online.",
    "url":
      "https://www.gamespot.com/articles/call-of-duty-black-ops-4-box-art-leaks-ahead-of-re/1100-6459013/",
    "urlToImage":
      "https://static.gamespot.com/uploads/screen_kubrick/1179/11799911/3388093-screen+shot+2018-05-17+at+2.51.21+pm.png",
    "publishedAt": "2018-05-17T05:03:45Z",
    "category": "technology",
    "tone": "Tentative"
  },
  {
    "source": {
      "id": null,
      "name": "Space.com"
    },
    "author": "Mike Wall",
    "title":
      "SpaceX Launch of NASA and Iridium Satellites Delayed Until May 22",
    "description":
      "Two NASA Earth-observation satellites and five commercial communications craft will have to wait a bit longer to get off the ground.",
    "url":
      "https://www.space.com/40611-spacex-nasa-iridium-satellites-launch-delayed.html",
    "urlToImage":
      "https://img.purch.com/h/1000/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Ni80MTgvb3JpZ2luYWwvZ3JhY2UtZm8tc2F0ZWxsaXRlcy1kaXNwZW5zZXIuanBn",
    "publishedAt": "2018-05-17T11:32:00Z",
    "category": "science",
    "tone": "Tentative"
  },
  {
    "source": {
      "id": null,
      "name": "Ibtimes.com"
    },
    "author": "Himanshu Goenka",
    "title": "Rare Infrared Laser Emission From Space Produced By Ant Nebula",
    "description":
      "The rarely observed form of light emissions as lasers from space was seen in infrared wavelengths, coming from the well-known Ant Nebula, or Mz 3, a planetary nebula about 8000 light-years away.",
    "url":
      "http://www.ibtimes.com/rare-infrared-laser-emission-space-produced-ant-nebula-2681801",
    "urlToImage":
      "http://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/full/public/2018/05/17/ant-nebula.jpg",
    "publishedAt": "2018-05-17T11:11:00Z",
    "category": "science",
    "tone": "Joy"
  },
  {
    "source": {
      "id": null,
      "name": "Yahoo.com"
    },
    "author": null,
    "title":
      "How Did 1-Ton Dinosaurs Sit on Their Eggs Without Squashing Them?",
    "description":
      "Some small dinosaurs sat on their eggs like birds to keep their growing babies warm and protect them as they developed.  How does a beast weighing more than a ton safely incubate its eggs?  Scientists studying oviraptorosaurs—a group of feathered dinosaurs re…",
    "url": "https://uk.news.yahoo.com/did-1-ton-dinosaurs-sit-131519572.html",
    "urlToImage":
      "https://s.yimg.com/uu/api/res/1.2/qLf8UGpy4YEOWtVl7j.LOg--~B/aD0yMTAwO3c9MzAwMDtzbT0xO2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/en-GB/homerun/newsweek_europe_news_328/1f2fbf730eb94b04950729f7880e88d5",
    "publishedAt": "2018-05-17T10:54:16Z",
    "category": "science",
    "tone": "Joy"
  },
  {
    "source": {
      "id": null,
      "name": "Inquisitr.com"
    },
    "author": "Lorenzo Tanos",
    "title":
      "Florida Coral Reefs Have Been Plagued By Mystery Disease For Past Four Years",
    "description":
      "Scientists are still unsure of what exactly is causing the disease that has affected several coral species in the state. It was in 2014 when researchers first noticed that something was amiss with ...",
    "url":
      "https://www.inquisitr.com/4903193/florida-coral-reefs-have-been-plagued-by-mystery-disease-for-past-four-years/",
    "urlToImage":
      "https://cdn.inquisitr.com/wp-content/uploads/2018/05/Florida-coral-reefs.jpg",
    "publishedAt": "2018-05-17T10:50:00Z",
    "category": "science",
    "tone": "Sadness"
  },
  {
    "source": {
      "id": null,
      "name": "Ibtimes.com"
    },
    "author": "Shubham Sharma",
    "title":
      "Habitable Zone Exoplanets Could Become Snowballs, Losing Potential To Host Life",
    "description":
      "Even if a planet is far enough from its star to support liquid water, it might not be habitable.",
    "url":
      "http://www.ibtimes.com/habitable-zone-exoplanets-could-become-snowballs-losing-potential-host-life-2681785",
    "urlToImage":
      "http://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/full/public/2018/05/17/snowball-earth.jpg",
    "publishedAt": "2018-05-17T10:24:00Z",
    "category": "science",
    "tone": "Joy"
  },
  {
    "source": {
      "id": null,
      "name": "Bbc.com"
    },
    "author": "https: //www.facebook.com/bbcnews",
    "title": "Scientists detect oxygen legacy of first stars",
    "description":
      "The very first stars to shine in the Universe left a tell-tale trace in a far-distant galaxy.",
    "url": "http://www.bbc.com/news/science-environment-44129714",
    "urlToImage":
      "https://ichef.bbci.co.uk/news/1024/branded_news/2A37/production/_101570801_20120501-carlos-padilla-panoramica-aos-03_preview.jpg",
    "publishedAt": "2018-05-17T09:59:55Z",
    "category": "science",
    "tone": "Joy"
  },
  {
    "source": {
      "id": "fox-news",
      "name": "Fox News"
    },
    "author": "LiveScience",
    "title":
      "Could reviving Woolly-Mammoth genes fight the effects of global warming?",
    "description":
      "JERSEY CITY, N.J. — Woolly mammoths have been extinct for more than 4000 years, but with new gene-editing techniques, they could help mitigate the effects of a modern problem: climate change.",
    "url":
      "http://www.foxnews.com/science/2018/05/17/could-reviving-woolly-mammoth-genes-fight-effects-global-warming.html",
    "urlToImage":
      "http://a57.foxnews.com/images.foxnews.com/content/fox-news/science/2018/05/17/could-reviving-woolly-mammoth-genes-fight-effects-global-warming/_jcr_content/par/featured_image/media-0.img.jpg/0/0/1526485370935.jpg?ve=1",
    "publishedAt": "2018-05-17T09:33:40Z",
    "category": "science",
    "tone": "Tentative"
  },
  {
    "source": {
      "id": null,
      "name": "Kjrh.com"
    },
    "author": null,
    "title": "Daughter says mother kept her, sisters hostage",
    "description":
      "A Tulsa woman remains jailed without bond Wednesday morning after authorities accused her of stabbing her eldest daughter and setting their home on fire.",
    "url":
      "https://www.kjrh.com/news/local-news/tulsa-woman-jailed-without-bond-after-attack-on-child",
    "urlToImage":
      "https://mediaassets.kjrh.com/photo/2018/05/15/taheerah_1526419833862_86958632_ver1.0_900_675.jpg",
    "publishedAt": "2018-05-16T21:43:47Z",
    "category": "general",
    "tone": "Anger"
  },
  {
    "source": {
      "id": null,
      "name": "Nydailynews.com"
    },
    "author": "Jessica Schladebeck",
    "title":
      "Illinois police officer shoots former student who opened fire in Dixon High School",
    "description":
      "A suspect was injured during a gunfire exchange with a police officer after he opened fire at an Illinois school Wednesday morning.",
    "url":
      "http://www.nydailynews.com/news/national/illinois-police-officer-shoots-suspect-opened-fire-school-article-1.3992930",
    "urlToImage":
      "http://www.nydailynews.com/resizer/8SBKOIWUmMMOBtQkzlnNOAUQK9c=/1200x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/K7QOB6YUFHHTDM6V7BZHVM2NBE.jpg",
    "publishedAt": "2018-05-16T21:40:18Z",
    "category": "general",
    "tone": "Tentative"
  },
  {
    "source": {
      "id": "usa-today",
      "name": "USA Today"
    },
    "author": "David Jackson",
    "title":
      "Donald Trump ponders North Korean threat to cancel Singapore summit with Kim Jong Un",
    "description":
      "President Donald Trump and aides pondered their response to new North Korean demands that could scuttle the planned summit next month between  Trump and Kim Jong Un.",
    "url":
      "https://www.usatoday.com/story/news/politics/2018/05/16/donald-trump-ponders-north-korean-threat-cancel-kim-summit/614480002/",
    "urlToImage":
      "https://www.gannett-cdn.com/-mm-/fb4db209b9040ce349f30b06caae28d6425dce07/c=0-199-3000-1894&r=x1683&c=3200x1680/local/-/media/2018/05/16/USATODAY/USATODAY/636620520395048281-AFP-AFP-VK1ZE-96307421.JPG",
    "publishedAt": "2018-05-16T20:30:19Z",
    "category": "general",
    "tone": "Tentative"
  }
];


let category = "";

let page = 1;

// array length
var totalNews = 30;

$(document).ready(function() {
  // $("#pagination").twbsPagination({
  //   totalPages: totalNews / 10,
  //   visiblePages: 10,
  //   onPageClick: function(event, page) {
  //     News.getNews(page, category);
  //   }
  // });
  News.getNews();
  $("#business").click(function() {
    category = "business";
    News.getNews(page, category);
  });
  $("#sports").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.category == "sports"
    })
    News.renderNews(filteredNews);
  });
  $("#general").click(function() {
    category = "general";
    News.getNews(page, category);
  });
  $("#entertainment").click(function() {
    category = "entertainment";
    News.getNews(page, category);
  });
  $("#health").click(function() {
    category = "health";
    News.getNews(page, category);
  });
  $("#science").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.category == "science"
    })
    News.renderNews(filteredNews);
  });
  $("#technology").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.category == "technology"
    })
    News.renderNews(filteredNews);
  });

  $("#sad").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.tone == "Sadness"
    })
    News.renderNews(filteredNews);
  })

  $("#anger").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.tone == "Anger"
    })
    News.renderNews(filteredNews);
  })

  $("#tentative").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.tone == "Tentative"
    })
    News.renderNews(filteredNews);
  })

  $("#usatoday").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.source.name == "USA Today"
    })
    News.renderNews(filteredNews);
  })

  $("#bgr").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.source.name == "Bgr.com"
    })
    News.renderNews(filteredNews);
  })
});

// maybe here we should calculate length of news and handle and render pagination properly

News.renderNews = function(articles) {
  var $newsList = $("#news");

  $newsList.empty();

  for (var newsIndex = 0; newsIndex < articles.length; newsIndex++) {
    var oneNews = articles[newsIndex];
    var htmlNewsRow =
      "<div class='newsItem'>" +
      '<div><img width="500" src="' +
      oneNews.urlToImage +
      '"/></div><div class="info"><a target="_blank" href="' +
      oneNews.url +
      '"><h5>' +
      oneNews.title +
      "</h5></a><span class='source'>" +
      oneNews.source.name +
      "</span><span class='source'>" +
      moment(oneNews.publishedAt)
        .startOf("hour")
        .fromNow() +
      "</span><span class='source'>Tonality: " +
      oneNews.tone + 
      "</span><br><p>" +
      oneNews.description +
      "</p></div><hr/></div>";
    if (oneNews.urlToImage != null) {
      $newsList.append(htmlNewsRow);
    }
  }
};

News.getNews = function(pageNumber, category) {
  // $.ajax({
  //   url:
  //     "https://newsapi.org/v2/top-headlines?" +
  //     "country=us&" +
  //     "category=" +
  //     category +
  //     "&pageSize=10&" +
  //     "apiKey=9fdb2e24b37e4bfbaa19990013ec3fae&" +
  //     "page=" +
  //     pageNumber,
  //   success: function(responce) {
  //     News.renderNews(responce.articles);
  //   }
  // });
  News.renderNews(MockNews);
  // News.renderNews(ArticlesFull);
};
