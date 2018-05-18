var News = {};

var MockNews = [
  {
    source: { id: null, name: "Kpbs.org" },
    author: "City News Service",
    title: "California Leaders Opposed To Sanctuary Law Meet With Trump",
    description:
      "City and county officials from across the state who oppose California's sanctuary-state law sat down with President Donald Trump Wednesday to voice their objections to the law, and they got a pep talk from the president who slammed the state for failing to cr…",
    url:
      "http://www.kpbs.org/news/2018/may/16/california-leaders-opposed-to-sanctuary-law-will/",
    urlToImage:
      "https://kpbs.media.clients.ellingtoncms.com/img/photos/2018/05/16/AP_18136749403111.jpg",
    publishedAt: "2018-05-17T01:41:15Z",
    category: "sports",
    tone: "Confident"
  },
  {
    source: { id: null, name: "Nydailynews.com" },
    author: "Jessica Schladebeck",
    title:
      "Illinois police officer shoots former student who opened fire in Dixon High School",
    description:
      "A suspect was injured during a gunfire exchange with a police officer after he opened fire at an Illinois school Wednesday morning.",
    url:
      "http://www.nydailynews.com/news/national/illinois-police-officer-shoots-suspect-opened-fire-school-article-1.3992930",
    urlToImage:
      "http://www.nydailynews.com/resizer/8SBKOIWUmMMOBtQkzlnNOAUQK9c=/1200x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/K7QOB6YUFHHTDM6V7BZHVM2NBE.jpg",
    publishedAt: "2018-05-16T21:40:18Z",
    category: "sports",
    tone: "Tentative"
  },
  {
    source: { id: "the-washington-post", name: "The Washington Post" },
    author: null,
    title: "Exploding vape pen caused Florida man's death, autopsy says",
    description:
      "A Florida man was killed when his vape pen sent projectiles into his head.",
    url:
      "https://www.washingtonpost.com/news/to-your-health/wp/2018/05/16/man-died-after-a-vape-pen-exploded-and-embedded-pieces-into-this-head-autopsy-says/",
    urlToImage:
      "https://www.washingtonpost.com/resizer/akfW7R_BZj7H2xPeyR1s-nofI1Y=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/JR7D2WJNEY4GZPT5YMCR3JJP2M.jpg",
    publishedAt: "2018-05-16T19:57:03Z",
    category: "sports",
    tone: "Anger"
  },
  {
    source: { id: null, name: "Chron.com" },
    author: "Keri Blakinger",
    title:
      "'See y'all on the other side': San Antonio lovers' lane killer executed amid claims of innocence",
    description:
      "After three canceled death dates in one year, lovers' lane killer Juan Castillo was executed Wednesday night after years of protesting his innocence. He was the sixth man this year to meet his end in the Huntsville death chamber.",
    url:
      "https://www.chron.com/news/houston-texas/article/San-Antonio-lovers-lane-killer-scheduled-for-12918627.php",
    urlToImage: "https://s.hdnux.com/photos/73/27/33/15562441/3/rawImage.jpg",
    publishedAt: "2018-05-16T19:45:00Z",
    category: "sports",
    tone: "Sadness"
  },
  {
    source: { id: null, name: "Latimes.com" },
    author: "Richard Winton, Anh Do, Javier Panzar, Joseph Serna",
    title:
      "'We do not believe this was an accident': Deadly explosion in Aliso Viejo linked to suspicious device",
    description:
      "An explosion that killed a woman and injured several others at an Aliso Viejo day spa Tuesday afternoon likely came from a package and appears suspicious, law enforcement sources told The Times.",
    url:
      "http://www.latimes.com/local/lanow/la-me-aliso-viejo-blast-20180516-story.html",
    urlToImage:
      "http://www.latimes.com/resizer/5hXm7sYSUF89FVKSuOsMj45WDx4=/1200x0/www.trbimg.com/img-5afcb5e8/turbine/la-me-aliso-viejo-blast-20180516",
    publishedAt: "2018-05-16T19:29:34Z",
    category: "sports",
    tone: "Tentative"
  },
  {
    source: { id: null, name: "Mcall.com" },
    author: "Laurie Mason Schroeder",
    title:
      "Prosecutor says Cosmo DiNardo killed and liked it, became 'man-eater'",
    description:
      "Cosmo DiNardo and his cousin Sean Kratz to face a judge in Bucks County homicide case. They are accused in the slayings of four men who were found buried on the DiNardo family's farm in Solebury last summer.",
    url:
      "http://www.mcall.com/news/breaking/mc-nws-cosmo-dinardo-missing-bucks-county-men-hearing-20180510-story.html",
    urlToImage:
      "http://www.trbimg.com/img-5afccdb3/turbine/mc-nws-cosmo-dinardo-missing-bucks-county-men-hearing-20180510",
    publishedAt: "2018-05-16T19:23:49Z",
    category: "sports",
    tone: "Joy"
  },
  {
    source: { id: null, name: "Endpts.com" },
    author: null,
    title:
      "Novartis sacrifices its top attorney in an attempt to quell clamor over $1.2M in Cohen payments — while ex-CEO ...",
    description:
      "BioRegnum — The view from John Carroll Faced with a growing crisis over its $1.2 million in payments to President Donald Trump's personal attorney Michael Cohen, Novartis announced early Wednesday that the company's top lawyer has abruptly resigned in hopes o…",
    url:
      "https://endpts.com/novartis-ceo-vas-narasimhan-faces-a-heap-of-burning-questions-but-so-far-offers-no-public-answers/",
    urlToImage:
      "https://endpts.com/wp-content/uploads/2017/06/GettyImages-632647636.jpg",
    publishedAt: "2018-05-16T16:06:23Z",
    category: "sports",
    tone: "Joy"
  },
  {
    source: { id: "cbs-news", name: "CBS News" },
    author: "Caitlin O'Kane",
    title: "College grad wears gun holster with AR-10 in her graduation photos",
    description:
      "A Kent State graduate wore a gun holster around her body and a picture of a gun on her graduation cap in viral photos",
    url:
      "https://www.cbsnews.com/news/college-graduate-wears-gun-holster-with-ar-10-in-her-graduation-photos/",
    urlToImage:
      "https://cbsnews1.cbsistatic.com/hub/i/r/2018/05/16/51c555cf-9303-4dcf-9ab6-153dfe87f72b/thumbnail/1200x630/1999491f6adef9720c1bf9f22edca7e7/screen-shot-2018-05-16-at-11-00-57-am.png",
    publishedAt: "2018-05-16T15:42:00Z",
    category: "sports",
    tone: "Fear"
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Eliott C. McLaughlin and Tina Burnside, CNN",
    title:
      "Parkland school resource officer decried as coward gets princely pension of $8702 a month",
    description:
      "The former school resource officer criticized for his response to the Parkland school massacre is receiving more than $8,700 a month in state pension, Florida Department of Management Services spokeswoman Nina Ashley said Wednesday.",
    url:
      "https://www.cnn.com/2018/05/16/us/parkland-resource-officer-parkland-shooting-pension-scot-peterson/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/180315200613-florida-school-shooting-correct-surveillance-vid-super-tease.jpg",
    publishedAt: "2018-05-16T15:10:13Z",
    category: "sports",
    tone: "Analytical"
  },
  {
    source: {
      id: null,
      name: "Venturebeat.com"
    },
    author: "Dean Takahashi",
    title: "Why Microsoft wants to make games more accessible for all of us",
    description:
      "Inside Microsoft’s Inclusive Technologies Lab in Redmond, Washington, a sign says, “When you do not intentionally, deliberately include … you will unintentionally exclude.” This r…",
    url:
      "https://venturebeat.com/2018/05/17/why-microsoft-wants-to-make-games-more-accessible-for-each-of-us/",
    urlToImage:
      "https://venturebeat.com/wp-content/uploads/2018/05/bryce.jpg?fit=1200%2C884&strip=all",
    publishedAt: "2018-05-17T12:35:00Z",
    category: "technology",
    tone: "Confident"
  },
  {
    source: {
      id: null,
      name: "Tomsguide.com"
    },
    author: "Don Reisinger",
    title: "Got $4500? This Solar-Powered Case Includes an iPhone X",
    description:
      "There&#039;s nothing wrong with spending a little extra on a solar-powered case, right?",
    url:
      "https://www.tomsguide.com/us/caviar-apple-iphone-x-solar,news-27225.html",
    urlToImage:
      "https://img.purch.com/o/aHR0cHM6Ly9pbWcucHVyY2guY29tL3cvNTAwL2FIUjBjRG92TDIxbFpHbGhMbUpsYzNSdlptMXBZM0p2TG1OdmJTOVhMMWN2TnpjeU16QTBMMjl5YVdkcGJtRnNMM1JsYzJ4aFh6SXdNVGd3TlRFMVh6RXdNREJ3ZUY4eU1pNXFjR2M9",
    publishedAt: "2018-05-17T12:05:24Z",
    category: "technology",
    tone: "Analytical"
  },
  {
    source: {
      id: null,
      name: "Bgr.com"
    },
    author: "Chris Smith",
    title: 'Here"s the OnePlus 6 that you can"t really buy',
    description:
      "After a few months of leaks, teasers, and partial revelations, the OnePlus 6 is finally official and available for preorder in various markets. The company on Wednesday unveiled the handset during…",
    url: "http://bgr.com/2018/05/17/oneplus-6-avengers-edition-price/",
    urlToImage:
      "https://boygeniusreport.files.wordpress.com/2018/05/oneplus-6-1.jpg?quality=98&strip=all",
    publishedAt: "2018-05-17T11:45:00Z",
    category: "technology",
    tone: "Joy"
  },
  {
    source: {
      id: null,
      name: "Forbes.com"
    },
    author: "Ollie Barder",
    title: '"Okami HD" Is Released On The Switch This August',
    description:
      'Following the announcement back in March, Capcom has since confirmed that the Switch version of "Okami HD" will be released this August.',
    url:
      "https://www.forbes.com/sites/olliebarder/2018/05/17/okami-hd-is-released-on-the-switch-this-august/",
    urlToImage:
      "https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fblogs-images.forbes.com%2Folliebarder%2Ffiles%2F2018%2F05%2Fokami_hd_switch-1200x675.jpg",
    publishedAt: "2018-05-17T11:29:00Z",
    category: "technology",
    tone: "Analytical"
  },
  {
    source: {
      id: null,
      name: "Computerworld.com"
    },
    author: "Matthew Finnegan",
    title:
      "Microsoft revamps Surface Hub 2 to put Teams collaboration at its core",
    description:
      "The first iteration of Microsofts digital whiteboard is now in use at 5000 businesses, but questions remain about customer demand long term.",
    url:
      "https://www.computerworld.com/article/3273432/collaboration/microsoft-revamps-surface-hub-2-to-put-teams-collaboration-at-its-core.html",
    urlToImage:
      "https://images.idgesg.net/images/article/2018/05/msft_surface_hub_2-100758123-large.3x2.jpg",
    publishedAt: "2018-05-17T11:27:43Z",
    category: "technology",
    tone: "Analytical"
  },
  {
    source: {
      id: null,
      name: "9to5mac.com"
    },
    author: null,
    title:
      'Apple campus in Research Triangle Park "a done deal" if tax incentives agreed',
    description:
      "There were conflicting reports yesterday about the likely location of the new Apple campus the company promised back in January. With a large number of well-paid jobs at stake, there is stiff compe…",
    url: "https://9to5mac.com/2018/05/17/apple-campus-research-triangle-park/",
    urlToImage:
      "https://9to5mac.files.wordpress.com/2018/05/rtp.jpg?quality=82&strip=all&w=1500",
    publishedAt: "2018-05-17T10:53:00Z",
    category: "technology",
    tone: "Tentative"
  },
  {
    source: {
      id: null,
      name: "Fastcompany.com"
    },
    author: "Jared Newman",
    title: 'Alexa"s secret superpower: Making you more productive at work',
    description:
      "Put an Echo on your desk, and you can stay focused, remember what matters, make calls, and more.",
    url:
      "https://www.fastcompany.com/40573134/alexas-secret-superpower-making-you-more-productive-at-work",
    urlToImage:
      "https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2018/05/p-1-alexas-secret-superpower-making-you-more-productive-at-work.jpg",
    publishedAt: "2018-05-17T10:05:13Z",
    category: "technology",
    tone: "Joy"
  },
  {
    source: {
      id: "the-verge",
      name: "The Verge"
    },
    author: "Vlad Savov",
    title: "Google announces YouTube Music and YouTube Premium",
    description:
      "Google’s new music subscription service and app, YouTube Music, and its premium YouTube membership have been announced and priced.",
    url:
      "https://www.theverge.com/2018/5/17/17364056/youtube-music-premium-google-launch",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/y_fnrgfiDhbQyb5eOJPLhdUfT0s=/0x114:1600x952/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/10855311/ytmprem.jpg",
    publishedAt: "2018-05-17T09:09:00Z",
    category: "technology",
    tone: "Joy"
  },
  {
    source: {
      id: null,
      name: "Gamespot.com"
    },
    author: "Eddie Makuch",

    title: "Call Of Duty: Black Ops 4 Box Art Leaks Ahead Of Reveal",
    description:
      "What appears to be the box art for the PS4, Xbox One, and PC game has emerged online.",
    url:
      "https://www.gamespot.com/articles/call-of-duty-black-ops-4-box-art-leaks-ahead-of-re/1100-6459013/",
    urlToImage:
      "https://static.gamespot.com/uploads/screen_kubrick/1179/11799911/3388093-screen+shot+2018-05-17+at+2.51.21+pm.png",
    publishedAt: "2018-05-17T05:03:45Z",
    category: "technology",
    tone: "Tentative"
  },
  {
    source: {
      id: null,
      name: "Space.com"
    },
    author: "Mike Wall",
    title: "SpaceX Launch of NASA and Iridium Satellites Delayed Until May 22",
    description:
      "Two NASA Earth-observation satellites and five commercial communications craft will have to wait a bit longer to get off the ground.",
    url:
      "https://www.space.com/40611-spacex-nasa-iridium-satellites-launch-delayed.html",
    urlToImage:
      "https://img.purch.com/h/1000/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Ni80MTgvb3JpZ2luYWwvZ3JhY2UtZm8tc2F0ZWxsaXRlcy1kaXNwZW5zZXIuanBn",
    publishedAt: "2018-05-17T11:32:00Z",
    category: "science",
    tone: "Tentative"
  },
  {
    source: {
      id: null,
      name: "Ibtimes.com"
    },
    author: "Himanshu Goenka",
    title: "Rare Infrared Laser Emission From Space Produced By Ant Nebula",
    description:
      "The rarely observed form of light emissions as lasers from space was seen in infrared wavelengths, coming from the well-known Ant Nebula, or Mz 3, a planetary nebula about 8000 light-years away.",
    url:
      "http://www.ibtimes.com/rare-infrared-laser-emission-space-produced-ant-nebula-2681801",
    urlToImage:
      "http://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/full/public/2018/05/17/ant-nebula.jpg",
    publishedAt: "2018-05-17T11:11:00Z",
    category: "science",
    tone: "Joy"
  },
  {
    source: {
      id: null,
      name: "Yahoo.com"
    },
    author: null,
    title: "How Did 1-Ton Dinosaurs Sit on Their Eggs Without Squashing Them?",
    description:
      "Some small dinosaurs sat on their eggs like birds to keep their growing babies warm and protect them as they developed.  How does a beast weighing more than a ton safely incubate its eggs?  Scientists studying oviraptorosaurs—a group of feathered dinosaurs re…",
    url: "https://uk.news.yahoo.com/did-1-ton-dinosaurs-sit-131519572.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/qLf8UGpy4YEOWtVl7j.LOg--~B/aD0yMTAwO3c9MzAwMDtzbT0xO2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/en-GB/homerun/newsweek_europe_news_328/1f2fbf730eb94b04950729f7880e88d5",
    publishedAt: "2018-05-17T10:54:16Z",
    category: "science",
    tone: "Joy"
  },
  {
    source: {
      id: null,
      name: "Inquisitr.com"
    },
    author: "Lorenzo Tanos",
    title:
      "Florida Coral Reefs Have Been Plagued By Mystery Disease For Past Four Years",
    description:
      "Scientists are still unsure of what exactly is causing the disease that has affected several coral species in the state. It was in 2014 when researchers first noticed that something was amiss with ...",
    url:
      "https://www.inquisitr.com/4903193/florida-coral-reefs-have-been-plagued-by-mystery-disease-for-past-four-years/",
    urlToImage:
      "https://cdn.inquisitr.com/wp-content/uploads/2018/05/Florida-coral-reefs.jpg",
    publishedAt: "2018-05-17T10:50:00Z",
    category: "science",
    tone: "Sadness"
  },
  {
    source: {
      id: null,
      name: "Ibtimes.com"
    },
    author: "Shubham Sharma",
    title:
      "Habitable Zone Exoplanets Could Become Snowballs, Losing Potential To Host Life",
    description:
      "Even if a planet is far enough from its star to support liquid water, it might not be habitable.",
    url:
      "http://www.ibtimes.com/habitable-zone-exoplanets-could-become-snowballs-losing-potential-host-life-2681785",
    urlToImage:
      "http://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/full/public/2018/05/17/snowball-earth.jpg",
    publishedAt: "2018-05-17T10:24:00Z",
    category: "science",
    tone: "Joy"
  },
  {
    source: {
      id: null,
      name: "Bbc.com"
    },
    author: "https: //www.facebook.com/bbcnews",
    title: "Scientists detect oxygen legacy of first stars",
    description:
      "The very first stars to shine in the Universe left a tell-tale trace in a far-distant galaxy.",
    url: "http://www.bbc.com/news/science-environment-44129714",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/2A37/production/_101570801_20120501-carlos-padilla-panoramica-aos-03_preview.jpg",
    publishedAt: "2018-05-17T09:59:55Z",
    category: "science",
    tone: "Joy"
  },
  {
    source: {
      id: "fox-news",
      name: "Fox News"
    },
    author: "LiveScience",
    title:
      "Could reviving Woolly-Mammoth genes fight the effects of global warming?",
    description:
      "JERSEY CITY, N.J. — Woolly mammoths have been extinct for more than 4000 years, but with new gene-editing techniques, they could help mitigate the effects of a modern problem: climate change.",
    url:
      "http://www.foxnews.com/science/2018/05/17/could-reviving-woolly-mammoth-genes-fight-effects-global-warming.html",
    urlToImage:
      "http://a57.foxnews.com/images.foxnews.com/content/fox-news/science/2018/05/17/could-reviving-woolly-mammoth-genes-fight-effects-global-warming/_jcr_content/par/featured_image/media-0.img.jpg/0/0/1526485370935.jpg?ve=1",
    publishedAt: "2018-05-17T09:33:40Z",
    category: "science",
    tone: "Tentative"
  },
  {
    source: {
      id: null,
      name: "Kjrh.com"
    },
    author: null,
    title: "Daughter says mother kept her, sisters hostage",
    description:
      "A Tulsa woman remains jailed without bond Wednesday morning after authorities accused her of stabbing her eldest daughter and setting their home on fire.",
    url:
      "https://www.kjrh.com/news/local-news/tulsa-woman-jailed-without-bond-after-attack-on-child",
    urlToImage:
      "https://mediaassets.kjrh.com/photo/2018/05/15/taheerah_1526419833862_86958632_ver1.0_900_675.jpg",
    publishedAt: "2018-05-16T21:43:47Z",
    category: "general",
    tone: "Anger"
  },
  {
    source: {
      id: null,
      name: "Nydailynews.com"
    },
    author: "Jessica Schladebeck",
    title:
      "Illinois police officer shoots former student who opened fire in Dixon High School",
    description:
      "A suspect was injured during a gunfire exchange with a police officer after he opened fire at an Illinois school Wednesday morning.",
    url:
      "http://www.nydailynews.com/news/national/illinois-police-officer-shoots-suspect-opened-fire-school-article-1.3992930",
    urlToImage:
      "http://www.nydailynews.com/resizer/8SBKOIWUmMMOBtQkzlnNOAUQK9c=/1200x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/K7QOB6YUFHHTDM6V7BZHVM2NBE.jpg",
    publishedAt: "2018-05-16T21:40:18Z",
    category: "general",
    tone: "Tentative"
  },
  {
    source: {
      id: "usa-today",
      name: "USA Today"
    },
    author: "David Jackson",
    title:
      "Donald Trump ponders North Korean threat to cancel Singapore summit with Kim Jong Un",
    description:
      "President Donald Trump and aides pondered their response to new North Korean demands that could scuttle the planned summit next month between  Trump and Kim Jong Un.",
    url:
      "https://www.usatoday.com/story/news/politics/2018/05/16/donald-trump-ponders-north-korean-threat-cancel-kim-summit/614480002/",
    urlToImage:
      "https://www.gannett-cdn.com/-mm-/fb4db209b9040ce349f30b06caae28d6425dce07/c=0-199-3000-1894&r=x1683&c=3200x1680/local/-/media/2018/05/16/USATODAY/USATODAY/636620520395048281-AFP-AFP-VK1ZE-96307421.JPG",
    publishedAt: "2018-05-16T20:30:19Z",
    category: "general",
    tone: "Tentative"
  },
  {
    source: {
      id: "cnn",
      name: "CNN"
    },
    author: "Euan McKirdy and Meera Senthilingam, CNN",
    title: "WHO raises Ebola health risk to 'very high' in DR Congo",
    description:
      'The World Health Organization (WHO) will hold an emergency meeting Friday to discuss the worsening outbreak of Ebola in the Democratic Republic of Congo as it moved the country\'s health risk assessment to "very high."',
    url:
      "https://www.cnn.com/2018/05/18/health/ebola-outbreak-drc-intl/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/180514105946-03-ebola-outbreak-drc-super-tease.jpg",
    publishedAt: "2018-05-18T07:44:37Z",
    category: "health",
    tone: "Fear"
  },
  {
    source: {
      id: "cnbc",
      name: "CNBC"
    },
    author: "Natasha Turak",
    title: "Bill Gates: Trump asked me the difference between HIV and HPV",
    description:
      "President Donald Trump twice asked Bill Gates the difference between HPV and HIV, the Microsoft founder told an audience at a recent Bill & Melinda Gates Foundation meeting.",
    url:
      "https://www.cnbc.com/2018/05/18/bill-gates-trump-asked-me-the-difference-between-hiv-and-hpv.html",
    urlToImage:
      "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/05/10/104461165-Bill_Gates_green.1910x1000.jpg",
    publishedAt: "2018-05-18T07:09:56Z",
    category: "health",
    tone: "Analytical"
  },
  {
    source: {
      id: null,
      name: "King5.com"
    },
    author: null,
    title: "Most guns not stored safely in Washington, UW study finds",
    description:
      "Researchers at the University of Washington found that 63 percent of gun-owning households don't unload and lock up their guns properly.",
    url:
      "https://www.king5.com/article/news/local/most-guns-not-stored-safely-in-washington-uw-study-finds/281-553188218",
    urlToImage:
      "https://media.king5.com/assets/KING/images/530798428/530798428_1140x641.jpg",
    publishedAt: "2018-05-17T23:32:01Z",
    category: "health",
    tone: "Tentative"
  },
  {
    source: {
      id: null,
      name: "Bbc.com"
    },
    author: "https://www.facebook.com/bbcnews",
    title: "Growing resistance to antifungal drugs 'a global issue'",
    description:
      "Scientists warn this could lead to more outbreaks of disease and affect people who are already ill.",
    url: "http://www.bbc.com/news/health-44160730",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/F6A5/production/_101614136_f0161375-candida_auris_fungi_illustration-spl.jpg",
    publishedAt: "2018-05-17T23:29:49Z",
    category: "health",
    tone: "Sadness"
  },
  {
    source: {
      id: null,
      name: "Yahoo.com"
    },
    author: null,
    title: "Lizards with green blood leave scientists scratching their heads",
    description:
      "In science fiction, green blood is common. Monsters often have green blood because it's strange and scary, the Xenomorphs from the Alien franchise have acidic green blood, and the Predator films introduced us to glowing green blood. Green blood does actually …",
    url:
      "https://www.yahoo.com/news/lizards-green-blood-leave-scientists-scratching-heads-225254767.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/seai0MjyRo3036T5cIGFNg--~B/aD04ODU7dz0xMzQwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/http://media.zenfs.com/en_US/News/BGR_News/screen-shot-2018-05-17-at-11-05-57-am.png",
    publishedAt: "2018-05-17T23:15:04Z",
    category: "health",
    tone: "Fear"
  },
  {
    source: {
      id: "the-new-york-times",
      name: "The New York Times"
    },
    author: "http://www.nytimes.com/by/gina-kolata",
    title: "New Drug Offers Hope to Millions With Severe Migraines",
    description:
      "The F.D.A. has approved the first drug designed to prevent migraines, a persistent cause of misery worldwide.",
    url:
      "https://www.nytimes.com/2018/05/17/health/migraines-prevention-drug-aimovig.html",
    urlToImage:
      "https://static01.nyt.com/images/2018/05/18/science/18MIGRAINE/18MIGRAINE-facebookJumbo.jpg",
    publishedAt: "2018-05-17T22:54:28Z",
    category: "health",
    tone: "Sadness"
  },
  {
    source: {
      id: null,
      name: "Refinery29.com"
    },
    author: "Kimberly Truong",
    title:
      "We're Fine: What's Stopping Asian-American Millennials From Talking About Mental Health",
    description:
      "Stigma, along with filial piety, are problematic when it comes to honest conversations about mental health in Asian-American communities.",
    url:
      "https://www.refinery29.com/asian-american-mental-health-second-generation-immigrants",
    urlToImage:
      "https://s3.r29static.com//bin/entry/063/0,0,2001,1051/x/1968368/image.png",
    publishedAt: "2018-05-17T20:18:16Z",
    category: "health",
    tone: "Sadness"
  },
  {
    source: {
      id: "the-new-york-times",
      name: "The New York Times"
    },
    author: "http://www.nytimes.com/by/roni-caryn-rabin",
    title: "NIH Halts Enrollment in a Study of Drinking Now Under Scrutiny",
    description:
      "Following reports in The Times that investigators and officials had solicited funding for the trial from the alcohol industry, the N.I.H. has launched two internal investigations.",
    url: "https://www.nytimes.com/2018/05/17/health/nih-alcohol-study.html",
    urlToImage:
      "https://static01.nyt.com/images/2018/05/18/science/18ALCOHOL/18ALCOHOL-facebookJumbo.jpg",
    publishedAt: "2018-05-17T19:04:40Z",
    category: "health",
    tone: "Analytical"
  },
  {
    source: {
      id: null,
      name: "Healthday.com"
    },
    author: null,
    title: "FDA Approves Non-Opioid Medication to Treat Opioid Withdrawal",
    description:
      "The U.S. Food and Drug Administration on Wednesday approved the non-opioid drug Lucemyra to help adults cope with symptoms of opioid withdrawal.",
    url:
      "https://consumer.healthday.com/mental-health-information-25/addiction-news-6/fda-approves-non-opioid-medication-to-treat-opioid-withdrawal-734016.html",
    urlToImage: "https://media.healthday.com/Images/icimages/fda.jpg",
    publishedAt: "2018-05-17T18:01:26Z",
    category: "health",
    tone: "Sadness"
  },
  {
    source: {
      id: "cnn",
      name: "CNN"
    },
    author: "Susan Scutti, CNN",
    title:
      "Parasites and bacteria may be lurking in hotel pools, hot tubs, CDC warns",
    description:
      "Over a 15-year period, 493 disease outbreaks linked to chlorinated or treated water were reported in 46 states and Puerto Rico, a new CDC report indicates.",
    url:
      "https://www.cnn.com/2018/05/17/health/crypto-bacteria-swimming-pools-hot-tubs-cdc/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/171011142441-airport-swimming-pools---westin-detroit-metropolitan-airport-super-tease.jpg",
    publishedAt: "2018-05-17T17:04:30Z",
    category: "health",
    tone: "Fear"
  },
  {
    source: {
      id: null,
      name: "Medicalxpress.com"
    },
    author: "Nina Bai",
    title: "Lyme disease is on the rise – an expert explains why",
    description:
      "May marks the beginning of the summer season when black-legged ticks that spread Lyme disease are more prevalent – even in California.",
    url: "https://medicalxpress.com/news/2018-05-lyme-disease-expert.html",
    urlToImage:
      "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/2018/lymediseasei.jpg",
    publishedAt: "2018-05-17T11:46:43Z",
    category: "health",
    tone: "Tentative"
  },
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post"
    },
    author: null,
    title: "California's Deadly STD Epidemic Sets Record",
    description:
      "Rates of gonorrhea, syphilis and chlamydia in California have shot up 45 percent over five years, resulting in 30 syphilis-related stillbirths in 2017 alone, new state data show.",
    url:
      "https://www.washingtonpost.com/national/health-science/californias-deadly-std-epidemic-sets-record/2018/05/17/fa6f2caa-59b2-11e8-9889-07bcc1327f4b_story.html",
    urlToImage:
      "https://www.washingtonpost.com/resizer/2CjPNwqvXHPS_2RpuRTKY-p3eVo=/1484x0/www.washingtonpost.com/pb/resources/img/twp-social-share.png",
    publishedAt: "2018-05-17T09:18:10Z",
    category: "health",
    tone: "Sadness"
  },
  {
    source: {
      id: "the-new-york-times",
      name: "The New York Times"
    },
    author: "http://www.nytimes.com/by/denise-grady",
    title:
      "Good News on Early Breast Cancer: Herceptin Treatment Can Be Shortened",
    description:
      "A large, new study shows that the treatment regimen, typically recommended for a year, can be just as effective at 6 months, reducing serious side effects and costs.",
    url:
      "https://www.nytimes.com/2018/05/16/health/breast-cancer-herceptin-genentech.html",
    urlToImage:
      "https://static01.nyt.com/images/2018/05/17/science/17BREASTCANCER-print/17BREASTCANCER-facebookJumbo.jpg",
    publishedAt: "2018-05-16T21:00:33Z",
    category: "health",
    tone: "Tentative"
  },
  {
    source: {
      id: null,
      name: "Aol.com"
    },
    author: "Alexis Shaw",
    title:
      "Study: Suicide-related hospital visits double among youth, increase during school months",
    description:
      '"It really is a different world for kids growing up. This is the first generation that has not known a world without social media."',
    url:
      "https://www.aol.com/article/news/2018/05/16/study-suicide-related-hospital-visits-double-among-youth-increase-during-school-months/23436049/",
    urlToImage:
      "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1028x675/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F4b764d5c4dff531da617a78c4c6eeb18%2F0%2Flocker-room-picture-id841852224",
    publishedAt: "2018-05-16T14:09:51Z",
    category: "health",
    tone: "Sadness"
  },
  {
    source: {
      id: null,
      name: "Cinemablend.com"
    },
    author: "Eric Eisenberg",
    title:
      "The Other Character Ryan Reynolds Plays In Deadpool 2 Will Surprise You",
    description:
      "SPOILER WARNING: The following article contains major spoilers for Deadpool 2. If you have not yet seen the film, please bookmark this page, and save the read until after your screening!",
    url:
      "https://www.cinemablend.com/news/2421611/the-other-character-ryan-reynolds-plays-in-deadpool-2-will-surprise-you",
    urlToImage:
      "https://img.cinemablend.com/quill/5/0/5/c/7/7/505c77fb8fb7394be51be988c929c6af82731c1a.jpg",
    publishedAt: "2018-05-18T07:42:00Z",
    category: "entertainment",
    tone: "Analytical"
  },
  {
    source: {
      id: null,
      name: "Bustle.com"
    },
    author: "Jack O'Keeffe",
    title:
      "Will '13 Reasons Why' Return For Season 3? The Show's Creator Has More Story To Tell",
    description:
      "The novel Thirteen Reasons Why has a conclusive ending to its story — but the television series based off of it seems to be forging its own path. Season 2 of Netflix's teen drama 13 Reasons Why premieres on Friday, May 18, featuring a whole new plot …",
    url:
      "https://www.bustle.com/p/will-13-reasons-why-return-for-season-3-the-shows-creator-has-more-story-to-tell-9065464",
    urlToImage:
      "https://imgix.bustle.com/uploads/image/2018/5/11/284f60b0-d935-4a84-9a40-f9839099104a-13rw_201_02687r.jpeg?w=1200&h=630&q=70&fit=crop&crop=faces&fm=jpg",
    publishedAt: "2018-05-18T07:02:26Z",
    category: "entertainment",
    tone: "Joy"
  },
  {
    source: {
      id: null,
      name: "Popsugar.com"
    },
    author: "Stacey Nguyen",
    title: "We Need to Lie Down After the Season 14 Finale of Grey's Anatomy",
    description: "Not that we WANTED another plane crash.",
    url:
      "https://www.popsugar.com/entertainment/Grey-Anatomy-Season-14-Finale-Recap-44854987",
    urlToImage:
      "https://media1.popsugar-assets.com/files/thumbor/TqbZFRDlJaALiPhNv4Roglckrq8/fit-in/1200x630/filters:format_auto-!!-:strip_icc-!!-:fill-!white!-/2018/05/17/279/n/1922283/1ec2a8225afe67de6af4d8.15311562_.jpg",
    publishedAt: "2018-05-18T05:40:00Z",
    category: "entertainment",
    tone: "Sadness"
  },
  {
    source: {
      id: "entertainment-weekly",
      name: "Entertainment Weekly"
    },
    author: "Natalie Abrams",
    title: "Arrow boss on that tragic finale loss",
    description: "",
    url:
      "http://ew.com/tv/2018/05/17/arrow-season-6-finale-quentin-lance-death/",
    urlToImage:
      "https://ewedit.files.wordpress.com/2017/09/arrow-1-20002.jpg?crop=0px%2C141px%2C2000px%2C1050px&resize=1200%2C630",
    publishedAt: "2018-05-18T02:01:10Z",
    category: "entertainment",
    tone: "Sadness"
  },
  {
    source: {
      id: null,
      name: "Etonline.com"
    },
    author: "Jennifer Drysdale‍",
    title:
      "BTS On Why 'Love Yourself: Tear' Will Be Their Most Personal Album Yet (Exclusive)",
    description:
      "The K-pop superstars tell ET about their upcoming album, 'Love Yourself: Tear' -- and why it might be their most personal project yet.",
    url:
      "https://www.etonline.com/bts-on-why-love-yourself-tear-will-be-their-most-personal-album-yet-exclusive-102471",
    urlToImage:
      "http://www.etonline.com/sites/default/files/styles/max_1280x720/public/images/2018-05/eto_jnkt_bts_051518_cam_x.jpg?itok=BxIh4Px8",
    publishedAt: "2018-05-17T22:12:23Z",
    category: "entertainment",
    tone: "Joy"
  },
  {
    source: {
      id: null,
      name: "Screenrant.com"
    },
    author: "Sandy Schaefer",
    title: "Spielberg & DiCaprio Want to Reunite For Ulysses S. Grant Biopic",
    description:
      "Steven Spielberg is in early talks to re-team with his Catch Me If You Can star Leonardo DiCaprio on a Ulysses S. Grant movie biopic.",
    url: "https://screenrant.com/spielberg-dicaprio-ulysses-grant-movie/",
    urlToImage:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2018/05/DiCaprio-and-Spielberg-circle-Ulysses-Grant-biopic.jpg",
    publishedAt: "2018-05-17T21:30:59Z",
    category: "entertainment",
    tone: "Joy"
  },
  {
    source: {
      id: null,
      name: "Refinery29.com"
    },
    author: "Courtney E. Smith",
    title: "Women Just Can't Win At The Billboard Music Awards",
    description:
      "The Billboard Music Awards seem to have course corrected for their heavily male awards nominees by booking as many women as they could to perform.",
    url:
      "https://www.refinery29.com/2018/05/199434/billboard-music-awards-performers-nominees-sexist",
    urlToImage:
      "https://s2.r29static.com//bin/entry/49a/0,0,4000,2100/x,80/1968441/image.jpg",
    publishedAt: "2018-05-17T20:06:00Z",
    category: "entertainment",
    tone: "Joy"
  },
  {
    source: {
      id: null,
      name: "People.com"
    },
    author: "Karen Mizoguchi, Anya Leon",
    title: "Alec and Hilaria Baldwin Welcome a Son",
    description: "",
    url:
      "http://people.com/babies/hilaria-alec-baldwin-welcome-third-son-fourth-child-together/",
    urlToImage:
      "https://peopledotcom.files.wordpress.com/2018/05/screen-shot-2018-05-17-at-3-52-34-pm.png?crop=0px%2C0px%2C848px%2C445.2px&resize=1200%2C630",
    publishedAt: "2018-05-17T19:56:56Z",
    category: "entertainment",
    tone: "Joy"
  },
  {
    source: {
      id: null,
      name: "Complex.com"
    },
    author: "tara mahadevan",
    title: "Offset Was Hospitalized After a Car Crash in Atlanta",
    description: "Offset withstood minor injuries.",
    url:
      "http://www.complex.com/music/2018/05/offset-hospitalized-after-car-crash-atlanta",
    urlToImage:
      "https://images.complex.com/complex/images/c_fill,g_center,w_1200/fl_lossy,pg_1,q_auto/gt6z0allbnd2av7yygr0/offset",
    publishedAt: "2018-05-17T19:51:41Z",
    category: "entertainment",
    tone: "Sadness"
  },
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post"
    },
    author: null,
    title: "Pregnant actress loses baby after car kills her 4-year-old",
    description:
      "A Tony-winning Broadway actress who was pregnant when a car killed her 4-year-old daughter has lost the baby.",
    url:
      "https://www.washingtonpost.com/entertainment/pregnant-actress-loses-baby-after-car-kills-her-4-year-old/2018/05/17/4f5d81a8-5a08-11e8-9889-07bcc1327f4b_story.html",
    urlToImage:
      "https://www.washingtonpost.com/rf/image_1484w/2010-2019/Wires/Images/2018-05-17/AP/Actress_Child_Killed_59828.jpg-92213.jpg?t=20170517",
    publishedAt: "2018-05-17T19:29:41Z",
    category: "entertainment",
    tone: "Sadness"
  },
  {
    source: {
      id: null,
      name: "Vanityfair.com"
    },
    author: "Yohana Desta",
    title: "Why Diane Keaton's Book Club Role Is Even More Meta Than You Think",
    description:
      "“She could sense that we wrote it for her. [And] she did walk in in the most badass three-piece suit. I just about fainted by the time I saw her,” said screenwriter Erin Simms.",
    url:
      "https://www.vanityfair.com/hollywood/2018/05/diane-keaton-role-book-club-movie",
    urlToImage:
      "https://media.vanityfair.com/photos/5afdc79e9b8fb535dffd2660/16:9/w_1200,h_630,c_limit/Diane-Keaton-Book-Club.jpg",
    publishedAt: "2018-05-17T18:21:17Z",
    category: "entertainment",
    tone: "Tentative"
  },
  {
    source: {
      id: null,
      name: "Bustle.com"
    },
    author: "Jamie Primeau",
    title:
      "Becca's 2018 'Bachelorette' Contestants Just Got Announced, So Let's Do The Damn Thing",
    description:
      "After having her heart broken on national TV, Becca Kufrin is back and giving love another shot. And if you're eager to tune in to see her \"do the damn thing,\" as she frequently says, you'll want to meet Becca's 2018 Bachelorette contestants, which w…",
    url:
      "https://www.bustle.com/p/beccas-2018-bachelorette-contestants-just-got-announced-so-lets-do-the-damn-thing-9017852",
    urlToImage:
      "https://imgix.bustle.com/uploads/image/2018/5/17/844141c0-af71-49f3-91c2-414969058cbe-148892_0488.jpg?w=1200&h=630&q=70&fit=crop&crop=faces&fm=jpg",
    publishedAt: "2018-05-17T17:54:26Z",
    category: "entertainment",
    tone: "Tentative"
  },
  {
    source: {
      id: null,
      name: "Ibtimes.com"
    },
    author: "Cortney Drakeford",
    title:
      "Is John Cena Asking Nikki Bella For Forgiveness? Wrestler Posts Sentimental Tweet",
    description:
      "John Cena hasn’t given up on getting back together with Nikki Bella.",
    url:
      "http://www.ibtimes.com/john-cena-asking-nikki-bella-forgiveness-wrestler-posts-sentimental-tweet-2681911",
    urlToImage:
      "http://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/full/public/2018/05/17/john-cena-nikki-bella.jpg",
    publishedAt: "2018-05-17T17:33:00Z",
    category: "entertainment",
    tone: "Analytical"
  },
  {
    source: {
      id: null,
      name: "Vibe.com"
    },
    author: null,
    title: "Blac Chyna May Face A Lawsuit Over Brain-Dead Assistant",
    description:
      "Sources close to Lorena “Patty” Hernandez say the family is planning to sue the reality star for abuse and failing to provide workers compensation.",
    url:
      "https://www.vibe.com/2018/05/blac-chyna-lawsuit-brain-dead-assistant/",
    urlToImage:
      "https://static.vibe.com/files/2018/05/blac-chyna-assistant-taken-off-life-support-1526573276-1024x683.jpg",
    publishedAt: "2018-05-17T17:18:17Z",
    category: "entertainment",
    tone: "Sadness"
  },
  {
    source: {
      id: null,
      name: "Forbes.com"
    },
    author: "Scott Mendelson",
    title:
      "Box Office: 'Avengers: Infinity War' Crossing $1.7 Billion Worldwide",
    description:
      "This will be the weekend that determines if 'Avengers: Infinity War' passes $2 billion worldwide.",
    url:
      "https://www.forbes.com/sites/scottmendelson/2018/05/17/box-office-avengers-infinity-war-tops-1-7-billion-worldwide/",
    urlToImage:
      "https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2018%2F04%2FAvengers-Infinity-War-Empire-Magazine-images-1-1200x734.jpg",
    publishedAt: "2018-05-17T16:07:03Z",
    category: "entertainment",
    tone: "Joy"
  },
  {
    source: {
      id: null,
      name: "Vulture.com"
    },
    author: "Craig Jenkins",
    title: "The Internet Has Already Devoured 'This Is America'",
    description: "But it still has power.",
    url:
      "http://www.vulture.com/2018/05/the-internet-has-already-devoured-this-is-america.html",
    urlToImage:
      "https://pixel.nymag.com/imgs/daily/vulture/2018/05/16/16-this-is-america-childish-gambino-3.w1200.h630.jpg",
    publishedAt: "2018-05-17T14:21:00Z",
    category: "entertainment",
    tone: "Sadness"
  },
  {
    source: {
      id: null,
      name: "People.com"
    },
    author: "Natalie Stone",
    title:
      "Hilary Duff Blasts Her Neighbor on Social Media for Smoking 'Cigarettes and Weed All Night Long'",
    description: "",
    url: "http://people.com/tv/hilary-duff-blasts-neighbor-smoking/",
    urlToImage:
      "https://peopledotcom.files.wordpress.com/2017/09/847631746.jpg?crop=0px%2C0px%2C1800px%2C945px&resize=1200%2C630",
    publishedAt: "2018-05-16T22:15:12Z",
    category: "entertainment",
    tone: "Confident"
  },
  {
    source: {
      id: "engadget",
      name: "Engadget"
    },
    author: "Mariella Moon",
    title: "Boosted Boards founders launch a scooter-sharing service in DC",
    description:
      "Skip promises sturdier and safer electric scooters for its new ride-sharing service in DC.",
    url:
      "https://www.engadget.com/2018/05/18/boosted-boards-skip-scooter-sharing-dc/",
    urlToImage:
      "https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fs.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F8830aa600019f59ad5022711fd6bd4d8%2F206384013%2FSkipScooter.jpg&client=cbc79c14efcebee57402&signature=7e8c489586af3ce95941377943143cfd0d103a89",
    publishedAt: "2018-05-18T08:03:58Z",
    category: "business",
    tone: "Joy"
  },
  {
    source: {
      id: "australian-financial-review",
      name: "Australian Financial Review"
    },
    author: "Neil Chenoweth",
    title: "The intrigue behind Rupert Murdoch's Fox succession plan",
    description:
      "Intrigue, payback, fear: as Lachlan Murdoch succeeds it's business as usual at the court of King Rupert.",
    url:
      "http://www.afr.com/business/media-and-marketing/tv/the-intrigues-behind-rupert-murdochs-fox-succession-plan-20180518-h108ce",
    urlToImage:
      "http://www.afr.com/content/dam/images/g/z/z/v/7/3/image.related.afrArticleLead.620x365.h108ce.png/1526628994301.jpg",
    publishedAt: "2018-05-18T07:38:33Z",
    category: "business",
    tone: "Fear"
  },
  {
    source: {
      id: null,
      name: "Dailyherald.com"
    },
    author: "Rachel Siegel",
    title: "Is the craft beer industry's buzz is wearing off?",
    description:
      "Has craft beer peaked? In one sign that the industry has grown less frothy, more craft breweries closed in 2017 than any time in the past decade.",
    url:
      "http://www.dailyherald.com/business/20180518/is-the-craft-beer-industrys-buzz-is-wearing-off",
    urlToImage:
      "http://www.dailyherald.com/storyimage/DA/20180518/BUSINESS/180519544/AR/0/AR-180519544.jpg&updated=201805140834&imageversion=Facebook&exactH=630&exactW=1200&exactfit=crop&noborder",
    publishedAt: "2018-05-18T06:06:43Z",
    category: "business",
    tone: "Sadness"
  },
  {
    source: {
      id: "bloomberg",
      name: "Bloomberg"
    },
    author: "Abhishek Vishnoi",
    title: "Oil Firms Lift Asia Stocks as Traders Stay Cool on China Offer",
    description:
      "Energy stocks rallied, boosting Asia’s benchmark gauge after Brent topped $80 a barrel for the first time since 2014.",
    url:
      "https://www.bloomberg.com/news/articles/2018-05-18/-this-is-largely-noise-traders-react-to-200-billion-china-cut",
    urlToImage:
      "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iSK5ont52Mp8/v1/1200x800.jpg",
    publishedAt: "2018-05-18T05:36:11Z",
    category: "business",
    tone: "Joy"
  },
  {
    source: {
      id: "reuters",
      name: "Reuters"
    },
    author: "Steve Gorman",
    title:
      "Elon Musk brings high-tech charm offensive to Los Angeles tunnel plan",
    description:
      'Billionaire entrepreneur Elon Musk promised a cheering crowd on Thursday that his controversial dream of burrowing a high-speed network of "personalized mass transit" tunnels under Los Angeles could be achieved without disturbance or noise at the surface.',
    url:
      "https://www.reuters.com/article/us-musk-tunnel/elon-musk-brings-technology-charm-offensive-to-los-angeles-tunnel-plan-idUSKCN1IJ02V",
    urlToImage:
      "https://s3.reutersmedia.net/resources/r/?m=02&d=20180518&t=2&i=1263276978&w=1200&r=LYNXNPEE4H06N",
    publishedAt: "2018-05-18T01:04:36Z",
    category: "business",
    tone: "Joy"
  },
  {
    source: {
      id: "techcrunch",
      name: "TechCrunch"
    },
    author: "Devin Coldewey",
    title:
      "LocationSmart didn't just sell mobile phone locations, it leaked them",
    description:
      "What's worse than companies selling the real-time locations of cell phones wholesale? Failing to take security precautions that prevent people from abusing the service. LocationSmart did both, as numerous sources indicated this week.",
    url:
      "https://techcrunch.com/2018/05/17/locationsmart-didnt-just-sell-mobile-phone-locations-it-leaked-them/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2018/03/phone-in-hand.jpg?w=695",
    publishedAt: "2018-05-17T23:50:18Z",
    category: "business",
    tone: "Tentative"
  },
  {
    source: {
      id: null,
      name: "Fiercepharma.com"
    },
    author: null,
    title:
      "Amgen's Aimovig won its first-in-class migraine nod. Will payers step up to the $6900 price?",
    description:
      "Aimovig has several more hurdles to clear before it can reach its lofty blockbuster goals—including persuading payers it's worth the cost.",
    url:
      "https://www.fiercepharma.com/pharma/amgen-wins-blockbuster-nod-for-first-class-migraine-med-aimovig",
    urlToImage:
      "https://qtxasset.com/fiercepharma/1526560239/amgen3.jpg/amgen3.jpg?tqzernindVM1OPRHynQEVDwrzWkEs_Rq",
    publishedAt: "2018-05-17T23:19:40Z",
    category: "business",
    tone: "Confident"
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal"
    },
    author: "Ben Dummett",
    title:
      "PayPal Agrees to Buy European Fintech Startup iZettle for Around $2.2 Billion",
    description:
      "PayPal agreed to buy European fintech startup iZettle for around $2.2 billion, a move that will catapult it into hundreds of thousands of retailers around the world and sets up a showdown with Jack Dorsey’s Square.",
    url:
      "https://www.wsj.com/articles/paypal-nears-2-2-billion-deal-for-european-fintech-startup-izettle-1526584777",
    urlToImage: "https://images.wsj.net/im-11015/social",
    publishedAt: "2018-05-17T22:19:00Z",
    category: "business",
    tone: "Joy"
  },
  {
    source: {
      id: null,
      name: "Forbes.com"
    },
    author: "Janet Burns",
    title:
      "Senate Votes To Save Net Neutrality Rules Amid Public Outcry, And An Uphill Battle",
    description:
      "After three Republican senators joined Democrats in moving to block the FCC's repeal of Obama-era internet rules, net neutrality advocates still have a long way to go, and not long to get there.",
    url:
      "https://www.forbes.com/sites/janetwburns/2018/05/17/senate-votes-to-save-net-neutrality-rules-amid-public-outcry-and-an-uphill-battle/",
    urlToImage:
      "https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F959293784%2F960x0.jpg%3Ffit%3Dscale",
    publishedAt: "2018-05-17T21:32:45Z",
    category: "business",
    tone: "Analytical"
  },
  {
    source: {
      id: null,
      name: "Cbslocal.com"
    },
    author: "CBSDenver",
    title: "Mother Body-Shamed On Airplane Thanks Man For Intervening",
    description:
      'When a man saw another passenger texting about sitting next to "a smelly fatty," he decided to take action.',
    url:
      "http://denver.cbslocal.com/2018/05/17/mother-body-shamed-on-airplane/",
    urlToImage:
      "https://cbsdenver.files.wordpress.com/2018/05/s093866418.jpg?w=900",
    publishedAt: "2018-05-17T19:45:00Z",
    category: "business",
    tone: "Confident"
  },
  {
    source: {
      id: "fortune",
      name: "Fortune"
    },
    author: "Travis H. Brown",
    title: "How Seattle's New Tax to Fight Homelessness Could Ruin its Economy",
    description: "",
    url: "http://fortune.com/2018/05/17/head-tax-in-seattle-amazon-starbucks/",
    urlToImage:
      "https://fortunedotcom.files.wordpress.com/2018/05/gettyimages-910627660.jpg",
    publishedAt: "2018-05-17T19:16:09Z",
    category: "business",
    tone: "Tentative"
  },
  {
    source: {
      id: null,
      name: "Wdtn.com"
    },
    author: "KRON Staff",
    title:
      "VIDEO: Woman throws poop at coffee shop employee who denied her restroom access",
    description:
      'A spokesperson for Tim Horton\'s told BuzzFeed that some of its restaurants have a "restricted access policy for restrooms to ensure the well-being of our guests."',
    url:
      "http://www.wdtn.com/news/world/video-woman-throws-poop-at-coffee-shop-employee-who-denied-her-restroom-access/1185071821",
    urlToImage:
      "https://media.wdtn.com/nxs-wdtntv-media-us-east-1/photo/2018/05/17/womanpoop_1526527352206_42813499_ver1.0_640_360_1526561638233_42843155_ver1.0_640_360_1526575599811_42857535_ver1.0_1280_720.JPG",
    publishedAt: "2018-05-17T16:49:56Z",
    category: "business",
    tone: "Tentative"
  },
  {
    source: {
      id: "the-new-york-times",
      name: "The New York Times"
    },
    author: "https://www.nytimes.com/by/sheila-kaplan",
    title: "FDA Names and Shames Drug Makers to Encourage Generic Competition",
    description:
      "In its campaign to lower drug prices, the agency posted a list of brand-name manufacturers in an effort to force them to share drug samples with their generic rivals.",
    url:
      "https://www.nytimes.com/2018/05/17/health/drug-prices-generics-fda.html",
    urlToImage:
      "https://static01.nyt.com/images/2018/05/18/science/18FDA1/18FDA1-facebookJumbo.jpg",
    publishedAt: "2018-05-17T13:40:10Z",
    category: "business",
    tone: "Analytical"
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal"
    },
    author: "Christopher M. Matthews",
    title: "Oil Is Above $70, but Frackers Still Struggle to Make Money",
    description:
      "American shale drillers are still spending more money than they are making, even as oil prices rise. Only five of the top 20 oil companies that focus mainly on fracking managed to generate more cash than they spent in the first quarter.",
    url:
      "https://www.wsj.com/articles/oils-at-70-but-frackers-still-struggling-to-make-money-1526549401",
    urlToImage: "https://images.wsj.net/im-10829/social",
    publishedAt: "2018-05-17T11:30:32Z",
    category: "business",
    tone: "Sadness"
  },
  {
    source: {
      id: "cnbc",
      name: "CNBC"
    },
    author: "Evelyn Cheng",
    title:
      "Apple, Intel and these other US tech companies have the most at stake in China-US trade fight",
    description:
      "U.S. technology companies generate roughly $100 billion to $150 billion in revenues from China, Jefferies analysts estimate.",
    url:
      "https://www.cnbc.com/2018/05/14/as-much-as-150-billion-annually-at-stake-us-tech-in-china-us-fight.html",
    urlToImage:
      "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/01/26/103334677-GettyImages-489940282.1910x1000.jpg",
    publishedAt: "2018-05-14T14:25:14Z",
    category: "business",
    tone: "Analytical"
  },
  {
    source: {
      id: null,
      name: "Chicagotribune.com"
    },
    author: "Tom Krisher",
    title: "Parts shortage that hit Ford spreads to more companies",
    description:
      "Ford was forced to temporarily halt production of its popular F-150 pickup truck Wednesday after a fire at a supplier last week caused a parts shortage.",
    url:
      "http://www.chicagotribune.com/business/ct-ford-suspends-f-150-production-20180510-story.html",
    urlToImage:
      "http://www.trbimg.com/img-5af489c5/turbine/ct-ford-suspends-f-150-production-20180510",
    publishedAt: "2018-05-10T18:04:00Z",
    category: "business",
    tone: "Sadness"
  }
];

