import { NavigationConfig } from "./models/types";

export const NAVIGATION: NavigationConfig = Object.freeze({
    home: '/' as const,
    about: '/about' as const,
    experience: '/experience' as const,
    projects: '/projects' as const
});

export const DEFAULT_ANIMATION_CLASS = "animate-fade animate-once animate-duration-[3000ms]";