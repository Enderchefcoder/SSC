import { users, type User, type InsertUser } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  addNewsletterSubscriber(email: string): void;
  getNewsletterSubscribers(): string[];
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  currentId: number;
  private newsletterSubscribers: string[] = [];

  constructor() {
    this.users = new Map();
    this.currentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  addNewsletterSubscriber(email: string): void {
    this.newsletterSubscribers.push(email);
  }

  getNewsletterSubscribers(): string[] {
    return this.newsletterSubscribers;
  }
}


class Storage {
  private data: Record<string, any> = {
    'newsletter-subscribers': [],
  };

  constructor() {
    // Initialize with some default data if needed
    this.loadFromLocalStorage();
  }

  get(key: string): any {
    return this.data[key];
  }

  set(key: string, value: any): void {
    this.data[key] = value;
    this.saveToLocalStorage();
  }

  delete(key: string): void {
    delete this.data[key];
    this.saveToLocalStorage();
  }

  // Save data to localStorage for offline capability
  private saveToLocalStorage(): void {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('social-studies-corner-storage', JSON.stringify(this.data));
      }
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }

  // Load data from localStorage
  private loadFromLocalStorage(): void {
    try {
      if (typeof window !== 'undefined') {
        const savedData = localStorage.getItem('social-studies-corner-storage');
        if (savedData) {
          this.data = { ...this.data, ...JSON.parse(savedData) };
        }
      }
    } catch (error) {
      console.error('Error loading from localStorage:', error);
    }
  }
  addNewsletterSubscriber(email: string): void {
    this.data['newsletter-subscribers'].push(email);
    this.saveToLocalStorage();
  }

  getNewsletterSubscribers(): string[] {
    return this.data['newsletter-subscribers'] || [];
  }
}

export const storage = new MemStorage();
export const persistentStorage = new Storage();