import { EnterpriseLogo } from "@/components/EnterpriseLogo";
import Link from "next/link";
import { TbExternalLink, TbProgress } from 'react-icons/tb';
import { EProjectStatus } from "src/types";

type TProps = {
    logo: string,
    enterpriseName: string,
    description: string,
    status: EProjectStatus,
    link: string,
    urlName?: string,
}

export const ProjectResume = ({ enterpriseName, description, logo, status, link, urlName  }: TProps) => {
    const isPOC = status === EProjectStatus.poc;

    return (
        <div className='relative p-6 duration-200 ease-in-out border border-transparent rounded-lg md:pb-20 dark:hover:border-transparent hover:border-gray-300 dark:hover:bg-zinc-700'>
            <EnterpriseLogo url={logo} alt={enterpriseName} />
            <h4 className="mt-2 text-base font-semibold">{enterpriseName}</h4>
            <span className='inline-block mt-1 font-light text-zinc-400'>{description}</span>
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
    );
};
