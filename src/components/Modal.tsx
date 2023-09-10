"use client";
import { useClickOutside } from "@/hooks/useClickOutside";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { SlClose } from 'react-icons/sl';

type TProps = PropsWithChildren & {
    onClickOutside: VoidFunction
}

export default function Modal({ children, onClickOutside  }: TProps) {
    const [mounted, setMounted] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useClickOutside(modalRef, onClickOutside);

    useEffect(() => setMounted(true), []);
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return mounted ? createPortal(
        <div className="fixed inset-x-0 inset-y-0 z-10 grid text-sm bg-black backdrop-blur-sm bg-opacity-40 place-items-center">
            <div
                ref={modalRef}
                className="relative dark:bg-zinc-700 bg-white dark:text-gray-300 text-zinc-700 w-[80%] sm:w-2/3 md:w-2/3 rounded-md p-6 max-h-[400px] md:max-h-[initial] overflow-scroll md:overflow-hidden"
            >
                {children}
                <button className="absolute text-2xl md:text-xl text-zinc-500 top-3 right-3" onClick={onClickOutside}><SlClose /></button>
            </div>
        </div>,
        document.body
    ) : null;
}