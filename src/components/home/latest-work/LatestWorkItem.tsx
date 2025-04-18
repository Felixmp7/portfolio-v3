import { EnterpriseLogo } from '@/components/EnterpriseLogo';
import { Experience } from '@prisma/client';

export const LatestWorkItem = ({ enterpriseName, period, logo, role }: Experience) => (
    <div className='flex items-end justify-between py-3'>
        <div className='flex items-center space-x-3'>
            <EnterpriseLogo url={logo} alt={enterpriseName} />
            <span>
                <h4>{enterpriseName}</h4>
                <span className='inline-block mt-1 text-xs font-light sm:text-sm text-neutral-400'>{role}</span>
            </span>
        </div>
        <span className='text-xs font-light text-neutral-400 sm:text-sm'>{period}</span>
    </div>
);
