export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  videos: Array<{
    playbackId: string
    label: string
  }>
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Saqr",
    description: "Personal AI Agent, built to help me at work",
    tags: ["ai", "python", "react native expo"],
    videos: [
      {
        playbackId: import.meta.env.VITE_SAQR_SQL_TOOL_VIDEO,
        label: "SQL Tool"
      },
      {
        playbackId: import.meta.env.VITE_SAQR_WEB_SEARCH_VIDEO,
        label: "Super Web Search Tool"
      }
    ]
  },
  {
    id: 2,
    title: "Sawt",
    description: "Proof of concept for a No-Cost voice agent",
    tags: ["ai", "python", "react"],
    videos: [
      {
        playbackId: import.meta.env.VITE_SAWT_DEMO_VIDEO,
        label: "Demo"
      },
      {
        playbackId: import.meta.env.VITE_SAWT_TUTORIAL_VIDEO,
        label: "Tutorial"
      }
    ]
  },
  {
    id: 3,
    title: "Gathera",
    description: "Social Media App & company I tried to buildß",
    tags: ["node.js", "react native expo"],
    videos: [
      {
        playbackId: import.meta.env.VITE_GATHERA_OVERVIEW_VIDEO,
        label: "Overview"
      }
    ]
  }
]