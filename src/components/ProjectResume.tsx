import Image from 'next/image';
import Link from 'next/link';
import { IoIosRocket, IoLogoGithub } from 'react-icons/io';
import { TbCheck, TbProgress } from 'react-icons/tb';

import { Project } from '@prisma/client';

export const ProjectResume = ({
    name,
    description,
    type,
    status,
    deployLink,
    repositoryLink,
    images,
    stack
}: Project) => {
    const StatusIcon = status === 'completed' ? <TbCheck /> : <TbProgress />;
    return (
        <div className="relative p-5 border rounded-md shadow-md dark:border-slate-600">
            <header className="relative flex items-center gap-2">
                <div className='text-left'>
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <span className='inline-block px-3 py-1 mt-1 text-xs capitalize border rounded-lg border-slate-200 dark:border-slate-500 bg-slate-100 dark:bg-slate-700'>{type}</span>
                </div>
                <span className='absolute bottom-0 right-0 flex items-center gap-2 text-xl'>
                    <Link href={repositoryLink} className='dark:hover:text-white' target='_blank'>
                        <IoLogoGithub />
                    </Link>
                    {deployLink && (
                        <Link href={deployLink} className='dark:hover:text-white' target='_blank'>
                            <IoIosRocket />
                        </Link>
                    )}
                </span>
            </header>
            <hr className="my-5 border-slate-200 dark:border-slate-500" />
            <p className='text-left'>Description: <span className='font-light dark:text-slate-400'>{description}</span></p>
            <p className='mt-2 mb-5 text-left'>Stack: <span className='font-light dark:text-slate-400'>{stack.join(', ')}</span></p>
            {images.length > 0 && (
                <Image
                    src={images[0]}
                    className="object-cover w-full mb-10 rounded-lg"
                    alt={name}
                    draggable="false"
                    width={460}
                    height={380}
                />    )}
            <span className="absolute inline-flex items-center gap-2 py-1 pl-3 text-lg rounded-full bottom-5 right-5 dark:bg-slate-800">
                {StatusIcon} <span className="text-xs">{status}</span>
            </span>
        </div>
    );};
