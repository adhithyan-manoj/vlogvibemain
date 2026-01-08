
import { Vlog, User, ChatPreview } from './types';

export const CURRENT_USER: User = {
  id: "me",
  name: "Jordan Vlogs",
  avatar: "https://picsum.photos/seed/jordan/200",
  role: "Elite Storyteller"
};

export const MOCK_USERS: Record<string, User> = {
  "u1": {
    id: "u1",
    name: "Alex Riviera",
    avatar: "https://picsum.photos/seed/alex/200",
    role: "Tech Storyteller"
  },
  "u2": {
    id: "u2",
    name: "Sarah Chen",
    avatar: "https://picsum.photos/seed/sarah/200",
    role: "Travel Minimalist"
  },
  "u3": {
    id: "u3",
    name: "Marco Rossi",
    avatar: "https://picsum.photos/seed/marco/200",
    role: "Cinematographer"
  },
  "u4": {
    id: "u4",
    name: "Elena Rodriguez",
    avatar: "https://picsum.photos/seed/elena/200",
    role: "Fashion Film Director"
  },
  "u5": {
    id: "u5",
    name: "Zane Maverick",
    avatar: "https://picsum.photos/seed/zane/200",
    role: "Action Vlogger"
  },
  "u6": {
    id: "u6",
    name: "Yuki Tanaka",
    avatar: "https://picsum.photos/seed/yuki/200",
    role: "Food Artisan"
  },
  "u7": {
    id: "u7",
    name: "Leo Sterling",
    avatar: "https://picsum.photos/seed/leo/200",
    role: "Documentary Maker"
  },
  "u8": {
    id: "u8",
    name: "Maya Thorne",
    avatar: "https://picsum.photos/seed/maya/200",
    role: "VFX Architect"
  },
  "u9": {
    id: "u9",
    name: "Soren K.",
    avatar: "https://picsum.photos/seed/soren/200",
    role: "Urban Explorer"
  }
};

export const MOCK_CHATS: ChatPreview[] = [
  {
    id: "c1",
    creatorId: "u4",
    type: "personal",
    name: "Elena Rodriguez",
    avatar: "https://picsum.photos/seed/elena/200",
    lastMessage: "The color grade is perfect! Can't wait for the drop.",
    timestamp: "12m",
    unreadCount: 1,
    statusIcon: "camera",
    category: "One-to-One"
  },
  {
    id: "c2",
    creatorId: "u5",
    type: "personal",
    name: "Zane Maverick",
    avatar: "https://picsum.photos/seed/zane/200",
    lastMessage: "Sent a video",
    timestamp: "2h",
    statusIcon: "play",
    category: "One-to-One"
  },
  {
    id: "c3",
    creatorId: "u2",
    type: "personal",
    name: "Sarah Chen",
    avatar: "https://picsum.photos/seed/sarah/200",
    lastMessage: "Check out this location! It's super hidden.",
    timestamp: "5h",
    unreadCount: 2,
    statusIcon: "camera",
    category: "One-to-One"
  },
  {
    id: "c4",
    creatorId: "u6",
    type: "personal",
    name: "Yuki Tanaka",
    avatar: "https://picsum.photos/seed/yuki/200",
    lastMessage: "The sushi sequence was purely art. Well done!",
    timestamp: "13h",
    statusIcon: "camera",
    category: "One-to-One"
  },
  {
    id: "c5",
    creatorId: "u9",
    type: "personal",
    name: "Soren K.",
    avatar: "https://picsum.photos/seed/soren/200",
    lastMessage: "Found a new rooftop in the city center. You in?",
    timestamp: "1d",
    unreadCount: 3,
    statusIcon: "dot",
    category: "One-to-One"
  },
  {
    id: "g1",
    creatorId: "u8",
    type: "group",
    name: "VFX Masters Elite",
    avatar: "https://picsum.photos/seed/vfx/200",
    lastMessage: "Alex: New render plugin out. It's 10x faster.",
    timestamp: "45m",
    unreadCount: 12,
    statusIcon: "dot",
    category: "Groups"
  },
  {
    id: "g2",
    creatorId: "u3",
    type: "group",
    name: "Global Creators",
    avatar: "https://picsum.photos/seed/global/200",
    lastMessage: "Sarah: Who's in Tokyo for the cherry blossoms?",
    timestamp: "1d",
    statusIcon: "dot",
    category: "Groups"
  },
  {
    id: "g3",
    creatorId: "u1",
    type: "group",
    name: "Gear & Tech Talk",
    avatar: "https://picsum.photos/seed/gear/200",
    lastMessage: "Maya: The new Sony sensor is unbelievable...",
    timestamp: "2d",
    unreadCount: 5,
    statusIcon: "dot",
    category: "Groups"
  },
  {
    id: "r1",
    creatorId: "u7",
    type: "personal",
    name: "Leo Sterling",
    avatar: "https://picsum.photos/seed/leo/200",
    lastMessage: "Collaboration inquiry: Project 'Shadows'",
    timestamp: "3d",
    statusIcon: "camera",
    category: "Requests"
  },
  {
    id: "r2",
    creatorId: "u8",
    type: "personal",
    name: "Maya Thorne",
    avatar: "https://picsum.photos/seed/maya/200",
    lastMessage: "I saw your latest work. Would love to chat!",
    timestamp: "1w",
    statusIcon: "camera",
    category: "Requests"
  }
];

export const MOCK_VLOGS: Vlog[] = [
  {
    id: "v1",
    title: "Chasing the Northern Lights in Iceland",
    description: "A cinematic journey through the snowy landscapes of the north.",
    thumbnail: "https://picsum.photos/seed/iceland/800/450",
    creator: MOCK_USERS["u2"],
    views: "1.2M",
    date: "2 days ago",
    category: "Travel",
    content: "The Icelandic winter is something out of a dream. We spent three weeks driving through the Ring Road, waiting for that one moment when the sky would crack open and reveal the emerald curtains of the Aurora Borealis."
  },
  {
    id: "v2",
    title: "Why I Quit My 9-5 for Full-Time Vlogging",
    description: "The honest truth about the creator economy and taking risks.",
    thumbnail: "https://picsum.photos/seed/office/800/450",
    creator: MOCK_USERS["u1"],
    views: "850K",
    date: "1 week ago",
    category: "Lifestyle",
    content: "Transitioning from a stable desk job to the unpredictable world of content creation was the scariest decision of my life."
  }
];
