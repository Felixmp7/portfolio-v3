import clsx from 'clsx';
import Link from 'next/link';
import { HiBadgeCheck } from 'react-icons/hi';
import { IoIosRocket, IoLogoGithub } from 'react-icons/io';
import { Slug, TTestResume } from 'src/types';
import { getEnterpriseIcon } from 'src/utils';
import { EnterpriseLogo } from './EnterpriseLogo';

type TProps = TTestResume & {
    wasHiredClassNames?: string
    hrClassNames?: string
}

export const TestResume = ({
    wasHired,
    context,
    date,
    name,
    position,
    deployLink,
    repositoryLink,
    wasHiredClassNames = '',
    hrClassNames = ''
}: TProps) => {
    const wasHiredClasses = clsx({
        'absolute text-3xl text-green-600 bg-white -right-2 -top-4': true,
        [wasHiredClassNames]: !!wasHiredClassNames
    });
    const hrClasses = clsx({
        'my-5': true,
        [hrClassNames]: !!hrClassNames
    });
    return (
        <>
            <div className="relative flex items-center gap-2">
                <EnterpriseLogo url={getEnterpriseIcon(name.toLowerCase() as Slug)} alt={name} />
                <div className='text-left'>
                    {name}
                    <span className='block mt-1 text-xs'>{`${position} | ${date}`}</span>
                </div>
                <span className='absolute right-0 flex items-center gap-2 text-xl -bottom-3'>
                    <Link href={repositoryLink} className='dark:hover:text-white' target='_blank'>
                        <IoLogoGithub />
                    </Link>
                    <Link href={deployLink} className='dark:hover:text-white' target='_blank'>
                        <IoIosRocket />
                    </Link>
                </span>
            </div>
            <hr className={hrClasses} />
            <p className='text-left'>Context: <span className='font-light dark:text-zinc-400'>{context}</span></p>
            {wasHired && (
                <span className={wasHiredClasses}><HiBadgeCheck /></span>
            )}
        </>
    );
};