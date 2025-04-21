import { LatestWorkItem } from '@/components/home/latest-work/LatestWorkItem';
import { FetchError } from '@/components/ui/FetchError';
import { Experience } from '@prisma/client';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { getExperiences } from 'src/lib/services';
import { DownloadCV } from './DownloadCV';

const LATEST_EXPERIENCES_LIMIT = 5;

export const LatestWork = async () => {
    let latestExperiences: Experience[] = [];
    let errorFetching: string | undefined;

    try {
        latestExperiences = await getExperiences(LATEST_EXPERIENCES_LIMIT);
    } catch (error) {
        errorFetching = (error as Error).message;
    }

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
            {errorFetching ? (
                <FetchError message={errorFetching} />
            ) : (
                <ul className='my-4'>
                    {latestExperiences.map((experience) => (
                        <li key={experience.enterpriseName}>
                            <LatestWorkItem {...experience} />
                        </li>
                    ))}
                </ul>
            )}
            <DownloadCV />
        </div>
    );
};
