export enum Era {
  PALEOLITHIC = 'Paleolithic',
  MESOLITHIC = 'Mesolithic',
  NEOLITHIC = 'Neolithic'
}

export type View = 'HOME' | 'TIMELINE' | 'ARTIFACTS' | 'TEAM' | 'GUIDE';

export interface Artifact {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  era: Era;
  use: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  era: Era;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isTyping?: boolean;
}