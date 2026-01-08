
export interface User {
  id: string;
  name: string;
  avatar: string;
  role: string;
}

export type ChatType = 'personal' | 'channel' | 'group';

export interface ChatPreview {
  id: string;
  creatorId: string; // Links to MOCK_USERS
  type: ChatType;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unreadCount?: number;
  statusIcon?: 'camera' | 'play' | 'dot' | 'none';
  category: 'One-to-One' | 'Groups' | 'Requests';
}

export interface Vlog {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  creator: User;
  views: string;
  date: string;
  category: string;
  content?: string;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
}
