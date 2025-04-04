
import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Map, Image, Gamepad2 } from "lucide-react";

type VirtualTour = {
  id: string;
  name: string;
  description: string;
  region: string;
  imageUrl: string;
};

type MegafaunaGame = {
  id: string;
  name: string;
  image: string;
  hint: string;
  answer: string;
};

const virtualTours: VirtualTour[] = [
  {
    id: "banpo",
    name: "Banpo Village",
    description: "Explore the ancient Chinese settlement with its central building and circular houses.",
    region: "Ancient China",
    imageUrl: "https://placeholder.pics/svg/400x300/DEDEDE/555555/Banpo%20Village%20Tour"
  },
  {
    id: "oaxaca",
    name: "Oaxaca Valley",
    description: "Visit the caves where early Mesoamericans developed maize cultivation.",
    region: "Mesoamerica",
    imageUrl: "https://placeholder.pics/svg/400x300/DEDEDE/555555/Oaxaca%20Valley%20Tour"
  },
  {
    id: "faiyum",
    name: "Faiyum Oasis",
    description: "Discover Egypt's original farming community near the Nile River.",
    region: "North Africa",
    imageUrl: "https://placeholder.pics/svg/400x300/DEDEDE/555555/Faiyum%20Oasis%20Tour"
  },
  {
    id: "catalhoyuk",
    name: "Çatalhöyük",
    description: "Tour the world's first known town and its unique architectural features.",
    region: "Southwest Asia",
    imageUrl: "https://placeholder.pics/svg/400x300/DEDEDE/555555/Catalhoyuk%20Tour"
  },
  {
    id: "gobekli-tepe",
    name: "Göbekli Tepe",
    description: "Explore the world's oldest known temple complex.",
    region: "Southwest Asia",
    imageUrl: "https://placeholder.pics/svg/400x300/DEDEDE/555555/Gobekli%20Tepe%20Tour"
  },
  {
    id: "ancient-agora",
    name: "Ancient Agora of Athens",
    description: "Walk through the heart of ancient Athenian civic life.",
    region: "Greece",
    imageUrl: "https://placeholder.pics/svg/400x300/DEDEDE/555555/Ancient%20Agora%20Tour"
  },
  {
    id: "delphi",
    name: "Delphi",
    description: "Visit the home of the famous Oracle of Apollo in ancient Greece.",
    region: "Greece",
    imageUrl: "https://placeholder.pics/svg/400x300/DEDEDE/555555/Delphi%20Tour"
  },
  {
    id: "giza",
    name: "Pyramid of Giza",
    description: "Marvel at the only remaining ancient wonder of the world.",
    region: "Egypt",
    imageUrl: "https://placeholder.pics/svg/400x300/DEDEDE/555555/Giza%20Pyramid%20Tour"
  },
  {
    id: "new-delhi",
    name: "New Delhi",
    description: "Explore the historical landmarks of India's capital city.",
    region: "India",
    imageUrl: "https://placeholder.pics/svg/400x300/DEDEDE/555555/New%20Delhi%20Tour"
  },
  {
    id: "temple-of-heaven",
    name: "Temple of Heaven",
    description: "Tour the imperial complex of religious buildings in Beijing.",
    region: "China",
    imageUrl: "https://placeholder.pics/svg/400x300/DEDEDE/555555/Temple%20of%20Heaven%20Tour"
  }
];

const megafaunaGame: MegafaunaGame[] = [
  {
    id: "mammoth",
    name: "Mystery Megafauna #1",
    image: "https://placeholder.pics/svg/400x300/DEDEDE/555555/Mammoth%20Skeleton",
    hint: "This creature had long curved tusks and a trunk similar to modern elephants.",
    answer: "Woolly Mammoth"
  },
  {
    id: "saber-tooth",
    name: "Mystery Megafauna #2",
    image: "https://placeholder.pics/svg/400x300/DEDEDE/555555/Saber-Tooth%20Skeleton",
    hint: "This predator had extremely long canine teeth for hunting large prey.",
    answer: "Saber-toothed Cat (Smilodon)"
  },
  {
    id: "megatherium",
    name: "Mystery Megafauna #3",
    image: "https://placeholder.pics/svg/400x300/DEDEDE/555555/Giant%20Sloth%20Skeleton",
    hint: "This giant creature was related to modern sloths but stood up to 20 feet tall.",
    answer: "Giant Ground Sloth (Megatherium)"
  },
  {
    id: "glyptodon",
    name: "Mystery Megafauna #4",
    image: "https://placeholder.pics/svg/400x300/DEDEDE/555555/Glyptodon%20Skeleton",
    hint: "This creature had a large domed shell similar to a modern turtle or armadillo.",
    answer: "Glyptodon"
  },
  {
    id: "megaloceros",
    name: "Mystery Megafauna #5",
    image: "https://placeholder.pics/svg/400x300/DEDEDE/555555/Irish%20Elk%20Skeleton",
    hint: "This deer-like animal had the largest antlers of any known deer species.",
    answer: "Irish Elk (Megaloceros)"
  }
];

