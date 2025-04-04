import { Article, AgeLevelFilter } from "@/types";

export const articles: Article[] = [
  {
    id: "11",
    slug: "ancient-greek-geography",
    title: "Ancient Greek Geography: The Landscape that Shaped a Civilization",
    description: "Discover how mountains, islands, and the Mediterranean Sea influenced Greek development, city-states, and the unique Greek way of life.",
    content: `
      <p>Did you know that Greece is one of the most mountainous countries in Europe? 🏔️ And it has one of the longest coastlines in the world relative to its size! 🌊 These geographic features didn't just make Greece beautiful—they actually shaped how its ancient civilization developed in fascinating ways! 🧭</p>

      <h3>A Land of Mountains and Islands</h3>
      <p>Ancient Greece wasn't a unified country like modern nations. 🗺️ Mountains divided the mainland into many separate valleys and plains, which led to the development of independent city-states like Athens, Sparta, and Thebes. 🏛️ These mountains made travel difficult by land, which is why each city-state developed its own unique government, army, and customs! 🏙️</p>

      <p>Greece also includes over 2,000 islands scattered throughout the Aegean and Ionian seas! 🏝️ Island city-states like Crete, Rhodes, and Lesbos developed their own distinct cultures while still maintaining connections with the mainland. 🚢</p>

      <h3>The Mediterranean Climate</h3>
      <p>Most of Greece has what we call a "Mediterranean climate" with hot, dry summers and mild, rainy winters. ☀️ This climate was perfect for growing crops like olives, grapes, and figs, which became staples of the Greek diet and economy. 🫒</p>

      <p>The limited amount of flat land suitable for farming meant Ancient Greeks had to be creative with their agriculture. 👨‍🌾 They terraced hillsides to create more farming space and carefully managed their olive groves and vineyards. 🍷 Since only about 20-30% of Greek land could be farmed, food was sometimes scarce, which contributed to Greek colonization of other Mediterranean regions. 🌱</p>

      <h3>The Sea as a Highway</h3>
      <p>With so many mountains making land travel difficult, the Ancient Greeks turned to the sea! 🌊 The Mediterranean became their highway, connecting Greek cities and islands through maritime trade routes. ⛵</p>

      <p>Did you know that no place in Greece is more than 60 miles from the sea? 😮 This close relationship with the water led the Greeks to become expert shipbuilders and sailors. 🚣‍♂️ Cities with good harbors, like Athens with its port at Piraeus, became powerful trading centers that connected to Egypt, Phoenicia (modern Lebanon), and other Mediterranean civilizations. 🏮</p>

      <h3>Natural Resources</h3>
      <p>While Greece lacked some natural resources like lumber and precious metals, it had excellent marble and clay deposits. 🧱 Greek sculptors created amazing statues using local marble from Mount Pentelicus near Athens. 🗿 Rich clay deposits allowed potters to create beautiful, distinctive pottery that was exported throughout the Mediterranean. 🏺</p>

      <p>The shortage of certain resources encouraged Greeks to establish colonies and trading networks across the Mediterranean and Black Sea regions. 🌍 This expansion spread Greek culture, language, and ideas throughout these regions. 🔤</p>

      <h3>Defending the Land</h3>
      <p>Geography also influenced how Greeks defended their territories! 🛡️ Mountain passes could be held by small numbers of soldiers against much larger armies—remember the famous Battle of Thermopylae where 300 Spartan warriors held off thousands of Persian soldiers in a narrow mountain pass? 🗡️</p>

      <p>The sea provided both opportunity and danger. 🌊 It allowed Greek cities to build powerful navies, like Athens with its fleet of fast triremes, but it also exposed them to raids and invasions from other seafaring peoples. ⚓</p>

      <p>The next time you look at a map of Greece with its jagged coastlines, scattered islands, and rugged mountains, remember that these geographic features helped create one of history's most influential civilizations! 🌟</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1503152394-c571994fd383?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Ancient Greek ruins overlooking the Mediterranean Sea",
    imageCredit: "Photo by Arthur Yeti on Unsplash",
    publishDate: "2025-04-03",
    readTime: 10,
    ageLevel: "Middle School",
    tags: [
      { name: "Ancient Greece", color: "blue" },
      { name: "Geography", color: "green" }
    ],
    author: {
      name: "Ciaran York",
      initials: "CY",
      bio: "Social studies educator with a passion for making history accessible to young learners."
    },
    didYouKnow: {
      fact: "The Greek mainland has over 9,000 miles of coastline! 🌊 That's more than the entire west coast of the United States! 🗺️ This extensive coastline meant that fishing and sea trade became essential parts of Greek life and economy! 🐟"
    },
    quiz: [
      {
        question: "How did mountains influence the development of ancient Greece?",
        options: [
          "They provided valuable mining resources",
          "They created a barrier that kept out invaders",
          "They divided the land into separate regions that developed into independent city-states",
          "They were used as religious worship sites"
        ],
        correctAnswer: 2,
        explanation: "Mountains divided Greece into many separate valleys and plains, which led to the development of independent city-states, each with its own government and customs."
      },
      {
        question: "Why did the ancient Greeks become skilled sailors?",
        options: [
          "They enjoyed water sports",
          "Mountains made land travel difficult, so they relied on sea routes",
          "They wanted to escape the hot climate",
          "They were following religious traditions"
        ],
        correctAnswer: 1,
        explanation: "With mountains making land travel difficult, ancient Greeks turned to the sea as their highway, becoming skilled sailors and creating maritime trade routes."
      },
      {
        question: "What percentage of Greek land was suitable for farming?",
        options: [
          "About 20-30%",
          "About 50-60%",
          "About 70-80%",
          "Almost all of it"
        ],
        correctAnswer: 0,
        explanation: "Only about 20-30% of Greek land could be farmed, which led to food scarcity at times and contributed to Greek colonization of other Mediterranean regions."
      }
    ],
    sources: [
      {
        title: "The Geography of Ancient Greece",
        author: "Hammond, N.G.L.",
        publisher: "Oxford University Press",
        year: 1994
      },
      {
        title: "The Aegean World: A Guide to the Cycladic, Minoan, and Mycenaean Antiquities in the Ashmolean Museum",
        author: "Sherratt, S.",
        publisher: "Ashmolean Museum",
        year: 2000
      }
    ],
    relatedArticles: ["2", "5"],
    featured: "Greek geography"
  },

  {
    id: "12",
    slug: "greek-islands-ancient-modern",
    title: "Greek Islands: Ancient Treasures and Modern Paradise",
    description: "Explore the fascinating history and stunning beauty of Greece's most famous islands, from Crete's ancient Minoan palaces to Santorini's breathtaking views.",
    content: `
      <p>Have you ever dreamed of visiting islands with crystal clear blue water, white-washed buildings, and thousands of years of amazing history? 🏝️ The Greek islands are like a magical collection of unique gems scattered across the sparkling Aegean and Ionian seas! 🌊 With over 6,000 islands (though only about 227 are inhabited), each has its own special character and stories to tell! 🗿</p>

      <h3>Crete: Birthplace of Europe's First Advanced Civilization</h3>
      <p>The largest Greek island, Crete, was home to Europe's earliest advanced civilization—the Minoans! 👑 Around 4,000 years ago, while much of Europe was still in the Bronze Age, the Minoans were building massive palace complexes with indoor plumbing, colorful art, and complex architecture! 🏰</p>

      <p>The most famous Minoan palace is Knossos, which according to Greek mythology was home to the legendary King Minos and the terrifying half-man, half-bull Minotaur who lived in a labyrinth beneath the palace! 🐂 Archaeologists discovered this amazing site in 1900, revealing beautiful frescoes (wall paintings) showing Minoan life, including the famous "bull-leaping" scenes where athletes performed acrobatic feats over charging bulls! 🤸‍♂️</p>

      <h3>Santorini: The Volcano that Changed History</h3>
      <p>Santorini might be the most photographed Greek island, with its stunning white buildings perched on dramatic cliffs overlooking a sunken volcanic crater! 📸 But did you know this picturesque island has an explosive past? 💥</p>

      <p>Around 1600 BCE, Santorini (then called Thera) experienced one of the largest volcanic eruptions in human history! 🌋 This massive explosion destroyed the thriving Minoan settlement of Akrotiri, burying it under volcanic ash—similar to what happened at Pompeii, but 1,500 years earlier! 😮 Archaeologists have uncovered this "Bronze Age Pompeii" with amazingly well-preserved multi-story buildings, pottery, and beautiful frescoes! 🏺</p>

      <p>Some scientists believe this catastrophic eruption may have inspired Plato's story of Atlantis, the legendary advanced civilization that sank beneath the waves! 🌊 The tsunami waves from the eruption devastated coastal settlements across the Aegean, potentially contributing to the decline of Minoan civilization on Crete. 🌍</p>

      <h3>Rhodes: Home of the Colossus</h3>
      <p>The island of Rhodes once boasted one of the Seven Wonders of the Ancient World—the Colossus of Rhodes! 🗽 This massive bronze statue of the Greek sun god Helios stood over 100 feet tall and guarded the harbor entrance. ☀️ Though it stood for only 54 years before being toppled by an earthquake in 226 BCE, its impressive size and engineering inspired awe throughout the ancient world! 😲</p>

      <p>During the Middle Ages, Rhodes became an important base for the Knights Hospitaller, who built impressive fortifications that still stand today! 🏰 The Medieval Old Town of Rhodes is one of the best-preserved medieval towns in Europe and is now a UNESCO World Heritage site! 🛡️</p>

      <h3>Delos: The Sacred Island</h3>
      <p>The tiny island of Delos was one of the most sacred places in the ancient Greek world! ✨ According to mythology, it was the birthplace of the twin gods Apollo and Artemis. 👫 Because of its sacred status, Delos became a major religious center with impressive temples and sanctuaries. 🏛️</p>

      <p>Interestingly, because Delos was considered so holy, no one was allowed to be born or die on the island! 👶 Pregnant women and people who were seriously ill had to be transported to nearby islands! 🚣‍♀️ Today, Delos is an uninhabited archaeological site where visitors can walk among the ruins of this once-thriving sacred center. 🏗️</p>

      <h3>The Islands Today</h3>
      <p>The Greek islands continue to enchant visitors with their blend of stunning natural beauty, rich history, and vibrant culture! 🎭 From the party beaches of Mykonos to the quiet fishing villages of less-visited islands, there's something magical about these sun-drenched lands surrounded by the crystal-clear Mediterranean. 🌞</p>

      <p>Island-hopping remains one of the best ways to experience the diversity of Greek island culture, as each island maintains its own unique traditions, architecture, and even dialect! 🚢 Local festivals, food specialties, and crafts vary from island to island, creating a rich tapestry of Greek island life that has endured for thousands of years! 💃</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "White-washed buildings on Santorini island with blue domed churches overlooking the Aegean Sea",
    imageCredit: "Photo by Ryan Spencer on Unsplash",
    publishDate: "2025-04-03",
    readTime: 11,
    ageLevel: "Middle School",
    tags: [
      { name: "Ancient Greece", color: "blue" },
      { name: "Geography", color: "green" }
    ],
    author: {
      name: "Ciaran York",
      initials: "CY",
      bio: "Social studies educator with a passion for making history accessible to young learners."
    },
    didYouKnow: {
      fact: "The island of Ikaria is named after Icarus of Greek mythology who, according to legend, fell into the sea nearby when his wax wings melted after flying too close to the sun! ☀️ Today, Ikaria is famous as one of the world's 'Blue Zones' where people live exceptionally long lives—many over 100 years old! 👵"
    },
    quiz: [
      {
        question: "Which ancient civilization built the palace complex at Knossos on Crete?",
        options: [
          "Mycenaeans",
          "Spartans",
          "Minoans",
          "Dorians"
        ],
        correctAnswer: 2,
        explanation: "The Minoans built the palace at Knossos on Crete around 4,000 years ago. It was Europe's earliest advanced civilization."
      },
      {
        question: "What major geological event occurred on Santorini around 1600 BCE?",
        options: [
          "A massive earthquake",
          "A volcanic eruption",
          "A tsunami",
          "A meteorite impact"
        ],
        correctAnswer: 1,
        explanation: "Around 1600 BCE, Santorini experienced one of the largest volcanic eruptions in human history, burying the Minoan settlement of Akrotiri under ash."
      },
      {
        question: "Which Greek island was home to one of the Seven Wonders of the Ancient World?",
        options: [
          "Crete",
          "Santorini",
          "Rhodes",
          "Delos"
        ],
        correctAnswer: 2,
        explanation: "Rhodes was home to the Colossus of Rhodes, a massive bronze statue of the Greek sun god Helios that stood over 100 feet tall."
      }
    ],
    sources: [
      {
        title: "The Aegean Bronze Age",
        author: "Cline, E.H.",
        publisher: "Cambridge University Press",
        year: 2010
      },
      {
        title: "The Complete Greek Islands",
        author: "Whitney, B.",
        publisher: "Thames & Hudson",
        year: 2019
      }
    ],
    relatedArticles: ["11", "2"],
    featured: "Greek geography";
  },

  {
    id: "13",
    slug: "mount-olympus-home-greek-gods",
    title: "Mount Olympus: Home of the Greek Gods",
    description: "Explore Greece's highest mountain, both as a natural wonder and the legendary dwelling place of Zeus and the Olympian gods of Greek mythology.",
    content: `
      <p>Did you know that the gods of ancient Greek mythology had their very own mountain address? 🏔️ Mount Olympus, the highest mountain in Greece, was believed to be the home of Zeus and the other major gods! ⚡ Standing tall at 9,573 feet (2,918 meters), this majestic peak has inspired awe, stories, and adventures for thousands of years! 🌟</p>

      <h3>The Real Mountain</h3>
      <p>Mount Olympus isn't just one peak but actually a massive mountain range with 52 separate peaks and deep gorges between them! 🗻 It's located in northern Greece near the coast of the Aegean Sea, creating an impressive sight as its snow-capped summits rise dramatically from near sea level! 🌊</p>

      <p>The mountain's highest point, Mytikas peak, was first reached by humans in 1913 when two climbers (a Greek and a Swiss) made the challenging journey to its summit. 🧗‍♂️ Today, thousands of hikers and climbers visit Mount Olympus each year to experience its incredible beauty! 🌲</p>

      <p>The mountain is home to an amazing variety of plants and animals! 🌺 Scientists have identified over 1,700 plant species here, some of which are found nowhere else on Earth! 🦊 The rich forests on its slopes have been protected as Greece's first National Park since 1938. 🌳</p>

      <h3>The Mythical Home of the Gods</h3>
      <p>In ancient Greek mythology, Mount Olympus wasn't just a mountain—it was the glorious home of the twelve Olympian gods! 👑 The Greeks imagined that above the mountain's visible peaks was a hidden realm where the gods lived in magnificent palaces of marble and gold! ✨</p>

      <p>Zeus, king of the gods and ruler of the sky, presided over a divine council that included powerful deities like Hera, Poseidon, Athena, Apollo, Artemis, Ares, Aphrodite, Hermes, and others. 🏛️ From their mountain home, these gods observed the activities of mortals, occasionally intervening in human affairs when it suited their purposes! 👀</p>

      <p>The ancient Greeks believed that storms and thunder were signs of Zeus's anger, and that was especially true of the impressive thunderstorms that often form around Olympus's peaks! ⛈️ The mountain was often shrouded in clouds, which reinforced the belief that it was a place between earth and heaven where mortals could not easily see the gods! ☁️</p>

      <h3>Olympus in Ancient Literature</h3>
      <p>Mount Olympus appears frequently in ancient Greek literature, especially in Homer's epic poems the Iliad and the Odyssey! 📚 In these famous works, the gods hold councils on Olympus, argue amongst themselves, and plot ways to help or hinder the human heroes fighting in the Trojan War. 🗡️</p>

      <p>One famous description from Homer tells us: "Olympus, where they say the seat of the gods stands firm forever. Not by winds is it shaken, nor ever wet with rain, nor does snow come near it, but clear weather spreads cloudless about it, and a white radiance stretches over it." ☀️ This portrayal of Olympus as a place of eternal perfect weather added to its mythical reputation! 🌈</p>

      <h3>Visiting Olympus Today</h3>
      <p>Today, visitors to Greece can explore the mythical mountain for themselves! 🎒 The town of Litochoro at the base of Mount Olympus serves as a gateway for hikers and climbers. 🏠 There are several well-marked trails ranging from easy walks through lower forests to challenging climbs to the higher summits. 🥾</p>

      <p>Along the way, hikers might visit the ancient site of Dion at the mountain's foot, which was a religious center where ancient Macedonians worshipped the Olympian gods. 🏺 They can also see the throne of Zeus, a natural rock formation that resembles a massive seat fit for the king of the gods! 🪑</p>

      <p>Whether you're interested in Greek mythology, natural beauty, or adventurous hiking, Mount Olympus offers a chance to connect with one of the most important geographic and cultural landmarks of ancient Greece! 🌍</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1598100931767-988d8be3b320?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Snow-capped peaks of Mount Olympus rising above the clouds",
    imageCredit: "Photo by Dimitris Kiriakakis on Unsplash",
    publishDate: "2025-04-03",
    readTime: 10,
    ageLevel: "Middle School",
    tags: [
      { name: "Greek Mythology", color: "purple" },
      { name: "Geography", color: "green" }
    ],
    author: {
      name: "Ciaran York",
      initials: "CY",
      bio: "Social studies educator with a passion for making history accessible to young learners."
    },
    didYouKnow: {
      fact: "The name 'Olympus' appears in many places around the ancient Greek world! 🗺️ At least 20 different mountains were called Olympus in ancient times! 🏔️ But the one in northern Greece was considered the most important as the home of the major gods! ⚡"
    },
    quiz: [
      {
        question: "How tall is Mount Olympus at its highest peak?",
        options: [
          "2,918 meters (9,573 feet)",
          "4,807 meters (15,771 feet)",
          "8,849 meters (29,032 feet)",
          "1,500 meters (4,921 feet)"
        ],
        correctAnswer: 0,
        explanation: "Mount Olympus reaches 2,918 meters (9,573 feet) at its highest point, Mytikas peak, making it the tallest mountain in Greece."
      },
      {
        question: "When was the highest peak of Mount Olympus first climbed by humans?",
        options: [
          "Ancient times",
          "1513",
          "1913",
          "1953"
        ],
        correctAnswer: 2,
        explanation: "The highest peak of Mount Olympus was first reached in 1913 by a Greek and a Swiss climber, relatively recently considering its historical importance."
      },
      {
        question: "According to Greek mythology, who was the ruler of Mount Olympus?",
        options: [
          "Poseidon",
          "Hades",
          "Athena",
          "Zeus"
        ],
        correctAnswer: 3,
        explanation: "Zeus, king of the gods and ruler of the sky, was the ruler of Mount Olympus and presided over the council of Olympian gods."
      }
    ],
    sources: [
      {
        title: "Greek Gods and Heroes",
        author: "Kershaw, S.",
        publisher: "Oxford University Press",
        year: 2018
      },
      {
        title: "Mountains of the Gods: The Mythical Landscapes of Greece",
        author: "Pallis, A.",
        publisher: "Thames & Hudson",
        year: 2009
      }
    ],
    relatedArticles: ["11", "12"],
    featured: "Greek geography";
  },
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
    imageUrl: "https://images.unsplash.com/photo-1605981973512-fb18430a4fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Great Pyramids of Giza at sunset",
    imageCredit: "Photo by Spencer Davis on Unsplash",
    publishDate: "2025-04-03",
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
    quiz: [
      {
        question: "Why did the ancient Egyptians build pyramids?",
        options: [
          "As entertainment venues for the public",
          "As tombs for their pharaohs to help them reach the afterlife",
          "As storage facilities for grain",
          "As military fortifications"
        ],
        correctAnswer: 1,
        explanation: "Pyramids were built as elaborate tombs for pharaohs. They believed these structures would help the pharaoh's spirit ascend to the afterlife."
      },
      {
        question: "Approximately how many stone blocks were used to build the Great Pyramid of Giza?",
        options: [
          "Around 5,000",
          "Around 50,000",
          "Around 2.3 million",
          "Around 10 million"
        ],
        correctAnswer: 2,
        explanation: "The Great Pyramid contains approximately 2.3 million stone blocks, each weighing between 2.5 to 15 tons."
      },
      {
        question: "What mathematical knowledge is demonstrated by the pyramids' construction?",
        options: [
          "Basic arithmetic only",
          "Complex geometry and astronomy",
          "Modern calculus",
          "No mathematical knowledge was used"
        ],
        correctAnswer: 1,
        explanation: "The Egyptians used sophisticated geometric principles and astronomical alignments in pyramid construction."
      }
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
    worksheets: ["1"],
    featured: "Great Pyramids";
  },
  {
    id: "2",
    slug: "ancient-greece-foundation-modern-democracy",
    title: "Ancient Greece: Foundation of Modern Democracy",
    description: "Explore how Ancient Greece's political system established democratic principles we still use today, from direct citizen participation to representative government.",
    content: `
      <p>Did you know that many of our ideas about government come from people who lived over 2,500 years ago? 🤯 Ancient Athens, which developed democracy around 508 BCE under Cleisthenes, created a political system that would change the world forever. 👑 Their government structure with citizen participation and equal rights even inspired the people who wrote the American Constitution! 📜</p>

      <h3>Birth of Democracy</h3>
      <p>Maybe the coolest thing the Greeks figured out was how to give power directly to the citizens. 💪 The word "democracy" itself comes from Greek words "demos" (people) and "kratos" (power) - literally meaning "people power"! 👀</p>

      <p>Athens had an assembly called the Ekklesia where all male citizens could participate, vote on laws, and make decisions for the city-state. 🗳️ They also had a Council of 500 citizens chosen by lot and courts where large juries of citizens would decide cases. 🛑</p>

      <h3>Limitations of Ancient Democracy</h3>
      <p>Even with their groundbreaking system, Greek democracy had some major problems. 😢 Only free adult men who were citizens could participate - which excluded women, slaves, and foreign residents. This meant only about 10-20% of the population actually had political rights. 👑</p>

      <p>The story of Athens teaches us important lessons about democracy. 📚 Things like citizen education, participation, and protection against tyranny were all important foundations that still matter today. 💔</p>

      <h3>Legacy in Modern Governance</h3>
      <p>Greek democratic ideas are everywhere in modern governments! 🌍 Concepts like citizen equality under law, the importance of debate and deliberation, and the right of citizens to determine their own laws all have roots in Greek ideas. 🌱 Even government symbols and architecture—like columns and domes—were borrowed from Greece by many modern nations. 🏛️</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1603779702200-ea19a28070e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "The Parthenon on the Acropolis of Athens",
    imageCredit: "Photo by Spencer Davis on Unsplash",
    publishDate: "2025-04-03",
    readTime: 12,
    ageLevel: "Middle School",
    tags: [
      { name: "Classical History", color: "blue" },
      { name: "Greece", color: "teal" }
    ],
    author: {
      name: "Ciaran York",
      initials: "CY",
      bio: "Social studies educator with a passion for making history accessible to young learners."
    },
    didYouKnow: {
      fact: "In ancient Athens, they used a device called a kleroterion (a sort of lottery machine) to randomly select citizens for public duties! 📖 This random selection was considered more democratic than elections, which might favor the wealthy or famous! 👨‍👩‍👧‍👦"
    },
    quiz: [
      {
        question: "What does the word 'democracy' literally mean?",
        options: [
          "Rule by the wealthy",
          "People power",
          "Government leadership",
          "Equal freedom"
        ],
        correctAnswer: 1,
        explanation: "The word democracy comes from Greek words 'demos' (people) and 'kratos' (power) meaning 'people power'."
      },
      {
        question: "Which group was NOT allowed to participate in ancient Athenian democracy?",
        options: [
          "Elderly men",
          "Poor citizens",
          "Landowners",
          "Women"
        ],
        correctAnswer: 3,
        explanation: "Women, along with slaves and foreigners, were excluded from political participation in ancient Athens."
      },
      {
        question: "What was the Ekklesia in ancient Athens?",
        options: [
          "The main marketplace",
          "A religious temple",
          "The assembly where citizens could vote on laws",
          "The royal palace"
        ],
        correctAnswer: 2,
        explanation: "The Ekklesia was the assembly where all male citizens could participate in direct democracy by voting on laws."
      }
    ],
    sources: [
      {
        title: "Democracy: A Life",
        author: "Cartledge, P.",
        publisher: "Oxford University Press",
        year: 2018
      },
      {
        title: "The Rise and Fall of Classical Greece",
        author: "Ober, J.",
        publisher: "Princeton University Press",
        year: 2015
      }
    ],
    relatedArticles: ["1", "5"],
    featured: "Ancient Greece";
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

      <p>Most miners lived in tents or rough cabins without many comforts. 🏕️Food, tools, and basic supplies cost a fortune because everything had to be shipped from far away. 💰 Many miners spent every penny they earned just to survive, and most never actually got rich. 😢</p>

      <h3>A Diverse Population</h3>
      <p>The Gold Rush brought people from all over the world together! 🌏 Miners came from Mexico, Chile, China, Australia, Europe, and the eastern United States. 🧳 This created one of America's first truly multicultural regions, though sadly there was also a lot of discrimination and conflict. 👥</p>

      <h3>California Transformed</h3>
      <p>The Gold Rush changed California forever! 🔄 It helped California become a state in 1850 and led to the building of roads, schools, churches, and other important buildings. 🏫 The huge population boom created a need for food, resulting in California's first farms and ranches. 🚜</p>

      <p>While the Gold Rush eventually ended as gold became harder to find, its effects are still felt in California's diverse population, entrepreneurial spirit, and continuing growth. 🌱</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1571407509209-73d3e4a45892?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Gold mining pan with gold nuggets",
    imageCredit: "Photo by James Lee on Unsplash",
    publishDate: "2025-04-03",
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
    quiz: [
      {
        question: "When did the California Gold Rush begin?",
        options: [
          "1828",
          "1848",
          "1868",
          "1888"
        ],
        correctAnswer: 1,
        explanation: "The California Gold Rush began in January 1848 when James W. Marshall discovered gold flakes while building a sawmill along the American River."
      },
      {
        question: "What was a popular nickname for people who came to California seeking gold in 1849?",
        options: [
          "Gold-seekers",
          "California dreamers",
          "Forty-niners",
          "Gold miners"
        ],
        correctAnswer: 2,
        explanation: "People who rushed to California in 1849 were nicknamed 'forty-niners' after the year they arrived."
      },
      {
        question: "How did the Gold Rush affect San Francisco's population?",
        options: [
          "It decreased as people left to find gold",
          "It stayed about the same",
          "It grew from about 200 people to 36,000 people",
          "It grew by only a few hundred people"
        ],
        correctAnswer: 2,
        explanation: "San Francisco exploded from a tiny settlement of about 200 people in 1846 to a booming city of around 36,000 by 1852."
      }
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
    relatedArticles: ["5", "6"],
    featured: "California Gold Rush";
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
    imageUrl: "https://images.unsplash.com/photo-1590102389740-b48e86dbd761?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Close up of the Great Sphinx of Giza",
    imageCredit: "Photo by Mostafa Dokmak on Unsplash",
    publishDate: "2025-04-03",
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
    quiz: [
      {
        question: "What is the Sphinx made from?",
        options: [
          "Blocks of granite assembled together",
          "A single piece of limestone",
          "Mud bricks covered with plaster",
          "Bronze metal sheets"
        ],
        correctAnswer: 1,
        explanation: "The Great Sphinx is the largest statue carved from a single piece of limestone in the world."
      },
      {
        question: "What was NOT a feature of the original Sphinx that is now missing?",
        options: [
          "Colorful paint",
          "A nose",
          "A royal beard",
          "Wings"
        ],
        correctAnswer: 3,
        explanation: "The Sphinx originally had paint, a nose, and a royal beard, but it was never depicted with wings."
      },
      {
        question: "What is the Dream Stela?",
        options: [
          "A stone tablet between the Sphinx's paws",
          "An ancient Egyptian book about dreams",
          "A nickname for the Sphinx itself",
          "A painting found in Tutankhamun's tomb"
        ],
        correctAnswer: 0,
        explanation: "The Dream Stela is a stone tablet between the Sphinx's paws telling the story of Pharaoh Thutmose IV's dream."
      }
    ],
    relatedArticles: ["1", "5"],
    featured: "Great Sphinx";
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
    publishDate: "2025-04-03",
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
    quiz: [
      {
        question: "What does the name 'Mesopotamia' mean?",
        options: [
          "Land of many waters",
          "Between rivers",
          "Ancient civilization",
          "First kingdom"
        ],
        correctAnswer: 1,
        explanation: "Mesopotamia comes from Greek words meaning 'between rivers,' referring to its location between the Tigris and Euphrates rivers."
      },
      {
        question: "When did the Sumerians develop cuneiform writing?",
        options: [
          "Around 10,000 BCE",
          "Around 3400 BCE",
          "Around 1000 BCE",
          "Around 500 CE"
        ],
        correctAnswer: 1,
        explanation: "Cuneiform script was developed around 3400 BCE, starting as simple picture symbols for counting before evolving into a complex writing system."
      },
      {
        question: "Which of these innovations did NOT come from Mesopotamia?",
        options: [
          "The wheel",
          "Irrigation systems",
          "The compass",
          "The Code of Hammurabi"
        ],
        correctAnswer: 2,
        explanation: "The compass was developed in ancient China, not Mesopotamia. The other innovations listed were all Mesopotamian achievements."
      }
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
    relatedArticles: ["1", "2"],
    featured: "Mesopotamia";
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
    publishDate: "2025-04-03",
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
    quiz: [
      {
        question: "How many states make up the United States?",
        options: [
          "48",
          "49",
          "50",
          "52"
        ],
        correctAnswer: 2,
        explanation: "The United States consists of 50 states, including the 48 contiguous states plus Alaska and Hawaii."
      },
      {
        question: "Which region is known as 'America's Heartland'?",
        options: [
          "The Northeast",
          "The South",
          "The Midwest",
          "The West"
        ],
        correctAnswer: 2,
        explanation: "The Midwest is often called America's Heartland, known for its farming, friendly people, and the Great Lakes."
      },
      {
        question: "Which is NOT a natural feature found in the Southern region?",
        options: [
          "The Everglades",
          "The Great Lakes",
          "Bayous",
          "The Great Smoky Mountains"
        ],
        correctAnswer: 1,
        explanation: "The Great Lakes are located in the Midwest region, not the South. The other features are all found in the Southern states."
      }
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
    relatedArticles: ["3", "5"],
    featured: "United States";
  },
  {
    id: "7",
    slug: "human-migration-patterns",
    title: "Human Migration Patterns: The Movement that Shaped Our World",
    description: "Explore how human migration throughout history has influenced culture, language, and genetic diversity across continents.",
    content: `
      <p>Did you know that humans have been on the move for more than 100,000 years? 🌍 People have always traveled across lands and seas looking for better places to live, escaping dangers, or chasing new opportunities. 🏃‍♀️ These ancient journeys shaped who we are today and continue to influence our modern world! 🧭</p>

      <h3>Out of Africa</h3>
      <p>The first major human migration happened around 60,000-70,000 years ago when early Homo sapiens left Africa to explore new territories. 🌱 Scientists can trace this journey through DNA and archaeological findings! 🧬 These brave explorers slowly spread across Asia, Australia, Europe, and eventually the Americas. 🚶‍♂️</p>

      <p>As they encountered different environments, people adapted in amazing ways! 🌞 In sunny areas near the equator, darker skin protected against intense UV radiation. 🌧️ In cloudy northern regions, lighter skin helped bodies produce vitamin D with less sunlight. ❄️</p>

      <h3>The Agricultural Revolution</h3>
      <p>Around 12,000 years ago, when humans figured out how to farm, people could finally settle down instead of constantly hunting and gathering. 🌾 This began a whole new pattern of movement! 🏘️ Farmers gradually spread from the Fertile Crescent (modern-day Middle East) outward, bringing their lifestyles, languages, and genes with them. 👨‍🌾</p>

      <p>As farming communities grew into towns and cities, people began traveling for trade, spreading goods and ideas across vast networks. 🛒 These ancient trade routes became superhighways of cultural exchange! 🛣️</p>

      <h3>Historical Migrations</h3>
      <p>Throughout recorded history, we've seen countless important migrations: 📚 The Silk Road connected China with Europe and brought incredible cultural exchanges. 🧵 The Polynesian seafarers who amazingly navigated the vast Pacific Ocean to settle remote islands. 🚣‍♀️ The Bantu expansion across Africa spread languages and iron-working technologies. ⚒️</p>

      <p>Other migrations were forced and traumatic, like the transatlantic slave trade that forcibly moved millions of Africans to the Americas between the 16th and 19th centuries. 😢 This horrible chapter has deeply impacted cultures, demographics, and societies in permanent ways. 💔</p>

      <h3>Modern Migration</h3>
      <p>Today, people continue to move around the world, but for different reasons! 🏙️ Some seek better jobs or education, while others flee war, persecution, or natural disasters. 🏫 Modern transportation makes these journeys faster than ever before, though not necessarily easier. ✈️</p>

      <p>In our connected world, migration continues to blend cultures, creating new foods, music, art, and ideas. 🌮 Even languages change and adapt when different groups meet and communicate! 🗣️ The story of human migration is really the story of humanity itself—constantly moving, adapting, and evolving. 🌈</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1569760142069-bc6838de16c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Global map showing human migration routes",
    imageCredit: "Photo by NASA on Unsplash",
    publishDate: "2025-04-03",
    readTime: 11,
    ageLevel: "Middle School",
    tags: [
      { name: "World History", color: "blue" },
      { name: "Anthropology", color: "purple" }
    ],
    author: {
      name: "Ciaran York",
      initials: "CY",
      bio: "Social studies educator with a passion for making history accessible to young learners."
    },
    didYouKnow: {
      fact: "About 3% of the world's population—around 230 million people—live outside the country they were born in! 🌎 If all migrants formed their own country, it would be the fifth largest nation on Earth! 🗺️"
    },
    quiz: [
      {
        question: "Approximately when did early humans first migrate out of Africa?",
        options: [
          "10,000 years ago",
          "60,000-70,000 years ago",
          "200,000 years ago",
          "1 million years ago"
        ],
        correctAnswer: 1,
        explanation: "Scientific evidence shows that early Homo sapiens migrated out of Africa approximately 60,000-70,000 years ago, gradually spreading across the globe."
      },
      {
        question: "Which major event caused humans to begin settling in permanent locations?",
        options: [
          "The Ice Age",
          "The Bronze Age",
          "The Agricultural Revolution",
          "The Industrial Revolution"
        ],
        correctAnswer: 2,
        explanation: "The Agricultural Revolution, which began about 12,000 years ago, allowed humans to establish permanent settlements rather than following a nomadic hunter-gatherer lifestyle."
      },
      {
        question: "Which was NOT a reason for human migration throughout history?",
        options: [
          "Searching for better climate and resources",
          "Escaping natural disasters",
          "Seeking educational opportunities",
          "Fleeing from conflict or persecution"
        ],
        correctAnswer: 2,
        explanation: "While people today often migrate for education, this was not a common reason for migration throughout most of human history. Educational migration is primarily a modern phenomenon."
      }
    ],
    sources: [
      {
        title: "The Journey of Man: A Genetic Odyssey",
        author: "Wells, S.",
        publisher: "Princeton University Press",
        year: 2002
      },
      {
        title: "Maps of Human Migration",
        publisher: "National Geographic",
        url: "nationalgeographic.com"
      }
    ],
    relatedArticles: ["2", "5"],
    featured: "Human Migration";
  },
  {
    id: "8",
    slug: "industrial-revolution-machines-changed-world",
    title: "The Industrial Revolution: How Machines Changed Our World",
    description: "Learn how the shift from hand production to machines transformed society, economies, and daily life in ways that still affect us today.",
    content: `
      <p>Imagine living in a world where everything had to be made by hand! 🧵 That's exactly how things were for most of human history, until something amazing happened around 250 years ago. 🕰️ The Industrial Revolution totally changed how people lived, worked, and thought about the world—and we're still feeling its effects today! 🏭</p>

      <h3>Steam Power Changes Everything</h3>
      <p>It all started in Britain in the late 1700s when inventors created machines that could do the work of many people! 💪 The big game-changer was the steam engine, improved by James Watt in 1769. 🧪 For the first time, humans had a powerful, reliable source of energy that wasn't dependent on muscle, wind, or water! 💨</p>

      <p>This new technology led to the creation of factories where goods could be produced much faster and cheaper than ever before. 🏗️ The textile industry was transformed first, with machines like the spinning jenny and power loom replacing hand-spinning and weaving. 👚 A single worker with a machine could now do the work of dozens of people! 😮</p>

      <h3>Transportation Revolution</h3>
      <p>The Industrial Revolution didn't just change how things were made—it also transformed how people and goods moved around! 🚂 Steam-powered locomotives pulling trains on iron rails could transport people and products at speeds that would have seemed magical to earlier generations. 🛤️</p>

      <p>Steam-powered ships no longer had to rely on wind, making ocean travel more reliable and faster. 🚢 By the late 1800s, these transportation networks connected places across continents and oceans, creating the first truly global economy! 🌐</p>

      <h3>How Life Changed</h3>
      <p>The Industrial Revolution created huge changes in how people lived. 🏙️ Cities grew rapidly as people moved from farms to work in factories. 🏠 This created both opportunities and problems—more jobs and products, but also overcrowding, pollution, and sometimes dangerous working conditions. 😷</p>

      <p>Children who would have worked on family farms now worked long hours in factories or mines. 👧 Eventually, people began fighting for better conditions, leading to labor reforms and child labor laws. ✊ The middle class expanded, and more people could afford goods that had once been luxuries. 💰</p>

      <h3>The Second Industrial Revolution</h3>
      <p>By the late 1800s, a Second Industrial Revolution brought even more changes with electricity, petroleum, chemicals, and steel. 💡 Electric lights transformed daily life, allowing people to work and play after dark. 🌃 The telephone, radio, and later the automobile further revolutionized how people lived, worked, and communicated. 📞</p>

      <p>This period also saw the development of assembly lines and mass production methods, which made products like cars affordable to ordinary people for the first time. 🚗 Henry Ford's Model T is a famous example of how these new methods changed everyday life! 🔧</p>

      <p>Every day, we use technologies and live in ways that were made possible by this incredible period of innovation and change. 📱 The Industrial Revolution truly transformed human society forever! 🌟</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1514998667719-f0ea0f814670?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Old steam locomotive, representing the Industrial Revolution",
    imageCredit: "Photo by Ryan Parker on Unsplash",
    publishDate: "2025-04-03",
    readTime: 12,
    ageLevel: "Middle School",
    tags: [
      { name: "World History", color: "blue" },
      { name: "Technology", color: "green" }
    ],
    author: {
      name: "Ciaran York",
      initials: "CY",
      bio: "Social studies educator with a passion for making history accessible to young learners."
    },
    didYouKnow: {
      fact: "Before the Industrial Revolution, it would take a hand-weaver about 120 hours to produce 100 yards of cotton cloth. 😮 With a power loom, this same amount could be made in just 1.5 hours! 🧵 That's 80 times faster! ⚡"
    },
    quiz: [
      {
        question: "Where did the Industrial Revolution begin?",
        options: [
          "United States",
          "France",
          "Germany",
          "Great Britain"
        ],
        correctAnswer: 3,
        explanation: "The Industrial Revolution began in Great Britain in the late 1700s before spreading to other parts of Europe and North America."
      },
      {
        question: "What invention was central to powering the early Industrial Revolution?",
        options: [
          "The electric generator",
          "The steam engine",
          "The internal combustion engine",
          "The solar panel"
        ],
        correctAnswer: 1,
        explanation: "The steam engine, improved by James Watt in 1769, provided reliable power that wasn't dependent on muscle, wind, or water, making it central to early industrialization."
      },
      {
        question: "Which industry was first transformed by the Industrial Revolution?",
        options: [
          "Automobile manufacturing",
          "Steel production",
          "Textile industry",
          "Electronics"
        ],
        correctAnswer: 2,
        explanation: "The textile industry was the first to be transformed, with machines like the spinning jenny and power loom replacing hand-spinning and weaving."
      }
    ],
    sources: [
      {
        title: "The Industrial Revolution: A Very Short Introduction",
        author: "Griffin, E.",
        publisher: "Oxford University Press",
        year: 2010
      },
      {
        title: "Energy and the English Industrial Revolution",
        author: "Wrigley, E.A.",
        publisher: "Cambridge University Press",
        year: 2010
      }
    ],
    relatedArticles: ["5", "7"],
    featured: "Industrial Revolution";
  },
  {
    id: "9",
    slug: "maya-civilization-masters-americas",
    title: "Maya Civilization: Masters of the Americas",
    description: "Explore the incredible achievements of the Maya in mathematics, astronomy, architecture, and writing, creating one of the most sophisticated civilizations in the ancient Americas.",
    content: `
      <p>Deep in the lush rainforests of Central America, an amazing civilization built towering pyramids, created incredibly accurate calendars, and developed the only complete writing system in the ancient Americas! 📝 The Maya civilization flourished for over 2,000 years and left behind breathtaking monuments and remarkable knowledge that still impresses us today! 🏯</p>

      <h3>Masters of Time</h3>
      <p>The Maya were absolutely obsessed with time! ⏰ They created several different calendars, including a 260-day sacred calendar and a 365-day solar calendar that was actually MORE accurate than the calendar Europeans were using at the same time! 🌞</p>

      <p>Maya priests and astronomers carefully tracked the movements of the stars, sun, moon, and planets. 🔭 They could predict solar eclipses and the movements of Venus with amazing accuracy - all without telescopes or modern equipment! ✨ These calculations helped them plan religious ceremonies and agricultural cycles. 🌱</p>

      <h3>Incredible Builders</h3>
      <p>Have you ever seen pictures of Maya pyramids rising above the jungle canopy? 🌴 These massive structures weren't just amazing to look at—they were built with careful mathematical and astronomical alignments! 📐 For example, the main pyramid at Chichen Itza was designed so that on the spring and fall equinoxes, sunlight creates a shadowpattern that looks like a snake slithering down the stairs! 🐍</p>

      <p>Maya cities like Tikal, Palenque, and Copan featured huge ceremonial plazas, palaces, ball courts, and reservoirs—all built without metal tools, wheeled vehicles, or beasts of burden! 🏙️ They even built raised roads called "sacbeob" (white roads) that connected different Maya cities and were usable even during the rainy season! 🛣️</p>

      <h3>Mathematics and Writing</h3>
      <p>The Maya developed an advanced writing system using hieroglyphs that could express complex ideas and record historical events. 📜 For many years, researchers couldn't read these symbols, but now we can understand much of what the Maya wrote about their rulers, wars, and religious beliefs! 👑</p>

      <p>They also invented a sophisticated number system that included the concept of zero hundreds of years before Europeans understood it! 0️⃣ Their number system was based on 20 (vigesimal) rather than 10 (decimal) and used dots and bars to represent numbers. 🔢 With this system, they could calculate enormous numbers for their astronomical observations! 💫</p>

      <h3>Daily Life and Society</h3>
      <p>Maya society was highly organized with a king (called an "ajaw") at the top, followed by nobles, priests, scribes, craftspeople, traders, farmers, and at the bottom, servants. 👨‍👩‍👧‍👦 Most people were farmers who grew maize (corn), beans, and squash—the "three sisters" that are still important foods in the region today! 🌽</p>

      <p>The Maya played a fascinating ball game called "pok-a-tok" on special courts. ⚽ Players had to hit a solid rubber ball through a stone hoop using only their hips, shoulders, and knees! 🏆 The game had deep religious meaning and sometimes ended with ritual sacrifice! 😱</p>

      <h3>The Maya Today</h3>
      <p>Despite what some people think, the Maya civilization didn't "disappear"! 🤔 While many cities were abandoned around 900 CE for complex reasons including drought and warfare, Maya people and culture continued. 🌧️ Today, millions of Maya descendants still live in Mexico, Guatemala, Belize, Honduras, and El Salvador, maintaining many cultural traditions and speaking Maya languages! 🗣️</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1562651136-0c4cdc7f8f3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Ancient Maya pyramid at Chichen Itza, Mexico",
    imageCredit: "Photo by Zac Wolff on Unsplash",
    publishDate: "2025-04-03",
    readTime: 12,
    ageLevel: "Middle School",
    tags: [
      { name: "Ancient Civilizations", color: "blue" },
      { name: "Americas", color: "red" }
    ],
    author: {
      name: "Ciaran York",
      initials: "CY",
      bio: "Social studies educator with a passion for making history accessible to young learners."
    },
    didYouKnow: {
      fact: "The Maya were the first people in the world to cultivate chocolate! 🍫 They didn't eat it as a sweet treat though—they drank it as a bitter, spicy beverage believed to have special powers! ✨"
    },
    quiz: [
      {
        question: "Which concept did the Maya understand long before Europeans?",
        options: [
          "Electricity",
          "Gravity",
          "Zero",
          "Magnetism"
        ],
        correctAnswer: 2,
        explanation: "The Maya understood and used the concept of zero in their mathematical system centuries before Europeans incorporated it into their mathematics."
      },
      {
        question: "What alignment happens at the main pyramid at Chichen Itza during the equinoxes?",
        options: [
          "The pyramid glows blue",
          "A shadow pattern resembling a snake appears on the stairs",
          "The pyramid points directly to the North Star",
          "The sun sets directly behind the pyramid's peak"
        ],
        correctAnswer: 1,
        explanation: "On the spring and fall equinoxes, sunlight creates a shadow pattern on the main pyramid at Chichen Itza that looks like a serpent slithering down the stairs."
      },
      {
        question: "What happened to the Maya civilization?",
        options: [
          "They suddenly disappeared without a trace",
          "They were all killed by European diseases",
          "They were conquered by the Aztecs",
          "Many cities were abandoned, but Maya people and culture continued"
        ],
        correctAnswer: 3,
        explanation: "While many Maya cities were abandoned around 900 CE, the civilization didn't disappear. Millions of Maya descendants still live in Central America today, maintaining many cultural traditions."
      }
    ],
    sources: [
      {
        title: "The Maya (9th Edition)",
        author: "Coe, M.D. & Houston, S.D.",
        publisher: "Thames & Hudson",
        year: 2015
      },
      {
        title: "Breaking the Maya Code",
        author: "Coe, M.D.",
        publisher: "Thames & Hudson",
        year: 1999
      }
    ],
    relatedArticles: ["1", "5"],
    featured: "Maya Civilization";
  },
  {
    id: "10",
    slug: "roman-empire-legacy",
    title: "The Roman Empire: A Legacy that Shaped the World",
    description: "From impressive engineering to influential law systems, discover how ancient Rome's innovations and ideas continue to impact our modern world.",
    content: `
      <p>Have you ever driven on a straight, well-built road? 🛣️ Used indoor plumbing? 🚿 Said the days of the week or months of the year in English? 📅 If so, you've experienced just a tiny bit of the huge influence the ancient Romans still have on our world today! 🏛️ For over 1,000 years, the Roman Empire spread its language, laws, architecture, and ideas across three continents! 🗺️</p>

      <h3>Engineering Marvels</h3>
      <p>The Romans were absolutely incredible engineers! 👷‍♂️ They built more than 250,000 miles of roads so solid that some are still in use today! 🚗 Their famous saying was "All roads lead to Rome," and they really meant it! 🗿</p>

      <p>Roman aqueducts used gravity to carry fresh water from mountains into cities, sometimes over distances of 60 miles! 💧 The Pont du Gard aqueduct in France stands 160 feet tall and is still standing after 2,000 years! 🌉 Romans also invented concrete that could even harden underwater, allowing them to build harbors and breakwaters that transformed sea trade. 🚢</p>

      <h3>The Roman System of Government</h3>
      <p>Before becoming an empire, Rome was a republic where citizens elected representatives—an early form of the democratic systems used in many countries today! 🗳️ They developed the concept of a Senate, established checks and balances on power, and created a sophisticated legal system. ⚖️</p>

      <p>The Twelve Tables, Rome's written code of law from 450 BCE, established the idea that laws should be written down clearly so everyone could know them. 📜 Many modern legal concepts come from Roman law, including the presumption of innocence until proven guilty! 👨‍⚖️</p>

      <h3>Language and Literature</h3>
      <p>Ever taken Spanish, French, Italian, Portuguese, or Romanian classes? 📚 These are all "Romance languages" that evolved directly from Latin, the language of Rome! 🗣️ Even English, though it's a Germanic language, gets about 60% of its vocabulary from Latin words! 📝</p>

      <p>Many famous Roman writers still influence literature today. 📖 Virgil's epic poem "The Aeneid" influenced countless later works. ✨ Cicero's speeches are still studied as masterpieces of rhetoric, and Ovid's "Metamorphoses" continues to inspire artists and writers. 🎭</p>

      <h3>Architecture and Art</h3>
      <p>Look at buildings like the U.S. Capitol, the British Museum, or countless courthouses and government buildings around the world—you'll see Roman-style columns, domes, and arches everywhere! 🏢 The Romans perfected the arch, which allowed them to build massive structures like the Colosseum that could hold 50,000 spectators! 😮</p>

      <p>They also created realistic portrait sculptures and beautiful mosaics that influenced art for centuries. 🎨 When people during the Renaissance wanted to create beautiful buildings and artwork, they looked back to Roman examples for inspiration! 👨‍🎨</p>

      <h3>Empire Living</h3>
      <p>Daily life in Roman cities would seem surprisingly modern in some ways! 🏙️ Romans enjoyed running water, public bathhouses, apartment buildings, shopping districts, and entertainment venues. 🛀 Wealthy Romans had heated floors in their homes called "hypocausts" - an ancient form of radiant heating! 🔥</p>

      <p>Of course, Roman life had very harsh aspects too—slavery was widespread, women had few rights, and entertainment often included violent gladiatorial combat. 🗡️ But many Roman innovations in urban planning, sanitation, and architecture set standards that wouldn't be matched again for over a thousand years after the empire fell! 📉</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "The Roman Colosseum in Rome, Italy",
    imageCredit: "Photo by David Köhler on Unsplash",
    publishDate: "2025-04-03",
    readTime: 11,
    ageLevel: "Middle School",
    tags: [
      { name: "Ancient History", color: "blue" },
      { name: "Rome", color: "red" }
    ],
    author: {
      name: "Ciaran York",
      initials: "CY",
      bio: "Social studies educator with a passion for making history accessible to young learners."
    },
    didYouKnow: {
      fact: "The Romans had fast food! 🍔 Cities had small food stalls called 'thermopolia' where busy Romans could grab ready-made hot food to eat on the go! 🔥 Archaeologists have found over 150 of these ancient 'fast food joints' just in the ruins of Pompeii! 🍲"
    },
    quiz: [
      {
        question: "How did Roman aqueducts transport water across long distances?",
        options: [
          "Using pumps and pressure systems",
          "Using waterwheels and pulleys",
          "Using gravity with a slight downward slope",
          "Using steam power"
        ],
        correctAnswer: 2,
        explanation: "Roman aqueducts relied on gravity, with a carefully calculated slight downward slope to move water from mountain sources to cities, sometimes over distances of 60 miles."
      },
      {
        question: "What important principle of modern legal systems originated with the Romans?",
        options: [
          "Trial by jury",
          "The presumption of innocence until proven guilty",
          "The right to remain silent",
          "Freedom of speech"
        ],
        correctAnswer: 1,
        explanation: "The presumption of innocence until proven guilty is an important legal principle that originated in Roman law and remains fundamental to many modern legal systems."
      },
      {
        question: "Which modern languages evolved directly from Latin?",
        options: [
          "English, German, and Dutch",
          "Russian, Polish, and Czech",
          "Spanish, French, and Italian",
          "Arabic, Hebrew, and Greek"
        ],
        correctAnswer: 2,
        explanation: "Spanish, French, Italian, Portuguese, and Romanian are all called 'Romance languages' because they evolved directly from Latin, the language of Rome."
      }
    ],
    sources: [
      {
        title: "SPQR: A History of Ancient Rome",
        author: "Beard, M.",
        publisher: "Liveright",
        year: 2015
      },
      {
        title: "The Archaeology of Ancient Rome",
        author: "Morris, R.L.",
        publisher: "Cambridge University Press",
        year: 2010
      }
    ],
    relatedArticles: ["2", "5"],
    featured: "Roman Empire";
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