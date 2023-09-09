'use client';

import BlurImage from "@/components/BlurImage";
import { EnterpriseLogo } from "@/components/EnterpriseLogo";
import Modal from "@/components/Modal";
import Link from "next/link";
import { useState } from "react";
import { TbExternalLink, TbProgress } from 'react-icons/tb';
import { EProjectStatus, Slug, TProject } from "src/types";
import { getEnterpriseIcon } from "src/utils";

export const ProjectResume = ({
    enterpriseName, description, status, link, urlName, contributions, stack, images
}: TProject) => {
    const [isOpened, setIsOpened] = useState(false);
    const isPOC = status === EProjectStatus.poc;
    const logo = getEnterpriseIcon(enterpriseName.toLowerCase() as Slug);

    return (
        <>
            <div className='relative p-6 duration-200 ease-in-out rounded-lg md:pb-20 hover:bg-zinc-50 dark:hover:bg-zinc-700'>
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
                        <Link href={link} target="_blank" className="inline-flex items-center gap-2 px-3 py-1 text-lg rounded-full dark:bg-zinc-800">
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
                            {stack.map((item, index) => {
                                return (
                                    <>
                                        <li key={item}>{item}</li>
                                        {index !== stack.length - 1 && "|"}
                                    </>
                                );
                            })}
                        </ul>
                    </div>
                    {images.length === 3 && (
                        <ul className="grid gap-4 overflow-y-scroll h-60 md:h-auto md:grid-cols-3">
                            {images.map((url, index) => (
                                <li key={url} className="relative w-full overflow-hidden rounded-md h-52 md:h-40">
                                    <BlurImage
                                        fill
                                        quality={1}
                                        src={url}
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
