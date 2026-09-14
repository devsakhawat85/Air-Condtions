export interface CoachingPathway {
  id: '1-on-1' | 'relationships';
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  forWhom: string[];
  includes: string[];
  timeframe: string;
  ctaText: string;
  image: string;
  imageAlt: string;
}

export interface RootedPrinciple {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deepDive: string;
  quote: string;
  image: string;
}

export interface InstagramPost {
  id: string;
  category: 'strength' | 'talking-camera' | 'lifestyle' | 'nutrition' | 'outdoor' | 'mindset' | 'relationships';
  categoryLabel: string;
  image: string;
  alt: string;
  caption: string;
  likes: number;
  comments: number;
  date: string;
  isReel?: boolean;
  postUrl?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  client: string;
  location: string;
  pathway: string;
  duration: string;
  results: string;
  image: string;
}

export interface PodcastEpisode {
  id: string;
  episodeNumber: string;
  title: string;
  duration: string;
  date: string;
  description: string;
  guest?: string;
  topics: string[];
  audioSampleLength: string;
}

export interface Article {
  id: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  image: string;
  content: string[];
}

export interface CuratedPick {
  id: string;
  name: string;
  category: string;
  description: string;
  roNote: string;
  tag: string;
  image: string;
}
