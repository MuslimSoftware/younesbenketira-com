export interface ProjectAsset {
  label: string
  // For videos
  playbackId?: string
  hasAudio?: boolean
  // For images
  src?: string
  alt?: string
}

export interface ProjectLink {
  url: string
  type: 'github' | 'demo'
}

export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  assetType: 'video' | 'image'
  assets: ProjectAsset[]
  links?: ProjectLink[]
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Saqr",
    description: "Personal AI Agent, built to help me at work",
    tags: ["ai", "python", "react native expo"],
    assetType: 'video',
    assets: [
      {
        playbackId: import.meta.env.VITE_SAQR_SQL_TOOL_VIDEO,
        label: "SQL Tool",
        hasAudio: false
      },
      {
        playbackId: import.meta.env.VITE_SAQR_WEB_SEARCH_VIDEO,
        label: "Super Web Search Tool",
        hasAudio: false
      }
    ],
    links: [
      {
        url: "https://github.com/MuslimSoftware/Saqr",
        type: "github"
      },
      {
        url: "https://saqr.younesbenketira.com",
        type: "demo"
      }
    ]
  },
  {
    id: 2,
    title: "Sawt",
    description: "Proof of concept for a No-Cost voice agent",
    tags: ["ai", "python", "react"],
    assetType: 'video',
    assets: [
      {
        playbackId: import.meta.env.VITE_SAWT_DEMO_VIDEO,
        label: "Demo",
        hasAudio: true
      }
    ],
    links: [
      {
        url: "https://github.com/MuslimSoftware/Sawt",
        type: "github"
      },
      {
        url: "https://sawt.younesbenketira.com",
        type: "demo"
      }
    ]
  },
  {
    id: 3,
    title: "Gathera",
    description: "Social media mobile app I co-founded in 2023",
    tags: ["node.js", "react native expo"],
    assetType: 'image',
    assets: [
      {
        src: '/images/gathera-1.png',
        label: "Trending",
        alt: "Become Trending"
      },
      {
        src: '/images/gathera-2.png',
        label: "Discover",
        alt: "Discover Places"
      },
      {
        src: '/images/gathera-3.png',
        label: "Overview",
        alt: "Gathera Overview"
      },
      {
        src: '/images/gathera-4.png',
        label: "Overview",
        alt: "Gathera Overview"
      },
      {
        src: '/images/gathera-5.png',
        label: "Overview",
        alt: "Gathera Overview"
      },
      {
        src: '/images/gathera-6.png',
        label: "Overview",
        alt: "Gathera Overview"
      }
    ],
    links: [
      {
        url: "https://github.com/MuslimSoftware/Gathera",
        type: "github"
      }
    ]
  }
]