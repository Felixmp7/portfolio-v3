'use client';

import { LatestWorkItem } from '@/components/home/latest-work/LatestWorkItem';
import { Experience } from '@prisma/client';
import { saveAs } from 'file-saver';
import { HiDocumentDownload } from 'react-icons/hi';
import { MdOutlineWorkOutline } from 'react-icons/md';

export const LatestWork = ({ experiences }: { experiences: Experience[]}) => {
    const handleDownload = () => saveAs(
        '/assets/files/CV-Felix-EN-2025.pdf',
        'cv-felix-pacheco-react-developer.pdf'
    );
    return (
        <div className='w-full h-full p-5 border rounded-md border-neutral-300 dark:border-neutral-700'>
            <h3 className='flex items-center space-x-1'>
                <span className='text-lg leading-none'>
                    <MdOutlineWorkOutline />
                </span>
                <span className='leading-none'>
                    Latest Work
                </span>
            </h3>
            <ul className='my-4'>
                {experiences.map((experience) => (
                    <li key={experience.enterpriseName}>
                        <LatestWorkItem {...experience} />
                    </li>
                ))}
            </ul>
            <button
                className='flex items-center justify-center w-full py-3 rounded-lg dark:opacity-80 dark:bg-neutral-700 bg-neutral-100 hover:bg-neutral-200 dark:hover:opacity-100'
                onClick={handleDownload}
            >
                Download CV <span className='ml-2 text-lg'>
                    <HiDocumentDownload />
                </span>
            </button>
        </div>
    );
};
