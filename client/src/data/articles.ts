import { Article, AgeLevelFilter } from "@/types";

export const articles: Article[] = [
  {
    id: "1",
    slug: "great-pyramids-wonders-ancient-world",
    title: "The Great Pyramids: Wonders of the Ancient World",
    description: "Discover how the ancient Egyptians built these magnificent structures over 4,500 years ago with simple tools but incredible engineering skills.",
    content: `
      <p>Have you ever stood before something so huge you had to tilt your head all the way back just to see the top? 🤩 Standing on the Giza plateau, you'd definitely feel tiny next to the pyramids! 😮 The Great Pyramid of Khufu was the tallest thing humans built for over 3,800 years! 🏆 But everyone always wonders: how in the world did they build these massive structures? 🤔</p>
      
      <p>Guess what? Those pyramids weren't built by slaves like in the movies! 🎬 Archaeologists found evidence that skilled workers constructed them instead. ✅ These dedicated workers organized into teams and worked in shifts throughout the year. 👷‍♂️ They worked extra hard during the Nile's yearly flood when farmers couldn't work in their fields. 💦</p>
      
      <h3>Engineering Marvels</h3>
      <p>Can you believe the Great Pyramid's base is level within just 2.1 centimeters? 📏 That's super precise! 🎯 The sides perfectly line up with north, south, east, and west with amazing accuracy. 🧭 They achieved this using simple tools like plumb bobs, square levels, and measuring ropes. 🧵</p>
      
      <p>Workers cut the stone blocks using copper chisels and hard stone balls. 🪨 They moved the blocks using boats when possible and sledges over land. 🚢 Teams of workers then pulled and lifted the blocks into place using ramps, levers, and other simple machines. 💪</p>
      
      <h3>Cultural Significance</h3>
      <p>The pyramids weren't just fancy tombs - they were super important religious monuments. ⛪ According to ancient Egyptian beliefs, the pyramid shape represented the first mound of earth that rose from the waters at the beginning of time. 🌊 They also served as a stairway for the pharaoh to climb up to the stars after death. ✨</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1594741158705-2fb3a4a81f01?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Great Pyramids of Giza",
    imageCredit: "Photo by Ahmed Samir on Unsplash",
    publishDate: "2023-05-15",
    readTime: 8,
    ageLevel: "Middle School",
    tags: [
      { name: "Ancient History", color: "blue" },
      { name: "Egypt", color: "green" }
    ],
    author: {
      name: "Ciaran York",
      initials: "CY",
      bio: "Social studies educator with a passion for making history accessible to young learners."
    },
    didYouKnow: {
      fact: "The Great Pyramid contains about 2.3 million stone blocks, each weighing around 2.5 tons! 😱 The largest blocks in the King's Chamber weigh as much as 80 tons - that's like 16 elephants stacked together! 🐘"
    },
    discussionQuestions: [
      "Why do you think the ancient Egyptians put so much time and effort into building the pyramids? 🤔",
      "How do you think building the pyramids affected everyday life in ancient Egypt? 👨‍👩‍👧‍👦",
      "What can we learn about ancient Egyptian knowledge of math and engineering from the pyramids? 🧮"
    ],
    sources: [
      {
        title: "The Complete Pyramids",
        author: "Lehner, M.",
        publisher: "Thames & Hudson",
        year: 1997
      },
      {
        title: "Pyramids: Treasures, Mysteries, and New Discoveries",
        author: "Hawass, Z.",
        publisher: "White Star Publishers",
        year: 2010
      },
      {
        title: "Who Built the Pyramids?",
        publisher: "National Geographic",
        url: "nationalgeographic.com"
      }
    ],
    relatedArticles: ["4", "5"],
    worksheets: ["1"]
  },
  {
    id: "2",
    slug: "roman-republic-foundation-modern-democracy",
    title: "The Roman Republic: Foundation of Modern Democracy",
    description: "Explore how Rome's political system influenced democratic principles we still use today, from checks and balances to representative government.",
    content: `
      <p>Did you know that many of our ideas about government come from people who lived over 2,000 years ago? 🤯 The Roman Republic, which began around 509 BCE after they kicked out their king, created a political system that would change the world forever. 👑 Their government structure with different branches of power even inspired the people who wrote the American Constitution! 📜</p>
      
      <h3>Checks and Balances</h3>
      <p>Maybe the coolest thing the Romans figured out was how to stop any one person from getting too powerful. 💪 They split power between different parts of their government so everyone kept an eye on each other. 👀</p>
      
      <p>The Republic had two consuls who were like presidents, a Senate filled with wealthy aristocrats who gave advice, and assemblies where regular citizens could vote. 🗳️ Each group had certain powers that limited what the others could do. 🛑</p>
      
      <h3>From Republic to Empire</h3>
      <p>Even with their clever system, the Republic eventually fell apart. 😢 The trouble started when Julius Caesar gained too much power, and it ended when his adopted son Octavian (Augustus) became the first Roman Emperor in 27 BCE. 👑</p>
      
      <p>The story of Rome's fall teaches us important lessons about democracy. 📚 Things like economic inequality, military expansion, and corrupt politicians all helped destroy their government system. 💔</p>
      
      <h3>Legacy in Modern Governance</h3>
      <p>Even though the Roman Republic didn't last forever, its ideas are everywhere in modern governments! 🌍 Concepts like separation of powers, the veto, term limits, and elected representatives all have roots in Roman ideas. 🌱 Even government symbols—like the eagle and the fasces—were borrowed from Rome by many modern nations. 🦅</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1551009175-15bdf9dcb580?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Roman Colosseum",
    publishDate: "2023-05-10",
    readTime: 12,
    ageLevel: "Middle School",
    tags: [
      { name: "Classical History", color: "blue" },
      { name: "Rome", color: "red" }
    ],
    author: {
      name: "Ciaran York",
      initials: "CY",
      bio: "Social studies educator with a passion for making history accessible to young learners."
    },
    didYouKnow: {
      fact: "The word 'republic' comes from the Latin 'res publica,' which means 'public affair' or 'public matter.' 📖 This emphasized that government should belong to all citizens, not just the rulers! 👨‍👩‍👧‍👦"
    },
    discussionQuestions: [
      "How do our modern governments compare to the Roman Republic? 🤔",
      "What do you think makes democratic governments vulnerable to collapse? ⚠️",
      "Why is it important to separate power between different parts of government? 🏛️"
    ],
    sources: [
      {
        title: "SPQR: A History of Ancient Rome",
        author: "Beard, M.",
        publisher: "Liveright",
        year: 2015
      },
      {
        title: "The Roman Republic: A Very Short Introduction",
        author: "Gwynn, D.M.",
        publisher: "Oxford University Press",
        year: 2012
      }
    ],
    relatedArticles: ["1", "5"]
  },
  {
    id: "3",
    slug: "california-gold-rush",
    title: "The California Gold Rush: Striking it Rich in the West",
    description: "Learn about the historic event that transformed California and brought people from all over the world seeking fortune and a new life.",
    content: `
      <p>Imagine finding something shiny in a stream that could make you rich overnight! 🤩 That's exactly what happened to James W. Marshall in January 1848 when he spotted gold flakes while building a sawmill along the American River in California. ✨ This amazing discovery triggered one of the biggest people movements in American history and totally transformed California forever! 🌟</p>
      
      <h3>Gold Fever Spreads</h3>
      <p>Word about the gold discovery traveled pretty slowly at first. 🐌 But by 1849, thousands of hopeful gold-seekers (nicknamed "forty-niners") started pouring in from across America and around the world! 🌎 They came by ship around South America, across Panama, or by wagon train across the continent. 🚂</p>
      
      <p>San Francisco exploded from a tiny settlement of about 200 people in 1846 to a booming city of around 36,000 by 1852! 📈 Towns with fun names like Rough and Ready, Hangtown, and Poker Flat popped up overnight throughout the hills. 🏠</p>
      
      <h3>Life in the Goldfields</h3>
      <p>Looking for gold was super hard and dangerous work. ⛏️ The first forty-niners used simple techniques like panning, where they swirled river water in a shallow pan to separate gold from sand and gravel. 💦 As the easy-to-find gold disappeared, miners had to develop more complicated methods like sluice boxes, hydraulic mining, and digging deep underground. 🕳️</p>
      
      <p>Most miners lived in tents or rough cabins without many comforts. 🏕️ Food, tools, and basic supplies cost a fortune because everything had to be shipped from far away. 💰 Many miners spent every penny they earned just to survive, and most never actually got rich. 😢</p>
      
      <h3>A Diverse Population</h3>
      <p>The Gold Rush brought people from all over the world together! 🌏 Miners came from Mexico, Chile, China, Australia, Europe, and the eastern United States. 🧳 This created one of America's first truly multicultural regions, though sadly there was also a lot of discrimination and conflict. 👥</p>
      
      <h3>California Transformed</h3>
      <p>The Gold Rush changed California forever! 🔄 It helped California become a state in 1850 and led to the building of roads, schools, churches, and other important buildings. 🏫 The huge population boom created a need for food, resulting in California's first farms and ranches. 🚜</p>
      
      <p>While the Gold Rush eventually ended as gold became harder to find, its effects are still felt in California's diverse population, entrepreneurial spirit, and continuing growth. 🌱</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Gold mining equipment and river",
    publishDate: "2023-07-04",
    readTime: 10,
    ageLevel: "Elementary",
    tags: [
      { name: "American History", color: "blue" },
      { name: "Westward Expansion", color: "orange" }
    ],
    author: {
      name: "Ciaran York",
      initials: "CY",
      bio: "Social studies educator with a passion for making history accessible to young learners."
    },
    didYouKnow: {
      fact: "The total amount of gold found during the California Gold Rush weighs about 750,000 pounds! 😲 That would be worth about $2 billion today - enough money to buy 20 million video game consoles! 🎮"
    },
    discussionQuestions: [
      "Why do you think people were willing to risk so much to search for gold in California? 💭",
      "How did the Gold Rush change California's environment and landscape? 🏞️",
      "What other 'gold rushes' or resource booms have happened in history? How were they similar or different? 🔍"
    ],
    sources: [
      {
        title: "The California Gold Rush: A History Just for Kids",
        author: "KidCaps",
        publisher: "CreateSpace",
        year: 2013
      },
      {
        title: "Days of Gold: The California Gold Rush and the American Nation",
        author: "Johnson, S.L.",
        publisher: "University of California Press",
        year: 2018
      }
    ],
    relatedArticles: ["5", "6"]
  },
  {
    id: "4",
    slug: "mysterious-riddles-sphinx",
    title: "Mysterious Riddles of the Sphinx",
    description: "The Great Sphinx of Giza has guarded the pyramids for thousands of years. Learn about its origins and the mysteries that still surround it.",
    content: `
      <p>Have you ever seen a creature that's part human, part lion? 🦁 The Great Sphinx of Giza is exactly that – a huge statue with a human head and a lion's body! 🤩 This massive guardian has been watching over the pyramids for thousands of years and still holds many secrets. 🔍</p>
      
      <h3>An Ancient Marvel</h3>
      <p>The Sphinx is ENORMOUS! 😮 At 241 feet long and 66 feet high, it's the largest statue carved from a single piece of stone in the whole world! 🌍 It faces directly from west to east, perfectly lining up with the sunrise on certain special days. 🌅</p>
      
      <p>Most experts think the Sphinx was built around 2500 BCE during the reign of Pharaoh Khafre (that's probably his face on it!). 👑 But some researchers have different ideas! 🤔 They point to interesting water erosion patterns that might suggest it was built during a much wetter time, thousands of years earlier than we thought! 💧</p>
      
      <h3>Lost Nose and Missing Beard</h3>
      <p>Did you know the Sphinx wasn't always missing its nose? 👃 Despite what movies might show, Napoleon's soldiers didn't shoot it off. ❌ Archaeological evidence suggests it was actually damaged in the 14th century by someone who thought the monument was idolatrous. 📜 The Sphinx also once had a magnificent royal beard - pieces of it are now sitting in museums in London and Cairo! 🧔</p>
      
      <h3>Hidden Chambers?</h3>
      <p>Here's where it gets super exciting! 🤫 Modern technology has detected mysterious empty spaces underneath the Sphinx! 📡 While some of these are probably just natural holes in the limestone, archaeologists are still investigating whether some might be human-made chambers. 👷‍♀️ Could there be undiscovered treasures or historical records hidden beneath this ancient guardian? 💎</p>
      
      <p>Between the Sphinx's giant paws stands a stone tablet called the Dream Stela. 💭 It tells the story of how the Sphinx appeared to Pharaoh Thutmose IV in a dream, promising him the throne if he would dig the monument out from the sand that had buried much of it. 👑 Some wonder if this ancient tablet might contain clues to even more Sphinx secrets! 🗝️</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1564979045531-fa386a275b27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Sphinx at Giza",
    publishDate: "2023-06-01",
    readTime: 10,
    ageLevel: "Middle School",
    tags: [
      { name: "Ancient Egypt", color: "blue" }
    ],
    author: {
      name: "Ciaran York",
      initials: "CY",
      bio: "Social studies educator with a passion for making history accessible to young learners."
    },
    didYouKnow: {
      fact: "The Arabic name for the Sphinx is Abu al-Hol, which means 'Father of Terror'! 😱 This reflects the awe and fear this massive monument inspired in ancient times! 🙌"
    },
    discussionQuestions: [
      "Why do you think the ancient Egyptians created a monument combining human and animal features? 🧠",
      "What might explain the different theories about the Sphinx's age? 📆",
      "How have modern technologies changed our understanding of ancient monuments? 🛰️"
    ],
    relatedArticles: ["1", "5"]
  },
  {
    id: "5",
    slug: "mesopotamia-cradle-civilization",
    title: "Mesopotamia: Cradle of Civilization",
    description: "Between the Tigris and Euphrates rivers, humanity's first cities emerged with remarkable innovations in writing, law, and architecture.",
    content: `
      <p>Have you ever wondered where things like writing, cities, and organized government first began? 🤔 Look no further than Mesopotamia - a name that means "between rivers" in Greek! 🌊 In the fertile valley between the Tigris and Euphrates rivers (in modern-day Iraq), humans first changed from wandering hunter-gatherers to settled farmers around 10,000 BCE. 🌱</p>
      
      <h3>The Birth of Writing</h3>
      <p>One of Mesopotamia's most amazing gifts to humanity was the invention of writing! ✍️ Around 3400 BCE, the Sumerians developed cuneiform script—starting with simple picture symbols for counting things, then evolving into a complex system that could express abstract ideas and record stories. 📝</p>
      
      <p>The Epic of Gilgamesh, one of the oldest written stories ever found, comes from this region! 📚 It even includes a great flood story that's actually older than the biblical story of Noah by more than a thousand years! 🌧️</p>
      
      <h3>Laws and Governance</h3>
      <p>Have you heard of the Code of Hammurabi? 📜 Created around 1754 BCE, it's one of the earliest and most complete sets of laws we've ever found! 👨‍⚖️ Its 282 laws covered everything from family rights to professional standards and punishments for crimes. 🏛️</p>
      
      <p>The famous saying "an eye for an eye" actually comes from this ancient code! 👁️ It was meant to create fair punishments rather than allowing endless revenge between families. ⚖️</p>
      
      <h3>Technological Innovations</h3>
      <p>Mesopotamian engineers were super creative problem-solvers! 🔧 They developed amazing irrigation systems that turned dry land into productive farmland where crops could grow. 🌾 They invented the wheel around 3500 BCE, completely changing transportation and pottery-making forever! 🛞</p>
      
      <p>Have you seen pictures of ziggurats? 🏙️ These massive stepped temples were architectural wonders that influenced sacred buildings around the world for thousands of years! 🕌</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1570870802499-f12b24252110?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Ancient Mesopotamian ruins and artifacts",
    publishDate: "2023-04-20",
    readTime: 9,
    ageLevel: "Middle School",
    tags: [
      { name: "Ancient History", color: "blue" },
      { name: "Mesopotamia", color: "purple" }
    ],
    author: {
      name: "Ciaran York",
      initials: "CY",
      bio: "Social studies educator with a passion for making history accessible to young learners."
    },
    didYouKnow: {
      fact: "The world's oldest known written recipe is from Mesopotamia—a recipe for beer written on a clay tablet around 3900 BCE! 🍺 Beer was considered a gift from the gods and was often used in religious ceremonies! 🙏"
    },
    discussionQuestions: [
      "How did the geography between the two rivers influence the development of Mesopotamian civilization? 🗺️",
      "Why is writing considered one of humanity's most important inventions? 📖",
      "How do the achievements of Mesopotamia continue to influence our world today? 🌐"
    ],
    sources: [
      {
        title: "Mesopotamia: The Invention of the City",
        author: "Leick, G.",
        publisher: "Penguin Books",
        year: 2002
      },
      {
        title: "Ancient Mesopotamia: Portrait of a Dead Civilization",
        author: "Oppenheim, A.L.",
        publisher: "University of Chicago Press",
        year: 1977
      }
    ],
    relatedArticles: ["1", "2"]
  },
  {
    id: "6",
    slug: "us-states-geography-regions",
    title: "The United States: Exploring America's Diverse Regions",
    description: "Take a journey through the different regions of the United States and discover what makes each area special and unique.",
    content: `
      <p>Did you know the United States is like a giant puzzle made up of 50 unique pieces? 🧩 From snowy mountains to sunny beaches, America has an amazing variety of landscapes, cultures, and histories! 🏔️ Let's take a fun trip across the country to discover what makes each region special! 🚐</p>
      
      <h3>The Northeast</h3>
      <p>The Northeast includes states like Massachusetts, New York, and Pennsylvania. 🗽 This is where the American Revolution began, so you'll find tons of cool historical sites here! 🇺🇸 The Northeast has gorgeous fall leaves that turn bright red and orange, busy cities like New York and Boston, and important industries like finance and education. 🍁</p>
      
      <p>In New England (Maine, New Hampshire, Vermont, Massachusetts, Rhode Island, and Connecticut), you'll discover charming coastal towns, yummy maple syrup farms, and some of America's oldest schools and colleges. 🏫</p>
      
      <h3>The South</h3>
      <p>The Southern states include Virginia, North Carolina, South Carolina, Georgia, Florida, Alabama, Mississippi, Louisiana, and others. 🌴 The South is famous for its friendly "y'all come back now" hospitality, mouth-watering food like barbecue and fried chicken, and important civil rights history. 🍗</p>
      
      <p>Florida's Everglades, Louisiana's swampy bayous, and the misty Great Smoky Mountains are some of the South's natural wonders. 🐊 The region has an incredible musical heritage too, with blues, jazz, country, and rock 'n' roll all starting here! 🎸</p>
      
      <h3>The Midwest</h3>
      <p>Often called America's Heartland, the Midwest includes states like Ohio, Michigan, Illinois, Wisconsin, Minnesota, Iowa, and others. ❤️ This region is known for its super friendly people, farming, and the Great Lakes, which contain 20% of the world's freshwater! 💧</p>
      
      <p>Chicago, one of America's biggest cities, is located in the Midwest, along with important car-making centers in Michigan. 🚗 The Midwest grows much of the nation's corn, wheat, and soybeans in its fertile farmlands - that's why it's sometimes called America's breadbasket! 🌽</p>
      
      <h3>The West</h3>
      <p>The Western states include California, Oregon, Washington, Colorado, Nevada, Utah, and others. 🏄‍♀️ This region has mind-blowing geographic diversity, from the Pacific coastline to the Rocky Mountains, and from hot deserts to giant redwood forests! 🌲</p>
      
      <p>The West is home to many famous national parks like Yellowstone, Yosemite, and the Grand Canyon. 🏞️ California, the state with the most people, has such a huge economy that if it were its own country, it would be one of the richest in the world! 💰</p>
      
      <h3>Alaska and Hawaii</h3>
      <p>These non-contiguous states (meaning they don't touch the other 48) add even more variety to America! 🗺️ Alaska, the biggest state by area, has magnificent wilderness, wildlife, and mountains, including Denali, North America's highest peak. 🐻 Hawaii, a volcanic island chain in the Pacific, has a tropical climate and a unique cultural heritage blending native Hawaiian, Asian, and Western influences. 🌺</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1551272744-5df0498cecc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Map of the United States showing different regions",
    publishDate: "2023-08-15",
    readTime: 11,
    ageLevel: "Elementary",
    tags: [
      { name: "Geography", color: "green" },
      { name: "United States", color: "blue" }
    ],
    author: {
      name: "Ciaran York",
      initials: "CY",
      bio: "Social studies educator with a passion for making history accessible to young learners."
    },
    didYouKnow: {
      fact: "The United States has 63 national parks covering over 52 million acres! 🏞️ The first national park, Yellowstone, was established in 1872, becoming the first national park in the world! 🌋"
    },
    discussionQuestions: [
      "Which region of the United States would you most like to visit and why? 🧳",
      "How does the geography of a region affect the way people live there? 🏠",
      "What are some special features of the region where you live? 📍"
    ],
    sources: [
      {
        title: "The Regions of the United States",
        author: "Blumenthal, K.",
        publisher: "Children's Press",
        year: 2018
      },
      {
        title: "National Geographic Kids United States Atlas",
        publisher: "National Geographic Kids",
        year: 2020
      }
    ],
    relatedArticles: ["3", "5"]
  }
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};

export const getRelatedArticles = (articleId: string): Article[] => {
  const article = getArticleById(articleId);
  if (!article || !article.relatedArticles) return [];
  
  return article.relatedArticles
    .map(id => getArticleById(id))
    .filter((article): article is Article => article !== undefined);
};

export const searchArticles = (query: string, ageLevel: AgeLevelFilter = 'All'): Article[] => {
  query = query.toLowerCase();
  
  return articles.filter(article => {
    // Filter by age level if specified
    if (ageLevel !== 'All' && article.ageLevel !== ageLevel) {
      return false;
    }
    
    // Search in title, description, and content
    return (
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query) ||
      article.content.toLowerCase().includes(query) ||
      article.tags.some(tag => tag.name.toLowerCase().includes(query))
    );
  });
};