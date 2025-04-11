'use client';

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { TbExternalLink } from 'react-icons/tb';

import { EnterpriseLogo } from "@/components/EnterpriseLogo";
import Modal from "@/components/Modal";
import { Experience } from "@prisma/client";

export const ExperienceSummary = ({
    enterpriseName, description, urlName, contributions, url, stack, logo
}: Experience) => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <>
            <div className={clsx({
                'relative p-6 duration-200 ease-in-out rounded-lg md:pb-20 hover:bg-slate-100 dark:hover:bg-slate-700': true
            })}>
                <EnterpriseLogo url={logo} alt={enterpriseName} />
                <h4 className="mt-2 text-base font-semibold">{enterpriseName}</h4>
                <span
                    className='inline-block mt-1 font-light cursor-pointer hover:underline dark:text-slate-400'
                    onClick={() => setIsOpened(true)}
                >
                    {description}
                </span>
                <footer className="mt-6 text-right md:absolute bottom-6 right-6">
                    <Link href={url} target="_blank" className="inline-flex items-center gap-2 px-3 py-1 text-lg rounded-full dark:bg-slate-800">
                        <TbExternalLink /> <span className="text-xs">{urlName}</span>
                    </Link>
                </footer>
            </div>
            {isOpened && (
                <Modal onClickOutside={() => setIsOpened(false)}>
                    <div className="flex items-center gap-2">
                        <EnterpriseLogo url={logo} alt={enterpriseName} />
                        <h4 className="text-base font-semibold">{enterpriseName}</h4>
                    </div>
                    <span className='inline-block mt-1 font-light dark:text-slate-400'>
                        {description}
                    </span>
                    <hr className="mt-3 border-slate-500" />
                    <div className="my-4">
                        <h5 className="mb-1.5 font-semibold text-base">Contributions</h5>
                        <p className="font-light dark:text-slate-400">{contributions}</p>
                    </div>
                    <div className="my-4">
                        <h5 className="mb-1.5 font-semibold text-base">Stack</h5>
                        <ul className="flex flex-wrap items-center gap-2 font-light dark:text-slate-400">
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
                </Modal>
            )}
        </>
    );
};
