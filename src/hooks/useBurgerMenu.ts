import { useClickOutside } from "@/hooks/useClickOutside";
import { useRef, useState } from "react";

export const useBurgerMenu = () => {

    const [isOpened, setIsOpened] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);


    useClickOutside(dropdownRef, () => setIsOpened(false));

    return {
        isOpened,
        dropdownRef,
        toggleMenu: () => setIsOpened(!isOpened)
    };
};