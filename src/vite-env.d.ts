// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_END_POINT: string
  readonly VITE_API_USERNAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