$(document).ready(function() {
  News.renderNews(MockNews);

  // CATEGORY filters

  $("#business").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.category == "business";
    });
    News.renderNews(filteredNews);
  });

  $("#sports").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.category == "sports";
    });
    News.renderNews(filteredNews);
  });

  $("#general").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.category == "general";
    });
    News.renderNews(filteredNews);
  });

  $("#entertainment").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.category == "entertainment";
    });
    News.renderNews(filteredNews);
  });

  $("#health").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.category == "health";
    });
    News.renderNews(filteredNews);
  });

  $("#science").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.category == "science";
    });
    News.renderNews(filteredNews);
  });

  $("#technology").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.category == "technology";
    });
    News.renderNews(filteredNews);
  });

  // TONE filters

  $("#sadness").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.tone == "Sadness";
    });
    News.renderNews(filteredNews);
  });

  $("#anger").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.tone == "Anger";
    });
    News.renderNews(filteredNews);
  });

  $("#tentative").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.tone == "Tentative";
    });
    News.renderNews(filteredNews);
  });

  $("#joy").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.tone == "Joy";
    });
    News.renderNews(filteredNews);
  });

  $("#confident").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.tone == "Confident";
    });
    News.renderNews(filteredNews);
  });

  $("#fear").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.tone == "Fear";
    });
    News.renderNews(filteredNews);
  });

  $("#analytical").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.tone == "Analytical";
    });
    News.renderNews(filteredNews);
  });

  // RESOURSE filters

  $("#usatoday").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.source.name == "USA Today";
    });
    News.renderNews(filteredNews);
  });

  $("#bgr").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.source.name == "Bgr.com";
    });
    News.renderNews(filteredNews);
  });

  $("#cnn").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.source.name == "CNN";
    });
    News.renderNews(filteredNews);
  });

  $("#wall").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.source.name == "The Wall Street Journal";
    });
    News.renderNews(filteredNews);
  });

  $("#forbes").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.source.name == "Forbes.com";
    });
    News.renderNews(filteredNews);
  });

  $("#nytimes").click(function() {
    var filteredNews = MockNews.filter(function(news) {
      return news.source.name == "The New York Times";
    });
    News.renderNews(filteredNews);
  });
});

News.renderNews = function(articles) {
  function template(data) {
    var html = "";
    $.each(data, function(index, item) {
      html +=
        '<div class="newsItem"><div><img width="500" src="' +
        item.urlToImage +
        '"/></div><div class="info"><a target="_blank" href="' +
        item.url +
        '"><h5>' +
        item.title +
        "</h5></a><span class='source'>" +
        item.source.name +
        "</span><span class='source'>" +
        moment(item.publishedAt)
          .startOf("hour")
          .fromNow() +
        "</span><span class='source'>Tonality: " +
        item.tone +
        "</span><br><p>" +
        item.description +
        "</p></div><hr/></div>";
    });
    return html;
  }

  $("#pagination-container").pagination({
    dataSource: articles,
    callback: function(data, pagination) {
      var html = template(data);
      $("#data-container").html(html);
    }
  });
};
