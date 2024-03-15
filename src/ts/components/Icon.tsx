export enum IconSVG {
	Hiragana = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.47 23.98"><path class="cls-1" d="M15.12,9.42c1.94.46,3.49,1.32,4.63,2.57s1.72,2.7,1.72,4.35c0,4.1-2.79,6.65-8.37,7.65l-1.05-2.4c2.14-.16,3.84-.72,5.09-1.7s1.87-2.08,1.87-3.33c0-2.27-1.51-3.86-4.54-4.76-1.19,3.21-2.56,5.67-4.13,7.39.22.41.53.92.93,1.52l-2.08,1.39c-.21-.27-.47-.65-.77-1.16-1.8,1.37-3.32,2.06-4.56,2.06-1.09,0-2-.4-2.74-1.19-.74-.79-1.11-1.81-1.11-3.06,0-1.64.52-3.21,1.56-4.73,1.04-1.51,2.53-2.78,4.47-3.79,0-.83.06-1.98.18-3.45-.72.02-2.11.03-4.17.03l-.14-2.46c2.25,0,3.78,0,4.58-.03.16-1.22.38-2.65.68-4.31l2.58.4c-.23.87-.48,2.13-.75,3.78,2.7-.07,5.6-.37,8.71-.9l.35,2.43c-3.06.45-6.17.76-9.3.94-.1.43-.17,1.33-.21,2.68.94-.19,1.94-.29,3.01-.29.35,0,.69.01,1.04.04.21-.66.38-1.3.51-1.92l2.46.44c-.17.75-.31,1.35-.44,1.81ZM7.3,18.58c-.64-1.93-1.03-3.79-1.16-5.58-1.02.55-1.88,1.32-2.59,2.29-.7.98-1.06,2.03-1.06,3.16,0,1.34.39,2.02,1.16,2.02,1.21,0,2.42-.63,3.64-1.89ZM11.86,11.51c-.2-.02-.4-.03-.61-.03-.8,0-1.68.15-2.64.46-.03,1.46.21,2.99.7,4.57,1-1.37,1.85-3.04,2.54-5Z"/></svg>`,
	Katakana = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 23.34"><path d="M24,2.88c-2.96,3.87-5.8,6.64-8.54,8.33l-1.93-2.35c2.09-1.26,4.31-3.33,6.67-6.19H0V0h24v2.88ZM12.91,4.92c.04.92.06,1.78.06,2.57,0,4.12-.63,7.39-1.89,9.82s-3.33,4.44-6.21,6.03l-2.17-2.2c1.97-1.08,3.51-2.28,4.61-3.59s1.83-2.85,2.19-4.61.5-4.43.41-8.02h3.01Z"/></svg>`,
	Check = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.3462 7.2539"><polygon points="9.3462 1.4141 7.9321 0 3.5081 4.4244 1.4141 2.3301 0 3.7441 2.0941 5.8385 2.0928 5.8398 3.5068 7.2539 3.5081 7.2527 3.5093 7.2539 4.9233 5.8398 4.9221 5.8386 9.3462 1.4141"/></svg>',
	Cross = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.4253 9.4253"><polygon points="9.4253 1.4141 8.0112 0 4.7126 3.2986 1.4141 0 0 1.4141 3.2986 4.7126 0 8.0112 1.4141 9.4253 4.7126 6.1267 8.0112 9.4253 9.4253 8.0112 6.1267 4.7126 9.4253 1.4141" /></svg>',
}

export enum IconSize {
	custom = "",
	XXS = "icon--size-xxs",
	XS = "icon--size-xs",
	SM = "icon--size-sm",
	MD = "icon--size-md",
	LG = "icon--size-lg",
	XL = "icon--size-xl",
	XXL = "icon--size-xxl",
}

export type IconSVGProps = {
	svg: IconSVG;
	size?: IconSize;
	className?: string;
};

export function Icon({ svg, size = IconSize.SM, className = "" }: IconSVGProps) {
	return <span className={`icon ${className} ${size ? size : ""}`} dangerouslySetInnerHTML={{ __html: svg }} />;
}