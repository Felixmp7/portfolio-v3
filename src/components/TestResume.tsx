import clsx from 'clsx';
import Link from 'next/link';
import { HiBadgeCheck } from 'react-icons/hi';
import { IoIosRocket, IoLogoGithub } from 'react-icons/io';
import { TestResume as TestResumeProps } from 'src/models/types';
import { EnterpriseLogo } from './EnterpriseLogo';

type Props = TestResumeProps & {
    hiredClassName?: string
}

export const TestResume = ({
    hired,
    context,
    date,
    enterpriseName,
    enterpriseLogo,
    position,
    deployLink,
    repositoryLink,
    hiredClassName = ''
}: Props) => {
    const wasHiredClasses = clsx({
        'absolute text-3xl text-green-600 bg-white -right-2 -top-4': true,
        [hiredClassName]: !!hiredClassName
    });
    return (
        <>
            <div className="relative flex items-center gap-2">
                <EnterpriseLogo url={enterpriseLogo} alt={enterpriseName} />
                <div className='text-left'>
                    {enterpriseName}
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
            <hr className="my-5" />
            <p className='text-left'>Context: <span className='font-light dark:text-slate-400'>{context}</span></p>
            {hired && (
                <span className={wasHiredClasses}><HiBadgeCheck /></span>
            )}
        </>
    );
};