import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

import Home from "@/pages/Home";
import Articles from "@/pages/Articles";
import ArticlePage from "@/pages/ArticlePage";
import Resources from "@/pages/Resources";
import About from "@/pages/About";
import NotFound from "@/pages/not-found";
import CreateArticlePage from "@/pages/CreateArticlePage";
import EditArticlePage from "@/pages/EditArticlePage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleImporter from "@/components/ArticleImporter";
import GreekGods from "./pages/GreekGods";
import EMuseum from "./pages/EMuseum";
import { useToast } from "./hooks/use-toast"; // Added useToast hook


function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/articles" component={Articles} />
          <Route path="/article/:slug" component={ArticlePage} />
          <Route path="/resources" component={Resources} />
          <Route path="/about" component={About} />
          <Route path="/create-article" component={CreateArticlePage} />
          <Route path="/edit-article/:slug">
            {(params) => <EditArticlePage params={params} />}
          </Route>
          <Route path="/import-article" component={ArticleImporter} />
          <Route path="/greek-gods" element={<GreekGods />} />
          <Route path="/e-museum" element={<EMuseum />} />
          <Route path="/common-core" element={<Articles />} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { toast } = useToast();

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      toast({
        title: "You're back online!",
        description: "Your data will now sync with the server.",
      });
    };

    const handleOffline = () => {
      setIsOnline(false);
      toast({
        title: "You're offline",
        description: "The app will continue to work with local data.",
        variant: "destructive",
      });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [toast]);

  return (
    <QueryClientProvider client={queryClient}>
      <div> {/*Added div to wrap the layout and offline message*/}
        {!isOnline && (
          <div className="bg-amber-100 dark:bg-amber-900 p-2 text-center text-amber-800 dark:text-amber-200 text-sm">
            You're currently offline. The app will continue to work with locally saved data.
          </div>
        )}
        <Router />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;