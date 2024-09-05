// var url = 'https://newsapi.org/v2/everything?' +
//           'q=Apple&' +
//           'from=2024-09-05&' +
//           'sortBy=popularity&' +
//           'apiKey=13d64917f72c48b89af2eac008e56fe2';

// var req = new Request(url);

// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })

const fetchNews = async (page) => {
  console.log("Fetching news...");
  var url =
    "https://newsapi.org/v2/everything?" +
    "q=cybersecurity&" +
    "from=2024-09-04&" +
    "pageSize=20&" +
    "page=2" +
    page +
    "sortBy=popularity&" +
    "apiKey=13d64917f72c48b89af2eac008e56fe2";

  var req = new Request(url);

  // let a = await fetch(req)
  // let response = await a.json()
  // console.log(JSON.stringify(response))

  let response = {
    status: "ok",
    totalResults: 202,
    articles: [
      {
        source: { id: "the-next-web", name: "The Next Web" },
        author: "Ioanna Lykiardopoulou",
        title:
          "CERN for AI may be the EU’s ‘last chance’ to gain on foreign competition",
        description:
          "With the EU lagging behind the US and China on artificial intelligence, the idea of a CERN for AI has been gaining traction — even reaching the high ranks of the European Commission. “I will propose to set up a European AI Research Council where we can pool a…",
        url:
          "https://thenextweb.com/news/cern-for-ai-eu-last-chance-gain-foreign-competition",
        urlToImage:
          "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2024%2F05%2FUntitled-design-1-1.jpg&signature=ee03e53b508bdc258a9a3a8b33b07078",
        publishedAt: "2024-09-04T15:25:52Z",
        content:
          "With the EU lagging behind the US and China on artificial intelligence, the idea of a CERN for AI has been gaining traction even reaching the high ranks of the European Commission.\r\nI will propose to… [+2241 chars]"
      },
      {
        source: { id: null, name: "heise online" },
        author: "Prof. Dennis-Kenji Kipker",
        title:
          "Cyber-Unsecurity sells: Endlich mal wieder normal über Cybersicherheit sprechen!",
        description:
          "Ständig Hiobsbotschaften, schlimmste IT-Security überall! Doch das verzerrt den Blick auf den echten Stand der Dinge. Schluss damit, meint Dennis-Kenji Kipker.",
        url:
          "https://www.heise.de/meinung/Cyber-Unsecurity-sells-Endlich-mal-wieder-normal-ueber-Cybersicherheit-sprechen-9856069.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
        urlToImage:
          "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/6/2/8/6/3/OVERLAY_KOMMENTAR_Kopie_2-767cabac4c2e9122.jpg",
        publishedAt: "2024-09-04T08:24:00Z",
        content:
          'Inhaltsverzeichnis\r\nCyber-Hiobsbotschaften, so weit das Auge reicht: Die Stuttgarter Nachrichten treffen es mit ihrem aktuellen Kommentar zur neuen Bitkom-Cybersecurity-Studie schon ganz gut: "Alte G… [+6556 chars]'
      },
      {
        source: { id: null, name: "Help Net Security" },
        author: "Mirko Zorz",
        title: "Cybersecurity jobs available right now: September 4, 2024",
        description:
          "Cyber Systems Operations United States Air Force | USA | On-site – View job details The United States Air Force is looking for a Cyber Systems Operations Specialist to design, install, and support systems to ensure they operate properly and remain secure from…",
        url:
          "https://www.helpnetsecurity.com/2024/09/04/cybersecurity-jobs-available-right-now-september-4-2024/",
        urlToImage:
          "https://img.helpnetsecurity.com/wp-content/uploads/2024/03/11140413/cybersecurity_jobs-2-1500.webp",
        publishedAt: "2024-09-04T03:30:05Z",
        content:
          "Cyber Systems Operations\r\nUnited States Air Force | USA | On-site – View job details\r\nThe United States Air Force is looking for a Cyber Systems Operations Specialist to design, install, and support … [+6227 chars]"
      },
      {
        source: { id: null, name: "Help Net Security" },
        author: "Mirko Zorz",
        title:
          "Protecting national interests: Balancing cybersecurity and operational realities",
        description:
          "With cyber threats becoming increasingly sophisticated and targeting critical infrastructure, in this Help Net Security interview, David Ferbrache, managing director of Beyond Blue, discusses the current state of cybersecurity readiness and resilience. Ferbra…",
        url:
          "https://www.helpnetsecurity.com/2024/09/04/david-ferbrache-beyond-blue-national-cybersecurity/",
        urlToImage:
          "https://img.helpnetsecurity.com/wp-content/uploads/2024/08/16130918/david_ferbrache-2-beyondblue.webp",
        publishedAt: "2024-09-04T04:30:33Z",
        content:
          "With cyber threats becoming increasingly sophisticated and targeting critical infrastructure, in this Help Net Security interview, David Ferbrache, managing director of Beyond Blue, discusses the cur… [+6945 chars]"
      },
      {
        source: { id: "fox-news", name: "Fox News" },
        author: "Kurt Knutsson, CyberGuy Report",
        title:
          "New Harry Potter-named malware strikes, revealing global espionage campaign",
        description:
          'New malware infecting Windows PCs detected, suspected of conducting espionage. Tech expert Kurt “CyberGuy" Knutsson has more details on the cyberattack.',
        url:
          "https://www.foxnews.com/tech/new-harry-potter-named-malware-strikes-revealing-global-espionage-campaign",
        urlToImage:
          "https://static.foxnews.com/foxnews.com/content/uploads/2024/09/1-A-new-malware-strikes-revealing-a-global-espionage-campaign-intro.jpg",
        publishedAt: "2024-09-04T14:00:46Z",
        content:
          "A new malware has been detected by security researchers that is suspected of conducting espionage. Hackers infect devices by impersonating government agencies, usually tax agencies such as the Intern… [+7265 chars]"
      },
      {
        source: { id: null, name: "Techdirt" },
        author: "Tim Cushing",
        title:
          "Judge Grants City Restraining Order Blocking Researcher From Accessing Ransomed Gov’t Files",
        description:
          "Having completely shit the bed in its handling of a recent ransomware act, the city of Columbus, Ohio has decided the person who must be silenced — and, hopefully punished — should be the person who informed city workers and residents their PII was available …",
        url:
          "https://www.techdirt.com/2024/09/04/judge-grants-city-restraining-order-blocking-researcher-from-accessing-ransomed-govt-files/",
        urlToImage:
          "https://www.techdirt.com/wp-content/themes/techdirt/assets/images/td-rect-logo-white.png",
        publishedAt: "2024-09-04T17:55:39Z",
        content:
          "from the stop-doing-things-anyone-can-do! dept\r\nHaving completely shit the bed in its handling of a recent ransomware act, the city of Columbus, Ohio has decided the person who must be silenced — and… [+4606 chars]"
      },
      {
        source: { id: null, name: "Javacodegeeks.com" },
        author: "Java Code Geeks",
        title:
          "[FREE EBOOKS] Microsoft 365 and SharePoint Online Cookbook, Cybersecurity Strategies and Best Practices & Four More Best Selling Titles",
        description:
          "Hello fellow geeks, Fresh offers await you on our Information Technology Research Library, please have a look! Microsoft 365 and SharePoint Online Cookbook ($31.99 Value) FREE for a Limited Time A complete guide to Microsoft Office 365 apps including SharePoi…",
        url:
          "https://www.javacodegeeks.com/2024/09/free-ebooks-microsoft-365-and-sharepoint-online-cookbook-cybersecurity-strategies-and-best-practices-four-more-best-selling-titles-2.html",
        urlToImage:
          "https://www.javacodegeeks.com/wp-content/uploads/2012/12/jcg-logo.jpg",
        publishedAt: "2024-09-04T10:30:30Z",
        content:
          "A complete guide to Microsoft Office 365 apps including SharePoint, Power Platform, Copilot and more, Second Edition. Microsoft 365 offers tools for content management, communication, process automat… [+1281 chars]"
      },
      {
        source: { id: null, name: "Biztoc.com" },
        author: "aol.com",
        title: "Okta Stock Falls as Outlook Disappoints. Time to Buy the Dip?",
        description:
          "Okta (NASDAQ: OKTA) shares spiraled lower after the cybersecurity company reported solid second-quarter results but offered a disappointing outlook.\nOn the face of it, the latest numbers looked good. Okta's Q2 revenue jumped 16% year over year to $646 million…",
        url: "https://biztoc.com/x/fa4afa1a7e44650a",
        urlToImage: "https://biztoc.com/cdn/fa4afa1a7e44650a_s.webp",
        publishedAt: "2024-09-04T13:02:42Z",
        content:
          "Okta (NASDAQ: OKTA) shares spiraled lower after the cybersecurity company reported solid second-quarter results but offered a disappointing outlook.On the face of it, the latest numbers looked good. … [+131 chars]"
      },
      {
        source: { id: "next-big-future", name: "Next Big Future" },
        author: "cybernewswire",
        title:
          "Blackwired Launches ThirdWatch℠, A Paradigm Shift in Cybersecurity",
        description: "Singapore, Singapore, 4th September 2024, CyberNewsWire",
        url:
          "https://www.nextbigfuture.com/2024/09/blackwired-launches-thirdwatch%e2%84%a0-a-paradigm-shift-in-cybersecurity.html",
        urlToImage:
          "https://nextbigfuture.s3.amazonaws.com/uploads/2024/09/Black-Text_1200x720_1725346401Jkk2cEM8Fw.jpg",
        publishedAt: "2024-09-04T01:00:34Z",
        content:
          "Singapore, Singapore, September 4th, 2024, CyberNewsWire\r\nBlackwired, the leading cyber observatory for disruptive cybersecurity technologies, has announced the launch of ThirdWatch, a groundbreaking… [+3926 chars]"
      },
      {
        source: { id: null, name: "Internet" },
        author: "info@thehackernews.com (The Hacker News)",
        title:
          "Hackers Use Fake GlobalProtect VPN Software in New WikiLoader Malware Attack",
        description:
          "A new malware campaign is spoofing Palo Alto Networks' GlobalProtect VPN software to deliver a variant of the WikiLoader (aka WailingCrab) loader by means of a search engine optimization (SEO) campaign.\n\nThe malvertising activity, observed in June 2024, is a …",
        url:
          "https://thehackernews.com/2024/09/hackers-use-fake-globalprotect-vpn.html",
        urlToImage:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbDg4-mjQ-RpL-zK6OBUbXQfrhWdmap-KZrWSQFyjovAtN7ApDnvyTByFsrFuomTP3EU6F9BJ9gtLcwczReAdxgqFO1PqjEXYhSWIYtNwyrILaT_98e0zWPQ1RHrfuKK9aupae1CLZRErhtGzFoDorJKHqlxPQfqfEpIPWpbPn80f1mTQ_S3zCl-7qQ-b4/s728-rw-e365/Vpn.jpg",
        publishedAt: "2024-09-04T05:31:00Z",
        content:
          "A new malware campaign is spoofing Palo Alto Networks' GlobalProtect VPN software to deliver a variant of the WikiLoader (aka WailingCrab) loader by means of a search engine optimization (SEO) campai… [+3162 chars]"
      },
      {
        source: { id: null, name: "Yahoo Entertainment" },
        author: null,
        title:
          "FTNT, CRWD, or PANW: Which Cybersecurity Stock Is the Best Pick?",
        description: null,
        url:
          "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_97acae2e-5a7b-4f67-8bf0-4e9df04848fa",
        urlToImage: null,
        publishedAt: "2024-09-04T00:39:57Z",
        content:
          "If you click 'Accept all', we and our partners, including 239 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
      },
      {
        source: { id: null, name: "XDA Developers" },
        author: "Ayush Pande",
        title: "5 incredible things you can do with Proxmox",
        description:
          "Some of these projects are easy to pull off, while others require a lot of blood, sweat, and tears",
        url:
          "https://www.xda-developers.com/incredible-things-you-can-do-with-proxmox/",
        urlToImage:
          "https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/09/proxmox.jpg",
        publishedAt: "2024-09-04T15:00:14Z",
        content:
          "Proxmox is often regarded as the definitive operating system for home-lab operations, and for good reason. Whether you’re planning to build a dedicated home lab or just learning the basics of DevOps,… [+5277 chars]"
      },
      {
        source: { id: "techradar", name: "TechRadar" },
        author: "Ellen Jennings-Trace",
        title:
          "The number of active ransomware groups is on the rise, research finds",
        description:
          "2024 has seen a 56% rise in the number active ransomware groups",
        url:
          "https://www.techradar.com/pro/the-number-of-active-ransomware-groups-is-on-the-rise-research-finds",
        urlToImage:
          "https://cdn.mos.cms.futurecdn.net/B3rJKZaiktirLneGg5AcDi-1200-80.jpg",
        publishedAt: "2024-09-04T15:32:00Z",
        content:
          "Research from Searchlight Cyber has shown the number of ransomware groups that operated in the first half of 2024 rose to 73, up from 46 in the same period of 2023. The findings suggest law enforceme… [+1970 chars]"
      },
      {
        source: { id: null, name: "We Live Security" },
        author: null,
        title:
          "The key considerations for cyber insurance: A pragmatic approach",
        description:
          "The process of preparing to be eligible for cyber insurance is beneficial to all businesses. It forces companies to take an audit of their cyber environment, understand the potential risks, and enhance cybersecurity posture where needed.",
        url:
          "https://www.welivesecurity.com/en/business-security/the-key-considerations-for-cyber-insurance-a-pragmatic-approach/",
        urlToImage:
          "https://web-assets.esetstatic.com/wls/2024/9-2024/insurance-part-5.png",
        publishedAt: "2024-09-04T09:00:00Z",
        content:
          "There must be a consideration of the ethical question of contributing to the payment of extortion demands of cybercriminals. Any company that is paying a cyber insurance premium, regardless of whethe… [+4573 chars]"
      },
      {
        source: { id: "next-big-future", name: "Next Big Future" },
        author: "cybernewswire",
        title:
          "INE Security Announces 5 Practical Steps to Elevate Cyber Defense Strategies",
        description: "Cary, North Carolina, 4th September 2024, CyberNewsWire",
        url:
          "https://www.nextbigfuture.com/2024/09/ine-security-announces-5-practical-steps-to-elevate-cyber-defense-strategies.html",
        urlToImage:
          "https://nextbigfuture.s3.amazonaws.com/uploads/2024/09/Cyberwire_Logo_-_INE_Security_-_1200x720px_1724958152J3fE7Dg8qY.jpg",
        publishedAt: "2024-09-04T11:05:28Z",
        content:
          "Cary, North Carolina, September 4th, 2024, CyberNewsWire\r\nIn a proactive response to the rapidly evolving landscape of cyber threats, INE Security, a global leader in cybersecurity and network traini… [+2970 chars]"
      },
      {
        source: { id: "next-big-future", name: "Next Big Future" },
        author: "cybernewswire",
        title:
          "Aembit Named Finalist in Best Identity Management Solution for 2024 SC Awards",
        description:
          "Silver Spring, USA / Maryland, 4th September 2024, CyberNewsWire",
        url:
          "https://www.nextbigfuture.com/2024/09/aembit-named-finalist-in-best-identity-management-solution-for-2024-sc-awards.html",
        urlToImage:
          "https://nextbigfuture.s3.amazonaws.com/uploads/2024/09/aembit-sc-awatds-best-identity-management-solution_1725407874yKxuYf2zpE.jpg",
        publishedAt: "2024-09-04T13:29:21Z",
        content:
          "Silver Spring, USA / Maryland, September 4th, 2024, CyberNewsWire\r\nThe Company’s Workload IAM Platform Was Also Shortlisted for Best Authentication Technology, as Non-Human Identity Security Gains Ur… [+3172 chars]"
      },
      {
        source: { id: null, name: "DevOps.com" },
        author: "cybernewswire",
        title:
          "Blackwired Launches ThirdWatch℠, A Paradigm Shift in Cybersecurity",
        description: "Singapore, Singapore, 4th September 2024, CyberNewsWire",
        url:
          "https://devops.com/blackwired-launches-thirdwatch℠-a-paradigm-shift-in-cybersecurity/",
        urlToImage:
          "https://devops.com/wp-content/uploads/2024/09/Black-Text_1200x720_1725346401Jkk2cEM8Fw.jpg",
        publishedAt: "2024-09-04T01:00:04Z",
        content:
          "Singapore, Singapore, September 4th, 2024, CyberNewsWire\r\nBlackwired, the leading cyber observatory for disruptive cybersecurity technologies, has announced the launch of ThirdWatch, a groundbreaking… [+3926 chars]"
      },
      {
        source: { id: null, name: "CNET" },
        author: "Clifford Colby",
        title:
          "Check if Your Social Security Number Is Part of the National Public Data Hack",
        description:
          "Here's how you can check if your Social Security number was stolen in the data theft, and how to secure your personal information.",
        url:
          "https://www.cnet.com/personal-finance/check-if-your-social-security-number-is-part-of-the-national-public-data-hack/",
        urlToImage:
          "https://www.cnet.com/a/img/resize/7f0d560429e5732f450b3220ba6267bab14c1512/hub/2024/05/21/8dcc7cac-9b65-4150-aea0-c7862d3cbeac/socialsecurity-v2.jpg?auto=webp&fit=crop&height=675&width=1200",
        publishedAt: "2024-09-04T15:28:00Z",
        content:
          "If your personal information was part of the massive theft of a reported 2.9 billion records in December 2023, you can check if your Social Security number was stolen in the National Public Data brea… [+9771 chars]"
      },
      {
        source: { id: "techradar", name: "TechRadar" },
        author: "Sead Fadilpašić",
        title:
          "SEO poisoning and VPN spoofing used to target anything and everything with WikiLoader malware",
        description:
          "Palo Alto saw its VPN tool being spoofed to spread malware through fake websites.",
        url:
          "https://www.techradar.com/pro/vpn/seo-poisoning-and-vpn-spoofing-used-to-target-anything-and-everything-with-wikiloader-malware",
        urlToImage:
          "https://cdn.mos.cms.futurecdn.net/j5YMwZuuKnvAXLyKBEmDrb-1200-80.jpg",
        publishedAt: "2024-09-04T10:00:00Z",
        content:
          "Hackers deploying the WikiLoader malware are shifting tactics, moving away from phishing and into SEO poisoning and VPN spoofing. This is according to a new report from cybersecurity researchers from… [+2090 chars]"
      },
      {
        source: { id: null, name: "Forbes" },
        author:
          "Davey Winder, Senior Contributor, \n Davey Winder, Senior Contributor\n https://www.forbes.com/sites/daveywinder/",
        title: "FBI Issues New Crypto Attack Alert—Do These 4 Things Now",
        description:
          "The FBI has warned organizations with access to crypto assets to take four critical steps as evidence of ongoing and aggressive cyber attacks published.",
        url:
          "https://www.forbes.com/sites/daveywinder/2024/09/04/fbi-issues-new-crypto-attack-alert-do-these-4-things-now/",
        urlToImage:
          "https://imageio.forbes.com/specials-images/imageserve/66d829edacfcb3cfdabd5e33/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        publishedAt: "2024-09-04T10:24:25Z",
        content:
          "FBI issues crypto attack alert\r\ngetty\r\nA newly published public service warning from the U.S. Federal Bureau of Investigation, alert number I-090324-PSA, has warned of ongoing and aggressive attacks … [+4253 chars]"
      }
    ]
  };
  console.log(response);
  let str = ""
  for (let item of response.articles) {
    str =
      str +
      `<div class="card my-4 mx-2" style="width: 18rem;">
                <img src="${item.urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                    <a href="${item.url}" target="_blank" class="btn btn-primary">Go somewhere</a>
                </div>
        </div>`;
  }
  document.querySelector(".content").innerHTML = str;
};
fetchNews(1);
