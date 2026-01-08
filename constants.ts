
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
  },
  {
    id: "v3",
    title: "Tokyo Nights: A Neon Symphony",
    description: "Capturing the electric pulse of Shibuya after midnight.",
    thumbnail: "https://picsum.photos/seed/tokyo/800/450",
    creator: MOCK_USERS["u9"],
    views: "2.4M",
    date: "3 days ago",
    category: "Travel",
    content: "Tokyo never sleeps, and neither did we. Three nights of chasing light trails through the world's busiest intersection, where every frame tells a story of motion and chaos."
  },
  {
    id: "v4",
    title: "8K Cinematography: Masterclass in Detail",
    description: "Breaking down the techniques behind ultra-high-resolution storytelling.",
    thumbnail: "https://picsum.photos/seed/cinematography/800/450",
    creator: MOCK_USERS["u3"],
    views: "650K",
    date: "5 days ago",
    category: "Tutorial",
    content: "We're entering a new era of visual fidelity. In this deep dive, I'll show you how to leverage 8K resolution to capture details that 4K simply cannot reproduce—every texture, every grain of sand, every pixel matters."
  },
  {
    id: "v5",
    title: "The Art of Color Grading: From RAW to Cinematic",
    description: "Transforming flat footage into visual poetry through color science.",
    thumbnail: "https://picsum.photos/seed/colorgrade/800/450",
    creator: MOCK_USERS["u4"],
    views: "980K",
    date: "1 week ago",
    category: "Tutorial",
    content: "Color grading isn't just about making things look pretty—it's about emotional storytelling. Here's how I transformed this raw footage into a moody, atmospheric narrative that speaks to the soul."
  },
  {
    id: "v6",
    title: "Sushi at Dawn: The Quiet Ritual",
    description: "A meditative journey into Tokyo's finest omakase experience.",
    thumbnail: "https://picsum.photos/seed/sushi/800/450",
    creator: MOCK_USERS["u6"],
    views: "1.8M",
    date: "4 days ago",
    category: "Lifestyle",
    content: "At 5 AM, when the city still sleeps, Master Tanaka begins his daily ritual. Each cut, each placement, each grain of rice—all orchestrated in silence. This is where art meets precision."
  },
  {
    id: "v7",
    title: "VFX Breakdown: Creating Impossible Worlds",
    description: "Behind the scenes of crafting photorealistic digital environments.",
    thumbnail: "https://picsum.photos/seed/vfx/800/450",
    creator: MOCK_USERS["u8"],
    views: "750K",
    date: "6 days ago",
    category: "Technology",
    content: "What you see on screen looks real because it was real—just not in the way you think. This is how we blend practical effects with digital wizardry to create something that transcends reality."
  },
  {
    id: "v8",
    title: "Documentary: The Last Nomads of Mongolia",
    description: "Three months living with families preserving ancient traditions.",
    thumbnail: "https://picsum.photos/seed/mongolia/800/450",
    creator: MOCK_USERS["u7"],
    views: "1.5M",
    date: "1 week ago",
    category: "Travel",
    content: "In the vast emptiness of the Mongolian steppe, generations have lived without walls. I spent three months documenting the daily life of families who choose freedom over comfort, tradition over modernity."
  },
  {
    id: "v9",
    title: "Camera Tech: The Future of Mirrorless Filmmaking",
    description: "Testing the latest cinema cameras pushing creative boundaries.",
    thumbnail: "https://picsum.photos/seed/camera/800/450",
    creator: MOCK_USERS["u1"],
    views: "520K",
    date: "2 weeks ago",
    category: "Technology",
    content: "The gap between cinema cameras and mirrorless is closing faster than anyone predicted. Here's my hands-on review of the latest gear that's changing how we tell stories."
  },
  {
    id: "v10",
    title: "Fashion Film: Shadows and Silhouettes",
    description: "A minimalist exploration of form, texture, and movement.",
    thumbnail: "https://picsum.photos/seed/fashion/800/450",
    creator: MOCK_USERS["u4"],
    views: "1.1M",
    date: "5 days ago",
    category: "Lifestyle",
    content: "Fashion isn't just clothing—it's architecture for the body. This film strips away the noise to focus on pure form, where every fold of fabric tells a story of elegance and restraint."
  },
  {
    id: "v11",
    title: "Extreme Sports: Conquering the Unclimbable",
    description: "Free soloing routes that push human limits to the absolute edge.",
    thumbnail: "https://picsum.photos/seed/extreme/800/450",
    creator: MOCK_USERS["u5"],
    views: "3.2M",
    date: "1 day ago",
    category: "Lifestyle",
    content: "There's a line between bravery and recklessness. This is what happens when skill, preparation, and sheer will converge at 2,000 feet above the ground. Every grip matters. Every breath counts."
  },
  {
    id: "v12",
    title: "Minimalism: Living with Less in Tokyo",
    description: "A year-long experiment in intentional living and space.",
    thumbnail: "https://picsum.photos/seed/minimal/800/450",
    creator: MOCK_USERS["u2"],
    views: "890K",
    date: "1 week ago",
    category: "Lifestyle",
    content: "I gave away 80% of my possessions and moved into a 200-square-foot apartment. What I lost in space, I gained in clarity. This is what true minimalism looks like when applied to life."
  },
  {
    id: "v13",
    title: "Post-Production Workflow: Efficiency Meets Quality",
    description: "Streamlining your editing pipeline without sacrificing cinematic quality.",
    thumbnail: "https://picsum.photos/seed/workflow/800/450",
    creator: MOCK_USERS["u3"],
    views: "640K",
    date: "3 days ago",
    category: "Tutorial",
    content: "Time is money, but quality is reputation. Here's how I've structured my post-production workflow to deliver cinema-grade results in half the time—from ingest to final export."
  },
  {
    id: "v14",
    title: "Urban Exploration: Abandoned Wonders",
    description: "Discovering forgotten architecture hidden in plain sight.",
    thumbnail: "https://picsum.photos/seed/urban/800/450",
    creator: MOCK_USERS["u9"],
    views: "1.3M",
    date: "4 days ago",
    category: "Travel",
    content: "Some of the most beautiful places in the world are the ones we've forgotten. Join me as I explore abandoned structures that once held dreams, now reclaimed by time and nature."
  },
  {
    id: "v15",
    title: "AI in Filmmaking: Tool or Threat?",
    description: "Exploring how artificial intelligence is reshaping creative industries.",
    thumbnail: "https://picsum.photos/seed/ai/800/450",
    creator: MOCK_USERS["u1"],
    views: "920K",
    date: "2 weeks ago",
    category: "Technology",
    content: "Is AI the future of filmmaking, or does it threaten the soul of our craft? I've tested every major AI tool in production, and the results will surprise you."
  },
  {
    id: "v16",
    title: "Sound Design: The Unseen Storyteller",
    description: "How audio transforms visuals into immersive experiences.",
    thumbnail: "https://picsum.photos/seed/sound/800/450",
    creator: MOCK_USERS["u8"],
    views: "580K",
    date: "1 week ago",
    category: "Tutorial",
    content: "Great visuals catch the eye, but great sound captures the soul. Here's how I layer audio to create depth, emotion, and atmosphere that viewers feel in their bones."
  }
];
