import { useRef, useState } from "react";
import { useClickOutside } from "src/hooks/useClickOutside";

export const useBurguerMenu = () => {

    const [isOpened, setIsOpened] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);


    useClickOutside(dropdownRef, () => setIsOpened(false));

    return {
        isOpened,
        dropdownRef,
        toggleMenu: () => setIsOpened(!isOpened)
    };
};