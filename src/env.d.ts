declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly MODE: string;
  readonly DEV: boolean;
  readonly PROD: boolean;
  /** Base URL of the Vercel chat API (e.g. https://your-project.vercel.app). No API key here. */
  readonly VITE_CHAT_API_BASE_URL?: string;
  [key: string]: unknown;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

