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
    const closeBtnRef = useRef<HTMLButtonElement>(null);

    useClickOutside(modalRef, onClickOutside);

    useEffect(() => {
        setMounted(true);
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return mounted ? createPortal(
        <div className="fixed inset-x-0 inset-y-0 z-10 grid text-sm bg-black backdrop-blur-sm bg-opacity-40 place-items-center">
            <div
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                className="relative dark:bg-neutral-700 bg-white dark:text-neutral-300 text-neutral-700 w-4/5 md:w-96 lg:w-1/3 rounded-md p-6 max-h-[400px] md:max-h-[initial] overflow-scroll md:overflow-hidden"
            >
                <h2 id="modal-title" className="sr-only">Modal</h2>
                {children}
                <button
                    ref={closeBtnRef}
                    className="absolute text-2xl md:text-xl text-neutral-500 top-3 right-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                    aria-label="Cerrar modal"
                    onClick={onClickOutside}
                >
                    <SlClose />
                </button>
            </div>
        </div>,
        document.body
    ) : null;
}