'use client';

import { LatestWorkItem } from '@/components/home/latest-work/LatestWorkItem';
import { saveAs } from 'file-saver';
import { HiDocumentDownload } from 'react-icons/hi';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { Job } from 'src/models/types';

export const LatestWork = ({ jobs }: { jobs: Job[]}) => {
    const handleDownload = () => saveAs(
        '/assets/files/CV-English-2025.pdf',
        'cv-felix-pacheco-react-developer.pdf'
    );
    return (
        <div className='w-full h-full p-5 border rounded-md border-slate-300 dark:border-slate-700'>
            <h3 className='flex items-center space-x-1'>
                <span className='text-lg leading-none'>
                    <MdOutlineWorkOutline />
                </span>
                <span className='leading-none'>
                    Latest Work
                </span>
            </h3>
            <ul className='my-4'>
                {jobs.map((job) => (
                    <li key={job.enterpriseName}>
                        <LatestWorkItem {...job} />
                    </li>
                ))}
            </ul>
            <button
                className='flex items-center justify-center w-full py-3 rounded-lg dark:opacity-80 dark:bg-slate-700 bg-slate-100 hover:bg-slate-200 dark:hover:opacity-100'
                onClick={handleDownload}
            >
                Download CV <span className='ml-2 text-lg'>
                    <HiDocumentDownload />
                </span>
            </button>
        </div>
    );
};
