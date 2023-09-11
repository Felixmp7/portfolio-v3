import { EnterpriseLogo } from '@/components/EnterpriseLogo';
import { Slug, TProject } from 'src/types';
import { getEnterpriseIcon } from 'src/utils';

export const LatestWorkItem = ({ enterpriseName, period, urlName }: TProject) => {
    return (
        <div className='flex items-end justify-between py-3'>
            <div className='flex items-center space-x-3'>
                <EnterpriseLogo url={getEnterpriseIcon(enterpriseName.toLowerCase() as Slug)} alt={urlName} />
                <span>
                    <h4>{enterpriseName}</h4>
                    <span className='inline-block mt-1 text-xs font-light sm:text-sm text-zinc-400'>React Developer Ssr.</span>
                </span>
            </div>
            <span className='text-xs font-light text-zinc-400 sm:text-sm'>{period}</span>
        </div>
    );
};
