
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number | string; // Allow string for 'Ongoing' etc
  thumbnail: string;
  abstract: string;
  pdfLink?: string;
  codeLink?: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  content: string;
}

export interface Member {
  id: string;
  name: string;
  role: 'Advisor' | 'Researcher' | 'Director' | 'Alumni';
  image: string;
  bio: string;
  email?: string;
  website?: string;
  scholar?: string; // Added google scholar link support
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}