export default function EMuseum() {
  const [activeGame, setActiveGame] = useState<MegafaunaGame | null>(null);
  const [userGuess, setUserGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [activeTour, setActiveTour] = useState<VirtualTour | null>(null);

  const checkAnswer = () => {
    if (!activeGame) return;
    
    const normalizedGuess = userGuess.toLowerCase().trim();
    const normalizedAnswer = activeGame.answer.toLowerCase();
    
    if (normalizedAnswer.includes(normalizedGuess) && normalizedGuess.length > 3) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const resetGame = () => {
    setActiveGame(null);
    setUserGuess("");
    setIsCorrect(null);
  };

  const startTour = (tour: VirtualTour) => {
    setActiveTour(tour);
  };

  const closeTour = () => {
    setActiveTour(null);
  };

  return (
    <Layout>
      <div className="container mx-auto py-10">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">E-Museum</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Explore interactive exhibits, games, and virtual tours of historical sites from around the world.
        </p>

        <Tabs defaultValue="tours" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="tours" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Virtual Tours
            </TabsTrigger>
            <TabsTrigger value="megafauna" className="flex items-center gap-2">
              <Gamepad2 className="h-4 w-4" />
              Megafauna Game
            </TabsTrigger>
            <TabsTrigger value="exhibits" className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              Exhibits
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tours" className="mt-6">
            {activeTour ? (
              <div className="mb-8">
                <Button variant="outline" onClick={closeTour} className="mb-4">
                  &larr; Back to Tours
                </Button>
                <div className="rounded-lg overflow-hidden border bg-card">
                  <div className="aspect-video w-full bg-muted">
                    <img
                      src={activeTour.imageUrl}
                      alt={activeTour.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{activeTour.name}</h2>
                    <p className="text-muted-foreground mb-4">{activeTour.region}</p>
                    <p className="mb-6">{activeTour.description}</p>
                    <p className="bg-primary/10 p-4 rounded-md text-center">
                      Virtual tour experience coming soon! This feature is under development.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {virtualTours.map((tour) => (
                  <Card key={tour.id} className="overflow-hidden">
                    <div className="aspect-video w-full bg-muted">
                      <img
                        src={tour.imageUrl}
                        alt={tour.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{tour.name}</CardTitle>
                      <CardDescription>{tour.region}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{tour.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button onClick={() => startTour(tour)}>Start Tour</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="megafauna" className="mt-6">
            {activeGame ? (
              <div className="max-w-2xl mx-auto">
                <Button variant="outline" onClick={resetGame} className="mb-4">
                  &larr; Back to Game Selection
                </Button>
                <Card>
                  <div className="aspect-video w-full bg-muted">
                    <img
                      src={activeGame.image}
                      alt="Mystery Megafauna"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{activeGame.name}</CardTitle>
                    <CardDescription>Can you identify this prehistoric creature?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="mb-2 font-medium">Hint:</p>
                      <p className="italic">{activeGame.hint}</p>
                    </div>
                    
                    {isCorrect === null ? (
                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <input
                            type="text"
                            value={userGuess}
                            onChange={(e) => setUserGuess(e.target.value)}
                            placeholder="Enter your guess"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                          <Button onClick={checkAnswer}>Check</Button>
                        </div>
                      </div>
                    ) : (
                      <div className={`p-4 rounded-md ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {isCorrect ? (
                          <p>Correct! This is a {activeGame.answer}.</p>
                        ) : (
                          <p>Not quite. The correct answer is: {activeGame.answer}.</p>
                        )}
                        <Button onClick={resetGame} className="mt-4">
                          Try Another
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold mb-4">Megafauna Guess Game</h2>
                <p className="mb-6">
                  Test your knowledge of prehistoric creatures! Look at the skeleton and guess what
                  megafauna it belongs to.
                </p>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {megafaunaGame.map((game) => (
                    <Card key={game.id} className="overflow-hidden">
                      <div className="aspect-video w-full bg-muted">
                        <img
                          src={game.image}
                          alt={game.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{game.name}</CardTitle>
                      </CardHeader>
                      <CardFooter>
                        <Button onClick={() => setActiveGame(game)}>Start Challenge</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="exhibits" className="mt-6">
            <div className="text-center py-16 bg-muted rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Coming Soon!</h2>
              <p className="max-w-2xl mx-auto">
                We're working on creating interactive exhibits featuring artifacts, 
                3D models, and educational content from various historical periods.
                Check back soon for updates!
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
