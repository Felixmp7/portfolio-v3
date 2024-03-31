'use client';

import BlurImage from "@/components/BlurImage";
import { EnterpriseLogo } from "@/components/EnterpriseLogo";
import Modal from "@/components/Modal";
import { useIsOnViewport } from "@/hooks/useIsOnViewport";
import clsx from "clsx";
import Link from "next/link";
import { useRef, useState } from "react";
import { TbExternalLink, TbProgress } from 'react-icons/tb';
import { ProjectStatus } from "src/models/enums";
import { Project } from "src/models/types";
import { splitString } from "src/utils";

export const ProjectResume = ({
    enterpriseName, description, status, urlName, contributions, url, stack, images, logo
}: Project) => {
    const [isOpened, setIsOpened] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { isOnViewport } = useIsOnViewport(containerRef);
    const stackArray = splitString(stack);
    const imagesArray = splitString(images);
    const isPOC = status === ProjectStatus.poc;

    return (
        <>
            <div ref={containerRef} className={clsx({
                'relative p-6 duration-200 ease-in-out rounded-lg md:pb-20 hover:bg-zinc-50 dark:hover:bg-zinc-700': true,
                "animate-fade-up animate-once animate-duration-[2000ms]": isOnViewport
            })}>
                <EnterpriseLogo url={logo} alt={enterpriseName} />
                <h4 className="mt-2 text-base font-semibold">{enterpriseName}</h4>
                <span
                    className='inline-block mt-1 font-light cursor-pointer hover:underline dark:text-zinc-400'
                    onClick={() => setIsOpened(true)}
                >
                    {description}
                </span>
                <footer className="mt-6 text-right md:absolute bottom-6 right-6">
                    {isPOC ? (
                        <span className="inline-flex items-center gap-2 px-3 py-1 text-lg rounded-full dark:bg-zinc-800">
                            <TbProgress /> <span className="text-xs">POC</span>
                        </span>

                    ) : (
                        <Link href={url} target="_blank" className="inline-flex items-center gap-2 px-3 py-1 text-lg rounded-full dark:bg-zinc-800">
                            <TbExternalLink /> <span className="text-xs">{urlName}</span>
                        </Link>
                    )}
                </footer>
            </div>
            {isOpened && (
                <Modal onClickOutside={() => setIsOpened(false)}>
                    <div className="flex items-center gap-2">
                        <EnterpriseLogo url={logo} alt={enterpriseName} />
                        <h4 className="text-base font-semibold">{enterpriseName}</h4>
                    </div>
                    <span className='inline-block mt-1 font-light dark:text-zinc-400'>
                        {description}
                    </span>
                    <hr className="mt-3 border-zinc-500" />
                    <div className="my-4">
                        <h5 className="mb-1.5 font-semibold text-base">Contributions</h5>
                        <p className="font-light dark:text-zinc-400">{contributions}</p>
                    </div>
                    <div className="my-4">
                        <h5 className="mb-1.5 font-semibold text-base">Stack</h5>
                        <ul className="flex flex-wrap items-center gap-2 font-light dark:text-zinc-400">
                            {stackArray.map((item, index) => {
                                return (
                                    <>
                                        <li key={item}>{item}</li>
                                        {index !== stack.length - 1 && "|"}
                                    </>
                                );
                            })}
                        </ul>
                    </div>
                    {imagesArray.length === 3 && (
                        <ul className="grid gap-4 md:grid-cols-3">
                            {imagesArray.map((imageUrl, index) => (
                                <li key={imageUrl} className="relative w-full overflow-hidden rounded-md h-52 md:h-40">
                                    <BlurImage
                                        fill
                                        quality={1}
                                        src={imageUrl}
                                        alt={`${enterpriseName}-screenshot-${index}`}
                                    />
                                </li>
                            ))}
                        </ul>
                    )}
                </Modal>
            )}
        </>
    );
};
