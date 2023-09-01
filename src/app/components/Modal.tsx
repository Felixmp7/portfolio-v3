"use client";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "src/hooks/useClickOutside";

type TProps = PropsWithChildren & {
    onClickOutside: VoidFunction
}

export default function Modal({ children, onClickOutside  }: TProps) {
    const [mounted, setMounted] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useClickOutside(modalRef, onClickOutside);
    useEffect(() => setMounted(true), []);

    return mounted ? createPortal(
        <div className="fixed inset-x-0 inset-y-0 z-10 grid text-sm bg-black backdrop-blur-sm bg-opacity-40 place-items-center">
            <div ref={modalRef} className="dark:bg-zinc-600 bg-white dark:text-gray-300 text-zinc-700 w-[90%] sm:w-2/3 md:w-1/2 rounded-md p-6">
                {children}
            </div>
        </div>,
        document.body
    ) : null;
}