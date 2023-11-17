import { TNavigationConfig } from "./types";

export const NAVIGATION: TNavigationConfig = {
    home: '/' as const,
    about: '/about' as const,
    projects: '/projects' as const,
    reviews: '/reviews' as const,
    tests: '/tests' as const
};

export const DEFAULT_ANIMATION_CLASS = "animate-fade animate-once animate-duration-[3000ms]";