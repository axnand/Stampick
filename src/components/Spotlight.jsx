'use client'
import React, { useState } from "react";

const Spotlight = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  const spotlightData = {
    all: [
      {
        title: "India Post to release stamps on Ramayana,  Mahabharata: Ravi Shankar Prasad",
        image: "/spotlight/Ramayna.svg",
        description: "Government will release stamps on Ramayana, Mahabharata, besides honoring freedom fighters.",
        source: "Powered by StamPick",
        link:"https://economictimes.indiatimes.com/news/politics-and-nation/india-post-to-release-stamps-on-ramayana-mahabharata-ravi-shankar-prasad/articleshow/48775918.cms"
      },
      {
        title: "	Philatelists take centre stage at KARNAPEX 2024",
        image: "/spotlight/Philatelist.svg",
        description: "KARNAPEX 2024, which took place in Bengaluru’s Sree Kanteerava Indoor Stadium between the 5th and 8th of January, showcased the cultural richness and historical splendour of stamps.  This 13th state-level philatelic exhibition immersed stamp enthusiasts, offering more than 690 frames filled with stamps that paid tribute to Karnataka’s diverse heritage.",
        source: "Spotlight",
        link:"https://www.thehindu.com/news/cities/bangalore/philatelists-take-centre-stage-at-karnapex-2024/article67715288.ece"      },
      {
        title: "	#NationalPhilatelyDay: The charm of stamp collection that was, and is",
        image: "/spotlight/PhilateyDay.jpg",
        description: "On National Philately Day, Delhi-based philatelists talk about their love for collecting stamps and their coveted collections running into lakhs of stamps and postal material. Away from the Capital’s busy life, a group of veteran stamp collectors used to meet every month, in RK Puram, and discuss about and all things philately including their collections that have lakhs of stamps.",
        source: "Spotlight",
        link:"https://www.hindustantimes.com/lifestyle/art-culture/nationalphilatelyday-the-charm-of-stamp-collection-that-was-and-is-101634104977848.html"
      },
      {
        title: "	A collection worth bowing to: Abdul Rasul's trove of 5,915 mosque stamps sets a world record",
        image: "/spotlight/StampRecord.jpeg",
        description: "Y. Abdul Rasul was one of many philatelists collecting whatever stamps came his way, till a chance meeting with Viswanatha Iyer, another philatelist, in 2005 paved the way for his entry into the Guinness Book of Records.",
        source: "Spotlight",
        link:"https://www.thehindu.com/news/national/tamil-nadu/a-collection-worth-bowing-to/article18962311.ece"
      },
      {
        title: "	The 10 Most Valuable U.S. Stamps",
        image: "/spotlight/USstamp.svg",
        description: "What draws people to stamps? Why do we get a thrill from seeing Wonder Woman, astronauts, presidents, and Americana on these small pieces of affixable paper? One possibility is that they are at once so many things: they’re art, they’re history, they’re antiques, they’re money, they’re miniatures—all wrapped up in the romanticism of the letters they set into motion.",
        source: "Spotlight",
        link:"https://www.history.com/news/10-most-valuable-stamps-in-american-history"
      }
    ],
    news: [
      {
        title: "Shoring up philately",
        image: "/spotlight/News-B.svg",
        description: "A day dedicated to the pursuit of stamps is just three weeks away and groups formed around the hobby are planning events to observe it. Over the years, these groups have dwindled, and the enthusiasm for such gatherings has waned.The Hindu Downtown tracks efforts to check the decline ",
        source: "Powered by StamPick",
        link:"https://www.thehindu.com/news/cities/chennai/shoring-up-philately/article68668367.ece"
      },
      {
        title: "Britain’s Royal Mail celebrates 65 years of Paddington with Sept. 5 issue",
        image: "/spotlight/Sep-5.jpg",
        description: "Paddington, Peru’s most famous talking bear, celebrates his 65th birthday in 2023, and Great Britain’s Royal Mail commemorates the occasion with 10 stamps in a Sept. 5 issue.Paddington first appeared in the 1958 book A Bear Called Paddington, written by Michael Bond. The dozens of Paddington books that followed have been translated into more than 40 languages, with over 35 million copies sold worldwide. Additionally, the friendly bear has starred in various television series and feature films.A set of six stamps, presented in three horizontal se-tenant (side-by-side) pairs, feature illustrations from Ivor Wood’s four-frame strip cartoons of Paddington originally published in the late 1970s in the London newspaper Evening News.",
        source: "Spotlight",
        link:"https://www.linns.com/news/world-stamps-postal-history/britain-s-royal-mail-celebrates-65-years-of-paddington-with-sept.-5-issue"
      },
      {
        title: "Britain celebrates Discworld book series with Aug. 10 set",
        image: "/spotlight/Aug-10.jpg",
        description: "A set of eight stamps issued Aug. 10 by Great Britain’s Royal Mail celebrates Terry Pratchett’s fantasy Discworld book series.Royal Mail calls Pratchett (1948-2015) one of the United Kingdom’s greatest fantasy writers. He was knighted by Queen Elizabeth II on Feb. 18, 2009, for services to literature.The stamp issue marks 40 years since the publication of The Colour of Magic, the first of 41 novels in the Discworld series. The novels have since been translated into over 40 languages, with more than 100 million copies sold worldwide.",
        source: "Spotlight",
        link:"https://www.linns.com/news/world-stamps-postal-history/britain-celebrates-discworld-book-series-with-aug.-10-set"
      },
      {
        title: "Dramatic designs highlight Germany 1933 Wagner semipostals",
        image: "/spotlight/1933-Wagner.jpg",
        description: "Richard Wagner (1813-83), one of the most influential composers of the 19th century, was born in Leipzig, Saxony, in the same year that the historic Battle of Nations was fought there.The allied coalition of Prussia, Russia, Austria and Sweden inflicted a decisive defeat on France and Napoleon’s satellite armies. Soldiers from Saxony fought on both sides in the battle, and the stupendous conflict seemed to foreshadow the heroic and romantic themes of Wagner’s music.Unlike most composers, Wagner wrote both the music and libretto for his operas. His synthesizing of poetic, visual, dramatic and musical elements transformed and fully realized opera as an art form. Despite his musical genius, his antisemitism has sometimes consigned his work to a kind of musical limbo.",
        source: "Spotlight,",
       link:"https://www.linns.com/news/world-stamps-postal-history/dramatic-designs-highlight-germany-1933-wagner-semipostals"
      },
      {
        title: "Iceland stamps are back to commemorate 150th anniversary",
        image: "/spotlight/Iceland.jpg",
        description: "Almost three years after it stopped issuing stamps, Iceland Post (Pósturinn) has announced a new set of stamps to be released Aug. 23. However, whether this will be a one-off occasion or Iceland will issue further new stamps is not known.When Linn’s Stamp News asked Iceland Post if further new stamps were planned, Freyja Auðunsdóttir, manager of Iceland Post’s marketing department, replied that “nothing has been decided yet but who knows.”The new stamps, which are se-tenant (side-by-side) in a souvenir sheet of four, celebrate the 150th anniversary of Iceland’s first stamps issued in 1873 (Scott 1-7).",
        source: "Spotlight",
        link:"https://www.linns.com/news/world-stamps-postal-history/iceland-stamps-are-back-to-commemorate-150th-anniversary"
      }
    ],
    interviews: [
      {
        title: "A Chat with Samuel West - #philately",
        image: "/spotlight/Interviews-B.svg",
        description: "I interview and chat with Actor and Philatelist, Samuel West, in this very special episode of #philately.Sam's love for philately is inspiring and thought provoking, watch and listen as he provides a wonderful insight into stamp collecting, his specialized collection, Postcrossing, Stamp Shows, the Virtual philatelic world, and more.",
        source: "Powered by StamPick",
        link: "https://www.youtube.com/watch?v=Fu35uViRAJg"
      },
      {
        title: "	Stampex 2023 Visit: ⦁	#philately 43",
        image: "/spotlight/Stampex-2023.jpg",
        description: "Britain’s Royal Mail releases new stamps celebrating Paddington.",
        source: "Spotlight",
        link:"https://youtu.be/ZWdmxN6-zN4?si=1TSMcZ8kMmTJG3Nl"
      },
      {
        title: "	Interview with a Philatelic Icon - Wade Saadi",
        image: "/spotlight/Wade-Saadi.jpg",
        description: "Britain’s Royal Mail releases new stamps celebrating Paddington.",
        source: "Spotlight",
        link:"https://www.youtube.com/live/3mIS0yG_kt8?si=hplxWvO559q0fULQ"
      },
      {
        title: "	Detecting counterfeit USPS Forever Stamps with Wayne Youngblood",
        image: "/spotlight/Wayne.jpg",
        description: "Britain’s Royal Mail releases new stamps celebrating Paddington.",
        source: "Spotlight"
      },
      {
        title: "	How To Assess and Break Down a Stamp Collection",
        image: "/spotlight/Conversations.jpg",
        description: "Britain’s Royal Mail releases new stamps celebrating Paddington.",
        source: "Spotlight",
        link:"https://youtu.be/-RdTesbKLbs?si=dJyUzNTI2NRyutWx"
      }
    ]
  };

  const tabs = ["all", "news", "interviews"];

  return (
    <div className="bg-[#2B241D] text-white px-10 py-7 rounded-3xl my-10 w-full flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Spotlight</h2>

      <div className="flex w-full justify-between border-b pb-2 border-b-white border-opacity-10 mb-8 ">
        <nav className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`text-sm capitalize transition-all duration-300 hover: ${
                selectedTab === tab
                  ? "border-b-2 pb-2 border-white text-white"
                  : "text-gray-400 pb-2 hover:text-white"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
        <div className="font-semibold cursor-pointer text-gray-300 transition hover:text-white">
          View all Posts ➜
        </div>
      </div>

      {/* Content */}
      <div className="flex space-x-16 w-full justify-between">
        
        <div className="w-[50%] flex flex-col space-y-3">
          <img
            className="w-full h- object-cover rounded-lg mb-4"
            src={spotlightData[selectedTab][0].image}
            alt={spotlightData[selectedTab][0].title}
          />
          <div className="text-[#783A73] text-xs font-semibold">POWERED BY STAMPICK</div>
          <a href={spotlightData[selectedTab][0].link}><h3 className="text-3xl font-semibold mb-2 underline underline-offset-4">
            {spotlightData[selectedTab][0].title}
          </h3></a>
          <p className="text-gray-400 mb-4">
            {spotlightData[selectedTab][0].description}
          </p>
          
        </div>
        <div className="flex flex-col space-y-4 w-[50%]">
  {spotlightData[selectedTab].slice(1).map((item, index) => (
    <div
      key={index}
      className="flex space-x-4 items-center border-b border-white border-opacity-15 pb-2 mt-4"
    >
      <div className="flex flex-col space-y-2 w-full">
        <div className="text-[#786B3A] text-sm">SPOTLIGHT</div>
        <a
          href={item.link}
          className="text-lg font-bold underline text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.title}
        </a>
      </div>
      <img
        className="w-[400px] h-[105px] object-cover rounded-2xl ml-4" // Added ml-4 here
        src={item.image}
        alt={item.title}
      />
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Spotlight;
