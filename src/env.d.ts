/// <reference types="astro/client" />

declare module '*.svg' {
	const content: string;
	export default content;
}

interface ImportMetaEnv {
	readonly PUBLIC_API_URL: string;
	// Add other environment variables here...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
