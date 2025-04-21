'use client';

import { saveAs } from 'file-saver';
import { HiDocumentDownload } from 'react-icons/hi';

export const DownloadCV = () => {
    const handleDownload = () => saveAs(
        '/assets/files/CV-Felix-EN-2025.pdf',
        'cv-felix-pacheco-react-developer.pdf'
    );
    return (
        <button
            className='flex items-center justify-center w-full py-3 rounded-lg dark:opacity-80 dark:bg-neutral-700 bg-neutral-100 hover:bg-neutral-200 dark:hover:opacity-100'
            onClick={handleDownload}
        >
            Download CV <span className='ml-2 text-lg'>
                <HiDocumentDownload />
            </span>
        </button>
    );
};
