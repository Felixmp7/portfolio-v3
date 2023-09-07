'use client';

import { LatestWorkItem, TLatestWorkItem } from '@/components/home/latest-work/LatestWorkItem';
import { saveAs } from 'file-saver';
import { HiDocumentDownload } from 'react-icons/hi';
import { MdOutlineWorkOutline } from 'react-icons/md';


const LATEST_JOBS: TLatestWorkItem[] = [
    {enterpriseName: 'Servicepad',
        alt: 'Servicepad Logo',
        job: 'React Developer Ssr.' ,
        path: '/assets/enterprises/servicepad.svg',
        range: '2023 - Current'},
    {enterpriseName: 'Matic',
        alt: 'Matic Logo',
        job: 'React Developer Ssr.' ,
        path: '/assets/enterprises/matic.svg',
        range: '2022 - 2023'},
    {enterpriseName: 'Brocsoft',
        alt: 'Brocsoft Logo',
        job: 'React Developer Ssr.' ,
        path: '/assets/enterprises/brocsoft.png',
        range: '2021 - 2022'},
    {enterpriseName: 'Servisenior',
        alt: 'Brocsoft Logo',
        job: 'React Developer Jr.' ,
        path: '/assets/enterprises/servisenior.jpeg',
        range: '2020 - 2021'}
];

export const LatestWork = () => {

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
                {LATEST_JOBS.map((job) => (
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
