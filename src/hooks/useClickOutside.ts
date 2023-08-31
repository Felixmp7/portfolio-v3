import { RefObject, useEffect } from "react";

export const useClickOutside = (ref: RefObject<any>, onClickOutside: VoidFunction) => {
    useEffect(() => {
        function handleClickOutside(event: { target: any }) {
            if (ref?.current && !ref?.current.contains(event.target)) {
                onClickOutside();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, onClickOutside]);
};