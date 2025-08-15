/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SAQR_SQL_TOOL_VIDEO: string
  readonly VITE_SAQR_WEB_SEARCH_VIDEO: string
  readonly VITE_SAWT_DEMO_VIDEO: string
  readonly VITE_SAWT_TUTORIAL_VIDEO: string
  readonly VITE_GATHERA_OVERVIEW_VIDEO: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}