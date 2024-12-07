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

interface Swipe {
	startX: number;
	startY: number;
	controlX1: number;
	controlY1: number;
	controlX2: number;
	controlY2: number;
	endX: number;
	endY: number;
}
