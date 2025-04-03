import { Article } from "@/types";

export const articles: Article[] = [
  {
    id: "1",
    slug: "great-pyramids-wonders-ancient-world",
    title: "The Great Pyramids: Wonders of the Ancient World",
    description: "Discover how the ancient Egyptians built these magnificent structures over 4,500 years ago with simple tools but incredible engineering skills.",
    content: `
      <p>Standing on the Giza plateau, it's easy to feel overwhelmed by the sheer scale of the pyramids. The Great Pyramid of Khufu (Cheops) was the tallest man-made structure on Earth for over 3,800 years! But the question that has fascinated people for centuries is: how did they build them?</p>
      
      <p>Historians and archaeologists now believe that the pyramids were built by skilled workers rather than slaves. Evidence suggests these workers were organized into teams who worked in shifts throughout the year, with peak construction occurring during the Nile's annual flood when farmers couldn't work their fields.</p>
      
      <h3>Engineering Marvels</h3>
      <p>The precision of the Great Pyramid is truly remarkable. Its base is level to within just 2.1 cm, and its sides are oriented to the cardinal directions with an accuracy of up to 0.05 degrees. This was achieved using simple tools like plumb bobs, square levels, and measuring ropes.</p>
      
      <p>The stone blocks were quarried using copper chisels and dolerite balls, then transported via boats when possible and sledges over land. Teams of workers then dragged and lifted the blocks into place using ramps, levers, and other simple machines.</p>
      
      <h3>Cultural Significance</h3>
      <p>The pyramids were more than just tombs; they were religious monuments that played a vital role in the king's journey to the afterlife. According to ancient Egyptian belief, the pyramid shape represented the primordial mound from which the earth was created and served as a stairway to the heavens.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1594741158705-2fb3a4a81f01?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Great Pyramids of Giza",
    imageCredit: "Photo by Ahmed Samir on Unsplash",
    publishDate: "2023-05-15",
    readTime: 8,
    ageLevel: "Elementary",
    tags: [
      { name: "Ancient History", color: "blue" },
      { name: "Egypt", color: "green" }
    ],
    author: {
      name: "Dr. Emily Sands",
      initials: "ES",
      bio: "Archaeologist specializing in ancient Egyptian architecture and construction techniques."
    },
    didYouKnow: {
      fact: "The Great Pyramid contains an estimated 2.3 million stone blocks, each weighing an average of 2.5 tons. The largest blocks, used in the King's Chamber, weigh as much as 80 tons!"
    },
    discussionQuestions: [
      "Why do you think the ancient Egyptians invested so many resources in building the pyramids?",
      "How might the construction of the pyramids have affected Egyptian society and economy?",
      "What can we learn about ancient Egyptian knowledge of mathematics and engineering from studying the pyramids?"
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
    relatedArticles: ["2", "3", "4"],
    worksheets: ["1"]
  },
  {
    id: "2",
    slug: "roman-republic-foundation-modern-democracy",
    title: "The Roman Republic: Foundation of Modern Democracy",
    description: "Explore how Rome's political system influenced democratic principles we still use today, from checks and balances to representative government.",
    content: `
      <p>The Roman Republic, established around 509 BCE after the overthrow of the monarchy, created a political system that would influence governments for centuries to come. Its structure included multiple branches with distributed powers—a concept that directly inspired the framers of the American Constitution.</p>
      
      <h3>Checks and Balances</h3>
      <p>Perhaps the most enduring legacy of the Roman Republic was its system of checks and balances. Power was divided among different institutions to prevent any single person or group from gaining too much control.</p>
      
      <p>The Republic was governed by two consuls who served as chief executives, a Senate composed of patricians (aristocrats) that advised on policy, and various assemblies where citizens could vote. Each institution had specific powers that limited the others.</p>
      
      <h3>From Republic to Empire</h3>
      <p>Despite its innovative political system, the Republic eventually gave way to imperial rule. The transition began with Julius Caesar's rise to power and culminated with his adopted son Octavian (Augustus) becoming the first Roman Emperor in 27 BCE.</p>
      
      <p>The Republic's fall offers important lessons about maintaining democratic institutions. Economic inequality, military expansion, and political corruption all contributed to the collapse of representative government in Rome.</p>
      
      <h3>Legacy in Modern Governance</h3>
      <p>The Roman Republic's influence extends far beyond ancient history. Modern concepts like separation of powers, veto authority, term limits, and representative assemblies all have roots in Roman governance. Even the physical symbols of government—like the eagle and the fasces—were adopted from Rome by many modern nations.</p>
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
      name: "Prof. Marcus Aurelius",
      initials: "MA",
      bio: "Professor of Classical History specializing in Roman political institutions."
    },
    didYouKnow: {
      fact: "The word 'republic' comes from the Latin 'res publica,' which means 'public affair' or 'public matter,' emphasizing that government should be the concern of all citizens, not just rulers."
    },
    discussionQuestions: [
      "How do modern democratic systems compare to the Roman Republic?",
      "What factors do you think make democratic governments vulnerable to collapse?",
      "Why is the separation of powers important in a government?"
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
    slug: "mathematical-brilliance-maya-calendars-astronomy",
    title: "Mathematical Brilliance of the Maya: Calendars and Astronomy",
    description: "Understand how the Maya created a calendar more accurate than European systems and made precise astronomical predictions with simple tools.",
    content: `
      <p>The Maya civilization, which flourished in Mesoamerica from around 2000 BCE to 1600 CE, developed one of the most sophisticated mathematical and astronomical systems of the ancient world. Their achievements in these fields rival those of ancient Babylon, China, and Greece.</p>
      
      <h3>Advanced Number System</h3>
      <p>Central to Maya mathematics was their number system, which included the concept of zero centuries before it appeared in European mathematics. Their vigesimal (base-20) system used only three symbols: a dot representing one, a bar representing five, and a shell-like symbol for zero.</p>
      
      <p>This elegant system allowed Maya mathematicians to calculate enormous sums and work with concepts that wouldn't appear in European mathematics until much later.</p>
      
      <h3>Precision Calendars</h3>
      <p>The Maya developed multiple calendars that operated simultaneously. The Tzolkin (260-day sacred calendar) and the Haab (365-day solar calendar) combined to form a Calendar Round that repeated every 52 years.</p>
      
      <p>For longer time periods, they invented the Long Count, capable of measuring time over millions of years. Their calculation of the solar year as 365.2420 days is remarkably close to the modern value of 365.2422 days—more accurate than the calendar used in Europe until the 16th century.</p>
      
      <h3>Astronomical Observations</h3>
      <p>Maya astronomer-priests tracked the movements of the sun, moon, planets, and stars with extraordinary precision. They could predict eclipses and planetary cycles hundreds of years in advance using observations made with simple instruments rather than telescopes.</p>
      
      <p>The Dresden Codex, one of the few surviving Maya books, contains tables tracking Venus with an error of just two hours per 584-day cycle—an incredible feat of ancient astronomy.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Mayan ruins",
    publishDate: "2023-05-03",
    readTime: 15,
    ageLevel: "High School",
    tags: [
      { name: "Mesoamerican History", color: "blue" },
      { name: "Maya", color: "yellow" }
    ],
    author: {
      name: "Dr. Sofia Rodriguez",
      initials: "SR",
      bio: "Anthropologist specializing in pre-Columbian mathematics and astronomy."
    },
    didYouKnow: {
      fact: "The Maya calendar's precision allowed them to calculate that 405 lunar months equal 11,960 days, which is accurate to within just two hours over this entire period."
    },
    discussionQuestions: [
      "How did the Maya achieve such mathematical and astronomical precision without modern tools?",
      "Why do you think accurate calendars were so important to ancient civilizations?",
      "How did misconceptions about the Maya calendar lead to doomsday fears in 2012?"
    ],
    sources: [
      {
        title: "Maya Civilization: A Captivating Guide to Maya History and Maya Mythology",
        author: "McKay, C.",
        publisher: "Captivating History",
        year: 2018
      },
      {
        title: "The Ancient Maya",
        author: "Sharer, R.J. & Traxler, L.P.",
        publisher: "Stanford University Press",
        year: 2006
      }
    ],
    relatedArticles: ["1", "4"]
  },
  {
    id: "4",
    slug: "mysterious-riddles-sphinx",
    title: "Mysterious Riddles of the Sphinx",
    description: "The Great Sphinx of Giza has guarded the pyramids for thousands of years. Learn about its origins and the mysteries that still surround it.",
    content: `
      <p>Standing sentinel on the Giza plateau, the Great Sphinx is one of the most recognizable monuments of ancient Egypt. With the body of a lion and the head of a human (believed to represent Pharaoh Khafre), this colossal statue has captured human imagination for millennia.</p>
      
      <h3>An Ancient Marvel</h3>
      <p>At 241 feet long and 66 feet high, the Sphinx is the largest monolithic statue in the world. Carved from a single ridge of limestone, it faces directly from west to east, aligning perfectly with the rising sun on certain days.</p>
      
      <p>While most Egyptologists date the Sphinx to around 2500 BCE during the reign of Pharaoh Khafre, some researchers have proposed alternative theories suggesting it could be much older, pointing to evidence of water erosion patterns that might indicate construction during a wetter period thousands of years earlier.</p>
      
      <h3>Lost Nose and Missing Beard</h3>
      <p>Contrary to popular belief, Napoleon's troops did not shoot off the Sphinx's nose. Archaeological evidence suggests it was deliberately damaged in the 14th century by a Muslim religious figure who considered the monument idolatrous. The Sphinx also once had a royal beard, fragments of which are now in the British Museum and Cairo Museum.</p>
      
      <h3>Hidden Chambers?</h3>
      <p>Modern archaeological techniques have detected mysterious cavities beneath the Sphinx, fueling speculation about hidden chambers. While some of these are likely natural limestone features, archaeological investigations continue to explore potential human-made structures that might contain undiscovered treasures or historical records.</p>
      
      <p>The Dream Stela, placed between the paws of the Sphinx by Pharaoh Thutmose IV, tells the story of how the Sphinx appeared to him in a dream, promising him the throne if he would clear away the sand that had buried much of the monument—but does this stela hold clues to more secrets?</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1564979045531-fa386a275b27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Sphinx at Giza",
    publishDate: "2023-06-01",
    readTime: 10,
    ageLevel: "Elementary",
    tags: [
      { name: "Ancient Egypt", color: "blue" }
    ],
    author: {
      name: "Dr. Emily Sands",
      initials: "ES",
      bio: "Archaeologist specializing in ancient Egyptian architecture and construction techniques."
    },
    didYouKnow: {
      fact: "The Arabic name for the Sphinx is Abu al-Hol, which means 'Father of Terror,' reflecting the awe and fear this massive monument inspired in ancient times."
    },
    discussionQuestions: [
      "Why do you think the ancient Egyptians created a monument combining human and animal features?",
      "What might explain the different theories about the Sphinx's age?",
      "How have modern technologies changed our understanding of ancient monuments?"
    ],
    relatedArticles: ["1", "5"]
  },
  {
    id: "5",
    slug: "mesopotamia-cradle-civilization",
    title: "Mesopotamia: Cradle of Civilization",
    description: "Between the Tigris and Euphrates rivers, humanity's first cities emerged with remarkable innovations in writing, law, and architecture.",
    content: `
      <p>Mesopotamia, Greek for "between rivers," was home to the world's first urban civilizations. In the fertile valley between the Tigris and Euphrates rivers (modern-day Iraq), humans first transitioned from nomadic hunter-gatherers to settled agricultural societies around 10,000 BCE.</p>
      
      <h3>The Birth of Writing</h3>
      <p>Perhaps Mesopotamia's most significant contribution was the invention of writing. Around 3400 BCE, the Sumerians developed cuneiform script—first as pictographs for accounting purposes, then evolving into a complex writing system capable of expressing abstract ideas and recording literature.</p>
      
      <p>The Epic of Gilgamesh, one of humanity's oldest written stories, originates from this region and includes a flood narrative that predates the biblical account of Noah by over a thousand years.</p>
      
      <h3>Laws and Governance</h3>
      <p>The Code of Hammurabi, created around 1754 BCE, represents one of the earliest and most complete legal codes. Its 282 laws cover everything from family and property rights to professional standards and punishments for crimes.</p>
      
      <p>The famous principle "an eye for an eye" originates in this code, which sought to create proportional consequences rather than allowing unlimited blood feuds.</p>
      
      <h3>Technological Innovations</h3>
      <p>Mesopotamian engineers developed sophisticated irrigation systems that transformed arid land into productive farmland. They invented the wheel around 3500 BCE, revolutionizing transportation and pottery production.</p>
      
      <p>Their architectural achievements included ziggurats (terraced temple structures) and elaborate city walls and gates. The Hanging Gardens of Babylon, if they existed as described, would have been an engineering marvel with complex hydraulic systems bringing water to elevated gardens.</p>
      
      <h3>Legacy</h3>
      <p>Many aspects of modern life trace their origins to Mesopotamian innovations: the 60-minute hour and 360-degree circle (from their base-60 number system), the chariot, the sailboat, maps, and mathematical concepts like geometry and algebra all developed in this remarkable region.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1564499504739-bc5d9272ed9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Mesopotamian artifact",
    publishDate: "2023-04-20",
    readTime: 14,
    ageLevel: "Middle School",
    tags: [
      { name: "Mesopotamia", color: "purple" }
    ],
    author: {
      name: "Prof. Akbar Hussein",
      initials: "AH",
      bio: "Professor of Ancient Near Eastern History specializing in early urban societies."
    },
    didYouKnow: {
      fact: "Mesopotamians invented the concept of time as we know it today, dividing the day into 24 hours, hours into 60 minutes, and minutes into 60 seconds."
    },
    discussionQuestions: [
      "How did the geography of Mesopotamia influence the development of civilization there?",
      "In what ways do we still use Mesopotamian innovations in our daily lives?",
      "Why is writing considered such a revolutionary invention in human history?"
    ],
    relatedArticles: ["1", "2"]
  },
  {
    id: "6",
    slug: "parthenon-symbol-democracys-birth",
    title: "The Parthenon: Symbol of Democracy's Birth",
    description: "Explore how this iconic temple represents ancient Greek achievements in art, architecture, and democratic ideals that still influence us today.",
    content: `
      <p>Perched atop the Acropolis, overlooking the city of Athens, the Parthenon stands as the most iconic symbol of ancient Greek civilization. Built between 447-432 BCE during the height of Athenian power, this temple dedicated to the goddess Athena represented not just religious devotion but the triumph of democracy, reason, and artistic excellence.</p>
      
      <h3>Architectural Perfection</h3>
      <p>The Parthenon appears perfectly straight and symmetrical to the human eye, but in reality, it incorporates subtle curves and adjustments—a technique called entasis. Columns bulge slightly in the middle and lean inward, while the platform curves upward in the center. These optical refinements create the impression of perfect harmony and counteract the visual distortions that would make truly straight lines appear bent.</p>
      
      <p>Its proportions follow the Golden Ratio, a mathematical relationship found throughout nature that's considered especially pleasing to the eye. The attention to mathematical precision reflects Greek values of reason and order.</p>
      
      <h3>Symbol of Democracy</h3>
      <p>The Parthenon was built during the leadership of Pericles, a champion of Athenian democracy. Construction of this magnificent temple was approved by the democratic assembly and funded by the treasury of the Delian League, a coalition of Greek city-states originally formed for defense against the Persian Empire.</p>
      
      <p>This connection between artistic achievement and democratic governance made the Parthenon a powerful symbol. It represented the idea that free citizens governing themselves could reach heights of cultural and intellectual excellence impossible under tyrannical rule.</p>
      
      <h3>Artistic Innovation</h3>
      <p>The sculpted friezes and metopes that decorated the Parthenon told stories of mythical battles and Athenian religious ceremonies. The massive statue of Athena Parthenos (the Virgin) inside the temple stood nearly 40 feet tall, made of gold and ivory over a wooden frame.</p>
      
      <p>These sculptures represented the height of Greek artistic achievement, with natural, idealized human forms that would influence Western art for millennia to come.</p>
      
      <h3>Legacy Through Time</h3>
      <p>Though damaged by explosion in 1687 when used as a gunpowder magazine during Ottoman rule, and further diminished by the removal of many sculptures (the controversial "Elgin Marbles" now in the British Museum), the Parthenon continues to inspire. Its architectural elements appear in government buildings, museums, and banks worldwide as symbols of democracy, reason, and cultural achievement.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1543922596-b3bbaba80649?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Ancient Greek temple",
    publishDate: "2023-03-15",
    readTime: 12,
    ageLevel: "High School",
    tags: [
      { name: "Ancient Greece", color: "green" }
    ],
    author: {
      name: "Dr. Helena Papadopoulos",
      initials: "HP",
      bio: "Architectural historian specializing in ancient Greek temples and their cultural significance."
    },
    didYouKnow: {
      fact: "The Parthenon contains no straight lines or right angles. Every element features subtle curves designed to create the optical illusion of perfect harmony when viewed by the human eye."
    },
    discussionQuestions: [
      "How does architecture reflect the values of a society?",
      "Why do you think so many government buildings around the world are inspired by Greek architectural styles?",
      "What are the ethical considerations surrounding the Elgin Marbles and other artifacts removed from their original locations?"
    ],
    relatedArticles: ["2", "3"]
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
  
  return articles.filter(a => article.relatedArticles?.includes(a.id));
};

export const searchArticles = (query: string, ageLevel: string = 'All'): Article[] => {
  const lowercaseQuery = query.toLowerCase();
  
  return articles.filter(article => {
    const matchesQuery = (
      article.title.toLowerCase().includes(lowercaseQuery) ||
      article.description.toLowerCase().includes(lowercaseQuery) ||
      article.content.toLowerCase().includes(lowercaseQuery) ||
      article.tags.some(tag => tag.name.toLowerCase().includes(lowercaseQuery))
    );
    
    const matchesAgeLevel = ageLevel === 'All' || article.ageLevel === ageLevel;
    
    return matchesQuery && matchesAgeLevel;
  });
};
