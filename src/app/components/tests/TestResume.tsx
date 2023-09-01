
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { HiBadgeCheck } from 'react-icons/hi';
import { IoIosRocket, IoLogoGithub } from 'react-icons/io';
import { TTestResume } from 'src/types';

type TProps = TTestResume & {
    wasHiredClassNames?: string
    hrClassNames?: string
}

export const TestResume = ({
    wasHired,
    logo,
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
                <div className='inline-grid w-10 h-10 overflow-hidden border rounded-full shadow-md border-zinc-300 dark:border-zinc-700 place-content-center'>
                    <Image
                        src={logo}
                        alt={`${name} logo `}
                        width={25}
                        height={25}
                    />
                </div>
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
            <p className='text-left'>Context: <i className='font-light'>{context}</i></p>
            {wasHired && (
                <span className={wasHiredClasses}><HiBadgeCheck /></span>
            )}
        </>
    );
};