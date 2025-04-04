import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import express from "express";
import { Router } from "express";
import { Prisma } from "@prisma/client";
import { db } from "./db";
import { Article } from "../shared/schema";


export async function registerRoutes(app: Express): Promise<Server> {
  const router = Router();

  // API routes
  router.get("/api/articles", async (req, res) => {
    try {
      const articles = await db.article.findMany({
        include: {
          author: true,
        },
      });
      res.json(articles);
    } catch (error) {
      console.error("Error fetching articles:", error);
      res.status(500).json({ error: "Failed to fetch articles" });
    }
  });

  // Transformation endpoint for AI text processing
  router.post("/api/transform-text", async (req, res) => {
    const { text, complexity } = req.body;

    // Placeholder for actual AI text processing
    // This would be replaced with real API calls to an AI service

    // For now, just return the text as-is
    res.json({ text });
  });

  // Newsletter signup endpoint
  router.post("/api/newsletter-signup", async (req, res) => {
    const { email, adminEmail } = req.body;

    try {
      // Store the email in database (if we're connected to one)
      try {
        await db.newsletter.create({
          data: {
            email,
            subscribedAt: new Date(),
          },
        });
      } catch (error) {
        console.warn("Could not save to database, continuing with notification", error);
      }

      // In a real app, we would use an email service like Nodemailer, SendGrid, etc.
      // For now, we'll just log this to the console
      console.log(`New newsletter signup: ${email}`);
      console.log(`Notification would be sent to: ${adminEmail}`);
      
      // Store in our local storage as a backup
      const subscribers = storage.get('newsletter-subscribers') || [];
      if (!subscribers.includes(email)) {
        subscribers.push(email);
        storage.set('newsletter-subscribers', subscribers);
      }

      res.json({ success: true });
    } catch (error) {
      console.error("Error processing newsletter signup:", error);
      res.status(500).json({ error: "Failed to process signup" });
    }
  });

  // Article summarization endpoint
  router.post("/api/summarize-text", async (req, res) => {
    const { text } = req.body;

    // Generate a simple summary (in a real app, this would use an AI service)
    // For now, we'll create a basic summary by extracting first paragraph and truncating
    let summary = "";

    try {
      // Extract first paragraph and shorten it
      const paragraphs = text.match(/<p>(.*?)<\/p>/g);
      if (paragraphs && paragraphs.length > 0) {
        // Extract content from first paragraph
        const firstPara = paragraphs[0].replace(/<p>(.*?)<\/p>/, "$1");
        // Truncate to ~100 words
        const words = firstPara.split(" ");
        summary = words.slice(0, 30).join(" ") + "...";
      } else {
        // Fallback if no paragraphs found
        summary = text.substring(0, 200) + "...";
      }

      res.json({ summary });
    } catch (error) {
      console.error("Error summarizing text:", error);
      res.status(500).json({ error: "Failed to summarize text" });
    }
  });

  // Generate similar articles endpoint
  router.post("/api/generate-articles", async (req, res) => {
    const { baseArticle, count } = req.body;

    try {
      // In a real app, this would call an AI service
      // For this demo, we'll create variations by altering the base article
      const articles = [];

      const topics = [
        "Ancient Egyptian Culture",
        "Secrets of the Sphinx",
        "Egyptian Burial Practices",
        "Pharaohs of Ancient Egypt",
        "The Valley of the Kings",
        "Egyptian Mythology and Gods",
        "Ancient Egyptian Technology",
        "Hieroglyphics: Writing of Ancient Egypt",
        "Daily Life in Ancient Egypt",
        "Egyptian Art and Architecture"
      ];

      for (let i = 0; i < Math.min(count, topics.length); i++) {
        const newId = (parseInt(baseArticle.id) + 100 + i).toString();
        const newTitle = topics[i];
        const newSlug = newTitle.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

        // Create a variation based on the original article
        const newArticle = {
          ...baseArticle,
          id: newId,
          title: newTitle,
          slug: newSlug,
          description: `Learn about ${newTitle.toLowerCase()} and discover fascinating facts about ancient Egyptian civilization.`,
          publishDate: "2025-04-03",
          author: {
            ...baseArticle.author
          }
        };

        articles.push(newArticle);
      }

      res.json({ articles });
    } catch (error) {
      console.error("Error generating articles:", error);
      res.status(500).json({ error: "Failed to generate articles" });
    }
  });

    app.use(router);
    const httpServer = createServer(app);
    return httpServer;
  }