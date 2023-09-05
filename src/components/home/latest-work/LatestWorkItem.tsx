import { EnterpriseLogo } from '@/components/EnterpriseLogo';

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
                <EnterpriseLogo url={path} alt={alt} />
                <span>
                    <h4>{enterpriseName}</h4>
                    <span className='inline-block mt-1 font-light text-zinc-400'>{job}</span>
                </span>
            </div>
            <span className='font-light text-zinc-400'>{range}</span>
        </div>
    );
};
