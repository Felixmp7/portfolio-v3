'use client';

import { LatestWorkItem } from '@/components/home/latest-work/LatestWorkItem';
import { saveAs } from 'file-saver';
import { HiDocumentDownload } from 'react-icons/hi';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { TProject } from 'src/types';

export const LatestWork = ({ projects }: { projects: TProject[]}) => {
    const handleDownload = () => saveAs(
        '/assets/files/cv-felix-pacheco-react-developer.pdf',
        'cv-felix-pacheco-react-developer.pdf'
    );
    return (
        <div className='w-full h-full p-5 border rounded-md border-zinc-300 dark:border-zinc-700'>
            <h3 className='flex items-center space-x-1'>
                <span className='text-lg leading-none'>
                    <MdOutlineWorkOutline />
                </span>
                <span className='leading-none'>
                    Latest Work
                </span>
            </h3>
            <ul className='my-4'>
                {projects.map((job) => (
                    <li key={job.enterpriseName}>
                        <LatestWorkItem {...job} />
                    </li>
                ))}
            </ul>
            <button
                className='flex items-center justify-center w-full py-3 rounded-lg dark:opacity-80 dark:bg-zinc-700 bg-zinc-100 hover:bg-zinc-200 dark:hover:opacity-100'
                onClick={handleDownload}
            >
                Download CV <span className='ml-2 text-lg'>
                    <HiDocumentDownload />
                </span>
            </button>
        </div>
    );
};
