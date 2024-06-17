import { EnterpriseLogo } from '@/components/EnterpriseLogo';
import { Job } from 'src/models/types';

export const LatestWorkItem = ({ enterpriseName, period, enterpriseLogo }: Job) => {
    return (
        <div className='flex items-end justify-between py-3'>
            <div className='flex items-center space-x-3'>
                <EnterpriseLogo url={enterpriseLogo} alt={enterpriseName} />
                <span>
                    <h4>{enterpriseName}</h4>
                    <span className='inline-block mt-1 text-xs font-light sm:text-sm text-slate-400'>React Developer Ssr.</span>
                </span>
            </div>
            <span className='text-xs font-light text-slate-400 sm:text-sm'>{period}</span>
        </div>
    );
};
