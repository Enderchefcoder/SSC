
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [subscribedEmails, setSubscribedEmails] = useLocalStorage<string[]>("newsletter-subscribers", []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Store email in localStorage for offline functionality
      if (!subscribedEmails.includes(email)) {
        setSubscribedEmails([...subscribedEmails, email]);
      }
      
      // Try to send email notification if online
      if (navigator.onLine) {
        try {
          const response = await fetch('/api/newsletter-signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              email,
              adminEmail: 'enderchef1k@gmail.com'
            }),
          });
          
          if (!response.ok) {
            console.warn('Email notification failed, but subscription saved locally');
          }
        } catch (error) {
          console.warn('Email notification failed, but subscription saved locally', error);
        }
      }

      // Success regardless of online status
      toast({
        title: "Thanks for subscribing!",
        description: "You'll now receive our latest articles and resources.",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your subscription was saved locally. We'll sync when you're back online.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-primary-700 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl" id="newsletter-headline">
            Subscribe to our newsletter
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-primary-200 dark:text-gray-300">
            Stay updated with new articles, resources, and monthly themed content for your classroom or homeschool.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex" onSubmit={handleSubmit}>
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <Input
              id="email-address"
              name="email-address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-700 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-700 focus:ring-white transition-all"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
          </form>
          <p className="mt-3 text-sm text-primary-200 dark:text-gray-300">
            We care about your data. Read our
            <a href="#" className="text-white font-medium underline ml-1 hover:text-primary-100 transition-colors">
              Privacy Policy
            </a>.
          </p>
          <div className="mt-3 text-sm text-primary-200 dark:text-gray-300 bg-primary-800 dark:bg-gray-700 p-2 rounded-md">
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {subscribedEmails.length > 0 ? `${subscribedEmails.length} subscribers so far!` : "Be the first to subscribe!"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
