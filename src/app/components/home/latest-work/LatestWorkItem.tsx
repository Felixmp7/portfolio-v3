import Image from 'next/image';

export type TLatestWorkItem = {
    path: string;
    alt: string;
    enterpriseName: string;
    job: string;
    range: string
}

export const LatestWorkItem = ({ path, alt, enterpriseName, job, range }: TLatestWorkItem) => {
    return (
        <div className='flex items-end justify-between py-3'>
            <div className='flex items-center space-x-3'>
                <div className='inline-grid overflow-hidden border rounded-full border-zinc-300 dark:border-zinc-600 w-9 h-9 place-content-center'>
                    <Image
                        width={20}
                        height={20}
                        src={path}
                        alt={alt}
                    />
                </div>
                <span>
                    <h4>{enterpriseName}</h4>
                    <span className='inline-block mt-1 font-light text-zinc-400'>{job}</span>
                </span>
            </div>
            <span className='font-light text-zinc-400'>{range}</span>
        </div>
    );
};
